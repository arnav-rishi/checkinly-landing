
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EnhancedFrontDesk from "@/components/EnhancedFrontDesk";
import ReservationManagement from "@/components/ReservationManagement";
import DeviceIntegration from "@/components/DeviceIntegration";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EnhancedFrontDesk />
      <ReservationManagement />
      <DeviceIntegration />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Index;
