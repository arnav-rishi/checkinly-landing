
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, CreditCard, Wifi, Radio, Power, Router } from "lucide-react";

const DeviceIntegration = () => {
  const devices = [
    {
      name: "Samer Lock",
      icon: Smartphone,
      description: "Smart door locks with mobile access"
    },
    {
      name: "Card",
      icon: CreditCard,
      description: "RFID card readers and access cards"
    },
    {
      name: "Lift Controller",
      icon: Radio,
      description: "Elevator access control system"
    },
    {
      name: "Card Encoder",
      icon: Radio,
      description: "Program and encode access cards"
    },
    {
      name: "Power Switch",
      icon: Power,
      description: "Smart power control for rooms"
    },
    {
      name: "Gateway",
      icon: Router,
      description: "Central hub for device management"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Device Integration
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Integrated different types of devices, allowing you to manage them all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-spacing">
          {devices.map((device, index) => (
            <Card key={index} className="text-center hover-lift transition-smooth group border-border/30 rounded-large shadow-modern bg-card">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-large flex items-center justify-center mb-6 hover-scale shadow-modern">
                  <device.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{device.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {device.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceIntegration;
