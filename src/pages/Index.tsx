
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import QuickFeaturesSection from "@/components/QuickFeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SmartLockIntegration from "@/components/SmartLockIntegration";
import DashboardVisualsSection from "@/components/DashboardVisualsSection";
import EnhancedFrontDesk from "@/components/EnhancedFrontDesk";
import ReservationManagement from "@/components/ReservationManagement";
import DeviceIntegration from "@/components/DeviceIntegration";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import EmailCaptureSection from "@/components/EmailCaptureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  // Analytics tracking for page interactions
  const trackConversion = (action: string, section: string) => {
    console.log(`Conversion event: ${action} in ${section}`);
    // In a real app, you'd send this to your analytics service
    // gtag('event', 'conversion', { event_category: section, event_label: action });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Trust signals immediately after hero */}
      <TrustSignalsSection />
      
      {/* Core value prop and features */}
      <QuickFeaturesSection />
      <HowItWorksSection />
      
      {/* Smart lock integration - highlighted as first-class feature */}
      <SmartLockIntegration />
      
      {/* Dashboard visuals with mock data */}
      <DashboardVisualsSection />
      
      {/* Additional feature sections */}
      <EnhancedFrontDesk />
      <ReservationManagement />
      <DeviceIntegration />
      <FeatureSection />
      
      {/* Social proof and testimonials */}
      <TestimonialsSection />
      
      {/* Pricing section */}
      <PricingSection />
      
      {/* FAQ section */}
      <FAQSection />
      
      {/* Email capture for waitlist */}
      <EmailCaptureSection />
      
      {/* Final conversion-focused CTA */}
      <CTASection 
        variant="gradient"
        title="Ready to 10X Your Check-in Speed?"
        description="Join 500+ hotels already using Checkinly to increase revenue and guest satisfaction."
        primaryText="Start Free 30-Day Trial"
        secondaryText="Schedule Live Demo"
        onPrimaryClick={() => trackConversion('trial_start', 'final_cta')}
        onSecondaryClick={() => trackConversion('demo_request', 'final_cta')}
      />
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
