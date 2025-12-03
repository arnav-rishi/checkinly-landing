import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowRight, Delete, Home } from "lucide-react";

type DemoState = "welcome" | "input" | "reservation";

const CheckinDemo = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<DemoState>("welcome");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNumberPress = (num: string) => {
    if (bookingId.length < 6) {
      setBookingId(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setBookingId(prev => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (bookingId.length === 6) {
      setState("reservation");
    }
  };

  const handleConfirm = () => {
    navigate("/document-upload");
  };

  const handleReset = () => {
    setState("welcome");
    setBookingId("");
  };

  const renderContent = () => {
    switch (state) {
      case "welcome":
        return (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-6 p-8"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Welcome to Grand Hotel</h3>
              <p className="text-muted-foreground">Start your self-service check-in</p>
            </div>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setState("input")}
            >
              Start Check-in
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        );

      case "input":
        return (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6 p-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Enter Booking ID</h3>
              <p className="text-sm text-muted-foreground">Enter your 6-digit confirmation code</p>
            </div>
            
            {/* Display */}
            <div className="bg-muted rounded-xl p-4 text-center">
              <div className="flex justify-center space-x-2">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-10 h-12 rounded-lg flex items-center justify-center text-2xl font-bold ${
                      bookingId[i] ? 'bg-primary text-primary-foreground' : 'bg-background border-2 border-border'
                    }`}
                  >
                    {bookingId[i] || ''}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Numeric Keypad */}
            <div className="grid grid-cols-3 gap-2">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'].map((key) => (
                <Button
                  key={key}
                  variant={key === 'del' ? 'destructive' : 'outline'}
                  className={`h-14 text-xl font-semibold ${key === '' ? 'invisible' : ''}`}
                  onClick={() => {
                    if (key === 'del') handleDelete();
                    else if (key !== '') handleNumberPress(key);
                  }}
                  disabled={key === ''}
                >
                  {key === 'del' ? <Delete className="w-5 h-5" /> : key}
                </Button>
              ))}
            </div>
            
            <Button 
              className="w-full py-6 text-lg font-semibold"
              disabled={bookingId.length !== 6}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </motion.div>
        );

      case "reservation":
        return (
          <motion.div
            key="reservation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6 p-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Reservation Found</h3>
              <p className="text-sm text-muted-foreground">Please confirm your details</p>
            </div>
            
            <div className="bg-muted rounded-xl p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-muted-foreground">Guest Name</span>
                <span className="font-semibold text-foreground">James Miller</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-muted-foreground">Room Number</span>
                <span className="font-semibold text-foreground">305</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-muted-foreground">Room Type</span>
                <span className="font-semibold text-foreground">Deluxe King</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Check-out</span>
                <span className="font-semibold text-foreground">Dec 5, 2025</span>
              </div>
            </div>
            
            <Button 
              className="w-full py-6 text-lg font-semibold"
              onClick={handleConfirm}
            >
              Continue to ID Verification
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-3 md:py-4">
        <div className="container-max flex items-center justify-between px-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="gap-1"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
          <Badge variant="secondary" className="text-xs sm:text-sm">
            Demo Hotel Express Check-In
          </Badge>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-muted-foreground">Step 1 of 4</span>
              <span className="text-xs sm:text-sm font-medium text-primary">25%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/4 transition-all duration-300"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Self-Service Check-In
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Enter your booking ID to begin the check-in process
            </p>
          </div>

          {/* Interactive Kiosk Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-card border-2 border-border rounded-3xl shadow-2xl overflow-hidden">
              {/* Kiosk Header */}
              <div className="bg-primary p-4 text-primary-foreground text-center">
                <p className="text-sm font-medium opacity-90">CHECKINLY KIOSK</p>
              </div>
              
              {/* Interactive Content */}
              <div className="min-h-[500px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {renderContent()}
                </AnimatePresence>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckinDemo;
