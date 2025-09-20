import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GuestEngagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Guest Engagement
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build lasting relationships with personalized guest experiences that drive loyalty and increase revenue.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>Personalized Guest Journey</h2>
              <p>
                Create memorable experiences through intelligent guest engagement tools that deliver personalized 
                recommendations, seamless communication, and proactive service throughout their stay and beyond.
              </p>
              
              <h2>Engagement Features</h2>
              <ul>
                <li>Personalized welcome messages and offers</li>
                <li>In-app concierge and room service</li>
                <li>Local recommendations and booking</li>
                <li>Automated feedback collection</li>
                <li>Loyalty program integration</li>
                <li>Post-stay engagement campaigns</li>
              </ul>
              
              <h2>Business Impact</h2>
              <ul>
                <li>Increase guest satisfaction by 40%</li>
                <li>Boost ancillary revenue by 25%</li>
                <li>Improve direct booking rates</li>
                <li>Enhance guest loyalty and retention</li>
                <li>Generate positive reviews and referrals</li>
                <li>Reduce operational support requests</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuestEngagement;