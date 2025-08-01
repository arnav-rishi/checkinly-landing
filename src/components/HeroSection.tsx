
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Clock, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-smart-unlock.jpg";

const HeroSection = () => {
  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-6 md:px-8 text-center text-white">
        <div className="flex flex-col items-center space-y-16">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium">Trusted by 500+ hotels • 99.9% uptime</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            Transform Hotel <span className="text-[#003C74] border-b-2 border-[#003C74]">Check-Ins</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium text-white/90 max-w-3xl">
            Reduce operational costs by 20% with instant, automated guest verification and smart room access.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl font-bold rounded-lg min-h-[48px] text-white shadow-lg hover:shadow-xl hover:bg-[#002A52] transition-all duration-300"
              style={{ backgroundColor: '#003C74' }}
              onClick={() => handleCTAClick('primary_hero_cta')}
            >
              See the Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
