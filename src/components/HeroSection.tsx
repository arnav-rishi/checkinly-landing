
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-checkin.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-6 md:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="font-bold mb-8 leading-tight tracking-tight">
            Experience{" "}
            <span className="text-primary-glow bg-gradient-accent bg-clip-text text-transparent animate-bounce-gentle">
              Effortless, Secure
            </span>{" "}
            Hotel Check-ins
          </h1>
          
          <p className="text-large md:text-xl mb-16 text-white/90 leading-relaxed max-w-4xl mx-auto font-medium">
            Transform your hotel operations with cloud-based technology that streamlines check-ins, 
            enhances guest experiences, and simplifies daily workflows.
          </p>

          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-16 py-8 text-xl font-semibold rounded-large shadow-glow hover:shadow-accent/50 hover-lift hover-glow transition-bounce"
            >
              Book a Demo
            </Button>
          </div>
          
          <div className="text-white/80 text-base font-medium">
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
