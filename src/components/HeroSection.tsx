import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Bed, Lock, DollarSign, TrendingUp, Activity, CheckCircle, Calendar } from "lucide-react";

const HeroSection = () => {
  const [activeView, setActiveView] = useState("analytics");

  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
  };

  const sidebarItems = [
    { id: "analytics", icon: BarChart3, label: "Analytics", active: activeView === "analytics" },
    { id: "guests", icon: Users, label: "Guests", active: activeView === "guests" },
    { id: "rooms", icon: Bed, label: "Rooms", active: activeView === "rooms" },
    { id: "locks", icon: Lock, label: "Smart Locks", active: activeView === "locks" }
  ];

  const renderDashboardContent = () => {
    switch (activeView) {
      case "analytics":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Analytics Dashboard</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$12,450</div>
                    <div className="text-sm text-gray-600">Today's Revenue</div>
                    <div className="text-sm text-green-600">+8.2%</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">342</div>
                    <div className="text-sm text-gray-600">Active Guests</div>
                    <div className="text-sm text-green-600">+12.5%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Sarah Johnson checked into room 305A</span>
                  <span className="text-gray-500 ml-auto">2 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "guests":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Guest Management</h2>
            </div>
            <div className="space-y-3">
              {[
                { name: "John Smith", room: "Room 301", status: "Checked In", time: "10:30 AM" },
                { name: "Emily Davis", room: "Room 205", status: "Pending", time: "11:45 AM" },
                { name: "Michael Brown", room: "Room 102", status: "Verified", time: "2:15 PM" }
              ].map((guest, i) => (
                <div key={i} className="bg-white/80 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{guest.name}</div>
                        <div className="text-sm text-gray-600">{guest.room}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        guest.status === 'Checked In' ? 'bg-green-100 text-green-700' : 
                        guest.status === 'Verified' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {guest.status}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{guest.time}</div>
                    </div>
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
              <h2 className="text-xl font-bold text-gray-900">Room Management</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Bed className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">87.3%</div>
                    <div className="text-sm text-gray-600">Occupancy</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1,247</div>
                    <div className="text-sm text-gray-600">Check-ins</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Room Status</h3>
              <div className="space-y-2">
                {[
                  { room: "Room 301", status: "Occupied", guest: "John Smith" },
                  { room: "Room 205", status: "Cleaning", guest: "" },
                  { room: "Room 102", status: "Available", guest: "" }
                ].map((room, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">{room.room}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        room.status === 'Occupied' ? 'bg-red-100 text-red-700' :
                        room.status === 'Cleaning' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {room.status}
                      </span>
                      {room.guest && <span className="text-gray-600">{room.guest}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "locks":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Smart Lock Control</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98.7%</div>
                    <div className="text-sm text-gray-600">Security Score</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">156</div>
                    <div className="text-sm text-gray-600">Access Events</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Access</h3>
              <div className="space-y-2">
                {[
                  { room: "Room 301", action: "Unlocked", time: "2:15 PM", user: "John Smith" },
                  { room: "Room 205", action: "Locked", time: "1:45 PM", user: "System" },
                  { room: "Room 102", action: "Unlocked", time: "12:30 PM", user: "Emily Davis" }
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <Lock className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{event.room}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        event.action === 'Unlocked' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {event.action}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-600">{event.user}</div>
                      <div className="text-gray-500">{event.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Coming Soon - Revolutionary Check-in Platform
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-primary block">Automate</span>
                <span className="text-gray-900 block">your guest check-ins</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Streamline your hospitality operations with our all-in-one platform. From online check-in to guest verification, we make every interaction seamless, secure, and profitable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">27</div>
                <div className="text-sm text-gray-600">Save Operational Costs</div>
                <div className="text-xs text-blue-600 mt-1">Real-time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">247</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Free</div>
                <div className="text-sm text-gray-600">14-day Trial</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="px-8 py-6 h-14 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl"
                onClick={() => handleCTAClick('start_trial')}
              >
                ▶ Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-6 h-14 text-lg font-semibold rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => handleCTAClick('book_demo')}
              >
                📅 Book a Demo
              </Button>
            </div>

            {/* Fine print */}
            <p className="text-sm text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Right Dashboard */}
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">Checkinly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="col-span-1 space-y-2">
                  <div className="text-gray-400 text-xs font-medium mb-3">Hotel Management</div>
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveView(item.id)}
                      className={`w-full flex flex-col items-center gap-2 p-3 rounded-xl transition-colors ${
                        item.active ? 'bg-primary text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-3 bg-white rounded-2xl p-4 min-h-[400px]">
                  {renderDashboardContent()}
                </div>
              </div>
            </div>

            {/* Floating "Secure" badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-900">🛡️ Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
