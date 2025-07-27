
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Zap, Nfc, Bot } from "lucide-react";

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Download Checkinly App</h1>
            <p className="text-xl text-muted-foreground">
              Get the mobile app for seamless hotel check-ins on the go
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-large p-8 border">
              <div className="w-12 h-12 mb-4 mx-auto">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="currentColor"
                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">iOS App</h3>
              <p className="text-muted-foreground mb-6">
                Download for iPhone and iPad from the App Store
              </p>
              <Button className="w-full">
                <div className="w-4 h-4 mr-2">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="currentColor"
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    />
                  </svg>
                </div>
                Download for iOS
              </Button>
            </div>

            <div className="bg-card rounded-large p-8 border">
              <div className="w-12 h-12 mb-4 mx-auto">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="currentColor"
                    d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Android App</h3>
              <p className="text-muted-foreground mb-6">
                Download for Android devices from Google Play Store
              </p>
              <Button className="w-full">
                <div className="w-4 h-4 mr-2">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="currentColor"
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                    />
                  </svg>
                </div>
                Download for Android
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-large p-8 border">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Quick Check-in</h3>
              <p className="text-muted-foreground mb-4">
                Complete check-in process in under 60 seconds
              </p>
              <ul className="space-y-2 text-sm text-left">
                <li>• Skip front desk queues</li>
                <li>• Digital ID verification</li>
                <li>• Instant confirmation</li>
              </ul>
            </div>

            <div className="bg-card rounded-large p-8 border">
              <Nfc className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Digital Key</h3>
              <p className="text-muted-foreground mb-4">
                NFC and QR code room access
              </p>
              <ul className="space-y-2 text-sm text-left">
                <li>• Contactless room entry</li>
                <li>• Secure encryption</li>
                <li>• Works offline</li>
              </ul>
            </div>

            <div className="bg-card rounded-large p-8 border">
              <Bot className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Guest Services</h3>
              <p className="text-muted-foreground mb-4">
                Request services directly from your phone
              </p>
              <ul className="space-y-2 text-sm text-left">
                <li>• Room service orders</li>
                <li>• Housekeeping requests</li>
                <li>• Concierge assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownloadApp;
