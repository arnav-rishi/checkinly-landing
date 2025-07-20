
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, X, Plus } from "lucide-react";

const EnhancedFrontDesk = () => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = ['13 Apr', '14 Apr', '15 Apr', '16 Apr', '17 Apr', '18 Apr', '19 Apr'];
  
  const roomData = [
    {
      room: '1107',
      reservations: [
        { day: 2, length: 3, guest: 'Xu Chen', color: 'bg-red-500', type: 'Reserved' }
      ]
    }
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Front Desk
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Streamline your daily front desk tasks.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Grid-based rooms, click to create bookings.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Real-time room status display: reserved, check-in...
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Simple drag-and-drop to modify reservations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Calendar Interface */}
          <div className="relative">
            <Card className="shadow-elegant border-2 border-border/50 bg-card/95 backdrop-blur-sm">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">Calendar</Button>
                    <Button variant="ghost" size="sm">Today</Button>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">19 Apr 2024</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-primary">
                    Add Reservation
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <div className="space-y-4">
                  {/* Calendar Header */}
                  <div className="grid grid-cols-8 gap-2 text-xs font-medium text-muted-foreground border-b pb-2">
                    <div>Room</div>
                    {weekDays.map((day, index) => (
                      <div key={day} className="text-center">
                        <div>{day}</div>
                        <div className="text-xs text-muted-foreground">{dates[index]}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Room Row */}
                  <div className="grid grid-cols-8 gap-2 items-center min-h-[60px]">
                    <div className="font-medium text-sm">1107</div>
                    {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                      <div key={dayIndex} className="relative h-12">
                        {dayIndex === 2 && (
                          <div className="absolute inset-0 flex items-center">
                            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center justify-between w-full mr-2">
                              <span>Xu Chen</span>
                              <X className="w-3 h-3 cursor-pointer hover:bg-red-600 rounded" />
                            </div>
                          </div>
                        )}
                        {dayIndex === 3 && (
                          <div className="bg-purple-500 h-full rounded-r"></div>
                        )}
                        {dayIndex === 4 && (
                          <div className="bg-purple-500 h-full"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reservation Details Popup */}
                <Card className="mt-4 border border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Reservation for Xu Chen</CardTitle>
                      <X className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-muted-foreground">Room:</span>
                        <div className="font-medium">1107</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Dates:</span>
                        <div className="font-medium">15 Apr 2024 - 19 Apr 2024</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-muted-foreground">Total Paid:</span>
                        <div className="font-medium text-green-600">$0</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total Outstanding:</span>
                        <div className="font-medium text-red-600">$0</div>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge variant="secondary" className="ml-2">Reserved</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Status Legend */}
                <div className="flex items-center justify-center space-x-4 mt-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Checked In</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-gray-500 rounded"></div>
                    <span>Checked Out</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>Room Vacant</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>Occupied</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFrontDesk;
