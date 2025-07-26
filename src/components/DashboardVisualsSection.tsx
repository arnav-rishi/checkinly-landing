
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Calendar, DollarSign, Clock, MapPin } from "lucide-react";

const DashboardVisualsSection = () => {
  const stats = [
    { label: 'Total Rooms', value: '48', change: '+2 this month', trend: 'up', icon: MapPin },
    { label: 'Active Bookings', value: '34', change: '+12% this week', trend: 'up', icon: Calendar },
    { label: 'Monthly Revenue', value: '$52,400', change: '+18% vs last month', trend: 'up', icon: DollarSign },
    { label: 'Avg Check-in Time', value: '47s', change: '-23s improvement', trend: 'up', icon: Clock },
  ];

  const recentBookings = [
    { guest: 'Sarah Johnson', room: '101', status: 'checked-in', time: '2 hours ago', amount: '$320' },
    { guest: 'Mike Chen', room: '205', status: 'reserved', time: '5 hours ago', amount: '$450' },
    { guest: 'Emily Davis', room: '312', status: 'checked-out', time: '1 day ago', amount: '$280' },
    { guest: 'Alex Wilson', room: '108', status: 'reserved', time: '2 days ago', amount: '$380' },
  ];

  const roomStatuses = [
    { number: '101', status: 'occupied', guest: 'Sarah Johnson', checkout: 'Tomorrow' },
    { number: '102', status: 'available', guest: null, checkout: null },
    { number: '103', status: 'reserved', guest: 'Mike Chen', checkout: 'Check-in today' },
    { number: '104', status: 'maintenance', guest: null, checkout: 'Cleaning' },
    { number: '105', status: 'available', guest: null, checkout: null },
    { number: '106', status: 'occupied', guest: 'Emily Davis', checkout: '2 days' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied': return 'bg-checked-in text-checked-in-foreground';
      case 'available': return 'bg-available text-available-foreground';
      case 'reserved': return 'bg-reserved text-reserved-foreground';
      case 'maintenance': return 'bg-maintenance text-maintenance-foreground';
      case 'checked-in': return 'bg-checked-in text-checked-in-foreground';
      case 'checked-out': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Real-time <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Monitor your property performance with live data and actionable insights
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift transition-smooth shadow-modern">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-xs text-primary font-medium">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Room Status Grid */}
          <Card className="shadow-modern">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Room Status Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {roomStatuses.map((room, index) => (
                  <Card key={index} className="hover-lift transition-smooth cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="font-semibold text-foreground mb-2">Room {room.number}</div>
                      <Badge className={`${getStatusColor(room.status)} mb-2`}>
                        {room.status}
                      </Badge>
                      {room.guest && (
                        <p className="text-xs text-muted-foreground truncate">{room.guest}</p>
                      )}
                      {room.checkout && (
                        <p className="text-xs text-muted-foreground">{room.checkout}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Bookings */}
          <Card className="shadow-modern">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Recent Bookings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover-lift transition-smooth">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {booking.guest.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{booking.guest}</p>
                        <p className="text-sm text-muted-foreground">Room {booking.room} • {booking.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                      <p className="text-sm font-semibold text-foreground mt-1">{booking.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-primary rounded-large p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">See Your Dashboard Live</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Get real-time insights into your property performance. Track occupancy, revenue, and guest satisfaction all in one place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover-lift transition-smooth">
                Start Free Trial
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-smooth">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardVisualsSection;
