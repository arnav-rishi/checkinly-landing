
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import DocumentVerificationSection from "@/components/DocumentVerificationSection";
import EnhancedFrontDesk from "@/components/EnhancedFrontDesk";
import ReservationManagement from "@/components/ReservationManagement";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import EmailCaptureSection from "@/components/EmailCaptureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Analytics tracking for page interactions
  const trackConversion = (action: string, section: string) => {
    console.log(`Conversion event: ${action} in ${section}`);
    // In a real app, you'd send this to your analytics service
    // gtag('event', 'conversion', { event_category: section, event_label: action });
  };

  const handleAuthAction = () => {
    if (user) {
      // User is already authenticated, could redirect to dashboard
      console.log('User already authenticated:', user.email);
    } else {
      navigate('/auth');
    }
  };

  const handleDemoRequest = () => {
    trackConversion('demo_request', 'hero_section');
    // Demo request handled by ContactModal
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Core value prop and features */}
      <DocumentVerificationSection />
      
      {/* Additional feature sections */}
      <EnhancedFrontDesk />
      <ReservationManagement />
      <FeatureSection />
      
      {/* Pricing section */}
      <PricingSection />
      
      {/* Email capture for waitlist */}
      <EmailCaptureSection />
      
      {/* Final conversion-focused CTA */}
      <CTASection 
        variant="gradient"
        title="Ready to 10X Your Check-in Speed?"
        description="Join 500+ hotels already using Checkinly to increase revenue and guest satisfaction."
        primaryText={user ? "Access Dashboard" : "Start Free 30-Day Trial"}
        secondaryText="Schedule Live Demo"
        onPrimaryClick={() => {
          trackConversion('trial_start', 'final_cta');
          handleAuthAction();
        }}
        onSecondaryClick={() => trackConversion('demo_request', 'final_cta')}
      />
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
