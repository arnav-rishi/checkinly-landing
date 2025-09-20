import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, MapPin, Star, Users, TrendingUp } from "lucide-react";

const GuestEngagement = () => {
  const features = [
    { icon: Heart, title: "Personalized welcome messages and offers", description: "Tailored to guest preferences" },
    { icon: MessageCircle, title: "In-app concierge and room service", description: "24/7 guest communication" },
    { icon: MapPin, title: "Local recommendations and booking", description: "Curated local experiences" },
    { icon: Star, title: "Automated feedback collection", description: "Real-time satisfaction tracking" },
    { icon: Users, title: "Loyalty program integration", description: "Seamless rewards management" },
    { icon: TrendingUp, title: "Post-stay engagement campaigns", description: "Continued relationship building" }
  ];

  const impacts = [
    { stat: "40%", label: "Increase guest satisfaction", color: "text-emerald-600" },
    { stat: "25%", label: "Boost ancillary revenue", color: "text-blue-600" },
    { stat: "60%", label: "Improve direct booking rates", color: "text-purple-600" },
    { stat: "85%", label: "Enhance guest loyalty", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 animate-fade-in">
              <Heart className="w-4 h-4 mr-2" />
              Personalized Experiences
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              Guest Engagement
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Build lasting relationships with personalized guest experiences that drive loyalty and increase revenue.
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
                    <h2 className="text-3xl font-bold text-foreground mb-6">Personalized Guest Journey</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Create memorable experiences through intelligent guest engagement tools that deliver personalized 
                      recommendations, seamless communication, and proactive service throughout their stay and beyond.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-background"></div>
                        <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-background"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">Trusted by 500+ hotels</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl"></div>
                    <div className="relative p-8 text-center">
                      <Heart className="w-24 h-24 text-primary mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Guest-Centric Approach</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Engagement Features</h2>
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

            {/* Business Impact Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Business Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {impacts.map((impact, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold mb-2 ${impact.color}`}>{impact.stat}</div>
                    <div className="text-lg font-semibold text-foreground">{impact.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="p-6 bg-background/50 rounded-2xl">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Generate positive reviews</h3>
                  <p className="text-muted-foreground">Increase 5-star ratings and referrals</p>
                </div>
                <div className="p-6 bg-background/50 rounded-2xl">
                  <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Reduce support requests</h3>
                  <p className="text-muted-foreground">Self-service guest solutions</p>
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

export default GuestEngagement;