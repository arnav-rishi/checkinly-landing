
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, Clock, FileText, Settings, Calculator } from "lucide-react";

const ForHotels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Building2 className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">For Hotels</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline operations, enhance guest experience, and boost revenue with our comprehensive hotel management solutions.
            </p>
          </div>

          {/* Solutions Section */}
          <section id="solutions" className="mb-20">
            <div className="flex items-center mb-8">
              <Building2 className="w-8 h-8 mr-4 text-primary" />
              <h2 className="text-3xl font-bold">Solutions</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">Enterprise hotel solutions</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-large p-8 border">
                <Building2 className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Enterprise Solution</h3>
                <p className="text-muted-foreground mb-4">
                  Complete hotel management platform designed for large-scale operations and hotel chains.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-property management</li>
                  <li>• Advanced analytics dashboard</li>
                  <li>• Custom integrations available</li>
                  <li>• Dedicated account manager</li>
                  <li>• White-label solutions</li>
                </ul>
              </div>

              <div className="bg-card rounded-large p-8 border">
                <Settings className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Integration Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Seamlessly connect with your existing hotel management systems and workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 20+ PMS integrations</li>
                  <li>• API-first architecture</li>
                  <li>• Real-time data synchronization</li>
                  <li>• Custom webhook support</li>
                  <li>• Expert integration assistance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section id="resources" className="mb-20">
            <div className="flex items-center mb-8">
              <FileText className="w-8 h-8 mr-4 text-primary" />
              <h2 className="text-3xl font-bold">Resources</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">Success stories and guides</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-large p-8 border">
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
                <p className="text-muted-foreground mb-4">
                  See how hotels improve operational efficiency and guest satisfaction with Checkinly.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Luxury Resort Chain</h4>
                    <p className="text-xs text-muted-foreground">40% reduction in check-in time</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Business Hotel Group</h4>
                    <p className="text-xs text-muted-foreground">95% guest satisfaction increase</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-large p-8 border">
                <Calculator className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">ROI Calculator</h3>
                <p className="text-muted-foreground mb-4">
                  Calculate your return on investment and see potential cost savings.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Operational cost savings</li>
                  <li>• Revenue increase projections</li>
                  <li>• Staff efficiency improvements</li>
                  <li>• Guest satisfaction impact</li>
                  <li>• Personalized ROI report</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-large p-6 border text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-3">Increase Revenue</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce operational costs by 40% and increase guest satisfaction scores by up to 25%.
                </p>
              </div>

              <div className="bg-card rounded-large p-6 border text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-3">Better Guest Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Contactless check-in reduces wait times from 15 minutes to under 2 minutes.
                </p>
              </div>

              <div className="bg-card rounded-large p-6 border text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-3">Save Time</h3>
                <p className="text-sm text-muted-foreground">
                  Automate front desk operations and free up staff for high-value guest interactions.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <div className="bg-muted/50 rounded-large p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What Hotels Say</h2>
            <blockquote className="text-center italic text-lg mb-4">
              "Checkinly transformed our guest experience completely. Check-in times dropped from 15 minutes to under 2 minutes, and our guest satisfaction scores increased by 25%. The ROI was evident within the first month."
            </blockquote>
            <p className="text-center text-sm text-muted-foreground">
              - Sarah Johnson, General Manager, Luxury Resort Chain
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join hundreds of hotels already using Checkinly to enhance their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForHotels;
