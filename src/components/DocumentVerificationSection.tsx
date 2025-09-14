import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScanLine, Eye, Users, MapPin, Shield } from "lucide-react";
import { useScrollParallax, getParallaxStyle } from "@/hooks/useScrollParallax";

const DocumentVerificationSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const scrollY = useScrollParallax();

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
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-10 right-10 w-40 h-40 bg-primary/3 rounded-full blur-xl"
          style={getParallaxStyle(scrollY, 0.2)}
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"
          style={getParallaxStyle(scrollY, -0.3)}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
          style={getParallaxStyle(scrollY, 0.1)}
        >
          <Badge variant="secondary" className="mb-4">
            Verification Process
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            How Checkinly Verifies Your Guests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced 5-step verification process ensures secure, fast, and reliable guest identity confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Steps */}
          <div 
            className="space-y-4"
            style={getParallaxStyle(scrollY, 0.05)}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <Card
                  key={step.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-md border-l-4 ${
                    isActive 
                      ? 'border-l-primary bg-primary/5 shadow-md' 
                      : 'border-l-muted hover:border-l-primary/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                          isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {index + 1}
                        </span>
                        <h3 className={`text-lg font-semibold ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Right Column - Video/Visual */}
          <div 
            className="relative"
            style={getParallaxStyle(scrollY, -0.03)}
          >
            <div className="sticky top-8">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-none shadow-xl">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden relative">
                  {/* Placeholder for video - you can replace with actual video element */}
                  <img
                    src={steps[activeStep].video}
                    alt={`${steps[activeStep].title} demonstration`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Step indicator overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      Step {activeStep + 1}: {steps[activeStep].title}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-muted-foreground">
                    {steps[activeStep].description}
                  </p>
                </div>
              </Card>

              {/* Learn More Button */}
              <div className="text-center mt-6">
                <button className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
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