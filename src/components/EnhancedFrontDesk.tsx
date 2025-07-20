
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, X } from "lucide-react";

const EnhancedFrontDesk = () => {
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

          {/* Right Side - Static Calendar Screenshot */}
          <div className="relative">
            <Card className="shadow-elegant border border-border/20 bg-white">
              <CardHeader className="border-b border-border/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm" className="bg-gray-50 text-gray-700 border-gray-200">
                      Calendar
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      Today
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">19 Apr 2024</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                    Add Reservation
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="p-4">
                  {/* Calendar Header */}
                  <div className="grid grid-cols-8 gap-0 text-xs font-medium text-gray-600 border-b border-gray-100 pb-3 mb-4">
                    <div className="text-left pl-2">Room</div>
                    <div className="text-center">
                      <div>Mon</div>
                      <div className="text-gray-400 text-xs">13 Apr</div>
                    </div>
                    <div className="text-center">
                      <div>Tue</div>
                      <div className="text-gray-400 text-xs">14 Apr</div>
                    </div>
                    <div className="text-center">
                      <div>Wed</div>
                      <div className="text-gray-400 text-xs">15 Apr</div>
                    </div>
                    <div className="text-center">
                      <div>Thu</div>
                      <div className="text-gray-400 text-xs">16 Apr</div>
                    </div>
                    <div className="text-center">
                      <div>Fri</div>
                      <div className="text-gray-400 text-xs">17 Apr</div>
                    </div>
                    <div className="text-center">
                      <div>Sat</div>
                      <div className="text-gray-400 text-xs">18 Apr</div>
                    </div>
                    <div className="text-center">
                      <div>Sun</div>
                      <div className="text-gray-400 text-xs">19 Apr</div>
                    </div>
                  </div>
                  
                  {/* Room Row */}
                  <div className="grid grid-cols-8 gap-0 items-center h-12 mb-4">
                    <div className="font-medium text-sm text-gray-900 pl-2">1107</div>
                    <div className="h-8"></div> {/* Mon - empty */}
                    <div className="h-8"></div> {/* Tue - empty */}
                    <div className="relative h-8">
                      {/* Wed - Red reservation start */}
                      <div className="absolute inset-0 bg-red-500 text-white text-xs px-2 py-1 rounded-sm flex items-center justify-between">
                        <span>Xu Chen</span>
                        <X className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="h-8 bg-purple-500 rounded-sm"></div> {/* Thu - Purple continuation */}
                    <div className="h-8 bg-purple-500 rounded-sm"></div> {/* Fri - Purple continuation */}
                    <div className="h-8"></div> {/* Sat - empty */}
                    <div className="h-8"></div> {/* Sun - empty */}
                  </div>
                </div>

                {/* Reservation Details Popup */}
                <div className="mx-4 mb-4">
                  <Card className="border border-gray-200 bg-white">
                    <CardHeader className="pb-3 pt-3 px-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">Reservation for Xu Chen</h3>
                        <X className="w-4 h-4 text-gray-400" />
                      </div>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-500">Room:</span>
                          <div className="font-medium text-gray-900">1107</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Dates:</span>
                          <div className="font-medium text-gray-900">15 Apr 2024 - 19 Apr 2024</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-500">Total Paid:</span>
                          <div className="font-medium text-green-600">$0</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Total Outstanding:</span>
                          <div className="font-medium text-red-600">$0</div>
                        </div>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-500">Status:</span>
                        <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-700">Reserved</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Status Legend */}
                <div className="flex items-center justify-center space-x-6 py-4 border-t border-gray-100 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                    <span className="text-gray-600">Checked In</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
                    <span className="text-gray-600">Checked Out</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                    <span className="text-gray-600">Room Vacant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                    <span className="text-gray-600">Occupied</span>
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
