
import { Card, CardContent } from "@/components/ui/card";
import { Nfc, Fingerprint, ShieldCheck, Bot, Zap, Clock } from "lucide-react";

const QuickFeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Quick Check-in",
      description: "Complete check-in process in under 60 seconds"
    },
    {
      icon: Nfc,
      title: "Digital Key",
      description: "NFC and QR code room access"
    },
    {
      icon: Bot,
      title: "Guest Services",
      description: "Request services directly from your phone"
    },
    {
      icon: Fingerprint,
      title: "Biometric Security",
      description: "Face ID and fingerprint verification for ultimate security"
    },
    {
      icon: ShieldCheck,
      title: "ID Verification",
      description: "Automated document scanning and identity verification"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Self-service check-in available around the clock"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            App Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need for seamless, contactless hotel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover-lift transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFeaturesSection;
