
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
        <div className="absolute top-10 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 via-primary/25 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-primary/25 via-blue-300/30 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-primary/20 rounded-full blur-2xl opacity-60 animate-bounce-gentle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/15 to-blue-500/25 rounded-full blur-2xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Enhanced grid pattern with blue tint */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
        
        {/* Floating geometric shapes with blue theme */}
        <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-blue-400/25 rotate-45 rounded-sm animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-primary/25 rounded-full animate-bounce-gentle opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-6 h-6 bg-blue-500/20 rotate-12 animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-blue-300/15 rounded-lg animate-bounce-gentle opacity-40" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-8 lg:px-12 py-16 lg:py-24">
        <div className="flex items-center justify-center min-h-[85vh]">
          {/* Centered Content with improved padding */}
          <div className="max-w-6xl mx-auto text-center space-y-16">
            {/* Enhanced Rotating Headline */}
            <div className="space-y-8 px-4">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span className="inline-block min-w-[280px] lg:min-w-[400px]">
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
                <span className="text-gray-600 text-3xl lg:text-4xl xl:text-5xl font-medium leading-relaxed mt-4 inline-block">
                  Powered by Face & NFC Access.
                </span>
              </h1>
            </div>

            {/* Enhanced Sub-headline with better spacing */}
            <div className="space-y-8 max-w-4xl mx-auto px-6">
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed">
                Checkinly helps hotels automate guest verification and unlock rooms with a single glance.
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Cut Costs. Delight Guests. The Future of Hotel Check-In is Here.
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
                  <Star className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600 font-medium">Hotels Trust Us</p>
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

            {/* Social Proof Line with improved spacing */}
            <div className="flex items-center justify-center space-x-3 pt-10 text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-primary/25 to-blue-500/25 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                ))}
              </div>
              <span className="text-lg font-medium">Trusted by 500+ hotels worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom fade gradient with blue tint */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/98 via-blue-50/60 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
