
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
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Device Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrated different types of devices, allowing you to manage them all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 group border-border/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <device.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold">{device.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
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
