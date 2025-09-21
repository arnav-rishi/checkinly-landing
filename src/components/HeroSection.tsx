import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Bed, Lock, DollarSign, TrendingUp, CheckCircle, User, MapPin, Battery, Wifi, Monitor } from "lucide-react";

// SUGGESTION: A simple component to handle the number counting animation
const AnimatedNumber = ({
  value
}: {
  value: number;
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    const animationDuration = 1000; // 1 second
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out effect for a smoother stop
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const animatedValue = Math.round(value * easeOutProgress);
      setCurrentValue(animatedValue);
      if (frame === totalFrames) {
        clearInterval(counter);
        setCurrentValue(value); // Ensure it ends on the exact value
      }
    }, frameDuration);
    return () => clearInterval(counter);
  }, [value]);
  return <span>{currentValue.toLocaleString()}</span>;
};
const HeroSection = () => {
  const [activeView, setActiveView] = useState("analytics");
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    if (action === 'start_trial') {
      navigate('/auth?mode=signup');
    } else if (action === 'book_demo') {
      // Handle demo booking - could open a modal or navigate to contact
      navigate('/auth?mode=signup');
    }
  };

  // Auto-switch tabs every 4 seconds
  useEffect(() => {
    const tabs = ["analytics", "guests", "rooms", "locks"];
    const interval = setInterval(() => {
      setActiveView(current => {
        const currentIndex = tabs.indexOf(current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const sidebarItems = [{
    id: "analytics",
    icon: BarChart3,
    label: "Analytics Dashboard",
    active: activeView === "analytics"
  }, {
    id: "guests",
    icon: Users,
    label: "Guest Management",
    active: activeView === "guests"
  }, {
    id: "rooms",
    icon: Bed,
    label: "Room Management",
    active: activeView === "rooms"
  }, {
    id: "locks",
    icon: Lock,
    label: "Smart Locks",
    active: activeView === "locks"
  }];
  const renderDashboardContent = () => {
    // ... (This function remains unchanged)
    switch (activeView) {
      case "analytics":
        return <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Analytics Dashboard</h2>
                <p className="text-sm text-gray-600">Revenue analytics and performance insights</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-green-100 rounded-lg"><DollarSign className="h-4 w-4 text-green-600" /></div>
                  <span className="text-xs text-green-600 font-medium">Total Revenue</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  $<AnimatedNumber value={124892} />
                </p>
                <p className="text-xs text-green-600">+12.5% vs last month</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-blue-100 rounded-lg"><Users className="h-4 w-4 text-blue-600" /></div>
                  <span className="text-xs text-blue-600 font-medium">Active Guests</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  <AnimatedNumber value={342} />
                </p>
                <p className="text-xs text-blue-600">+8.2% vs last month</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-purple-100 rounded-lg"><Bed className="h-4 w-4 text-purple-600" /></div>
                  <span className="text-xs text-purple-600 font-medium">Occupancy Rate</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">87.3%</p>
                <p className="text-xs text-purple-600">+3.1% vs last month</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-orange-100 rounded-lg"><TrendingUp className="h-4 w-4 text-orange-600" /></div>
                  <span className="text-xs text-orange-600 font-medium">Access Events</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  <AnimatedNumber value={1247} />
                </p>
                <p className="text-xs text-orange-600">+15.8% vs last month</p>
              </div>
            </div>
          </div>;
      case "guests":
        return <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Guest Management</h2>
                <p className="text-sm text-gray-600">Manage hotel guests and their information</p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">+ Add Guest</Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-gray-500 mb-3">Showing 2 of 60 guests</p>
              <div className="space-y-3 overflow-y-auto max-h-full pr-2">
                {[{
                name: "Parker Thomas",
                email: "parker.thomas939@example.com",
                location: "Metropolis, Spain",
                license: "687348130"
              }, {
                name: "Quinn Brown",
                email: "quinn.brown740@example.com",
                location: "Metropolis, Canada",
                license: "202677298"
              }].map((guest, index) => <div key={index} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 flex-shrink-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-white rounded-full"><User className="h-4 w-4 text-gray-600" /></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{guest.name}</h4>
                        <p className="text-xs text-gray-600">{guest.email}</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center space-x-2"><MapPin className="h-3 w-3" /><span>{guest.location}</span></div>
                      <p>Driver License: {guest.license}</p>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button variant="outline" size="sm" className="text-xs h-7">Edit</Button>
                      <Button variant="outline" size="sm" className="text-xs h-7 text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>;
      case "rooms":
        return <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Room Management</h2>
                <p className="text-sm text-gray-600">Manage hotel rooms and their availability</p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">+ Add Room</Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-gray-500 mb-3">Showing 2 of 20 rooms</p>
              <div className="space-y-3 overflow-y-auto max-h-full pr-2">
                {[{
                room: "Room 101-b987",
                type: "Single",
                price: "$81/night",
                guests: 3,
                status: "cleaning",
                amenities: ["WiFi", "TV", "AC"]
              }, {
                room: "Room 102-b987",
                type: "Suite",
                price: "$245/night",
                guests: 4,
                status: "occupied",
                amenities: ["WiFi", "TV"]
              }].map((room, index) => <div key={index} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 flex-shrink-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{room.room}</h4>
                        <p className="text-xs text-gray-600">{room.type}</p>
                      </div>
                      <Badge variant={room.status === "occupied" ? "default" : room.status === "cleaning" ? "secondary" : "outline"} className={`text-xs ${room.status === "occupied" ? "bg-blue-100 text-blue-700" : room.status === "cleaning" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{room.status}</Badge>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600 mb-3">
                      <p className="font-medium">{room.price}</p>
                      <div className="flex items-center space-x-2"><Users className="h-3 w-3" /><span>{room.guests} guests</span></div>
                      <div className="flex items-center space-x-2">
                        {room.amenities.includes("WiFi") && <Wifi className="h-3 w-3" />}
                        {room.amenities.includes("TV") && <Monitor className="h-3 w-3" />}
                        {room.amenities.includes("AC") && <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">AC</span>}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-xs h-7">View</Button>
                      <Button variant="outline" size="sm" className="text-xs h-7">Edit</Button>
                      <Button variant="outline" size="sm" className="text-xs h-7">Manage</Button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>;
      case "locks":
        return <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Smart Locks</h2>
                <p className="text-sm text-gray-600">Monitor and control room smart locks</p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">+ Add Lock</Button>
            </div>
            <div className="space-y-3">
              {[{
              room: "Room 110-b987",
              lockId: "LOCK-527532-b987",
              status: "locked",
              battery: "62%",
              signal: "Strong"
            }, {
              room: "Room 103-b987",
              lockId: "LOCK-665787-b987",
              status: "unlocked",
              battery: "98%",
              signal: "Weak"
            }].map((lock, index) => <div key={index} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{lock.room}</h4>
                      <p className="text-xs text-gray-600">Lock ID: {lock.lockId}</p>
                    </div>
                    <Badge variant={lock.status === "locked" ? "default" : "secondary"} className={`text-xs ${lock.status === "locked" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>{lock.status}</Badge>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Battery</span>
                      <div className="flex items-center space-x-1"><Battery className={`h-3 w-3 ${parseInt(lock.battery) > 50 ? 'text-green-600' : 'text-yellow-600'}`} /><span className="font-medium">{lock.battery}</span></div>
                    </div>
                    <div className="flex justify-between"><span className="text-gray-600">Signal</span><span className="font-medium text-yellow-600">{lock.signal}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Last seen</span><span className="font-medium">8:00:19 PM</span></div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3 text-xs h-7">{lock.status === "locked" ? "Unlock" : "Lock"}</Button>
                </div>)}
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <section className="relative w-full min-h-[85vh] bg-gradient-to-br from-blue-50/70 via-blue-25/20 to-blue-100/60 overflow-hidden pt-24 sm:pt-32 px-4 sm:px-6">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `
               linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
             `,
      backgroundSize: '40px 40px'
    }}>
      </div>
      
      {/* Floating Elements */}
      <div style={{
      transform: `translateY(${scrollY * 0.5}px)`
    }} className="absolute inset-0 opacity-40 my-0 px-0 rounded-modern mx-0 py-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 container max-w-6xl mx-auto sm:px-6 lg:px-8 pb-8 sm:pb-12 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 lg:col-span-6 text-center lg:text-left" style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Revolutionary Check-in Platform
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary block animate-fade-in">Automate</span>
                <span className="text-gray-900 block animate-fade-in" style={{
                animationDelay: '0.2s'
              }}>your guest check-ins</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              Streamline hospitality operations with our all-in-one platform. From online check-in to guest verification, every interaction is seamless and profitable.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">27%</div>
                <div className="text-xs text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">Free</div>
                <div className="text-xs text-gray-600">14-day Trial</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in justify-center lg:justify-start" style={{
            animationDelay: '0.8s'
          }}>
              <Button size="lg" className="px-6 py-4 h-12 text-sm sm:text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover-scale w-full sm:w-auto" onClick={() => handleCTAClick('start_trial')}>
                ▶ Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-4 h-12 text-sm sm:text-base font-semibold rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white hover-scale w-full sm:w-auto" onClick={() => handleCTAClick('book_demo')}>
                📅 Book a Demo
              </Button>
            </div>
            <p className="text-xs text-gray-500 animate-fade-in" style={{
            animationDelay: '1s'
          }}>
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          <div className="relative animate-fade-in lg:col-span-6 max-w-full overflow-hidden" style={{
          animationDelay: '0.3s',
          transform: `translateY(${scrollY * -0.1}px)`
        }}>
            <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl overflow-hidden border border-gray-700/50 h-[580px] flex flex-col px-[5px] py-[15px] max-w-full">
              <div className="flex items-center justify-between px-2 py-3 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">Checkinly</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-3 flex-1">
                <div className="w-12 border-r border-gray-700 pr-2">
                  <div className="flex flex-col items-center space-y-2">
                    {sidebarItems.map(item => <button key={item.id} onClick={() => setActiveView(item.id)} title={item.label} className={`flex items-center justify-center p-3 rounded-lg transition-all duration-300 w-full ${item.active ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                        <item.icon className="h-5 w-5" />
                      </button>)}
                  </div>
                </div>

                {/* THE FIX: Added min-h-0 to this flex container */}
                <div className="flex-1 min-h-0">
                  <div className="bg-white rounded-xl p-4 h-full overflow-y-auto">
                    <div className="space-y-4 max-h-full">
                      {renderDashboardContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;