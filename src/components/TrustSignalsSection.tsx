
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Award, Users } from "lucide-react";

const TrustSignalsSection = () => {
  const customerLogos = [
    { name: 'Grand Plaza Hotel', logo: 'GP', location: 'New York' },
    { name: 'Coastal Resort', logo: 'CR', location: 'California' },
    { name: 'City Center Inn', logo: 'CC', location: 'Chicago' },
    { name: 'Mountain View Lodge', logo: 'MV', location: 'Colorado' },
    { name: 'Harbor Suites', logo: 'HS', location: 'Seattle' },
    { name: 'Downtown Hotel', logo: 'DH', location: 'Austin' },
  ];

  const trustMetrics = [
    { icon: Users, value: '500+', label: 'Hotels Trust Us', color: 'text-primary' },
    { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'text-yellow-500' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee', color: 'text-green-500' },
    { icon: Award, value: 'SOC 2', label: 'Security Certified', color: 'text-blue-500' },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-card rounded-full flex items-center justify-center mb-4 shadow-modern">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Customer Logos */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by hotels worldwide
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {customerLogos.map((customer, index) => (
            <Card key={index} className="hover-lift transition-smooth bg-card border-border/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <span className="text-primary-foreground font-bold text-lg">
                    {customer.logo}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {customer.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {customer.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">4.9★ Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
