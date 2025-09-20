import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Cpu, CreditCard, BarChart3, Thermometer } from "lucide-react";

const DeviceIntegration = () => {
  const integrations = [
    { icon: Cpu, title: "Property Management Systems (PMS)", description: "Seamless data synchronization", count: "50+" },
    { icon: Shield, title: "Smart lock and access control systems", description: "Secure keyless entry", count: "30+" },
    { icon: Thermometer, title: "IoT room automation and sensors", description: "Smart environment control", count: "40+" },
    { icon: CreditCard, title: "Payment processing platforms", description: "Multiple payment gateways", count: "25+" },
    { icon: BarChart3, title: "Channel management systems", description: "Multi-platform booking", count: "35+" },
    { icon: Zap, title: "Energy management and climate controls", description: "Efficient resource usage", count: "20+" }
  ];

  const benefits = [
    { title: "Reduce system silos", description: "Unified data ecosystem", percentage: "90%" },
    { title: "Automate workflows", description: "Cross-platform automation", percentage: "75%" },
    { title: "Improve data accuracy", description: "Single source of truth", percentage: "95%" },
    { title: "Lower complexity", description: "Simplified operations", percentage: "60%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              Universal Connectivity
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              Device Integration
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Seamlessly connect with existing hotel systems and smart devices for a unified technology ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            {/* Overview Card */}
            <Card className="mb-16 overflow-hidden">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Universal Connectivity</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Our platform integrates with over 200+ hotel systems and IoT devices, ensuring your technology 
                      investments work together harmoniously while future-proofing your operations.
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">200+</div>
                        <div className="text-sm text-muted-foreground">Integrations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">99.9%</div>
                        <div className="text-sm text-muted-foreground">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl"></div>
                    <div className="relative p-8 grid grid-cols-3 gap-4">
                      {[Cpu, Shield, Zap, CreditCard, BarChart3, Thermometer].map((Icon, index) => (
                        <div key={index} className="w-12 h-12 bg-background/80 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integrations Grid */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Supported Integrations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {integrations.map((integration, index) => (
                  <Card key={index} className="hover-scale border-2 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                        <integration.icon className="w-8 h-8 text-primary" />
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          {integration.count}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{integration.title}</h3>
                      <p className="text-muted-foreground">{integration.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Integration Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-background/80">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                        <span className="text-2xl font-bold text-primary">{benefit.percentage}</span>
                      </div>
                      <p className="text-muted-foreground">{benefit.description}</p>
                      <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000 ease-out" 
                          style={{ width: benefit.percentage }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Card className="inline-block bg-background/80">
                  <CardContent className="p-8">
                    <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise-Grade Security</h3>
                    <p className="text-muted-foreground">SOC 2 compliant with end-to-end encryption</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DeviceIntegration;