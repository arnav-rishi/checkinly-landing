
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, TrendingUp } from "lucide-react";

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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#faf9f7] via-[#f8f6f3] to-[#f5f3ef] overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced gradient orbs with more sophisticated colors */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/15 via-blue-200/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl opacity-50 animate-bounce-gentle"></div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.06)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/20 rotate-45 rounded-sm animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-secondary/20 rounded-full animate-bounce-gentle opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-4 h-4 bg-primary/15 rotate-12 animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content (35% width) */}
          <div className="lg:col-span-4 space-y-8 flex flex-col justify-center">
            {/* Feature highlights with checkmarks */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/20">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Face Recognition</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/20">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">NFC Access</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/20">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Instant Setup</span>
              </div>
            </div>

            {/* Rotating Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tight" style={{ lineHeight: '1.4' }}>
                <span className="inline-block min-w-[180px] lg:min-w-[220px]">
                  <span 
                    key={currentWordIndex}
                    className="text-primary animate-fade-in-up inline-block"
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

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">90%</p>
                  <p className="text-sm text-gray-600">Faster Check-in</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-600">Guest Satisfaction</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
                onClick={() => handleCTAClick('request_demo')}
              >
                Request Demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl border-2 border-primary/20 text-gray-700 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 bg-white/50 backdrop-blur-sm"
                onClick={() => handleCTAClick('start_trial')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Right Column - Enhanced Dashboard (65% width) */}
          <div className="lg:col-span-8 relative flex items-center justify-center">
            <div className="relative w-full max-w-6xl">
              {/* Enhanced background glow with multiple layers */}
              <div className="absolute -inset-16 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-3xl blur-3xl opacity-60"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-100/40 via-white/20 to-blue-100/40 rounded-3xl blur-2xl"></div>
              
              {/* Dashboard Screenshot Container with 3D effect */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-100/50 transform perspective-1000 hover:rotate-y-2 transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3a47fc10-c7c5-4582-b3b9-59d71c07b8d1.png" 
                    alt="Checkinly Dashboard - Smart Hotel Management System" 
                    className="w-full h-auto object-cover rounded-2xl transform scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Enhanced overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none rounded-2xl"></div>
              </div>
              
              {/* Enhanced shadows and lighting */}
              <div className="absolute -bottom-16 left-12 right-12 h-16 bg-primary/20 rounded-full blur-3xl opacity-50"></div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl shadow-lg opacity-60 animate-float transform rotate-12"></div>
              <div className="absolute -bottom-12 -right-12 w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl shadow-lg opacity-50 animate-float transform -rotate-12" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-blue-200/40 to-blue-100/20 rounded-lg shadow-lg opacity-40 animate-bounce-gentle" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/95 via-white/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
