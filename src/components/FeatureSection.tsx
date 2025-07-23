
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Smartphone, Settings } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Front Desk",
      description: "Streamline your daily front desk tasks.",
      details: [
        "Grid-based rooms, click to create bookings",
        "Real-time room status display: reserved, check-in...",
        "Simple drag-and-drop to modify reservations"
      ]
    },
    {
      icon: Users,
      title: "Reservation Management",
      description: "Quickly find and process reservations.",
      details: [
        "Detailed recording of guest needs",
        "Arrival, departure, and unassigned room order reminders",
        "Advanced search and filtering capabilities"
      ]
    },
    {
      icon: Smartphone,
      title: "Guest Engagement",
      description: "Send personalized welcome emails and maintain contact.",
      details: [
        "Reserve: send personalized welcome emails",
        "After Check-Out: send thank-you emails",
        "Real-time room status display"
      ]
    },
    {
      icon: Settings,
      title: "Digital Check-in",
      description: "Send unique access codes or Bluetooth keys to guests.",
      details: [
        "Check in quickly without visiting the front desk",
        "Reduce workload and improve efficiency",
        "Perfect for self-check-in when reception is unmanned"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing animate-[slideUp_0.8s_ease-out] hover:animate-[wiggle_0.5s_ease-in-out]">
            Optimize operational efficiency<br />
            <span className="text-primary animate-[gradient_3s_ease-in-out_infinite]">Enrich the guest stay experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl border-border/30 rounded-large bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/20 transition-all duration-700 hover:-translate-y-3 hover:rotate-1 animate-[slideInFromSide_0.8s_ease-out] cursor-pointer relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[float_3s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[float_4s_ease-in-out_infinite_1s]"></div>

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-large flex items-center justify-center shadow-modern group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-xl">
                    <feature.icon className="w-8 h-8 text-primary-foreground group-hover:animate-[spin_2s_linear_infinite]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 group-hover:animate-[pulse_1s_ease-in-out]">{feature.title}</CardTitle>
                    <CardDescription className="text-large text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  {feature.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start space-x-3 opacity-80 group-hover:opacity-100 transition-all duration-300 hover:translate-x-2"
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0 animate-[pulse_2s_infinite] group-hover:animate-[bounce_0.5s_ease-in-out] group-hover:bg-accent"></div>
                      <span className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-large border-2 border-transparent group-hover:border-primary/30 group-hover:animate-[borderGlow_2s_ease-in-out_infinite] transition-all duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
