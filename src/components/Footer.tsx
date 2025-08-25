
const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-16">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/188e6dc8-7310-45bd-9b68-4fab84a92c03.png" 
                alt="Checkinly Logo" 
                className="w-12 h-12 hover-scale"
              />
              <span className="text-2xl font-bold text-foreground">Checkinly</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Where effortless hospitality begins. Trusted by hotels worldwide to create seamless, secure guest experiences.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-modern">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-modern">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">GDPR Ready</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Digital Check-in</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Front Desk Management</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Guest Engagement</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Device Integration</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Help Center</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Live Chat Support</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Schedule a Demo</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Getting Started</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">About Our Story</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Terms of Service</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-smooth hover-lift">Latest Updates</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-base text-muted-foreground">
            © 2024 Checkinly. Crafted with care for hoteliers worldwide.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-muted-foreground">Made with ❤️ for hospitality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
