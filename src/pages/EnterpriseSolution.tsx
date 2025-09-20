import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building, Shield, Users, Zap, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const EnterpriseSolution = () => {
  const features = [
    {
      title: "Multi-Property Management",
      description: "Centralized dashboard to manage check-in operations across all your properties",
      icon: Building
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade encryption, GDPR compliance, and SOC 2 certification",
      icon: Shield
    },
    {
      title: "Custom Branding",
      description: "White-label solution with your hotel brand colors, logo, and messaging",
      icon: Zap
    },
    {
      title: "Dedicated Support",
      description: "24/7 priority support with dedicated account manager and technical team",
      icon: Users
    }
  ];

  const plans = [
    {
      name: "Professional",
      description: "Perfect for hotel chains with 5-20 properties",
      price: "$1.50",
      period: "per room/month",
      features: [
        "Multi-property dashboard",
        "Advanced analytics",
        "API access",
        "Email support",
        "Staff training included"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      description: "Ideal for large hotel groups with 20+ properties",
      price: "Custom",
      period: "pricing available",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "On-site training",
        "SLA guarantees"
      ],
      popular: true
    }
  ];

  const capabilities = [
    "Handle 10,000+ concurrent check-ins",
    "99.9% uptime SLA",
    "Sub-second response times",
    "Global CDN deployment",
    "Auto-scaling infrastructure",
    "Real-time monitoring"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding pt-32">
        <div className="container-max">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-elegant">
                <Building className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Enterprise Solution
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete hotel management platform designed for large hotel chains and enterprise operations
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-elegant border-border/30 hover-lift transition-smooth">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Capabilities */}
          <Card className="mb-16 shadow-elegant border-border/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                Enterprise-Grade Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`shadow-elegant border-border/30 relative ${plan.popular ? 'border-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-6 text-lg font-bold rounded-large shadow-elegant hover-lift ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Implementation Process */}
          <Card className="mb-16 shadow-elegant border-border/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Enterprise Implementation Process</CardTitle>
              <p className="text-muted-foreground">Seamless deployment across your entire hotel portfolio</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Discovery", desc: "Assess your current systems and requirements" },
                  { step: "2", title: "Planning", desc: "Create detailed implementation roadmap" },
                  { step: "3", title: "Deployment", desc: "Phased rollout across properties" },
                  { step: "4", title: "Optimization", desc: "Ongoing support and performance tuning" }
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-3">
                      {phase.step}
                    </div>
                    <h4 className="font-semibold mb-2">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Hotel Chain?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Join leading hotel chains already using Checkinly to streamline operations and enhance guest experience
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-bold rounded-large shadow-elegant hover-lift"
                >
                  Schedule Enterprise Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-bold rounded-large hover-lift"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Sales Team
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-6">
                Trusted by 200+ hotel chains worldwide
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnterpriseSolution;