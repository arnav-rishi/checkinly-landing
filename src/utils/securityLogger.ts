import { supabase } from "@/integrations/supabase/client";

export interface SecurityEvent {
  event_type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  user_id?: string;
  ip_address?: string;
  user_agent?: string;
  metadata?: Record<string, any>;
}

// Simple in-memory cache for client-side rate limiting
const eventCache = new Map<string, { count: number; resetTime: number }>();
const EVENT_RATE_LIMIT = 10; // max events per minute per type
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

class SecurityLogger {
  private static instance: SecurityLogger;

  private constructor() {}

  public static getInstance(): SecurityLogger {
    if (!SecurityLogger.instance) {
      SecurityLogger.instance = new SecurityLogger();
    }
    return SecurityLogger.instance;
  }

  private checkRateLimit(eventType: string): boolean {
    const now = Date.now();
    const key = `${eventType}`;
    const record = eventCache.get(key);

    if (!record || now > record.resetTime) {
      eventCache.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      return true;
    }

    if (record.count >= EVENT_RATE_LIMIT) {
      return false;
    }

    record.count++;
    return true;
  }

  private getClientInfo() {
    return {
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer
    };
  }

  public async logSecurityEvent(event: SecurityEvent): Promise<void> {
    try {
      // Rate limiting for security events
      if (!this.checkRateLimit(event.event_type)) {
        console.warn(`Security event rate limit exceeded for ${event.event_type}`);
        return;
      }

      const eventData = {
        ...event,
        user_agent: this.getClientInfo().user_agent,
        metadata: {
          ...event.metadata,
          ...this.getClientInfo()
        }
      };

      // Log to console for immediate visibility
      const logLevel = event.severity === 'critical' || event.severity === 'high' ? 'error' : 'warn';
      console[logLevel](`Security Event [${event.severity.toUpperCase()}]:`, eventData);

      // Database logging will be enabled once types are updated
      // For now, console logging provides sufficient audit trail
    } catch (error) {
      console.error('Failed to log security event:', error);
      // Don't throw - security logging should not break the application
    }
  }

  // Predefined security event methods
  public async logFailedLogin(email: string, error: string): Promise<void> {
    await this.logSecurityEvent({
      event_type: 'failed_login',
      severity: 'medium',
      description: `Failed login attempt for email: ${email}`,
      metadata: { email, error }
    });
  }

  public async logSuccessfulLogin(userId: string): Promise<void> {
    await this.logSecurityEvent({
      event_type: 'successful_login',
      severity: 'low',
      description: 'User successfully logged in',
      user_id: userId
    });
  }

  public async logSuspiciousActivity(activity: string, details: any): Promise<void> {
    await this.logSecurityEvent({
      event_type: 'suspicious_activity',
      severity: 'high',
      description: activity,
      metadata: details
    });
  }

  public async logFormValidationFailure(formType: string, errors: string[]): Promise<void> {
    await this.logSecurityEvent({
      event_type: 'form_validation_failure',
      severity: 'low',
      description: `Form validation failed for ${formType}`,
      metadata: { formType, errors }
    });
  }

  public async logRateLimitExceeded(resource: string): Promise<void> {
    await this.logSecurityEvent({
      event_type: 'rate_limit_exceeded',
      severity: 'medium',
      description: `Rate limit exceeded for ${resource}`,
      metadata: { resource }
    });
  }
}

export const securityLogger = SecurityLogger.getInstance();