import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactSalesRequest {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

// Input validation and sanitization
const validateAndSanitizeInput = (data: ContactSalesRequest) => {
  const errors: string[] = [];
  
  // Validate required fields
  if (!data.name?.trim() || data.name.length > 100) {
    errors.push("Name is required and must be less than 100 characters");
  }
  
  if (!data.email?.trim() || data.email.length > 255) {
    errors.push("Email is required and must be less than 255 characters");
  }
  
  if (!data.company?.trim() || data.company.length > 200) {
    errors.push("Company is required and must be less than 200 characters");
  }
  
  if (!data.message?.trim() || data.message.length > 2000) {
    errors.push("Message is required and must be less than 2000 characters");
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push("Invalid email format");
  }
  
  // Validate phone if provided
  if (data.phone && data.phone.length > 20) {
    errors.push("Phone number must be less than 20 characters");
  }
  
  // Sanitize input (remove potential XSS)
  const sanitizedData = {
    name: data.name?.trim().slice(0, 100) || '',
    email: data.email?.trim().toLowerCase().slice(0, 255) || '',
    company: data.company?.trim().slice(0, 200) || '',
    phone: data.phone?.trim().slice(0, 20) || '',
    message: data.message?.trim().slice(0, 2000) || '',
  };
  
  return { errors, sanitizedData };
};

// Simple rate limiting using in-memory store (for production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_REQUESTS = 3; // 3 requests per window
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_REQUESTS) {
    return false;
  }
  
  record.count++;
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Parse and validate request body
    const requestData: ContactSalesRequest = await req.json();
    const { errors, sanitizedData } = validateAndSanitizeInput(requestData);
    
    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ error: "Validation failed", details: errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store contact submission
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: `Company: ${sanitizedData.company}\nPhone: ${sanitizedData.phone || 'N/A'}\n\nMessage:\n${sanitizedData.message}`,
        status: 'new'
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to submit contact request" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Log successful submission for monitoring
    console.log(`Contact sales submission from ${sanitizedData.email} (${sanitizedData.company})`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact request submitted successfully" 
      }),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );

  } catch (error: any) {
    console.error("Error in contact-sales function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);