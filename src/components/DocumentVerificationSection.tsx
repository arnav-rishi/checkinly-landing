import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScanLine, Eye, Users, MapPin, Shield } from "lucide-react";

const DocumentVerificationSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Document scanning",
      description: "High-precision technology to authenticate and extract data.",
      icon: ScanLine,
      video: "/lovable-uploads/fcd853a8-6cdd-4910-9acf-a849a3d09f5d.png" // placeholder for video
    },
    {
      id: 1,
      title: "Liveness",
      description: "Advanced biometric verification to ensure real person presence.",
      icon: Eye,
      video: "/lovable-uploads/fcd853a8-6cdd-4910-9acf-a849a3d09f5d.png"
    },
    {
      id: 2,
      title: "Face Recognition",
      description: "Secure facial matching technology for identity verification.",
      icon: Users,
      video: "/lovable-uploads/fcd853a8-6cdd-4910-9acf-a849a3d09f5d.png"
    },
    {
      id: 3,
      title: "Proof of address",
      description: "Comprehensive address verification and validation.",
      icon: MapPin,
      video: "/lovable-uploads/fcd853a8-6cdd-4910-9acf-a849a3d09f5d.png"
    },
    {
      id: 4,
      title: "Data crosscheck",
      description: "Multi-source data validation for complete verification.",
      icon: Shield,
      video: "/lovable-uploads/fcd853a8-6cdd-4910-9acf-a849a3d09f5d.png"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <Badge variant="secondary" className="mb-4">
            Verification Process
          </Badge>
          <h2 className="mobile-heading mb-4">
            How Checkinly Verifies Your Guests
          </h2>
          <p className="mobile-body text-muted-foreground max-w-2xl mx-auto">
            Our advanced 5-step verification process ensures secure, fast, and reliable guest identity confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <Card
                  key={step.id}
                  className={`p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-md border touch-target ${
                    isActive 
                      ? 'border-primary/20 bg-primary/5 shadow-md' 
                      : 'border-border/50 hover:border-primary/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-2 sm:p-3 rounded-xl ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                        <span className={`text-xs sm:text-sm font-semibold px-2 py-1 rounded-full ${
                          isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {index + 1}
                        </span>
                        <h3 className={`text-base sm:text-lg font-semibold ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Right Column - Video/Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="sticky top-8">
              <Card className="p-4 sm:p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-none shadow-xl">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden relative">
                  {/* Placeholder for video - you can replace with actual video element */}
                  <img
                    src={steps[activeStep].video}
                    alt={`${steps[activeStep].title} demonstration`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Step indicator overlay */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <Badge className="bg-primary/90 text-primary-foreground text-xs sm:text-sm">
                      Step {activeStep + 1}: {steps[activeStep].title}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 text-center">
                  <h4 className="mobile-subheading mb-2">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-muted-foreground mobile-body">
                    {steps[activeStep].description}
                  </p>
                </div>
              </Card>

              {/* Learn More Button */}
              <div className="text-center mt-4 sm:mt-6">
                <button className="touch-target inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentVerificationSection;