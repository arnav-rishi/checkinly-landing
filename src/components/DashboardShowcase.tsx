import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Bed, 
  Lock, 
  BarChart3, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  TrendingUp,
  MapPin,
  Battery,
  Wifi,
  Monitor,
  User
} from "lucide-react";

const DashboardShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const dashboardTabs = [
    { 
      id: "analytics", 
      label: "Analytics Dashboard", 
      icon: BarChart3,
      description: "Revenue analytics and performance insights"
    },
    { 
      id: "guests", 
      label: "Guest Management", 
      icon: Users,
      description: "Manage hotel guests and their information"
    },
    { 
      id: "rooms", 
      label: "Room Management", 
      icon: Bed,
      description: "Manage hotel rooms and their availability"
    },
    { 
      id: "kiosks", 
      label: "Kiosk Status", 
      icon: Lock,
      description: "Monitor self-service check-in kiosks"
    }
  ];

  // Removed auto-switching for better performance

  const renderAnalyticsDashboard = () => (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h3>
          <p className="text-gray-600">Revenue analytics and performance insights</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">Total Revenue</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">$124,892</p>
          <p className="text-sm text-green-600">+12.5% vs last month</p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600 font-medium">Active Guests</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">342</p>
          <p className="text-sm text-blue-600">+8.2% vs last month</p>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Bed className="h-5 w-5 text-purple-600" />
            </div>
            <span className="text-sm text-purple-600 font-medium">Occupancy Rate</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">87.3%</p>
          <p className="text-sm text-purple-600">+3.1% vs last month</p>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <span className="text-sm text-orange-600 font-medium">Access Events</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">1,247</p>
          <p className="text-sm text-orange-600">+15.8% vs last month</p>
        </div>
      </div>
    </div>
  );

  const renderGuestsDashboard = () => (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Guest Management</h3>
          <p className="text-gray-600">Manage hotel guests and their information</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">+ Add Guest</Button>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Showing 60 of 60 guests</p>
        
        <div className="grid grid-cols-3 gap-6">
          {[
            { name: "Parker Thomas", email: "parker.thomas939@example.com", location: "Metropolis, Spain", license: "687348130" },
            { name: "Quinn Brown", email: "quinn.brown740@example.com", location: "Metropolis, Canada", license: "202677298" },
            { name: "Jordan Miller", email: "jordan.miller335@example.com", location: "Metropolis, USA", license: "308879597" }
          ].map((guest, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white rounded-full">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{guest.name}</h4>
                  <p className="text-sm text-gray-600">{guest.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{guest.location}</span>
                </div>
                <p>Driver License: {guest.license}</p>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRoomsDashboard = () => (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Room Management</h3>
          <p className="text-gray-600">Manage hotel rooms and their availability</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">+ Add Room</Button>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Showing 20 of 20 rooms</p>
        
        <div className="grid grid-cols-3 gap-6">
          {[
            { room: "Room 101-b987", type: "Single", price: "$81/night", guests: 3, status: "cleaning", amenities: ["WiFi", "TV", "AC"] },
            { room: "Room 102-b987", type: "Suite", price: "$245/night", guests: 4, status: "occupied", amenities: ["WiFi", "TV"] },
            { room: "Room 103-b987", type: "Double", price: "$160/night", guests: 4, status: "occupied", amenities: ["WiFi", "TV"] }
          ].map((room, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{room.room}</h4>
                  <p className="text-sm text-gray-600">{room.type}</p>
                </div>
                <Badge 
                  variant={room.status === "occupied" ? "default" : room.status === "cleaning" ? "secondary" : "outline"}
                  className={room.status === "occupied" ? "bg-blue-100 text-blue-700" : room.status === "cleaning" ? "bg-yellow-100 text-yellow-700" : ""}
                >
                  {room.status}
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p className="font-medium">{room.price}</p>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{room.guests} guests</span>
                </div>
                <div className="flex items-center space-x-3">
                  {room.amenities.includes("WiFi") && <Wifi className="h-4 w-4" />}
                  {room.amenities.includes("TV") && <Monitor className="h-4 w-4" />}
                  {room.amenities.includes("AC") && <span className="text-xs bg-gray-200 px-2 py-1 rounded">AC</span>}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderKiosksDashboard = () => (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Kiosk Status</h3>
          <p className="text-gray-600">Monitor self-service check-in kiosks</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">+ Add New Kiosk</Button>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {[
          { location: "Lobby - Main", kioskId: "KIOSK-001", status: "online", keysRemaining: "487", lastCheckin: "2 min ago", type: "Full Service" },
          { location: "Lobby - East", kioskId: "KIOSK-002", status: "online", keysRemaining: "312", lastCheckin: "8 min ago", type: "Full Service" },
          { location: "Parking Entrance", kioskId: "KIOSK-003", status: "maintenance", keysRemaining: "0", lastCheckin: "1 hr ago", type: "Express" }
        ].map((kiosk, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-gray-900">{kiosk.location}</h4>
                <p className="text-sm text-gray-600">ID: {kiosk.kioskId}</p>
              </div>
              <Badge 
                variant={kiosk.status === "online" ? "default" : "secondary"}
                className={kiosk.status === "online" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
              >
                {kiosk.status}
              </Badge>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Type</span>
                <span className="font-medium">{kiosk.type}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Key Cards</span>
                <div className="flex items-center space-x-2">
                  <span className={`font-medium ${parseInt(kiosk.keysRemaining) > 100 ? 'text-green-600' : 'text-yellow-600'}`}>{kiosk.keysRemaining}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Check-in</span>
                <span className="font-medium">{kiosk.lastCheckin}</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-4"
            >
              View Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDashboard = () => {
    switch (activeTab) {
      case 0: return renderAnalyticsDashboard();
      case 1: return renderGuestsDashboard();
      case 2: return renderRoomsDashboard();
      case 3: return renderKiosksDashboard();
      default: return renderAnalyticsDashboard();
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200/50 backdrop-blur-sm">
            <div className="flex space-x-2">
              {dashboardTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="font-medium hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="max-w-6xl mx-auto">
          <div className="transition-all duration-500 ease-in-out">
            {renderDashboard()}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {dashboardTabs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;