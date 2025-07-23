
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
    <section id="features" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Optimize operational efficiency<br />
            <span className="text-blue-700">Enrich the guest stay experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-slate-200 rounded-large bg-white hover:bg-slate-50 transition-colors duration-300 cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md"
            >
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-large flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-large text-slate-600 font-medium">
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
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-base text-slate-700 leading-relaxed">{detail}</span>
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
