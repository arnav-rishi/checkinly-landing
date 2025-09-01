
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, Cpu, Shield, Zap, Users, FileText, Settings } from "lucide-react";

const CheckinlyOS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Monitor className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Checkinly OS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The complete operating system powering next-generation hotel management with advanced features and seamless integration capabilities.
            </p>
          </div>

          {/* Features Section */}
          <section id="features" className="mb-20">
            <div className="flex items-center mb-8">
              <Settings className="w-8 h-8 mr-4 text-primary" />
              <h2 className="text-3xl font-bold">Features</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">Core platform capabilities</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-large p-8 border">
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Face Recognition</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced biometric check-in technology that provides secure and instant guest identification.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 99.9% accuracy rate</li>
                  <li>• Real-time processing</li>
                  <li>• Privacy-compliant storage</li>
                  <li>• Works in various lighting conditions</li>
                </ul>
              </div>

              <div className="bg-card rounded-large p-8 border">
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">NFC Access</h3>
                <p className="text-muted-foreground mb-4">
                  Contactless room entry system using Near Field Communication technology.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Instant tap-to-unlock</li>
                  <li>• Encrypted key exchange</li>
                  <li>• Battery-efficient operation</li>
                  <li>• Compatible with all major NFC devices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Setup Section */}
          <section id="setup" className="mb-20">
            <div className="flex items-center mb-8">
              <Cpu className="w-8 h-8 mr-4 text-primary" />
              <h2 className="text-3xl font-bold">Setup</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">Installation and configuration</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-large p-8 border">
                <FileText className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Installation Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step setup instructions to get your system running in minutes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Quick 15-minute setup</li>
                  <li>• Automated configuration wizard</li>
                  <li>• Integration with existing systems</li>
                  <li>• 24/7 setup support available</li>
                </ul>
              </div>

              <div className="bg-card rounded-large p-8 border">
                <Settings className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
                <p className="text-muted-foreground mb-4">
                  Hardware and software requirements for optimal performance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Minimum 8GB RAM</li>
                  <li>• 100GB available storage</li>
                  <li>• Internet connection required</li>
                  <li>• Compatible with major operating systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Core System Info */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-large p-8 border text-center">
                <Cpu className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Core System</h3>
                <p className="text-muted-foreground mb-4">
                  Built from the ground up for hotel operations with real-time processing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time guest management</li>
                  <li>• Cloud-native architecture</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </div>

              <div className="bg-card rounded-large p-8 border text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Security</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade security with compliance standards.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• End-to-end encryption</li>
                  <li>• PCI DSS compliant</li>
                  <li>• GDPR ready</li>
                </ul>
              </div>

              <div className="bg-card rounded-large p-8 border text-center">
                <Monitor className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Web Portal</h3>
                <p className="text-muted-foreground mb-4">
                  Access your dashboard from any browser with full functionality.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Cross-platform compatibility</li>
                  <li>• Real-time synchronization</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </section>

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
