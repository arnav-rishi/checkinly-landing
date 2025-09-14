import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hotelAPI, roomAPI, guestAPI, smartLockAPI, dashboardAPI } from "@/services/hotelAPI";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, 
  Bed, 
  Users, 
  Lock, 
  TrendingUp, 
  Battery,
  Wifi,
  Calendar,
  DollarSign,
  RefreshCw
} from "lucide-react";

interface DashboardData {
  hotel: any;
  totalRooms: number;
  occupiedRooms: number;
  availableRooms: number;
  cleaningRooms: number;
  maintenanceRooms: number;
  occupancyRate: number;
  totalGuests: number;
  totalRevenue: number;
  smartLocks: number;
  lockStatuses: {
    locked: number;
    unlocked: number;
    offline: number;
  };
}

const Dashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);
  const [hotels, setHotels] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      loadUserHotels();
    }
  }, [user]);

  useEffect(() => {
    if (selectedHotelId) {
      loadDashboardData();
    }
  }, [selectedHotelId]);

  const loadUserHotels = async () => {
    try {
      const { data, error } = await hotelAPI.getUserHotels();
      if (error) {
        toast({
          title: "Error",
          description: "Failed to load hotels. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data && data.length > 0) {
        setHotels(data);
        setSelectedHotelId(data[0].id); // Select first hotel by default
      }
    } catch (error) {
      console.error('Error loading hotels:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  const loadDashboardData = async () => {
    if (!selectedHotelId) return;
    
    setLoading(true);
    try {
      const { data, error } = await dashboardAPI.getDashboardOverview(selectedHotelId);
      
      if (error) {
        toast({
          title: "Error",
          description: "Failed to load dashboard data. Please try again.",
          variant: "destructive",
        });
        return;
      }

      setDashboardData(data);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createSampleHotel = async () => {
    try {
      const { data: hotel, error: hotelError } = await hotelAPI.createHotel({
        name: "Demo Hotel",
        address: "123 Demo Street, City",
        phone: "+1-555-0123",
        email: "demo@hotel.com"
      });

      if (hotelError || !hotel) {
        toast({
          title: "Error",
          description: "Failed to create demo hotel.",
          variant: "destructive",
        });
        return;
      }

      // Create sample rooms
      const sampleRooms = [
        { hotel_id: hotel.id, room_number: "101", type: "Single" as const, price_per_night: 120, status: "available" as const },
        { hotel_id: hotel.id, room_number: "102", type: "Double" as const, price_per_night: 180, status: "occupied" as const },
        { hotel_id: hotel.id, room_number: "201", type: "Suite" as const, price_per_night: 350, status: "available" as const },
        { hotel_id: hotel.id, room_number: "301", type: "Penthouse" as const, price_per_night: 800, status: "cleaning" as const },
      ];

      for (const room of sampleRooms) {
        await roomAPI.createRoom(room);
      }

      toast({
        title: "Success",
        description: "Demo hotel and rooms created successfully!",
      });

      loadUserHotels();
    } catch (error) {
      console.error('Error creating sample hotel:', error);
      toast({
        title: "Error",
        description: "Failed to create demo data.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please sign in to access your hotel dashboard.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (hotels.length === 0 && !loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome to Checkinly</CardTitle>
            <CardDescription>
              Get started by creating your first hotel property.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={createSampleHotel} className="w-full">
              <Building2 className="mr-2 h-4 w-4" />
              Create Demo Hotel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-6 w-6 animate-spin" />
          <span>Loading dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hotel Dashboard</h1>
            <p className="text-muted-foreground">
              {dashboardData?.hotel?.name || "Select a hotel to view dashboard"}
            </p>
          </div>
          <Button onClick={loadDashboardData} variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>

        {/* Hotel Selector */}
        {hotels.length > 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Select Hotel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                {hotels.map((hotel) => (
                  <Button
                    key={hotel.id}
                    variant={selectedHotelId === hotel.id ? "default" : "outline"}
                    onClick={() => setSelectedHotelId(hotel.id)}
                  >
                    {hotel.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {dashboardData && (
          <>
            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Rooms</CardTitle>
                  <Bed className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.totalRooms}</div>
                  <p className="text-xs text-muted-foreground">
                    {dashboardData.occupiedRooms} occupied
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.occupancyRate}%</div>
                  <p className="text-xs text-muted-foreground">
                    {dashboardData.availableRooms} rooms available
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Guests</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.totalGuests}</div>
                  <p className="text-xs text-muted-foreground">
                    Active check-ins
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${dashboardData.totalRevenue}</div>
                  <p className="text-xs text-muted-foreground">
                    Today's active bookings
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Room Status Overview */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Room Status</CardTitle>
                  <CardDescription>Current status of all rooms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Available</span>
                    </div>
                    <Badge variant="secondary">{dashboardData.availableRooms}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Occupied</span>
                    </div>
                    <Badge variant="destructive">{dashboardData.occupiedRooms}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Cleaning</span>
                    </div>
                    <Badge variant="outline">{dashboardData.cleaningRooms}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Maintenance</span>
                    </div>
                    <Badge variant="outline">{dashboardData.maintenanceRooms}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Smart Lock Status</CardTitle>
                  <CardDescription>Overview of digital lock systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-red-500" />
                      <span>Locked</span>
                    </div>
                    <Badge variant="secondary">{dashboardData.lockStatuses.locked}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-green-500" />
                      <span>Unlocked</span>
                    </div>
                    <Badge variant="outline">{dashboardData.lockStatuses.unlocked}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-4 w-4 text-gray-500" />
                      <span>Offline</span>
                    </div>
                    <Badge variant="destructive">{dashboardData.lockStatuses.offline}</Badge>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      Total Smart Locks: {dashboardData.smartLocks}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;