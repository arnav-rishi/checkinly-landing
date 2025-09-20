import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DigitalCheckin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Digital Check-in
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your guest experience with seamless, contactless check-in that works from any device.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>Streamlined Guest Experience</h2>
              <p>
                Our digital check-in solution eliminates long queues and reduces front desk workload while providing 
                guests with a modern, efficient arrival experience. Guests can complete their check-in process from 
                their smartphone before they even arrive at your property.
              </p>
              
              <h2>Key Features</h2>
              <ul>
                <li>Mobile-first check-in interface</li>
                <li>Document verification and ID scanning</li>
                <li>Digital key delivery integration</li>
                <li>Real-time room assignment</li>
                <li>Contactless payment processing</li>
                <li>Multi-language support</li>
              </ul>
              
              <h2>Benefits</h2>
              <ul>
                <li>Reduce check-in time by up to 80%</li>
                <li>Decrease front desk workload</li>
                <li>Improve guest satisfaction scores</li>
                <li>Increase operational efficiency</li>
                <li>Enable 24/7 check-in capability</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalCheckin;