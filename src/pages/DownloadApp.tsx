import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Download, PlayCircle, Apple } from "lucide-react";

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
              <Apple className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">iOS App</h3>
              <p className="text-muted-foreground mb-6">
                Download for iPhone and iPad from the App Store
              </p>
              <Button className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download for iOS
              </Button>
            </div>

            <div className="bg-card rounded-large p-8 border">
              <PlayCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Android App</h3>
              <p className="text-muted-foreground mb-6">
                Download for Android devices from Google Play Store
              </p>
              <Button className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download for Android
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 rounded-large p-8">
            <h2 className="text-2xl font-bold mb-4">App Features</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">Quick Check-in</h3>
                <p className="text-sm text-muted-foreground">Complete check-in process in under 60 seconds</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Digital Key</h3>
                <p className="text-sm text-muted-foreground">NFC and QR code room access</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Guest Services</h3>
                <p className="text-sm text-muted-foreground">Request services directly from your phone</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownloadApp;