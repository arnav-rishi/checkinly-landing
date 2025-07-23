
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleCTAClick = (action: string) => {
    // Analytics tracking for CTAs
    console.log(`CTA clicked: ${action}`);
    // In a real app, you'd send this to your analytics service
    // gtag('event', 'click', { event_category: 'CTA', event_label: action });
  };

  return (
    <header className="w-full bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 animate-[slideDown_0.6s_ease-out]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 group-hover:shadow-lg">
              <span className="text-primary-foreground font-bold text-sm group-hover:animate-[pulse_0.5s_ease-in-out]">C</span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover:animate-[wiggle_0.5s_ease-in-out]">Checkinly</span>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/download-app" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Download App
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/checkinly-os" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Checkinly OS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/for-hotels" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              For Hotels
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/faqs" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Conversion-Focused CTAs */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleCTAClick('login')}
              className="hidden md:inline-flex text-sm hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-primary hover:opacity-90 shadow-glow px-6 py-2 text-sm font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 group hover:shadow-xl"
              onClick={() => handleCTAClick('primary_header_cta')}
            >
              <span className="group-hover:animate-[pulse_0.5s_ease-in-out]">Start Free Trial</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
