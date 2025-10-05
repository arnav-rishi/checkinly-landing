import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScanLine, Eye, Users, MapPin, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import hotelLobby from "@/assets/hotel-lobby.jpg";

const CheckinDemo = () => {
  const verificationSteps = [
    {
      title: "Document scanning",
      description: "High-precision technology to authenticate and extract data",
      icon: ScanLine
    },
    {
      title: "Liveness",
      description: "Advanced biometric verification to ensure real person presence",
      icon: Eye
    },
    {
      title: "Face Recognition",
      description: "Secure facial matching technology for identity verification",
      icon: Users
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Document Scan",
      description: "Upload and scan your ID"
    },
    {
      number: 2,
      title: "Liveness Check",
      description: "Verify you're a real person"
    },
    {
      number: 3,
      title: "Face Match",
      description: "Match face with document"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-3 md:py-4">
        <div className="container-max">
          <Badge variant="secondary" className="text-xs sm:text-sm">
            🏨 Hotel Express Check-In
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Skip the Front Desk,
              <br />
              <span className="text-primary">Check-In Online</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Experience the fastest hotel check-in process. Upload your selfie and ID, get verified in seconds, and receive your digital room key instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button size="lg" className="gap-2">
                Start Check-In
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Secure & Fast • 2 min process
              </div>
            </div>
          </div>

          {/* Hotel Image */}
          <div className="mt-12 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-lg">
            <img 
              src={hotelLobby} 
              alt="Hotel Lobby" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-6 md:py-8">
        <div className="container-max px-4">
          <Card className="p-4 sm:p-6 max-w-2xl mx-auto text-center border-primary/20 bg-primary/5">
            <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">✨ Welcome to Grand Plaza Hotel</div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your room is ready. Complete your express check-in to get started.
            </p>
          </Card>
        </div>
      </section>

      {/* Verification Steps */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {verificationSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="p-4 sm:p-6 hover:shadow-md transition-shadow text-center"
                >
                  <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">How It Works</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Simple 3-step verification process</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {processSteps.map((step) => (
              <Card key={step.number} className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
                  {step.number}
                </div>
                <h4 className="text-sm sm:text-base font-semibold mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Footer */}
      <section className="py-6 md:py-8 border-t border-border/50">
        <div className="container-max px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Bank-level encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>GDPR compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>No data stored permanently</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckinDemo;
