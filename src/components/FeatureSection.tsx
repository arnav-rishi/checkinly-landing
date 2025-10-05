
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-spacing">
            Optimize operational efficiency<br />
            <span className="text-primary">Enrich the guest stay experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border rounded-large bg-card hover:bg-muted/50 transition-colors duration-300 cursor-pointer relative overflow-hidden shadow-modern hover:shadow-elegant touch-target"
            >
              <CardHeader className="pb-4 sm:pb-6 relative z-10">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-large flex items-center justify-center shadow-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 sm:space-y-4">
                  {feature.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{detail}</span>
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
