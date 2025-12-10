import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DollarSign, Users, Monitor, TrendingUp, BarChart3, BedDouble, Lock } from "lucide-react";
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
        {/* Analytics Dashboard Mockup */}
        <div className="h-full w-full bg-slate-50 rounded-2xl overflow-hidden shadow-2xl flex">
          {/* Sidebar */}
          <div className="w-16 bg-[#0f172a] flex flex-col items-center py-6 gap-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 hover:bg-slate-700 rounded-xl flex items-center justify-center cursor-pointer">
                <Users className="w-5 h-5 text-slate-400" />
              </div>
              <div className="w-10 h-10 hover:bg-slate-700 rounded-xl flex items-center justify-center cursor-pointer">
                <BedDouble className="w-5 h-5 text-slate-400" />
              </div>
              <div className="w-10 h-10 hover:bg-slate-700 rounded-xl flex items-center justify-center cursor-pointer">
                <Lock className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Analytics Dashboard</h3>
              <p className="text-slate-500 text-sm">Revenue analytics and performance insights</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Total Revenue */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 md:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-emerald-600 text-sm font-medium">Total Revenue</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">$124,892</p>
                <p className="text-emerald-600 text-xs mt-1">+12.5% vs last month</p>
              </div>
              
              {/* Active Guests */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-blue-600 text-sm font-medium">Active Guests</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">342</p>
                <p className="text-blue-600 text-xs mt-1">+8.2% vs last month</p>
              </div>
              
              {/* Occupancy Rate */}
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 md:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-purple-600 text-sm font-medium">Occupancy Rate</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">87.3%</p>
                <p className="text-purple-600 text-xs mt-1">+3.1% vs last month</p>
              </div>
              
              {/* Access Events */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 md:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-orange-600 text-sm font-medium">Access Events</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">1,247</p>
                <p className="text-orange-600 text-xs mt-1">+15.8% vs last month</p>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default HeroSection;
