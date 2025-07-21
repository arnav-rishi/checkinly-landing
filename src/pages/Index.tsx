
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickFeaturesSection from "@/components/QuickFeaturesSection";
import EnhancedFrontDesk from "@/components/EnhancedFrontDesk";
import ReservationManagement from "@/components/ReservationManagement";
import DeviceIntegration from "@/components/DeviceIntegration";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
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
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
