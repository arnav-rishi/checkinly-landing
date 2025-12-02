import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScanLine, Eye, UserCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DocumentVerificationSection = () => {
  const navigate = useNavigate();
  
  const steps = [
    {
      id: 0,
      title: "Document Scan",
      description: "Industrial OCR scanner reads passport, ID, or driver's license with 99.9% accuracy.",
      icon: ScanLine
    },
    {
      id: 1,
      title: "Liveness Detection",
      description: "AI-powered camera confirms a real person is present, preventing fraud attempts.",
      icon: Eye
    },
    {
      id: 2,
      title: "Face Match & Key Dispense",
      description: "Biometric verification matches guest to ID, then instantly dispenses their room key card.",
      icon: UserCheck
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <Badge variant="secondary" className="mb-4">
            Identity Verification
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Secure Guest Verification in <span className="text-primary">30 Seconds</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our kiosks verify guest identity automatically—no staff intervention required. 
            Comply with local regulations while delivering a seamless experience.
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-4">
            See the Kiosk in Action
          </h3>
          <Button 
            size="lg" 
            onClick={() => navigate('/checkin-demo')} 
            className="animate-fade-in group"
          >
            Start Demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.id} 
                  className="p-4 sm:p-6 transition-all duration-300 hover:shadow-md border border-border/50 hover:border-primary/50"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 rounded-xl bg-primary text-primary-foreground">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                        <span className="text-xs sm:text-sm font-semibold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </span>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentVerificationSection;
