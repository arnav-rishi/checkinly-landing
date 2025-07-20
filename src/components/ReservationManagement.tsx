
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, Users, Plus, Eye } from "lucide-react";

const ReservationManagement = () => {
  const reservations = [
    {
      id: "JD20240415BR001",
      contact: "+65 97777-0933",
      guest: "Owaku",
      roomType: "108",
      status: "Reserved",
      nights: "1",
      arrival: "2024-08-28",
      departure: "2024-08-29",
      amount: "$0.00"
    },
    {
      id: "JD20240415BR002", 
      contact: "+65 97777-0934",
      guest: "Sarah Johnson",
      roomType: "205",
      status: "Confirmed",
      nights: "3",
      arrival: "2024-08-30",
      departure: "2024-09-02",
      amount: "$450.00"
    },
    {
      id: "JD20240415BR003",
      contact: "+65 97777-0935", 
      guest: "Mike Chen",
      roomType: "301",
      status: "Reserved",
      nights: "2",
      arrival: "2024-09-01",
      departure: "2024-09-03",
      amount: "$320.00"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variant = status === 'Confirmed' ? 'default' : 'secondary';
    return <Badge variant={variant}>{status}</Badge>;
  };

  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Reservation Management
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Quickly find and process reservations.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Detailed recording of guest needs.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Arrival, departure, and unassigned room order reminders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interface Preview */}
          <div className="relative">
            <Card className="shadow-elegant border-2 border-border/50 bg-card/95 backdrop-blur-sm">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Search reservations...</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                  <Button size="sm" className="bg-gradient-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    New Reservation
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border/50">
                      <TableHead className="text-xs font-medium">Reservation ID</TableHead>
                      <TableHead className="text-xs font-medium">Contact</TableHead>
                      <TableHead className="text-xs font-medium">Guest</TableHead>
                      <TableHead className="text-xs font-medium">Room</TableHead>
                      <TableHead className="text-xs font-medium">Status</TableHead>
                      <TableHead className="text-xs font-medium">Nights</TableHead>
                      <TableHead className="text-xs font-medium">Arrival</TableHead>
                      <TableHead className="text-xs font-medium">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reservations.map((reservation) => (
                      <TableRow key={reservation.id} className="hover:bg-muted/50 border-b border-border/30">
                        <TableCell className="text-xs font-mono">{reservation.id}</TableCell>
                        <TableCell className="text-xs">{reservation.contact}</TableCell>
                        <TableCell className="text-xs font-medium">{reservation.guest}</TableCell>
                        <TableCell className="text-xs">{reservation.roomType}</TableCell>
                        <TableCell>{getStatusBadge(reservation.status)}</TableCell>
                        <TableCell className="text-xs">{reservation.nights}</TableCell>
                        <TableCell className="text-xs">{reservation.arrival}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-3 h-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationManagement;
