import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FrontDeskManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Front Desk Management
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empower your front desk team with intelligent tools that streamline operations and enhance guest service.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>Intelligent Operations Dashboard</h2>
              <p>
                Our comprehensive front desk management system provides your team with real-time insights, 
                automated workflows, and powerful tools to deliver exceptional guest experiences while 
                maximizing operational efficiency.
              </p>
              
              <h2>Core Features</h2>
              <ul>
                <li>Real-time room status and housekeeping coordination</li>
                <li>Guest profile management and preferences</li>
                <li>Automated task assignment and tracking</li>
                <li>Revenue optimization tools</li>
                <li>Integrated communication systems</li>
                <li>Performance analytics and reporting</li>
              </ul>
              
              <h2>Operational Benefits</h2>
              <ul>
                <li>Reduce manual tasks by 60%</li>
                <li>Improve staff productivity</li>
                <li>Enhance guest service quality</li>
                <li>Minimize human errors</li>
                <li>Optimize resource allocation</li>
                <li>Increase revenue per available room</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FrontDeskManagement;