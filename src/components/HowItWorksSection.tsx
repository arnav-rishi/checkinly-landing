
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Smartphone, Key, Clock } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Smartphone,
      step: "1",
      title: "Guest Books Online",
      description: "Guest makes reservation through your booking system or website"
    },
    {
      icon: CheckCircle,
      step: "2", 
      title: "Auto Check-in Link",
      description: "Checkinly automatically sends secure check-in link via email"
    },
    {
      icon: Key,
      step: "3",
      title: "Digital Key Access", 
      description: "Guest completes check-in and receives smart lock access code"
    },
    {
      icon: Clock,
      step: "4",
      title: "Seamless Stay",
      description: "Guest enjoys contactless experience with 24/7 property access"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            How Checkinly <span className="text-primary">Works</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            From booking to check-out, automate your entire guest journey in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover-lift transition-smooth border-border/30 bg-card">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
