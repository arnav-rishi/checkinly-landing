import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  Bed, 
  Lock, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  User,
  MapPin,
  Battery,
  Wifi,
  Monitor
} from "lucide-react";

const HeroSection = () => {
  const [activeView, setActiveView] = useState("analytics");
  const [scrollY, setScrollY] = useState(0);

  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
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

  const sidebarItems = [
    { id: "analytics", icon: BarChart3, label: "Analytics Dashboard", active: activeView === "analytics" },
    { id: "guests", icon: Users, label: "Guest Management", active: activeView === "guests" },
    { id: "rooms", icon: Bed, label: "Room Management", active: activeView === "rooms" },
    { id: "locks", icon: Lock, label: "Smart Locks", active: activeView === "locks" }
  ];

  const renderDashboardContent = () => {
    // ... (This function remains unchanged)
    switch (activeView) {
      case "analytics":
        return (
          <div className="space-y-6">
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
                <p className="text-2xl font-bold text-gray-900">$124,892</p>
                <p className="text-xs text-green-600">+12.5% vs last month</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-blue-100 rounded-lg"><Users className="h-4 w-4 text-blue-600" /></div>
                  <span className="text-xs text-blue-600 font-medium">Active Guests</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">342</p>
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
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-xs text-orange-600">+15.8% vs last month</p>
              </div>
            </div>
          </div>
        );
      case "guests":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Guest Management</h2>
                <p className="text-sm text-gray-600">Manage hotel guests and their information</p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">+ Add Guest</Button>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-gray-500">Showing 3 of 60 guests</p>
              {[
                { name: "Parker Thomas", email: "parker.thomas939@example.com", location: "Metropolis, Spain", license: "687348130" },
                { name: "Quinn Brown", email: "quinn.brown740@example.com", location: "Metropolis, Canada", license: "202677298" },
                { name: "Jordan Miller", email: "jordan.miller335@example.com", location: "Metropolis, USA", license: "308879597" }
              ].map((guest, index) => (
                <div key={index} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
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
                </div>
              ))}
            </div>
          </div>
        );
      case "rooms":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Room Management</h2>
                <p className="text-sm text-gray-600">Manage hotel rooms and their availability</p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">+ Add Room</Button>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-gray-500">Showing 3 of 20 rooms</p>
              {[
                { room: "Room 101-b987", type: "Single", price: "$81/night", guests: 3, status: "cleaning", amenities: ["WiFi", "TV", "AC"] },
                { room: "Room 102-b987", type: "Suite", price: "$245/night", guests: 4, status: "occupied", amenities: ["WiFi", "TV"] },
                { room: "Room 103-b987", type: "Double", price: "$160/night", guests: 4, status: "occupied", amenities: ["WiFi", "TV"] }
              ].map((room, index) => (
                <div key={index} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{room.room}</h4>
                      <p className="text-xs text-gray-600">{room.type}</p>
                    </div>
                    <Badge variant={room.status === "occupied" ? "default" : room.status === "cleaning" ? "secondary" : "outline"} className={`text-xs ${room.status === "occupied" ? "bg-blue-100 text-blue-700" : room.status === "cleaning" ? "bg-yellow-100 text-yellow-700" : ""}`}>{room.status}</Badge>
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
                </div>
              ))}
            </div>
          </div>
        );
      case "locks":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Smart Locks</h2>
                <p className="text-sm text-gray-600">Monitor and control room smart locks</p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">+ Add Lock</Button>
            </div>
            <div className="space-y-3">
              {[
                { room: "Room 110-b987", lockId: "LOCK-527532-b987", status: "locked", battery: "62%", signal: "Weak", type: "NFC" },
                { room: "Room 103-b987", lockId: "LOCK-665787-b987", status: "unlocked", battery: "98%", signal: "Weak", type: "NFC" },
                { room: "Room 105-b987", lockId: "LOCK-345922-b987", status: "unlocked", battery: "89%", signal: "Weak", type: "NFC" }
              ].map((lock, index) => (
                <div key={index} className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{lock.room}</h4>
                      <p className="text-xs text-gray-600">Lock ID: {lock.lockId}</p>
                    </div>
                    <Badge variant={lock.status === "locked" ? "default" : "secondary"} className={`text-xs ${lock.status === "locked" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>{lock.status}</Badge>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span className="text-gray-600">Type</span><span className="font-medium">{lock.type}</span></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Battery</span>
                      <div className="flex items-center space-x-1"><Battery className={`h-3 w-3 ${parseInt(lock.battery) > 50 ? 'text-green-600' : 'text-yellow-600'}`} /><span className="font-medium">{lock.battery}</span></div>
                    </div>
                    <div className="flex justify-between"><span className="text-gray-600">Signal</span><span className="font-medium text-yellow-600">{lock.signal}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Last seen</span><span className="font-medium">8:00:19 PM</span></div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3 text-xs h-7">{lock.status === "locked" ? "Unlock" : "Lock"}</Button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] bg-gradient-to-br from-blue-50/70 via-blue-25/20 to-blue-100/60 overflow-hidden pt-32 px-6">
      <div 
        className="absolute inset-0 opacity-40"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 container max-w-6xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* CHANGED: Left column is now narrower to give more space to the dashboard */}
          <div className="space-y-6 lg:col-span-5" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Revolutionary Check-in Platform
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary block animate-fade-in">Automate</span>
                <span className="text-gray-900 block animate-fade-in" style={{ animationDelay: '0.2s' }}>your guest check-ins</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Streamline hospitality operations with our all-in-one platform. From online check-in to guest verification, every interaction is seamless and profitable.
            </p>
            <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">27%</div>
                <div className="text-xs text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-xs text-gray-600">14-day Trial</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg"
                className="px-6 py-4 h-12 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover-scale"
                onClick={() => handleCTAClick('start_trial')}
              >
                ▶ Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-6 py-4 h-12 text-base font-semibold rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white hover-scale"
                onClick={() => handleCTAClick('book_demo')}
              >
                📅 Book a Demo
              </Button>
            </div>
            <p className="text-xs text-gray-500 animate-fade-in" style={{ animationDelay: '1s' }}>
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* CHANGED: Right column is now wider to take up more space */}
          <div 
            className="relative animate-fade-in lg:col-span-7" 
            style={{ 
              animationDelay: '0.3s',
              transform: `translateY(${scrollY * -0.1}px)` 
            }}
          >
            {/* CHANGED: Replaced p-4 with specific directional padding */}
            <div className="bg-gray-900 rounded-2xl pt-1 pb-1 pr-1 pl-2.5 shadow-2xl overflow-hidden border border-gray-700/50">
              <div className="flex items-center justify-between p-3 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">Checkinly</span>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-20 border-r border-gray-700 pr-4">
                  <div className="flex flex-col items-center space-y-2">
                    {sidebarItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveView(item.id)}
                        title={item.label}
                        className={`flex items-center justify-center p-3 rounded-lg transition-all duration-300 w-full ${
                          item.active
                            ? 'bg-primary text-white shadow-lg'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-white rounded-xl p-6 overflow-y-auto">
                    <div className="flex flex-col">
                      {renderDashboardContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;