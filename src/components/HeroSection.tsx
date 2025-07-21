import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-checkin.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">{/* Increased min-height for more breathing room */}
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-8 text-center text-white">{/* Using consistent container class */}
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Experience{" "}
            <span className="text-primary-glow">Effortless, Secure</span>{" "}
            Hotel Check-ins
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Transform your hotel operations with cloud-based technology that streamlines check-ins, 
            enhances guest experiences, and simplifies daily workflows.
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-semibold rounded-xl shadow-glow hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              Book a Demo
            </Button>
          </div>
          
          <div className="mt-8 text-white/70 text-sm">
            ✓ Free 30-day trial • ✓ No setup fees • ✓ 24/7 support
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;