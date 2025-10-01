import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSalesForm from "@/components/ContactSalesForm";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Clock, Mail, Users, Award } from "lucide-react";

const ContactSales = () => {
  const benefits = [
    "14-day free trial with full feature access",
    "White-glove implementation and training", 
    "24/7 customer support",
    "Integration with 200+ hotel systems",
    "Proven ROI within 60 days"
  ];

  const steps = [
    { number: "1", title: "Submit your information", description: "Tell us about your needs" },
    { number: "2", title: "Schedule a personalized demo", description: "See Checkinly in action" },
    { number: "3", title: "Receive custom pricing proposal", description: "Tailored to your requirements" },
    { number: "4", title: "Start your free 30-day trial", description: "No commitment required" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 animate-fade-in">
              <Users className="w-4 h-4 mr-2" />
              Sales Consultation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              Contact Sales
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Ready to transform your hotel operations? Get in touch with our sales team for a personalized demonstration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-foreground mb-4">Get Started Today</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and our sales team will contact you within 24 hours.
                      </p>
                    </div>
                    <ContactSalesForm />
                  </CardContent>
                </Card>
              </div>
              
              {/* Info Section */}
              <div className="space-y-8">
                {/* Why Choose Checkinly */}
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Award className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">Why Choose Checkinly?</h3>
                    </div>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Contact Information */}
                <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-medium text-foreground">Sales:</span>
                          <span className="text-muted-foreground ml-2">sales@checkinly.com</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-medium text-foreground">Phone:</span>
                          <span className="text-muted-foreground ml-2">+1 (800) 555-HOTEL</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <span className="font-medium text-foreground">Hours:</span>
                          <span className="text-muted-foreground ml-2">Monday - Friday, 8 AM - 8 PM EST</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Next Steps */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Next Steps</h3>
                    <div className="space-y-6">
                      {steps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {step.number}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default ContactSales;