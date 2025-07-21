import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, Clock } from "lucide-react";

const ForHotels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Building2 className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">For Hotels</h1>
            <p className="text-xl text-muted-foreground">
              Streamline operations, enhance guest experience, and boost revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-large p-6 border text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-3">Increase Revenue</h3>
              <p className="text-sm text-muted-foreground">
                Reduce operational costs by 40% and increase guest satisfaction scores
              </p>
            </div>

            <div className="bg-card rounded-large p-6 border text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-3">Better Guest Experience</h3>
              <p className="text-sm text-muted-foreground">
                Contactless check-in reduces wait times and improves first impressions
              </p>
            </div>

            <div className="bg-card rounded-large p-6 border text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-3">Save Time</h3>
              <p className="text-sm text-muted-foreground">
                Automate front desk operations and focus on what matters most
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-large p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What Hotels Say</h2>
            <blockquote className="text-center italic text-lg mb-4">
              "Checkinly transformed our guest experience. Check-in times dropped from 15 minutes to under 2 minutes."
            </blockquote>
            <p className="text-center text-sm text-muted-foreground">
              - Sarah Johnson, General Manager, Luxury Resort Chain
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join hundreds of hotels already using Checkinly
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