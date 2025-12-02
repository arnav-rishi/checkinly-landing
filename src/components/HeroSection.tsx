import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Monitor, CreditCard, Shield, Fingerprint } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCTAClick = (action: string) => {
    if (action === 'book_demo') {
      navigate('/contact-sales');
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50/70 via-background to-blue-100/60 overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center space-y-6 pt-20 md:pt-0">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Self-Service Check-In Kiosks
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
              <span className="text-foreground">Effortless Check-in.</span>
              <br />
              <span className="text-primary">Instant Key Access.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center leading-relaxed">
              Guests verify identity and receive their room key card in seconds. No apps required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="px-8 py-6 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover-scale"
                onClick={() => handleCTAClick('book_demo')}
              >
                Book a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-xl border-primary text-primary hover:bg-primary/5"
                onClick={() => document.getElementById('kiosk-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try the Guest Journey
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • Free consultation • Quick setup
            </p>
          </div>
        }
      >
        {/* Kiosk Interface Mockup */}
        <div className="h-full w-full bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-md mx-auto">
            {/* Kiosk Body */}
            <div className="bg-card border-4 border-border rounded-3xl shadow-2xl overflow-hidden">
              {/* Screen Header */}
              <div className="bg-primary p-4 text-primary-foreground text-center">
                <h3 className="text-lg font-bold">Welcome to Grand Hotel</h3>
                <p className="text-sm opacity-90">Self-Service Check-In</p>
              </div>
              
              {/* Screen Content */}
              <div className="p-6 space-y-6">
                {/* Status Card */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800">Identity Verified</h4>
                  <p className="text-sm text-green-600">James Miller - Room 305</p>
                </div>
                
                {/* Key Dispensing Animation */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center justify-center space-x-3">
                    <CreditCard className="w-8 h-8 text-primary animate-bounce" />
                    <div>
                      <p className="font-semibold text-foreground">Dispensing Key Card...</p>
                      <p className="text-sm text-muted-foreground">Please collect below</p>
                    </div>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-muted rounded-lg">
                    <Fingerprint className="w-6 h-6 mx-auto text-primary mb-1" />
                    <p className="text-xs text-muted-foreground">ID Scan</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <Monitor className="w-6 h-6 mx-auto text-primary mb-1" />
                    <p className="text-xs text-muted-foreground">21.5" Touch</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <CreditCard className="w-6 h-6 mx-auto text-primary mb-1" />
                    <p className="text-xs text-muted-foreground">RFID Encoder</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kiosk Stand Base */}
            <div className="flex justify-center mt-4">
              <div className="w-32 h-4 bg-gradient-to-b from-border to-muted rounded-b-full"></div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default HeroSection;
