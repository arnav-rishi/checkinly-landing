import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, X } from "lucide-react";
const EnhancedFrontDesk = () => {
  return <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing items-start">{/* Using consistent spacing classes */}
          {/* Left Side - Content */}
          <div className="space-y-12">{/* Increased spacing */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-spacing">
                Front Desk
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                    Streamline your daily front desk tasks.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                    Grid-based rooms, click to create bookings.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                    Real-time room status display: reserved, check-in...
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Simple drag-and-drop to modify reservations.

                </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Static Calendar Screenshot */}
          <div className="relative">
            <Card className="shadow-elegant border border-border/30 bg-white">
              <CardHeader className="p-2 sm:p-4">
                <div className="flex items-center justify-between gap-1 sm:gap-0">
                  <div className="flex items-center space-x-1 sm:space-x-3">
                    <Button variant="outline" size="sm" className="bg-gray-50 text-gray-700 border-gray-200 text-[9px] sm:text-sm px-2 sm:px-3 h-7 sm:h-9">
                      Calendar
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 text-[9px] sm:text-sm px-2 sm:px-3 h-7 sm:h-9 hidden sm:inline-flex">
                      Today
                    </Button>
                    <div className="flex items-center space-x-1 sm:space-x-2 hidden sm:flex">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                      <span className="text-xs sm:text-sm text-gray-500">19 Apr 2024</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-[9px] sm:text-sm px-2 sm:px-3 h-7 sm:h-9">
                    Add
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Mobile-friendly calendar with horizontal scroll */}
                <div className="overflow-x-auto">
                  <div className="p-2 sm:p-4 min-w-[320px] sm:min-w-0">
                    {/* Calendar Header */}
                    <div className="grid grid-cols-8 gap-0 text-[8px] sm:text-xs font-medium text-gray-600 pb-1 sm:pb-3 mb-2 sm:mb-4">
                      <div className="text-left pl-0.5 sm:pl-2 text-[8px] sm:text-xs">Room</div>
                      <div className="text-center">
                        <div className="text-[8px] sm:text-xs">Mon</div>
                        <div className="text-gray-400 text-[7px] sm:text-xs">13</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[8px] sm:text-xs">Tue</div>
                        <div className="text-gray-400 text-[7px] sm:text-xs">14</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[8px] sm:text-xs">Wed</div>
                        <div className="text-gray-400 text-[7px] sm:text-xs">15</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[8px] sm:text-xs">Thu</div>
                        <div className="text-gray-400 text-[7px] sm:text-xs">16</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[8px] sm:text-xs">Fri</div>
                        <div className="text-gray-400 text-[7px] sm:text-xs">17</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[8px] sm:text-xs">Sat</div>
                        <div className="text-gray-400 text-[7px] sm:text-xs">18</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[8px] sm:text-xs">Sun</div>
                        <div className="text-gray-400 text-[7px] sm:text-xs">19</div>
                      </div>
                    </div>
                    
                    {/* Room Row */}
                    <div className="grid grid-cols-8 gap-0 items-center h-8 sm:h-12 mb-2 sm:mb-4">
                      <div className="font-medium text-[9px] sm:text-sm text-gray-900 pl-0.5 sm:pl-2">1107</div>
                      <div className="h-5 sm:h-8"></div> {/* Mon - empty */}
                      <div className="h-5 sm:h-8"></div> {/* Tue - empty */}
                      <div className="relative h-5 sm:h-8">
                        {/* Wed - Red reservation start */}
                        <div className="absolute inset-0 bg-red-500 text-white text-[7px] sm:text-xs px-0.5 sm:px-2 py-0.5 sm:py-1 rounded-sm flex items-center justify-between">
                          <span className="truncate">Xu</span>
                          <X className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0" />
                        </div>
                      </div>
                      <div className="h-5 sm:h-8 bg-purple-500 rounded-sm"></div> {/* Thu - Purple continuation */}
                      <div className="h-5 sm:h-8 bg-purple-500 rounded-sm"></div> {/* Fri - Purple continuation */}
                      <div className="h-5 sm:h-8"></div> {/* Sat - empty */}
                      <div className="h-5 sm:h-8"></div> {/* Sun - empty */}
                    </div>
                  </div>
                </div>

                {/* Mobile-responsive Reservation Details Popup */}
                <div className="mx-2 sm:mx-4 mb-3 sm:mb-4">
                  <Card className="border border-border/30 bg-white">
                    <CardHeader className="pb-2 sm:pb-3 pt-2 sm:pt-3 px-3 sm:px-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">Reservation for Xu Chen</h3>
                        <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-[10px] sm:text-xs">
                        <div>
                          <span className="text-gray-500">Room:</span>
                          <div className="font-medium text-gray-900">1107</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Dates:</span>
                          <div className="font-medium text-gray-900">15 Apr - 19 Apr 2024</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-[10px] sm:text-xs">
                        <div>
                          <span className="text-gray-500">Total Paid:</span>
                          <div className="font-medium text-green-600">$0</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Total Outstanding:</span>
                          <div className="font-medium text-red-600">$0</div>
                        </div>
                      </div>
                      <div className="text-[10px] sm:text-xs">
                        <span className="text-gray-500">Status:</span>
                        <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-700 text-[10px] sm:text-xs">Reserved</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Mobile-responsive Status Legend */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 py-3 sm:py-4 text-[10px] sm:text-xs px-2">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-sm"></div>
                    <span className="text-gray-600">Checked In</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 rounded-sm"></div>
                    <span className="text-gray-600">Checked Out</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-sm"></div>
                    <span className="text-gray-600">Room Vacant</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-sm"></div>
                    <span className="text-gray-600">Occupied</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default EnhancedFrontDesk;