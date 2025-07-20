import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FrontDeskDashboard from "@/components/FrontDeskDashboard";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FrontDeskDashboard />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Index;
