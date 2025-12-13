import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowRight, Delete, Home, Fingerprint, Monitor, CreditCard, Sparkles } from "lucide-react";

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
            className="w-full"
          >
            {/* Premium Header with Gradient */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-10 px-6 text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 bg-amber-400 rounded-full blur-3xl" />
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-emerald-400 rounded-full blur-3xl" />
              </div>
              
              {/* Elegant line decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              
              <div className="relative z-10">
                <p className="text-amber-400/80 text-xs font-medium tracking-[0.3em] uppercase mb-3">Welcome to</p>
                <h3 className="text-2xl md:text-3xl font-serif font-light text-white tracking-wide mb-2">Grand Hotel</h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
                  <Sparkles className="w-3 h-3 text-amber-400/60" />
                  <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
                </div>
                <p className="text-white/60 text-sm mt-3 font-light tracking-wide">Self-Service Check-In</p>
              </div>
            </div>
            
            {/* Main Content with glass effect */}
            <div className="p-6 md:p-8 space-y-6 bg-gradient-to-b from-slate-50 to-white">
              {/* Ready Status Card with premium styling */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-2xl p-8 text-center overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200">
                    <User className="w-8 h-8 text-white -rotate-3" />
                  </div>
                  <p className="text-emerald-700 font-semibold text-xl mb-1">Ready to Check In</p>
                  <p className="text-emerald-600/70 text-sm font-light">Tap below to begin your journey</p>
                </div>
              </div>
              
              {/* Premium CTA Button */}
              <Button 
                size="lg" 
                className="w-full py-7 text-lg font-medium rounded-2xl bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-700 text-white shadow-xl shadow-slate-300 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
                onClick={() => setState("input")}
              >
                <span className="mr-2">Start Check-in</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              {/* Premium Feature Badges */}
              <div className="flex justify-center gap-4 pt-4">
                <div className="flex flex-col items-center group cursor-default">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-2 transition-all group-hover:shadow-md group-hover:border-slate-300">
                    <Fingerprint className="w-5 h-5 text-slate-600" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">ID Scan</span>
                </div>
                <div className="flex flex-col items-center group cursor-default">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-2 transition-all group-hover:shadow-md group-hover:border-slate-300">
                    <Monitor className="w-5 h-5 text-slate-600" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">21.5" Touch</span>
                </div>
                <div className="flex flex-col items-center group cursor-default">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-2 transition-all group-hover:shadow-md group-hover:border-slate-300">
                    <CreditCard className="w-5 h-5 text-slate-600" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">RFID Encoder</span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "input":
        return (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-1">Enter Booking ID</h3>
              <p className="text-white/60 text-sm">Your 6-digit confirmation code</p>
            </div>
            
            <div className="p-6 md:p-8 space-y-6 bg-gradient-to-b from-slate-50 to-white">
              {/* Premium Display */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex justify-center space-x-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`w-11 h-14 rounded-xl flex items-center justify-center text-2xl font-bold transition-all duration-200 ${
                        bookingId[i] 
                          ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-lg' 
                          : 'bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400'
                      }`}
                    >
                      {bookingId[i] || ''}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Premium Numeric Keypad */}
              <div className="grid grid-cols-3 gap-3">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'].map((key) => (
                  <Button
                    key={key}
                    variant="outline"
                    className={`h-14 text-xl font-semibold rounded-xl transition-all duration-200 ${
                      key === '' ? 'invisible' : ''
                    } ${
                      key === 'del' 
                        ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100 hover:border-rose-300' 
                        : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md'
                    }`}
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
                className="w-full py-7 text-lg font-medium rounded-2xl bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-700 text-white shadow-xl shadow-slate-300 disabled:opacity-40 disabled:shadow-none transition-all duration-300"
                disabled={bookingId.length !== 6}
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </div>
          </motion.div>
        );

      case "reservation":
        return (
          <motion.div
            key="reservation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 py-8 px-6 text-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Reservation Found</h3>
              <p className="text-white/80 text-sm">Please confirm your details</p>
            </div>
            
            <div className="p-6 md:p-8 space-y-6 bg-gradient-to-b from-slate-50 to-white">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-0">
                {[
                  { label: 'Guest Name', value: 'James Miller' },
                  { label: 'Room Number', value: '305' },
                  { label: 'Room Type', value: 'Deluxe King Suite' },
                  { label: 'Check-out', value: 'Dec 5, 2025' },
                ].map((item, i, arr) => (
                  <div 
                    key={item.label}
                    className={`flex justify-between items-center py-4 ${i !== arr.length - 1 ? 'border-b border-slate-100' : ''}`}
                  >
                    <span className="text-slate-500 text-sm">{item.label}</span>
                    <span className="font-semibold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full py-7 text-lg font-medium rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:via-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
                onClick={handleConfirm}
              >
                Continue to ID Verification
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-border/50 py-3 md:py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
          <Badge variant="secondary" className="text-xs sm:text-sm bg-slate-100 text-slate-700 border-slate-200">
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
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary/80 w-1/4 transition-all duration-300"></div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Self-Service Check-In
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Enter your booking ID to begin the check-in process
            </p>
          </div>

          {/* Interactive Kiosk Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white border-0 rounded-3xl shadow-2xl shadow-slate-300/50 overflow-hidden">
              {/* Premium Kiosk Header */}
              <div className="relative bg-gradient-to-r from-primary via-primary to-primary/90 p-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_linear_infinite]" />
                <p className="relative text-sm font-semibold text-white tracking-[0.2em] uppercase">Checkinly Kiosk</p>
              </div>
              
              {/* Interactive Content */}
              <div className="min-h-[520px]">
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
