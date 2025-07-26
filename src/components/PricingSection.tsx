
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      period: "per month",
      description: "Perfect for small properties",
      features: [
        "Up to 10 rooms",
        "Basic check-in automation",
        "Email notifications",
        "Mobile app access",
        "Basic reporting",
        "Email support"
      ],
      notIncluded: [
        "Smart lock integration",
        "Custom branding",
        "Advanced analytics",
        "Priority support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "79",
      period: "per month",
      description: "Most popular for growing hotels",
      features: [
        "Up to 50 rooms",
        "Smart lock integration",
        "Custom check-in flows",
        "Guest communication",
        "Advanced reporting",
        "Custom branding",
        "Phone & email support",
        "API access"
      ],
      notIncluded: [
        "White-label solution",
        "Dedicated account manager"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "199",
      period: "per month",
      description: "For large properties and chains",
      features: [
        "Unlimited rooms",
        "All smart lock integrations",
        "White-label solution",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 priority support",
        "Multi-property management",
        "Advanced security features",
        "Custom onboarding"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const handlePlanSelect = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // Analytics tracking
  };

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Start with a 30-day free trial. No setup fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover-lift transition-smooth ${
                plan.popular 
                  ? 'border-primary shadow-elegant scale-105' 
                  : 'border-border/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button 
                  className={`w-full font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Everything in {plan.name}:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                          <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border/30 rounded-large p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-muted-foreground mb-6">
              Try Checkinly risk-free for 30 days. If you're not completely satisfied, 
              we'll refund every penny. No questions asked.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Free migration support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
