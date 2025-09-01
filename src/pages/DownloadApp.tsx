
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Zap, Nfc, Bot, Monitor, Apple, Play } from "lucide-react";

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Download Checkinly App</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the mobile app for seamless hotel check-ins on the go. Available for both iOS and Android devices with full desktop support.
            </p>
          </div>

          {/* Mobile Apps Section */}
          <section id="mobile-apps" className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <Smartphone className="w-8 h-8 mr-4 text-primary" />
              <h2 className="text-3xl font-bold">Mobile Apps</h2>
            </div>
            <p className="text-lg text-muted-foreground text-center mb-8">Download for iOS and Android</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-large p-8 border">
                <div className="w-16 h-16 mb-6 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Apple className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">iOS App</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Available on the App Store for iPhone and iPad with full native functionality.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Native iOS performance</li>
                  <li>• Touch ID / Face ID integration</li>
                  <li>• Apple Wallet integration</li>
                  <li>• Offline mode support</li>
                  <li>• Push notifications</li>
                </ul>
                <Button className="w-full">
                  <Apple className="w-4 h-4 mr-2" />
                  Download for iOS
                </Button>
              </div>

              <div className="bg-card rounded-large p-8 border">
                <div className="w-16 h-16 mb-6 mx-auto bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Android App</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Download from Google Play Store for Android devices with Material Design.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Material Design 3</li>
                  <li>• Biometric authentication</li>
                  <li>• Google Pay integration</li>
                  <li>• Widget support</li>
                  <li>• Adaptive UI for all screens</li>
                </ul>
                <Button className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Download for Android
                </Button>
              </div>
            </div>
          </section>

          {/* Desktop Section */}
          <section id="desktop" className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <Monitor className="w-8 h-8 mr-4 text-primary" />
              <h2 className="text-3xl font-bold">Desktop</h2>
            </div>
            <p className="text-lg text-muted-foreground text-center mb-8">Cross-platform desktop solutions</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-large p-8 border">
                <Monitor className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Desktop Version</h3>
                <p className="text-muted-foreground mb-4">
                  Full-featured desktop application for Windows, Mac, and Linux with complete functionality.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Cross-platform compatibility</li>
                  <li>• Offline functionality</li>
                  <li>• Multi-monitor support</li>
                  <li>• Advanced reporting tools</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
                <Button className="w-full">
                  <Monitor className="w-4 h-4 mr-2" />
                  Download Desktop App
                </Button>
              </div>

              <div className="bg-card rounded-large p-8 border">
                <div className="w-12 h-12 mb-4 text-primary bg-primary/10 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Web Portal</h3>
                <p className="text-muted-foreground mb-4">
                  Access your dashboard from any browser with full cloud synchronization.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• No installation required</li>
                  <li>• Real-time synchronization</li>
                  <li>• Responsive design</li>
                  <li>• Secure HTTPS connection</li>
                  <li>• Cross-browser support</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Access Web Portal
                </Button>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-large p-8 border text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Quick Check-in</h3>
                <p className="text-muted-foreground mb-4">
                  Complete check-in process in under 60 seconds
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Skip front desk queues</li>
                  <li>• Digital ID verification</li>
                  <li>• Instant confirmation</li>
                  <li>• QR code generation</li>
                </ul>
              </div>

              <div className="bg-card rounded-large p-8 border text-center">
                <Nfc className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Digital Key</h3>
                <p className="text-muted-foreground mb-4">
                  NFC and QR code room access technology
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Contactless room entry</li>
                  <li>• Secure encryption</li>
                  <li>• Works offline</li>
                  <li>• Multiple access methods</li>
                </ul>
              </div>

              <div className="bg-card rounded-large p-8 border text-center">
                <Bot className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Guest Services</h3>
                <p className="text-muted-foreground mb-4">
                  Request services directly from your phone
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Room service orders</li>
                  <li>• Housekeeping requests</li>
                  <li>• Concierge assistance</li>
                  <li>• Real-time chat support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Download CTA */}
          <div className="bg-gradient-primary rounded-large p-8 text-white text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Seamless Check-ins?</h2>
            <p className="mb-6">
              Download the app today and transform your hotel experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Apple className="w-4 h-4 mr-2" />
                Download for iOS
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownloadApp;
