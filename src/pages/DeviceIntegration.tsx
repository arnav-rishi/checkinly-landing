import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeviceIntegration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Device Integration
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Seamlessly connect with existing hotel systems and smart devices for a unified technology ecosystem.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>Universal Connectivity</h2>
              <p>
                Our platform integrates with over 200+ hotel systems and IoT devices, ensuring your technology 
                investments work together harmoniously while future-proofing your operations.
              </p>
              
              <h2>Supported Integrations</h2>
              <ul>
                <li>Property Management Systems (PMS)</li>
                <li>Smart lock and access control systems</li>
                <li>IoT room automation and sensors</li>
                <li>Payment processing platforms</li>
                <li>Channel management systems</li>
                <li>Energy management and climate controls</li>
              </ul>
              
              <h2>Integration Benefits</h2>
              <ul>
                <li>Reduce system silos and data redundancy</li>
                <li>Automate cross-platform workflows</li>
                <li>Improve data accuracy and consistency</li>
                <li>Lower operational complexity</li>
                <li>Enable advanced analytics across systems</li>
                <li>Simplify staff training and operations</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeviceIntegration;