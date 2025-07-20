import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Checkinly</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Front Desk
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Reservations
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Guests
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Help Center
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              Login
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90">
              Try free for 30 days
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;