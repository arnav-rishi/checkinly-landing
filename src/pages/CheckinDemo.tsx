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
    },
    {
      title: "Proof of address",
      description: "Comprehensive address verification and validation",
      icon: MapPin
    },
    {
      title: "Data crosscheck",
      description: "Multi-source data validation for complete verification",
      icon: Shield
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
    },
    {
      number: 4,
      title: "Address Verify",
      description: "Confirm your address"
    },
    {
      number: 5,
      title: "Data Check",
      description: "Validate all information"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-4">
        <div className="container-max">
          <Badge variant="secondary" className="text-sm">
            🏨 Hotel Express Check-In
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Skip the Front Desk,
              <br />
              <span className="text-primary">Check-In Online</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the fastest hotel check-in process. Upload your selfie and ID, get verified in seconds, and receive your digital room key instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button size="lg" className="gap-2">
                Start Check-In
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
      <section className="py-8">
        <div className="container-max">
          <Card className="p-6 max-w-2xl mx-auto text-center border-primary/20 bg-primary/5">
            <div className="text-2xl mb-2">✨ Welcome to Grand Plaza Hotel</div>
            <p className="text-muted-foreground">
              Your room is ready. Complete your express check-in to get started.
            </p>
          </Card>
        </div>
      </section>

      {/* Verification Steps */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {verificationSteps.map((step, index) => {
              return (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple 5-step verification process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <Card key={step.number} className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Footer */}
      <section className="py-8 border-t border-border/50">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Bank-level encryption
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              GDPR compliant
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              No data stored permanently
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckinDemo;
