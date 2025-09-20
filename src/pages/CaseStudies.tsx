import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Clock, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const CaseStudies = () => {
  const caseStudies = [
    {
      hotel: "Grand Plaza Hotel",
      location: "New York, NY",
      rooms: 250,
      results: {
        timeReduction: "65%",
        guestSatisfaction: "4.8/5",
        costSavings: "$45,000/year",
        implementation: "2 weeks"
      },
      challenge: "Long check-in queues during peak hours causing guest frustration and operational inefficiency.",
      solution: "Implemented Checkinly's facial recognition and mobile check-in system with smart lock integration.",
      testimonial: "Checkinly transformed our guest experience. Check-in times dropped from 15 minutes to under 5 minutes, and our guest satisfaction scores improved dramatically.",
      author: "Sarah Johnson, General Manager",
      category: "Luxury Hotel"
    },
    {
      hotel: "Business Center Inn",
      location: "Chicago, IL",
      rooms: 120,
      results: {
        timeReduction: "70%",
        guestSatisfaction: "4.9/5",
        costSavings: "$28,000/year",
        implementation: "10 days"
      },
      challenge: "Business travelers needed faster, contactless check-in options for their tight schedules.",
      solution: "Deployed express check-in kiosks with biometric verification and instant room access.",
      testimonial: "Our business guests love the speed and convenience. We've seen a 40% increase in repeat bookings since implementing Checkinly.",
      author: "Michael Chen, Operations Director",
      category: "Business Hotel"
    },
    {
      hotel: "Boutique Resort & Spa",
      location: "Miami, FL",
      rooms: 80,
      results: {
        timeReduction: "60%",
        guestSatisfaction: "4.7/5",
        costSavings: "$22,000/year",
        implementation: "1 week"
      },
      challenge: "Maintaining personalized service while reducing wait times for premium guests.",
      solution: "Integrated pre-arrival verification with personalized welcome messages and seamless room delivery.",
      testimonial: "Checkinly helped us maintain our boutique charm while offering cutting-edge convenience. Our guests feel VIP from the moment they arrive.",
      author: "Elena Rodriguez, Hotel Manager",
      category: "Boutique Hotel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-elegant">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how hotels improve with Checkinly - real results from real properties
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-elegant border-border/30 overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {study.hotel}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">
                        {study.location} • {study.rooms} rooms
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {study.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Results Stats */}
                    <div className="lg:col-span-1">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Key Results
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm text-muted-foreground">Time Reduction</span>
                          <span className="font-bold text-primary">{study.results.timeReduction}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm text-muted-foreground">Guest Satisfaction</span>
                          <span className="font-bold text-primary">{study.results.guestSatisfaction}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm text-muted-foreground">Annual Savings</span>
                          <span className="font-bold text-primary">{study.results.costSavings}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <span className="text-sm text-muted-foreground">Implementation</span>
                          <span className="font-bold text-primary">{study.results.implementation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Case Study Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                        <blockquote className="text-foreground italic mb-3">
                          "{study.testimonial}"
                        </blockquote>
                        <cite className="text-sm text-muted-foreground font-medium">
                          — {study.author}
                        </cite>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Let's discuss how Checkinly can transform your hotel operations
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-bold rounded-large shadow-elegant hover-lift"
                >
                  Schedule Your Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;