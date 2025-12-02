import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2, User, CreditCard, Fingerprint, ArrowRight, Delete } from "lucide-react";

type DemoState = "welcome" | "input" | "reservation" | "scan" | "success";

const KioskDemo = () => {
  const [state, setState] = useState<DemoState>("welcome");
  const [bookingId, setBookingId] = useState("");

  // Auto-advance from scan to success
  useEffect(() => {
    if (state === "scan") {
      const timer = setTimeout(() => {
        setState("success");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state]);

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
    setState("scan");
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
              <Fingerprint className="mr-2 w-5 h-5" />
              Verify Identity & Get Key
            </Button>
          </motion.div>
        );

      case "scan":
        return (
          <motion.div
            key="scan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-6 p-8"
          >
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
              <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Scanning ID Document...</h3>
              <p className="text-muted-foreground">Please hold your ID up to the scanner</p>
            </div>
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        );

      case "success":
        return (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-6 p-8"
          >
            <motion.div 
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Key Dispensed!</h3>
              <p className="text-muted-foreground">Please collect your key card below</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-center space-x-3">
              <CreditCard className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <p className="font-semibold text-green-800">Room 305</p>
                <p className="text-sm text-green-600">James Miller</p>
              </div>
            </div>
            <Button 
              variant="outline"
              className="mt-4"
              onClick={handleReset}
            >
              Restart Demo
            </Button>
          </motion.div>
        );
    }
  };

  return (
    <section id="kiosk-demo" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Try the <span className="text-primary">Guest Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how guests check in and receive their key card in under 60 seconds
          </p>
        </div>
        
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
  );
};

export default KioskDemo;
