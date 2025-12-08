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
        <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6 md:p-10">
          <div className="relative w-full max-w-xl mx-auto">
            {/* Kiosk Body */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
              {/* Screen Header */}
              <div className="bg-[#1e3a5f] py-6 px-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white">Welcome to Grand Hotel</h3>
                <p className="text-white/80 text-sm md:text-base mt-1">Self-Service Check-In</p>
              </div>
              
              {/* Screen Content */}
              <div className="p-6 md:p-8 space-y-5">
                {/* Status Card */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-emerald-700 text-lg md:text-xl">Identity Verified</h4>
                  <p className="text-emerald-600 mt-1">James Miller - Room 305</p>
                </div>
                
                {/* Key Dispensing */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center justify-center space-x-4">
                    <CreditCard className="w-8 h-8 text-[#1e3a5f]" />
                    <div className="text-left">
                      <p className="font-semibold text-slate-800 text-base md:text-lg">Dispensing Key Card...</p>
                      <p className="text-slate-500">Please collect below</p>
                    </div>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-4 text-center pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Fingerprint className="w-6 h-6 md:w-7 md:h-7 mx-auto text-[#1e3a5f] mb-2" />
                    <p className="text-xs md:text-sm text-slate-600 font-medium">ID Scan</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Monitor className="w-6 h-6 md:w-7 md:h-7 mx-auto text-[#1e3a5f] mb-2" />
                    <p className="text-xs md:text-sm text-slate-600 font-medium">21.5" Touch</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <CreditCard className="w-6 h-6 md:w-7 md:h-7 mx-auto text-[#1e3a5f] mb-2" />
                    <p className="text-xs md:text-sm text-slate-600 font-medium">RFID Encoder</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kiosk Stand Base */}
            <div className="flex justify-center mt-4">
              <div className="w-40 h-5 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-full shadow-md"></div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default HeroSection;
