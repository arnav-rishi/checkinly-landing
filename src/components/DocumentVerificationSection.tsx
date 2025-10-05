import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScanLine, Eye, Users, MapPin, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
const DocumentVerificationSection = () => {
  const navigate = useNavigate();
  const steps = [{
    id: 0,
    title: "Document scanning",
    description: "High-precision technology to authenticate and extract data.",
    icon: ScanLine
  }, {
    id: 1,
    title: "Liveness",
    description: "Advanced biometric verification to ensure real person presence.",
    icon: Eye
  }, {
    id: 2,
    title: "Face Recognition",
    description: "Secure facial matching technology for identity verification.",
    icon: Users
  }, {
    id: 3,
    title: "Proof of address",
    description: "Comprehensive address verification and validation.",
    icon: MapPin
  }, {
    id: 4,
    title: "Data crosscheck",
    description: "Multi-source data validation for complete verification.",
    icon: Shield
  }];
  return <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <Badge variant="secondary" className="mb-4">
            Verification Process
          </Badge>
          <h2 className="mobile-heading mb-4">
            How Checkinly Verifies Your Guests
          </h2>
          <p className="mobile-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Our advanced 5-step verification process ensures secure, fast, and reliable guest identity confirmation.
          </p>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Wanna Experience Live E-Checkin?
          </h3>
          <Button size="lg" onClick={() => navigate('/auth')} className="animate-fade-in">Click to start the Demo
        </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => {
            const Icon = step.icon;
            return <Card key={step.id} className="p-4 sm:p-6 transition-all duration-300 hover:shadow-md border border-border/50 hover:border-primary/50">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 rounded-xl bg-primary text-primary-foreground">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                        <span className="text-xs sm:text-sm font-semibold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default DocumentVerificationSection;