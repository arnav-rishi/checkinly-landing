import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Smartphone, Settings } from "lucide-react";
import { useScrollParallax, getParallaxStyle } from "@/hooks/useScrollParallax";

const FeatureSection = () => {
  const scrollY = useScrollParallax();
  
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
    <section id="features" className="section-padding bg-muted/30 overflow-hidden relative">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          style={getParallaxStyle(scrollY, 0.3)}
        ></div>
        <div 
          className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"
          style={getParallaxStyle(scrollY, -0.2)}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"
          style={getParallaxStyle(scrollY, 0.4)}
        ></div>
      </div>
      
      <div className="container-max relative z-10">
        <div 
          className="text-center heading-spacing"
          style={getParallaxStyle(scrollY, 0.1)}
        >
          <h2 className="text-foreground text-spacing">
            Optimize operational efficiency<br />
            <span className="text-primary">Enrich the guest stay experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border rounded-large bg-card hover:bg-muted/50 transition-all duration-500 cursor-pointer relative overflow-hidden shadow-modern hover:shadow-elegant hover-scale"
              style={getParallaxStyle(scrollY, 0.05 + (index * 0.02))}
            >
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-large flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-large text-muted-foreground font-medium">
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
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-base text-muted-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;