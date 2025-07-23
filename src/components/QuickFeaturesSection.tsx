
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-[slideUp_0.8s_ease-out] hover:animate-[pulse_1s_ease-in-out]">
            App Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-[slideUp_0.8s_ease-out_0.2s] opacity-0 animate-fill-forwards">
            Everything you need for seamless, contactless hotel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/30 hover:-translate-y-2 animate-[slideUp_0.6s_ease-out] cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                {/* Background gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-xl">
                    <feature.icon className="w-7 h-7 text-primary-foreground group-hover:animate-[bounce_0.6s_ease-in-out]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 animate-[borderPulse_2s_infinite] opacity-0 group-hover:opacity-100"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFeaturesSection;
