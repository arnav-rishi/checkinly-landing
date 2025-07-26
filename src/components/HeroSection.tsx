
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Clock, Users } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/8665fcc4-2221-4ee8-b377-7973d0d12c68.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-primary/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-glow rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary-glow rounded-full animate-[float_7s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-primary rounded-full animate-[float_9s_ease-in-out_infinite_3s]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-6 md:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary-glow" />
            <span className="text-sm font-medium">Trusted by 500+ hotels • 99.9% uptime</span>
          </div>

          {/* Main Headline - Stronger, More Specific */}
          <h1 className="font-bold mb-8 leading-tight tracking-tight text-4xl md:text-6xl lg:text-7xl">
            Automate Hotel Check-ins.<br/>
            <span className="text-primary-glow bg-gradient-primary bg-clip-text text-transparent">
              Increase Revenue 40%
            </span>
          </h1>
          
          {/* Sub-headline - More Specific Value Prop */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto font-medium">
            Smart lock integration + contactless check-in = happier guests and 90% faster processing. 
            <strong>Setup takes 24 hours.</strong>
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-8 text-xl font-bold rounded-large shadow-glow hover:shadow-primary/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              onClick={() => handleCTAClick('primary_hero_cta')}
            >
              Start Free 30-Day Trial
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10 px-10 py-8 text-lg font-semibold rounded-large transition-all duration-300 hover:scale-105 hover:border-white/50"
              onClick={() => handleCTAClick('demo_request')}
            >
              <Play className="w-6 h-6 mr-3" />
              Watch 3-Min Demo
            </Button>
          </div>
          
          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-primary-glow" />
                <span className="text-3xl font-bold">47s</span>
              </div>
              <span className="text-sm text-white/80">Average check-in time</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-primary-glow" />
                <span className="text-3xl font-bold">40%</span>
              </div>
              <span className="text-sm text-white/80">Revenue increase</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-primary-glow" />
                <span className="text-3xl font-bold">24h</span>
              </div>
              <span className="text-sm text-white/80">Setup time</span>
            </div>
          </div>
          
          {/* Trust Signals */}
          <div className="text-white/80 text-sm font-medium">
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-primary-glow" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-primary-glow" />
                <span>Works with 50+ lock brands</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-primary-glow" />
                <span>24-hour setup guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
