
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, TrendingUp, Smartphone, Shield, Zap, Users, Star, ArrowRight } from "lucide-react";

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


            {/* Enhanced Rotating Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="inline-block min-w-[250px] lg:min-w-[350px]">
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
                <span className="text-gray-600 text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed">
                  Powered by Face & NFC Access.
                </span>
              </h1>
            </div>

            {/* Enhanced Sub-headline */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Checkinly helps hotels automate guest verification and unlock rooms with a single glance.
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Faster,Smarter,safer hospitality.
              </p>
            </div>

            {/* Enhanced Feature Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex flex-col items-center space-y-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats row */}
            <div className="flex flex-wrap justify-center gap-8 py-6">
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">90%</p>
                  <p className="text-sm text-gray-600">Faster Check-in</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-600">Guest Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Hotels Trust Us</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="px-10 py-6 h-16 text-xl font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
                onClick={() => handleCTAClick('request_demo')}
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-10 py-6 h-16 text-xl font-semibold rounded-2xl border-2 border-primary/20 text-gray-700 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 bg-white/70 backdrop-blur-sm hover:bg-white/90"
                onClick={() => handleCTAClick('start_trial')}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Social Proof Line */}
            <div className="flex items-center justify-center space-x-2 pt-6 text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-primary/20 rounded-full border-2 border-white flex items-center justify-center">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 500+ hotels worldwide</span>
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
