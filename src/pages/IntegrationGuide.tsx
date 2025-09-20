import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Settings, Zap, ArrowRight, Download, Code, Link } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const IntegrationGuide = () => {
  const integrations = [
    {
      name: "Oracle Opera",
      category: "PMS",
      difficulty: "Easy",
      timeline: "2-3 days",
      description: "Direct API integration for seamless guest data sync",
      features: ["Real-time reservation sync", "Guest profile management", "Room status updates"]
    },
    {
      name: "Protel",
      category: "PMS",
      difficulty: "Easy",
      timeline: "1-2 days",
      description: "Native integration with automated setup",
      features: ["Instant booking confirmation", "Guest preferences sync", "Check-in/out automation"]
    },
    {
      name: "Salto",
      category: "Smart Locks",
      difficulty: "Medium",
      timeline: "3-5 days",
      description: "Hardware integration for keyless entry",
      features: ["Mobile key delivery", "Access control", "Security monitoring"]
    },
    {
      name: "ASSA ABLOY",
      category: "Smart Locks",
      difficulty: "Medium",
      timeline: "3-5 days",
      description: "Enterprise-grade lock system integration",
      features: ["Biometric access", "Master key management", "Audit trails"]
    },
    {
      name: "Stripe",
      category: "Payment",
      difficulty: "Easy",
      timeline: "1 day",
      description: "Secure payment processing integration",
      features: ["Contactless payments", "Refund management", "Fraud protection"]
    },
    {
      name: "Square",
      category: "Payment",
      difficulty: "Easy",
      timeline: "1 day",
      description: "Point-of-sale and payment processing",
      features: ["Mobile payments", "Receipt management", "Analytics"]
    }
  ];

  const steps = [
    {
      title: "Initial Assessment",
      description: "Our team reviews your current systems and creates a custom integration plan",
      duration: "1-2 days"
    },
    {
      title: "API Configuration",
      description: "We configure secure API connections between Checkinly and your existing systems",
      duration: "2-3 days"
    },
    {
      title: "Testing & Validation",
      description: "Comprehensive testing ensures all integrations work seamlessly together",
      duration: "2-4 days"
    },
    {
      title: "Staff Training",
      description: "Complete training for your team on the new integrated workflow",
      duration: "1 day"
    },
    {
      title: "Go Live",
      description: "Smooth transition to your new integrated check-in system",
      duration: "1 day"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChatWidget />
      
      <main className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-elegant">
                <Settings className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Integration Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your existing systems seamlessly - no disruption to your operations
            </p>
          </div>

          <Tabs defaultValue="process" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="process">Integration Process</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="process">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <Card key={index} className="shadow-elegant border-border/30">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                              <Badge variant="outline">{step.duration}</Badge>
                            </div>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Card className="bg-muted/30 border-border/30">
                    <CardContent className="p-8">
                      <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-4">Total Integration Time</h3>
                      <p className="text-3xl font-bold text-primary mb-2">7-14 Days</p>
                      <p className="text-muted-foreground">From start to full operation</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="max-w-2xl mx-auto">
                <Card className="shadow-elegant border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Download className="w-6 h-6 text-primary" />
                      Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-between">
                        Checkinly PMS Integration Guide
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        API Documentation
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        Integration Checklist
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        Security Guidelines
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        Troubleshooting Guide
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Need Integration Support?</h3>
                    <p className="text-xl mb-6 text-primary-foreground/90">
                      Our technical team is ready to help with your integration
                    </p>
                    <Button 
                      size="lg"
                      variant="secondary"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-bold rounded-large shadow-elegant hover-lift"
                    >
                      Contact Integration Team
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IntegrationGuide;