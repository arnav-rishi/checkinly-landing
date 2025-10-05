import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Key, MapPin, Clock, Download } from "lucide-react";

const CheckinSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-3 md:py-4">
        <div className="container-max flex justify-center">
          <Badge variant="secondary" className="text-xs sm:text-sm">
            Hotel Express Check-In
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Check-In Complete! 🎉
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your identity has been verified successfully. Welcome to Grand Plaza Hotel!
            </p>
          </div>

          {/* Room Details Card */}
          <Card className="p-6 sm:p-8 mb-6 bg-primary/5 border-primary/20">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-center">
              Your Reservation Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">Room Number</p>
                  <p className="text-base sm:text-lg font-semibold">Suite 1205</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">Check-in Date</p>
                  <p className="text-base sm:text-lg font-semibold">Today, 2:30 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">Check-out Date</p>
                  <p className="text-base sm:text-lg font-semibold">Oct 8, 2025, 11:00 AM</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Digital Key Card */}
          <Card className="p-6 sm:p-8 mb-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Your Digital Room Key is Ready
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Download the hotel app or check your email for your digital key
              </p>
            </div>

            <Button size="lg" className="w-full gap-2">
              <Download className="w-4 h-4" />
              Download Digital Key
            </Button>
          </Card>

          {/* Next Steps */}
          <Card className="p-4 sm:p-6 mb-6">
            <h3 className="text-sm sm:text-base font-semibold mb-3">What's Next?</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Head directly to your room using your digital key</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Explore hotel amenities through the mobile app</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Contact front desk via the app for any assistance</span>
              </li>
            </ul>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/checkin-demo")}
              className="flex-1"
            >
              Back to Demo
            </Button>
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="flex-1"
            >
              Go to Homepage
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckinSuccess;
