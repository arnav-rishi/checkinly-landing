
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ["Seamless", "Faster", "Smarter", "Safer"];

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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50/30 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-100/40 to-blue-100/30 rounded-full blur-3xl"></div>
        
        {/* Abstract curves */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 1200 800">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M0,300 Q400,100 800,300 T1200,300" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M0,500 Q350,350 700,500 T1200,500" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Rotating Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="inline-block min-w-[280px] lg:min-w-[320px]">
                  <span 
                    key={currentWordIndex}
                    className="text-primary animate-fade-in-up inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </span>
                <br />
                <span className="text-gray-900">Hotel Check-in.</span>
                <br />
                <span className="text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-medium">
                  Powered by Face & NFC Access.
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Checkinly helps hotels automate guest verification and unlock rooms with a single glance. 
              <span className="font-semibold text-gray-900"> Faster, safer, smarter hospitality.</span>
            </p>

            {/* Social Proof Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-teal-50 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-sm">
              <span className="text-sm font-medium text-blue-700">✓ Trusted by 500+ hotels worldwide</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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

          {/* Right Column - Real Product Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Laptop Mockup with Real Dashboard */}
              <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Laptop Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl p-3 border border-gray-700">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-xl p-2">
                    {/* Actual Dashboard Screenshot */}
                    <div className="relative rounded-lg overflow-hidden shadow-inner">
                      <img 
                        src="/lovable-uploads/3a47fc10-c7c5-4582-b3b9-59d71c07b8d1.png" 
                        alt="Checkinly Analytics Dashboard" 
                        className="w-full h-auto object-cover"
                      />
                      {/* Subtle overlay for branding */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Laptop base */}
                  <div className="relative h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl mx-8 shadow-lg">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                
                {/* Enhanced shadows and lighting */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-transparent to-teal-500/10 rounded-3xl blur-2xl -z-10"></div>
                <div className="absolute -bottom-8 left-8 right-8 h-8 bg-black/20 rounded-full blur-xl -z-20"></div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl shadow-lg opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl shadow-lg opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
