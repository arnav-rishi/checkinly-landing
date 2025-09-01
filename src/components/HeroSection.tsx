
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Smartphone, Shield, Zap, Users, ArrowRight, DollarSign } from "lucide-react";

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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#fafbff] via-[#f6f8ff] to-[#f0f4ff] overflow-hidden">
      {/* Simplified background elements with uniform gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* More uniform gradient orbs */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/15 via-primary/12 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-primary/12 via-blue-300/15 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-400/8 to-primary/10 rounded-full blur-2xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-12 lg:px-16 py-20 lg:py-28">
        <div className="flex items-center justify-center min-h-[85vh]">
          {/* Centered Content */}
          <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Headline with rotating words in same line */}
            <div className="space-y-6 px-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">
                  <span 
                    key={currentWordIndex}
                    className="text-primary animate-fade-in-up inline-block min-w-[200px] lg:min-w-[280px] text-left"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                  {" "}Hotel Check-in.
                </span>
              </h1>
            </div>

            {/* Enhanced Sub-headline */}
            <div className="space-y-6 max-w-4xl mx-auto px-6">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Checkinly helps hotels automate guest verification and unlock rooms with a single glance.
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Faster, Safer, Smarter Hospitality.
              </p>
            </div>

            {/* Feature Grid */}
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

            {/* Stats row */}
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
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">15%</p>
                  <p className="text-gray-600 font-medium">Saved in Revenue</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
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

            {/* Simple tagline */}
            <div className="pt-8">
              <p className="text-lg text-gray-500 font-medium">
                Revolutionizing hotel check-in experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/98 via-blue-50/70 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
