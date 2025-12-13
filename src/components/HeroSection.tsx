import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DollarSign, Users, Monitor, TrendingUp, BarChart3, BedDouble, MapPin, Wifi, Tv } from "lucide-react";

const AnimatedNumber = ({ 
  end, 
  decimals = 0, 
  prefix = "", 
  suffix = "",
  duration = 2000,
  shouldAnimate = false
}: { 
  end: number; 
  decimals?: number; 
  prefix?: string; 
  suffix?: string;
  duration?: number;
  shouldAnimate?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(end * easeOut);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [shouldAnimate, end, duration]);

  const formatted = `${prefix}${count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;
  return <>{formatted}</>;
};

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (action: string) => {
    if (action === 'book_demo') {
      navigate('/contact-sales');
    }
  };

  const AnalyticsDashboard = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          }
        },
        { threshold: 0.3 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={containerRef} className="flex-1 p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Analytics Dashboard</h3>
          <p className="text-slate-500 text-sm">Revenue analytics and performance insights</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 md:p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-emerald-600 text-sm font-medium">Total Revenue</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">
              <AnimatedNumber end={124892} prefix="$" shouldAnimate={shouldAnimate} />
            </p>
            <p className="text-emerald-600 text-xs mt-1">+12.5% vs last month</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-blue-600 text-sm font-medium">Active Guests</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">
              <AnimatedNumber end={342} shouldAnimate={shouldAnimate} />
            </p>
            <p className="text-blue-600 text-xs mt-1">+8.2% vs last month</p>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 md:p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Monitor className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-purple-600 text-sm font-medium">Occupancy Rate</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">
              <AnimatedNumber end={87.3} decimals={1} suffix="%" shouldAnimate={shouldAnimate} />
            </p>
            <p className="text-purple-600 text-xs mt-1">+3.1% vs last month</p>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 md:p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-orange-600 text-sm font-medium">Check-ins Today</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">
              <AnimatedNumber end={1247} shouldAnimate={shouldAnimate} />
            </p>
            <p className="text-orange-600 text-xs mt-1">+15.8% vs last month</p>
          </div>
        </div>
      </div>
    );
  };

  const GuestManagement = () => (
    <div className="flex-1 p-6 md:p-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Guest Management</h3>
          <p className="text-slate-500 text-sm">Manage hotel guests and their information</p>
        </div>
        <button className="bg-[#0f172a] text-white px-4 py-2 rounded-lg text-sm font-medium">+ Add Guest</button>
      </div>
      <p className="text-slate-400 text-sm mb-4">Showing 2 of 60 guests</p>
      <div className="space-y-3">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Parker Thomas</p>
              <p className="text-slate-500 text-sm">parker.thomas939@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>Metropolis, Spain</span>
          </div>
          <p className="text-slate-600 text-sm mb-3">Driver License: 687348130</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-300 rounded text-sm">Edit</button>
            <button className="px-3 py-1 border border-red-300 text-red-500 rounded text-sm">Delete</button>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Quinn Brown</p>
              <p className="text-slate-500 text-sm">quinn.brown740@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>Metropolis, Canada</span>
          </div>
          <p className="text-slate-600 text-sm mb-3">Driver License: 202677298</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-300 rounded text-sm">Edit</button>
            <button className="px-3 py-1 border border-red-300 text-red-500 rounded text-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );

  const RoomManagement = () => (
    <div className="flex-1 p-6 md:p-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Room Management</h3>
          <p className="text-slate-500 text-sm">Manage hotel rooms and their availability</p>
        </div>
        <button className="bg-[#0f172a] text-white px-4 py-2 rounded-lg text-sm font-medium">+ Add Room</button>
      </div>
      <p className="text-slate-400 text-sm mb-4">Showing 2 of 20 rooms</p>
      <div className="space-y-3">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-semibold text-slate-900">Room 101-b987</p>
              <p className="text-slate-500 text-sm">Single</p>
            </div>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">cleaning</span>
          </div>
          <p className="text-slate-900 font-medium mb-1">$81/night</p>
          <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 3 guests</span>
            <span className="flex items-center gap-1"><Wifi className="w-4 h-4" /></span>
            <span className="flex items-center gap-1"><Tv className="w-4 h-4" /></span>
            <span className="text-xs border border-slate-300 px-2 py-0.5 rounded">AC</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-900 text-white rounded text-sm">View</button>
            <button className="px-3 py-1 border border-slate-300 rounded text-sm">Edit</button>
            <button className="px-3 py-1 border border-slate-300 rounded text-sm">Manage</button>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-semibold text-slate-900">Room 102-b987</p>
              <p className="text-slate-500 text-sm">Suite</p>
            </div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">occupied</span>
          </div>
          <p className="text-slate-900 font-medium mb-1">$245/night</p>
          <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 4 guests</span>
            <span className="flex items-center gap-1"><Wifi className="w-4 h-4" /></span>
            <span className="flex items-center gap-1"><Tv className="w-4 h-4" /></span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-900 text-white rounded text-sm">View</button>
            <button className="px-3 py-1 border border-slate-300 rounded text-sm">Edit</button>
            <button className="px-3 py-1 border border-slate-300 rounded text-sm">Manage</button>
          </div>
        </div>
      </div>
    </div>
  );

  const views = [<AnalyticsDashboard key="analytics" />, <GuestManagement key="guests" />, <RoomManagement key="rooms" />];

  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50/70 via-background to-blue-100/60 overflow-hidden">
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
      
      <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-3xl">
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
          <div className="h-full w-full bg-slate-50 rounded-2xl overflow-hidden shadow-2xl flex">
            {/* Sidebar */}
            <div className="w-16 bg-[#0f172a] flex flex-col items-center py-6 gap-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${activeView === 0 ? 'bg-primary/20' : 'hover:bg-slate-700'}`}
                  onClick={() => setActiveView(0)}
                >
                  <BarChart3 className={`w-5 h-5 ${activeView === 0 ? 'text-primary' : 'text-slate-400'}`} />
                </div>
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${activeView === 1 ? 'bg-primary/20' : 'hover:bg-slate-700'}`}
                  onClick={() => setActiveView(1)}
                >
                  <Users className={`w-5 h-5 ${activeView === 1 ? 'text-primary' : 'text-slate-400'}`} />
                </div>
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${activeView === 2 ? 'bg-primary/20' : 'hover:bg-slate-700'}`}
                  onClick={() => setActiveView(2)}
                >
                  <BedDouble className={`w-5 h-5 ${activeView === 2 ? 'text-primary' : 'text-slate-400'}`} />
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            {views[activeView]}
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;
