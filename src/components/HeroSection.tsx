
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Smartphone, Shield, Zap, Users, ArrowRight, DollarSign, Star, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ["Smarter", "Faster", "Safer", "Seamless"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  const features = [
    { icon: Smartphone, title: "Face Recognition", description: "Instant guest verification" },
    { icon: Shield, title: "NFC Access", description: "Secure room entry" },
    { icon: Zap, title: "Instant Setup", description: "Ready in minutes" },
    { icon: Users, title: "Guest Delight", description: "Seamless experience" }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#fafbff] via-[#f6f8ff] to-[#f0f4ff] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/15 via-primary/12 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-primary/12 via-blue-300/15 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-400/8 to-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="text-center space-y-8">
          {/* Trust Signal */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              Trusted by 500+ hotels worldwide
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Revolutionizing Hotels to</span>
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                <span 
                  key={currentWordIndex}
                  className="animate-fade-in-up inline-block"
                >
                  {rotatingWords[currentWordIndex]}
                </span> Check-in and Succeed
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your personalized hotel management dashboard. Automate guest verification, 
            streamline operations, and deliver seamless experiences.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="px-8 py-6 h-14 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
              onClick={() => handleCTAClick('view_dashboard')}
            >
              View Dashboard
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative max-w-6xl mx-auto">
          <div className="relative">
            {/* Main dashboard mockup */}
            <div className="bg-gray-900/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-700/50">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">Checkinly Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                {/* Left sidebar */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="text-gray-400 text-sm font-medium mb-3">OVERVIEW</div>
                  {[
                    { icon: Users, label: "Dashboard", active: true },
                    { icon: Smartphone, label: "Check-ins", active: false },
                    { icon: Shield, label: "Verification", active: false },
                    { icon: Zap, label: "Analytics", active: false }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      item.active ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:text-gray-300'
                    }`}>
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Main content area */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Stats cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Today's Check-ins", value: "124", change: "+12%" },
                      { title: "Verified Guests", value: "98.5%", change: "+2.1%" },
                      { title: "Avg. Check-in Time", value: "45sec", change: "-23%" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="text-gray-400 text-sm">{stat.title}</div>
                        <div className="text-2xl font-bold text-white mt-1">{stat.value}</div>
                        <div className="text-green-400 text-sm mt-1">{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent activity */}
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold">Recent Check-ins</h3>
                      <span className="text-primary text-sm cursor-pointer">View All</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "John Smith", room: "Room 301", time: "2 min ago", status: "Verified" },
                        { name: "Emily Johnson", room: "Room 205", time: "5 min ago", status: "Processing" },
                        { name: "Michael Brown", room: "Room 102", time: "8 min ago", status: "Verified" }
                      ].map((guest, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                              <Users className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm">{guest.name}</div>
                              <div className="text-gray-400 text-xs">{guest.room}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-xs px-2 py-1 rounded-full ${
                              guest.status === 'Verified' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {guest.status}
                            </div>
                            <div className="text-gray-400 text-xs mt-1">{guest.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Verification Complete</div>
                  <div className="text-xs text-gray-600">Room 301 • John Smith</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Mobile Check-in</div>
                  <div className="text-xs text-gray-600">45sec average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/98 via-blue-50/70 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
