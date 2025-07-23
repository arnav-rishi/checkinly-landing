
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, Cpu, Shield, Zap } from "lucide-react";

const CheckinlyOS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Monitor className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Checkinly OS</h1>
            <p className="text-xl text-muted-foreground">
              The complete operating system powering next-generation hotel management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-large p-8 border">
              <Cpu className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Core System</h3>
              <p className="text-muted-foreground mb-4">
                Built from the ground up for hotel operations with real-time processing and cloud-native architecture.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Real-time guest management</li>
                <li>• Cloud-based infrastructure</li>
                <li>• 99.9% uptime guarantee</li>
              </ul>
            </div>

            <div className="bg-card rounded-large p-8 border">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <p className="text-muted-foreground mb-4">
                Enterprise-grade security with compliance standards for the hospitality industry.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• End-to-end encryption</li>
                <li>• PCI DSS compliant</li>
                <li>• GDPR ready</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-large p-8 text-white text-center">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Hotel?</h2>
            <p className="mb-6">
              Experience the power of Checkinly OS with a personalized demo
            </p>
            <Button variant="secondary" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckinlyOS;
