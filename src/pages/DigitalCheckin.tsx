import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Smartphone, Shield, Clock, CreditCard, Globe } from "lucide-react";

const DigitalCheckin = () => {
  const features = [
    { icon: Smartphone, title: "Mobile-first check-in interface", description: "Optimized for all devices" },
    { icon: Shield, title: "Document verification and ID scanning", description: "Secure and automated" },
    { icon: CheckCircle, title: "Digital key delivery integration", description: "Seamless room access" },
    { icon: Clock, title: "Real-time room assignment", description: "Instant confirmation" },
    { icon: CreditCard, title: "Contactless payment processing", description: "Safe and secure transactions" },
    { icon: Globe, title: "Multi-language support", description: "Global accessibility" }
  ];

  const benefits = [
    { stat: "80%", label: "Reduce check-in time", description: "From 15 minutes to 3 minutes average" },
    { stat: "65%", label: "Decrease front desk workload", description: "Staff can focus on guest service" },
    { stat: "4.8★", label: "Improve guest satisfaction", description: "Based on 10,000+ reviews" },
    { stat: "45%", label: "Increase operational efficiency", description: "Streamlined processes" },
    { stat: "24/7", label: "Enable round-the-clock check-in", description: "No time restrictions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 animate-fade-in">
              <Smartphone className="w-4 h-4 mr-2" />
              Next-Generation Check-in
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              Digital Check-in
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Transform your guest experience with seamless, contactless check-in that works from any device.
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
                    <h2 className="text-3xl font-bold text-foreground mb-6">Streamlined Guest Experience</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Our digital check-in solution eliminates long queues and reduces front desk workload while providing 
                      guests with a modern, efficient arrival experience. Guests can complete their check-in process from 
                      their smartphone before they even arrive at your property.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl"></div>
                    <div className="relative p-8 text-center">
                      <Smartphone className="w-24 h-24 text-primary mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Mobile-First Experience</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover-scale border-2 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Proven Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{benefit.stat}</div>
                    <div className="text-lg font-semibold text-foreground mb-2">{benefit.label}</div>
                    <div className="text-sm text-muted-foreground">{benefit.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DigitalCheckin;