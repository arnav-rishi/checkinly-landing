
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
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing items-start">{/* Using consistent spacing classes */}
          {/* Left Side - Content */}
          <div className="space-y-12">{/* Increased spacing */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-spacing">{/* Larger text, consistent spacing */}
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
            <Card className="shadow-elegant border border-border/30 bg-card/95 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Search reservations...</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-fit">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                  <Button size="sm" className="bg-gradient-primary w-fit">
                    <Plus className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">New Reservation</span>
                    <span className="sm:hidden">New</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Mobile Card View */}
                <div className="block sm:hidden">
                  <div className="divide-y divide-border">
                    {reservations.map((reservation) => (
                      <div key={reservation.id} className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">{reservation.guest}</div>
                          {getStatusBadge(reservation.status)}
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                          <div>
                            <div className="font-medium text-foreground">Room {reservation.roomType}</div>
                            <div>{reservation.nights} nights</div>
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{reservation.contact}</div>
                            <div>{reservation.arrival}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-mono text-muted-foreground">{reservation.id}</div>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden sm:block overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs font-medium min-w-[120px]">Reservation ID</TableHead>
                        <TableHead className="text-xs font-medium">Contact</TableHead>
                        <TableHead className="text-xs font-medium">Guest</TableHead>
                        <TableHead className="text-xs font-medium">Room</TableHead>
                        <TableHead className="text-xs font-medium">Status</TableHead>
                        <TableHead className="text-xs font-medium hidden lg:table-cell">Nights</TableHead>
                        <TableHead className="text-xs font-medium hidden lg:table-cell">Arrival</TableHead>
                        <TableHead className="text-xs font-medium">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reservations.map((reservation) => (
                        <TableRow key={reservation.id} className="hover:bg-muted/50">
                          <TableCell className="text-xs font-mono">{reservation.id}</TableCell>
                          <TableCell className="text-xs">{reservation.contact}</TableCell>
                          <TableCell className="text-xs font-medium">{reservation.guest}</TableCell>
                          <TableCell className="text-xs">{reservation.roomType}</TableCell>
                          <TableCell>{getStatusBadge(reservation.status)}</TableCell>
                          <TableCell className="text-xs hidden lg:table-cell">{reservation.nights}</TableCell>
                          <TableCell className="text-xs hidden lg:table-cell">{reservation.arrival}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-3 h-3" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationManagement;
