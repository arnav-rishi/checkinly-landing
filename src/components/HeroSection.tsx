
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Clock, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-smart-unlock.jpg";

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
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-6 md:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary-glow" />
            <span className="text-sm font-medium">Trusted by 500+ hotels • 99.9% uptime</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold mb-8 leading-tight tracking-tight text-4xl md:text-6xl lg:text-7xl">
            Transform Hotel Check-Ins.<br/>
            <span className="text-primary-glow bg-gradient-primary bg-clip-text text-transparent">
              Reduce Operational Costs by 20%
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto font-medium">
            Automate guest verification, enable face/NFC entry, and free your staff from repetitive check-in tasks. 
            <strong>Make the check-in process 3x faster & delight your guests.</strong>
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="px-20 py-10 text-2xl font-bold rounded-large shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 hover:scale-110 transition-all duration-300 text-white border-2 border-blue-600/30"
              style={{ backgroundColor: '#003C74' }}
              onClick={() => handleCTAClick('primary_hero_cta')}
            >
              See It in Action
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
                <Star className="w-5 h-5 text-primary-glow" />
                <span className="text-3xl font-bold">Save</span>
              </div>
              <span className="text-sm text-white/80">Staff hours & cut manual work</span>
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
