
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleCTAClick = (action: string) => {
    // Analytics tracking for CTAs
    console.log(`CTA clicked: ${action}`);
    // In a real app, you'd send this to your analytics service
    // gtag('event', 'click', { event_category: 'CTA', event_label: action });
  };

  return (
    <header className="w-full bg-black/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center hover-scale">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-white">Checkinly</span>
          </div>

          {/* Main Navigation - matching the uploaded design */}
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-white hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10">
              Home
            </a>
            <a href="/download-app" className="text-white hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10">
              Download App
            </a>
            <a href="/checkinly-os" className="text-white hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10">
              Checkinly OS
            </a>
            <a href="/for-hotels" className="text-white hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10">
              For Hotels
            </a>
            <a href="/faqs" className="text-white hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10">
              FAQs
            </a>
            <a href="/privacy-policy" className="text-white hover:text-primary transition-smooth text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10">
              Privacy Policy
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
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
