import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Key, 
  MapPin, 
  Calendar,
  User,
  Building,
  Wifi,
  Car,
  Coffee,
  Download,
  ExternalLink,
  Smartphone
} from "lucide-react";

const CheckinSuccess = () => {
  const navigate = useNavigate();
  const [keyGenerated, setKeyGenerated] = useState(false);

  const handleGenerateKey = () => {
    setKeyGenerated(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-3 md:py-4">
        <div className="container-max flex justify-between items-center">
          <div>
            <h2 className="text-base sm:text-lg font-semibold">Demo Hotel Express Check-In</h2>
            <p className="text-xs text-muted-foreground">Demo Mode - Secure & Fast</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            Processing
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max max-w-6xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              You're All Set!
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Here are your booking details and room access key.
            </p>
          </div>

          {/* Main Grid - Booking Info & Digital Key */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Booking Information */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Booking Information</h2>
              </div>

              <div className="space-y-6">
                {/* Guest & Confirmation */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Guest Name</p>
                    <p className="font-semibold">John Smith</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Confirmation</p>
                    <p className="font-semibold">HTL-2024-001234</p>
                  </div>
                </div>

                <div className="border-t pt-4" />

                {/* Hotel & Room */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Hotel</p>
                    <p className="font-semibold">Grand Plaza Hotel</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Room</p>
                    <p className="font-semibold">1204 - Deluxe King Suite</p>
                  </div>
                </div>

                <div className="border-t pt-4" />

                {/* Check-in & Check-out */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Check-in</p>
                    </div>
                    <p className="font-semibold">March 15, 2024</p>
                    <p className="text-xs text-muted-foreground">3:00 PM</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Check-out</p>
                    </div>
                    <p className="font-semibold">March 18, 2024</p>
                    <p className="text-xs text-muted-foreground">11:00 AM</p>
                  </div>
                </div>

                <div className="border-t pt-4" />

                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Location</p>
                  </div>
                  <p className="font-semibold">123 Grand Avenue, Downtown</p>
                  <p className="text-xs text-muted-foreground">12th Floor</p>
                </div>
              </div>
            </Card>

            {/* Digital Room Key */}
            <Card className="p-6 bg-muted/30">
              <div className="flex items-center gap-2 mb-6">
                <Key className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Digital Room Key</h2>
              </div>

              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Key className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">Generate Your Room Key</h3>
                <p className="text-sm text-center text-muted-foreground mb-6">
                  Your digital key will work with the NFC reader on your room door.
                </p>

                {!keyGenerated ? (
                  <Button 
                    size="lg" 
                    className="w-full gap-2 bg-yellow-500 hover:bg-yellow-600 text-black"
                    onClick={handleGenerateKey}
                  >
                    <Smartphone className="w-4 h-4" />
                    Generate NFC Key
                  </Button>
                ) : (
                  <div className="w-full text-center">
                    <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                        Key Generated Successfully!
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Hold your phone near the door reader
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Bottom Grid - Amenities & Services */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Room Amenities */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Room Amenities</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Free WiFi</p>
                    <p className="text-sm text-muted-foreground">Password: GrandPlaza2024</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Parking</p>
                    <p className="text-sm text-muted-foreground">Level B2, Space #P-1204</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Coffee Maker</p>
                    <p className="text-sm text-muted-foreground">In-room complimentary</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Services */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2" size="lg">
                  <Download className="w-4 h-4" />
                  Download Booking PDF
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2" size="lg">
                  <ExternalLink className="w-4 h-4" />
                  Hotel Services & Dining
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2" size="lg">
                  <MapPin className="w-4 h-4" />
                  Local Area Guide
                </Button>
              </div>
            </Card>
          </div>

          {/* Using Your Digital Key */}
          <Card className="p-6 bg-yellow-500/5 border-yellow-500/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <Key className="w-4 h-4 text-yellow-700 dark:text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold">Using Your Digital Key</h3>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold mb-1">1. Approach Door</p>
                <p className="text-sm text-muted-foreground">Walk up to your room door</p>
              </div>
              <div>
                <p className="font-semibold mb-1">2. Hold Phone</p>
                <p className="text-sm text-muted-foreground">Place phone near NFC reader</p>
              </div>
              <div>
                <p className="font-semibold mb-1">3. Door Opens</p>
                <p className="text-sm text-muted-foreground">Wait for green light & click</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CheckinSuccess;
