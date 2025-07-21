
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
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Optimize operational efficiency<br />
            <span className="text-primary">Enrich the guest stay experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift animate-fade-in group border-border/30 rounded-large shadow-modern bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-large flex items-center justify-center hover-scale shadow-modern">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-large text-muted-foreground font-medium">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0 animate-pulse"></div>
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
