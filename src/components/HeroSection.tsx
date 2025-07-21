
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-checkin.jpg";

const HeroSection = () => {
  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content - Conversion Focused */}
      <div className="relative z-10 container-max px-6 md:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <CheckCircle className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium">Trusted by 500+ hotels worldwide</span>
          </div>

          <h1 className="font-bold mb-8 leading-tight tracking-tight">
            Increase Check-in Speed by{" "}
            <span className="text-primary-glow bg-gradient-accent bg-clip-text text-transparent animate-bounce-gentle">
              90% in 30 Days
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
            Transform guest experiences with secure, contactless check-ins. 
            Start your free trial today—no setup fees, no commitment.
          </p>

          {/* Primary CTA with Secondary Option */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-xl font-semibold rounded-large shadow-glow hover:shadow-accent/50 hover-lift hover-glow transition-bounce"
              onClick={() => handleCTAClick('primary_hero_cta')}
            >
              Start Free 30-Day Trial
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-large transition-smooth"
              onClick={() => handleCTAClick('demo_request')}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch 2-Min Demo
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="text-white/80 text-sm font-medium">
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary-glow" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary-glow" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary-glow" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
