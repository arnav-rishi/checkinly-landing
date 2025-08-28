
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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M0,300 Q400,100 800,300 T1200,300" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Rotating Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground">
                <span className="inline-block min-w-[280px] lg:min-w-[320px]">
                  <span 
                    key={currentWordIndex}
                    className="text-primary animate-fade-in-up inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </span>
                <br />
                <span className="text-foreground">Hotel Check-in.</span>
                <br />
                <span className="text-muted-foreground text-4xl lg:text-5xl xl:text-6xl font-medium">
                  Powered by Face & NFC Access.
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Checkinly helps hotels automate guest verification and unlock rooms with a single glance. 
              <span className="font-semibold text-foreground"> Faster, safer, smarter hospitality.</span>
            </p>

            {/* Social Proof Badge */}
            <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
              <span className="text-sm font-medium text-primary">✓ Trusted by 500+ hotels worldwide</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300"
                onClick={() => handleCTAClick('request_demo')}
              >
                Request Demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 h-14 text-lg font-semibold rounded-xl border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300"
                onClick={() => handleCTAClick('start_trial')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Right Column - Product Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl shadow-2xl p-4 border border-border/50 backdrop-blur-sm">
                  <div className="bg-background rounded-xl overflow-hidden shadow-inner">
                    {/* Laptop Screen Content */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl mx-auto flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/188e6dc8-7310-45bd-9b68-4fab84a92c03.png" 
                            alt="Checkinly Logo" 
                            className="w-10 h-10"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-primary">Checkinly Dashboard</div>
                          <div className="text-xs text-muted-foreground">Real-time guest management</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-6">
                          <div className="h-2 bg-primary/20 rounded-full"></div>
                          <div className="h-2 bg-primary/40 rounded-full"></div>
                          <div className="h-2 bg-primary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smartphone Mockup */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl shadow-2xl p-2 border border-border/50 backdrop-blur-sm">
                  <div className="bg-background rounded-2xl overflow-hidden w-32 h-56 shadow-inner">
                    {/* Phone Screen Content */}
                    <div className="h-full bg-gradient-to-b from-primary/5 to-accent/5 p-4 flex flex-col items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-xl mb-3 flex items-center justify-center">
                        <span className="text-xs text-primary-foreground font-bold">🔑</span>
                      </div>
                      <div className="text-xs font-semibold text-center text-primary mb-2">Digital Room Key</div>
                      <div className="text-xs text-muted-foreground text-center mb-4">Room 204</div>
                      <div className="w-12 h-1 bg-primary/60 rounded-full mb-1"></div>
                      <div className="w-8 h-1 bg-primary/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
