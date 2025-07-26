
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Shield, Smartphone, Key, CheckCircle } from "lucide-react";

const SmartLockIntegration = () => {
  const supportedBrands = ['August', 'Yale', 'Schlage', 'Kwikset', 'Baldwin', 'Ultraloq'];

  const features = [
    { icon: Wifi, title: 'Remote Access', description: 'Control locks from anywhere' },
    { icon: Shield, title: 'Military-Grade Security', description: 'AES-256 encryption' },
    { icon: Smartphone, title: 'Mobile Integration', description: 'iOS & Android apps' },
    { icon: Key, title: 'Temporary Codes', description: 'Auto-expiring access codes' }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Smart Lock <span className="text-primary">Integration</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Connect with 50+ smart lock brands. Generate secure, temporary access codes automatically.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 justify-center">
          {/* Supported Brands */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Supported Brands</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {supportedBrands.map((brand, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center mb-3">
                      <span className="text-lg font-bold text-muted-foreground">{brand.slice(0, 2)}</span>
                    </div>
                    <p className="font-medium text-foreground">{brand}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Don't see your brand?
                </h4>
                <p className="text-muted-foreground mb-4">
                  We add new integrations every month. Contact us for custom integration.
                </p>
                <Button variant="outline" size="sm">
                  Request Integration
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLockIntegration;
