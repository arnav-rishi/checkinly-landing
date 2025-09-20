import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Users, BarChart3, MessageSquare, Clock, DollarSign } from "lucide-react";

const FrontDeskManagement = () => {
  const features = [
    { icon: Monitor, title: "Real-time room status and housekeeping coordination", description: "Live updates and seamless coordination" },
    { icon: Users, title: "Guest profile management and preferences", description: "Comprehensive guest insights" },
    { icon: Clock, title: "Automated task assignment and tracking", description: "Intelligent workflow management" },
    { icon: DollarSign, title: "Revenue optimization tools", description: "Dynamic pricing and upselling" },
    { icon: MessageSquare, title: "Integrated communication systems", description: "Unified guest communication" },
    { icon: BarChart3, title: "Performance analytics and reporting", description: "Data-driven decision making" }
  ];

  const benefits = [
    { stat: "60%", label: "Reduce manual tasks", description: "Automated workflows save time", icon: Clock },
    { stat: "3x", label: "Improve staff productivity", description: "Streamlined operations", icon: Users },
    { stat: "95%", label: "Enhance service quality", description: "Consistent guest experiences", icon: BarChart3 },
    { stat: "25%", label: "Increase RevPAR", description: "Revenue optimization", icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 animate-fade-in">
              <Monitor className="w-4 h-4 mr-2" />
              Intelligent Operations
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              Front Desk Management
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Empower your front desk team with intelligent tools that streamline operations and enhance guest service.
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
                    <h2 className="text-3xl font-bold text-foreground mb-6">Intelligent Operations Dashboard</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Our comprehensive front desk management system provides your team with real-time insights, 
                      automated workflows, and powerful tools to deliver exceptional guest experiences while 
                      maximizing operational efficiency.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-xl">
                        <div className="text-2xl font-bold text-primary">99.9%</div>
                        <div className="text-sm text-muted-foreground">Uptime</div>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-xl">
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Hotels</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl"></div>
                    <div className="relative p-8 text-center">
                      <Monitor className="w-24 h-24 text-primary mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Centralized Management</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Core Features</h2>
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

            {/* Operational Benefits */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Operational Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-background/80 border-primary/20">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{benefit.stat}</div>
                      <div className="text-lg font-semibold text-foreground mb-2">{benefit.label}</div>
                      <div className="text-sm text-muted-foreground">{benefit.description}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span className="text-primary font-medium">Average implementation time: 2 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FrontDeskManagement;