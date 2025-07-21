
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleCTAClick = (action: string) => {
    // Analytics tracking for CTAs
    console.log(`CTA clicked: ${action}`);
    // In a real app, you'd send this to your analytics service
    // gtag('event', 'click', { event_category: 'CTA', event_label: action });
  };

  return (
    <header className="w-full bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center hover-scale">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Checkinly</span>
          </div>

          {/* Simplified Navigation - Less distraction */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium">
              Success Stories
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium">
              Pricing
            </a>
          </nav>

          {/* Conversion-Focused CTAs */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleCTAClick('login')}
              className="hidden md:inline-flex text-sm"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-primary hover:opacity-90 shadow-glow hover-lift px-6 py-2 text-sm font-semibold"
              onClick={() => handleCTAClick('primary_header_cta')}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
