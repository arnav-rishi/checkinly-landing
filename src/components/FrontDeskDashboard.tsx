import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Settings, Plus } from "lucide-react";

interface Room {
  id: string;
  number: string;
  type: string;
  status: 'available' | 'reserved' | 'checked-in' | 'maintenance';
  guest?: string;
  checkIn?: string;
  checkOut?: string;
}

const FrontDeskDashboard = () => {
  const [rooms] = useState<Room[]>([
    { id: '1', number: '101', type: 'Standard', status: 'available' },
    { id: '2', number: '102', type: 'Standard', status: 'reserved', guest: 'John Smith', checkIn: 'Today 3:00 PM', checkOut: 'Tomorrow 11:00 AM' },
    { id: '3', number: '103', type: 'Deluxe', status: 'checked-in', guest: 'Sarah Johnson', checkIn: 'Yesterday 4:00 PM', checkOut: 'Today 11:00 AM' },
    { id: '4', number: '104', type: 'Standard', status: 'maintenance' },
    { id: '5', number: '201', type: 'Suite', status: 'available' },
    { id: '6', number: '202', type: 'Suite', status: 'reserved', guest: 'Mike Davis', checkIn: 'Tomorrow 2:00 PM', checkOut: 'Next Week' },
    { id: '7', number: '203', type: 'Deluxe', status: 'available' },
    { id: '8', number: '204', type: 'Standard', status: 'checked-in', guest: 'Emily Wilson', checkIn: 'Today 1:00 PM', checkOut: 'Tomorrow 12:00 PM' },
  ]);

  const getStatusColor = (status: Room['status']) => {
    switch (status) {
      case 'available': return 'bg-available text-available-foreground';
      case 'reserved': return 'bg-reserved text-reserved-foreground';
      case 'checked-in': return 'bg-checked-in text-checked-in-foreground';
      case 'maintenance': return 'bg-maintenance text-maintenance-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: Room['status']) => {
    switch (status) {
      case 'available': return 'Available';
      case 'reserved': return 'Reserved';
      case 'checked-in': return 'Checked-In';
      case 'maintenance': return 'Maintenance';
      default: return 'Unknown';
    }
  };

  const handleRoomClick = (room: Room) => {
    if (room.status === 'available') {
      // Start booking flow
      console.log('Starting booking for room:', room.number);
    } else {
      // Show room details
      console.log('Showing details for room:', room.number);
    }
  };

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Front Desk Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            View all your rooms at a glance. Click any room to start a booking in seconds.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Rooms</CardTitle>
              <div className="w-4 h-4 bg-available rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rooms.filter(r => r.status === 'available').length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reserved</CardTitle>
              <div className="w-4 h-4 bg-reserved rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rooms.filter(r => r.status === 'reserved').length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Checked In</CardTitle>
              <div className="w-4 h-4 bg-checked-in rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rooms.filter(r => r.status === 'checked-in').length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
              <div className="w-4 h-4 bg-maintenance rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rooms.filter(r => r.status === 'maintenance').length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Room Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-foreground">Room Overview</h3>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                Drag and drop reservations to rearrange with ease!
              </p>
              <Button size="sm" className="bg-gradient-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Booking
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {rooms.map((room) => (
              <Card 
                key={room.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-elegant hover:scale-105 ${
                  room.status === 'available' ? 'hover:border-available' : ''
                }`}
                onClick={() => handleRoomClick(room)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      Room {room.number}
                    </CardTitle>
                    <Badge className={getStatusColor(room.status)}>
                      {getStatusText(room.status)}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {room.type}
                  </CardDescription>
                </CardHeader>
                
                {room.guest && (
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{room.guest}</span>
                      </div>
                      {room.checkIn && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Check-in: {room.checkIn}
                          </span>
                        </div>
                      )}
                      {room.checkOut && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Check-out: {room.checkOut}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
                
                {room.status === 'available' && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      Click to start booking
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Status Legend */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">Check the real-time status:</h4>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-available text-available-foreground">Available</Badge>
              <span className="text-sm text-muted-foreground">Ready for new bookings</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-reserved text-reserved-foreground">Reserved</Badge>
              <span className="text-sm text-muted-foreground">Guest hasn't checked in yet</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-checked-in text-checked-in-foreground">Checked-In</Badge>
              <span className="text-sm text-muted-foreground">Guest is currently staying</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-maintenance text-maintenance-foreground">Maintenance</Badge>
              <span className="text-sm text-muted-foreground">Room needs attention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontDeskDashboard;