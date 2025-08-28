
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rotatingWords = ["Safer", "Faster", "Smarter", "Seamless"];
  
  // Dashboard screenshots for carousel
  const dashboardImages = [
    "/lovable-uploads/3a47fc10-c7c5-4582-b3b9-59d71c07b8d1.png",
    "/lovable-uploads/29c2bdee-25d5-4a58-bddb-7f91cf9191c5.png",
    "/lovable-uploads/bbf311b0-a15b-434e-8cf8-d316bcacd1eb.png",
    "/lovable-uploads/43e3b21b-390f-4f2c-98d4-e18d9aaa9646.png",
    "/lovable-uploads/fcd853a8-6cdd-4910-9acf-a849a3d09f5d.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dashboardImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [dashboardImages.length]);

  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#F5FAFF] via-[#FAFCFF] to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light gradient orbs */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-50/30 to-slate-50/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-50/20 to-blue-50/30 rounded-full blur-3xl"></div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Rotating Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="inline-block min-w-[280px] lg:min-w-[320px]">
                  <span 
                    key={currentWordIndex}
                    className="text-slate-800 animate-fade-in-up inline-block"
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
            <div className="inline-flex items-center bg-blue-50/70 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-100/50">
              <span className="text-sm font-medium text-blue-700">✓ Trusted by 500+ hotels worldwide</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl bg-slate-800 text-white hover:bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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

          {/* Right Column - Dashboard Screenshots Carousel */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Dashboard Screenshots Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-100">
                {dashboardImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Checkinly Dashboard Screenshot ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                ))}
                {/* First image to set container dimensions */}
                <img 
                  src={dashboardImages[0]} 
                  alt="Dashboard Layout" 
                  className="w-full h-auto opacity-0"
                />
                
                {/* Subtle overlay for branding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
              </div>
              
              {/* Enhanced shadows and lighting */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 via-transparent to-slate-500/10 rounded-3xl blur-2xl -z-10"></div>
              <div className="absolute -bottom-8 left-8 right-8 h-8 bg-black/10 rounded-full blur-xl -z-20"></div>
              
              {/* Carousel indicators */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {dashboardImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Minimal floating elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-100/40 to-slate-100/30 rounded-xl shadow-md opacity-40 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-slate-100/30 to-blue-100/40 rounded-lg shadow-md opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
