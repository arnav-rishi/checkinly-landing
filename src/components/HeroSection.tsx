
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#E8F2FF] via-[#F0F7FF] to-[#F8FBFF] overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light gradient orbs */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-slate-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-100/30 to-blue-100/40 rounded-full blur-3xl"></div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content (35% width) */}
          <div className="lg:col-span-4 space-y-8 flex flex-col justify-center">
            {/* Rotating Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tight" style={{ lineHeight: '1.4' }}>
                <span className="inline-block min-w-[180px] lg:min-w-[220px]">
                  <span 
                    key={currentWordIndex}
                    className="text-[#1e40af] animate-fade-in-up inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </span>
                <br />
                <span className="text-gray-900">Hotel Check-in.</span>
                <br />
                <span className="text-gray-600 text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed">
                  Powered by Face & NFC Access.
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Checkinly helps hotels automate guest verification and unlock rooms with a single glance.
              </p>
              <p className="text-lg font-semibold text-gray-900">
                Faster, safer, smarter hospitality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl bg-[#1e40af] text-white hover:bg-[#1d4ed8] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => handleCTAClick('request_demo')}
              >
                Request Demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => handleCTAClick('start_trial')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Right Column - Single Dashboard Screenshot (65% width) */}
          <div className="lg:col-span-8 relative flex items-center justify-center">
            <div className="relative w-full max-w-6xl">
              {/* Enhanced background glow */}
              <div className="absolute -inset-12 bg-gradient-to-r from-blue-200/20 via-blue-300/30 to-blue-200/20 rounded-3xl blur-3xl"></div>
              
              {/* Dashboard Screenshot Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-100/50">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3a47fc10-c7c5-4582-b3b9-59d71c07b8d1.png" 
                    alt="Checkinly Dashboard" 
                    className="w-full h-auto object-cover rounded-2xl transform scale-105"
                  />
                </div>
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
              </div>
              
              {/* Enhanced shadows and lighting */}
              <div className="absolute -bottom-12 left-12 right-12 h-12 bg-black/15 rounded-full blur-2xl"></div>
            </div>

            {/* Minimal floating elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-200/50 to-slate-200/40 rounded-xl shadow-lg opacity-60 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-slate-200/40 to-blue-200/50 rounded-lg shadow-lg opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
