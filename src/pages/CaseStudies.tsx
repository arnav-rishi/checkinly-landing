import { Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Coming Soon!
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            We're working on bringing you inspiring case studies from hotels that have transformed their operations with Checkinly.
          </p>
          
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Stay tuned for real success stories and results
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
