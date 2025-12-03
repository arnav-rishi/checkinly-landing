import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DocumentVerificationSection from "@/components/DocumentVerificationSection";
import EnhancedFrontDesk from "@/components/EnhancedFrontDesk";
import ReservationManagement from "@/components/ReservationManagement";
import FeatureSection from "@/components/FeatureSection";
import EmailCaptureSection from "@/components/EmailCaptureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Analytics tracking for page interactions
  const trackConversion = (action: string, section: string) => {
    console.log(`Conversion event: ${action} in ${section}`);
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
      
      {/* Email capture for waitlist */}
      <EmailCaptureSection />
      
      {/* Final conversion-focused CTA */}
      <CTASection 
        variant="gradient"
        title="Ready to Automate Your Front Desk?"
        description="Join 500+ hotels already using Checkinly kiosks to increase efficiency and guest satisfaction."
        primaryText="Get a Free Consultation"
        secondaryText="Schedule Live Demo"
        onPrimaryClick={() => {
          trackConversion('consultation_start', 'final_cta');
          navigate('/contact-sales');
        }}
        onSecondaryClick={() => trackConversion('demo_request', 'final_cta')}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
