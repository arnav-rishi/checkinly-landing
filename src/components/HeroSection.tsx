
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rotatingWords = ["Smarter", "Faster", "Safer", "Seamless"];
  
  // Dashboard images for carousel - using the existing uploaded image
  const dashboardImages = [
    "/lovable-uploads/3a47fc10-c7c5-4582-b3b9-59d71c07b8d1.png",
    "/lovable-uploads/3a47fc10-c7c5-4582-b3b9-59d71c07b8d1.png", // Duplicate for now, will be replaced with more images
    "/lovable-uploads/3a47fc10-c7c5-4582-b3b9-59d71c07b8d1.png",
  ];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2500);

    return () => clearInterval(wordInterval);
  }, [rotatingWords.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dashboardImages.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, [dashboardImages.length]);

  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimal gradient orbs */}
        <div className="absolute top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-slate-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-32 w-56 h-56 bg-gradient-to-tr from-slate-100/15 to-blue-100/10 rounded-full blur-3xl"></div>
        
        {/* Subtle abstract lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" viewBox="0 0 1200 800">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M0,300 Q400,100 800,300 T1200,300" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Rotating Headline with Deep Navy Blue */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="inline-block min-w-[280px] lg:min-w-[340px]">
                  <span 
                    key={currentWordIndex}
                    className="text-[#1e3a8a] animate-fade-in-up inline-block font-extrabold"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </span>
                <br />
                <span className="text-gray-900 font-bold">Hotel Check-in.</span>
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
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200/60 shadow-sm">
              <span className="text-sm font-medium text-slate-700">✓ Trusted by 500+ hotels worldwide</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl bg-[#1e3a8a] text-white hover:bg-[#1e40af] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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

          {/* Right Column - Larger iPad Mockup with Carousel */}
          <div className="relative lg:pl-4">
            <div className="relative">
              {/* Larger iPad Mockup */}
              <div className="relative transform hover:scale-105 transition-transform duration-700 ease-out">
                {/* iPad Frame - Made significantly larger */}
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl p-4 border border-gray-700 max-w-2xl mx-auto">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-2xl p-3">
                    {/* Dashboard Screenshots Carousel */}
                    <div className="relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                      {dashboardImages.map((image, index) => (
                        <img 
                          key={index}
                          src={image}
                          alt={`Checkinly Dashboard ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      {/* Subtle overlay for branding */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* iPad home indicator */}
                  <div className="relative h-6 flex justify-center items-center">
                    <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Enhanced shadows and lighting */}
                <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/8 via-transparent to-slate-500/8 rounded-3xl blur-2xl -z-10"></div>
                <div className="absolute -bottom-12 left-12 right-12 h-12 bg-black/15 rounded-full blur-xl -z-20"></div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {dashboardImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-[#1e3a8a]' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>

              {/* Minimal floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-xl shadow-sm opacity-40 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-10 h-10 bg-gradient-to-br from-slate-400/20 to-blue-400/20 rounded-lg shadow-sm opacity-30 animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/95 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
