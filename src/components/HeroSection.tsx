
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[zoom_20s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-glow rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary-glow rounded-full animate-[float_7s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-accent rounded-full animate-[float_9s_ease-in-out_infinite_3s]"></div>
      </div>

      {/* Content - Conversion Focused */}
      <div className="relative z-10 container-max px-6 md:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-[slideUp_1s_ease-out]">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20 animate-[fadeIn_1.2s_ease-out] hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CheckCircle className="w-4 h-4 text-primary-glow animate-[pulse_2s_infinite]" />
            <span className="text-sm font-medium">Trusted by 500+ hotels worldwide</span>
          </div>

          <h1 className="font-bold mb-8 leading-tight tracking-tight animate-[slideUp_1s_ease-out_0.2s] opacity-0 animate-fill-forwards">
            Increase Check-in Speed by{" "}
            <span className="text-primary-glow bg-gradient-accent bg-clip-text text-transparent animate-[bounce_2s_infinite] hover:animate-[wiggle_0.5s_ease-in-out]">
              90% in 30 Days
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto font-medium animate-[slideUp_1s_ease-out_0.4s] opacity-0 animate-fill-forwards">
            Transform guest experiences with secure, contactless check-ins. 
            Start your free trial today—no setup fees, no commitment.
          </p>

          {/* Primary CTA with Secondary Option */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-[slideUp_1s_ease-out_0.6s] opacity-0 animate-fill-forwards">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-xl font-semibold rounded-large shadow-glow hover:shadow-accent/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
              onClick={() => handleCTAClick('primary_hero_cta')}
            >
              <span className="group-hover:animate-[pulse_0.5s_ease-in-out]">Start Free 30-Day Trial</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-large transition-all duration-300 hover:scale-105 hover:border-white/50 group"
              onClick={() => handleCTAClick('demo_request')}
            >
              <Play className="w-5 h-5 mr-2 group-hover:animate-[spin_1s_ease-in-out]" />
              Watch 2-Min Demo
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="text-white/80 text-sm font-medium animate-[slideUp_1s_ease-out_0.8s] opacity-0 animate-fill-forwards">
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-primary-glow animate-[pulse_2s_infinite_0.5s]" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-primary-glow animate-[pulse_2s_infinite_1s]" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-primary-glow animate-[pulse_2s_infinite_1.5s]" />
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
