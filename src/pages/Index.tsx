
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickFeaturesSection from "@/components/QuickFeaturesSection";
import EnhancedFrontDesk from "@/components/EnhancedFrontDesk";
import ReservationManagement from "@/components/ReservationManagement";
import DeviceIntegration from "@/components/DeviceIntegration";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <QuickFeaturesSection />
      <EnhancedFrontDesk />
      <ReservationManagement />
      <DeviceIntegration />
      <FeatureSection />
      <TestimonialsSection />
      
      {/* Conversion-focused CTA before footer */}
      <CTASection 
        variant="gradient"
        onPrimaryClick={() => trackConversion('trial_start', 'final_cta')}
        onSecondaryClick={() => trackConversion('demo_request', 'final_cta')}
      />
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
