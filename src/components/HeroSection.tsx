
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import DashboardPreview from "@/components/DashboardPreview";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ["Smarter", "Faster", "Safer", "Seamless"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };


  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#2563eb] via-[#3b82f6] to-[#60a5fa] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Small Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm text-white/90 font-medium">
                Trusted to automate 1,000+ hotel workflows weekly
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Streamline Work.</span>
                <br />
                <span className="text-white/90 italic font-light">
                  <span 
                    key={currentWordIndex}
                    className="animate-fade-in-up inline-block text-white"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </span>
                <span className="text-white"> Hotel Check-in.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="max-w-2xl mx-auto">
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Checkinly helps hotels automate guest verification and unlock rooms with a single glance. Faster, safer, smarter hospitality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl bg-white text-blue-600 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => handleCTAClick('request_demo')}
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                onClick={() => handleCTAClick('see_action')}
              >
                <Play className="mr-2 h-5 w-5" />
                See It in Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="relative bg-gradient-to-b from-[#60a5fa] to-slate-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-12">
          <DashboardPreview />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
      </section>
    </>
  );
};

export default HeroSection;
