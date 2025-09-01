
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Smartphone, Shield, Zap, Users, Star, ArrowRight } from "lucide-react";

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

  const features = [
    { icon: Smartphone, title: "Face Recognition", description: "Instant guest verification" },
    { icon: Shield, title: "NFC Access", description: "Secure room entry" },
    { icon: Zap, title: "Instant Setup", description: "Ready in minutes" },
    { icon: Users, title: "Guest Delight", description: "Seamless experience" }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#f0f4ff] to-[#e8f2ff] overflow-hidden">
      {/* Enhanced background elements with stronger blue gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced gradient orbs with stronger blue colors */}
        <div className="absolute top-10 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/35 via-primary/30 to-blue-600/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-primary/30 via-blue-300/35 to-blue-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/25 to-primary/25 rounded-full blur-2xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-500/30 rounded-full blur-2xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Enhanced grid pattern with blue tint */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:60px_60px] opacity-60"></div>
        
        {/* More floating geometric shapes with blue theme */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-400/30 rotate-45 rounded-sm animate-float opacity-75" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-primary/30 rounded-full animate-bounce-gentle opacity-65" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-8 h-8 bg-blue-500/25 rotate-12 animate-float opacity-55" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-14 h-14 bg-blue-300/20 rounded-lg animate-bounce-gentle opacity-45" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-16 h-16 bg-blue-600/15 rounded-2xl animate-float opacity-50" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/6 left-1/5 w-6 h-6 bg-primary/20 rounded-full animate-bounce-gentle opacity-40" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-12 lg:px-16 py-20 lg:py-28">
        <div className="flex items-center justify-center min-h-[85vh]">
          {/* Centered Content with improved padding */}
          <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Reduced Font Size Headline */}
            <div className="space-y-6 px-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                <span className="inline-block min-w-[200px] lg:min-w-[300px]">
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
              </h1>
            </div>

            {/* Enhanced Sub-headline with better spacing */}
            <div className="space-y-6 max-w-4xl mx-auto px-6">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Checkinly helps hotels automate guest verification and unlock rooms with a single glance.
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Faster, Safer, Smarter Hospitality.
              </p>
            </div>

            {/* Enhanced Feature Grid with improved padding */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 max-w-5xl mx-auto px-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex flex-col items-center space-y-4 p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/40 hover:bg-white/85 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-4 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-2xl">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats row with better spacing */}
            <div className="flex flex-wrap justify-center gap-10 py-10">
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-2xl">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">90%</p>
                  <p className="text-gray-600 font-medium">Faster Check-in</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-2xl">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">98%</p>
                  <p className="text-gray-600 font-medium">Guest Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-2xl">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">Secure</p>
                  <p className="text-gray-600 font-medium">NFC Technology</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with better spacing */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12 px-4">
              <Button 
                size="lg"
                className="px-12 py-7 h-18 text-2xl font-semibold rounded-3xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleCTAClick('request_demo')}
              >
                Request Demo
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-12 py-7 h-18 text-2xl font-semibold rounded-3xl border-2 border-primary/30 text-gray-700 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-white/80 backdrop-blur-sm hover:bg-white/95"
                onClick={() => handleCTAClick('start_trial')}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Removed social proof line with hotel count claims */}
            <div className="pt-8">
              <p className="text-lg text-gray-500 font-medium">
                Revolutionizing hotel check-in experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom fade gradient with blue tint */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/98 via-blue-50/70 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
