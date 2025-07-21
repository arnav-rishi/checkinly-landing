
import { Card, CardContent } from "@/components/ui/card";
import { Nfc, Fingerprint, ShieldCheck, Bot, Zap, Clock } from "lucide-react";

const QuickFeaturesSection = () => {
  const features = [
    {
      icon: Nfc,
      title: "NFC Unlock",
      description: "Tap to unlock rooms instantly with secure NFC technology"
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
      icon: Bot,
      title: "AI Concierge",
      description: "24/7 intelligent assistance for guest inquiries"
    },
    {
      icon: Zap,
      title: "Instant Check-in",
      description: "Complete the entire process in under 60 seconds"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Self-service check-in available around the clock"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Everything you need for <span className="text-primary">seamless check-ins</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Our comprehensive platform combines cutting-edge technology with intuitive design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-lift hover-glow transition-bounce group border-border/30 rounded-large shadow-modern bg-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-large flex items-center justify-center mb-6 hover-scale shadow-modern group-hover:shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
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
