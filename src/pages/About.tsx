import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're revolutionizing hospitality through innovative technology that puts guest experience first.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>Our Mission</h2>
              <p>
                At Checkinly, we believe that technology should enhance human connections, not replace them. 
                Our mission is to empower hotels with innovative solutions that streamline operations while 
                creating more meaningful guest experiences.
              </p>
              
              <h2>The Journey</h2>
              <p>
                Founded in 2020 by hospitality veterans and technology experts, Checkinly emerged from a simple 
                observation: hotels needed smarter, more intuitive technology that actually solved real problems. 
                We've since grown to serve over 500 hotels worldwide, processing millions of check-ins and 
                transforming how guests interact with hospitality.
              </p>
              
              <h2>Our Values</h2>
              <ul>
                <li><strong>Guest-Centric Innovation:</strong> Every feature we build starts with the guest experience</li>
                <li><strong>Operational Excellence:</strong> We simplify complex processes to help hotels run smoothly</li>
                <li><strong>Trust & Security:</strong> Your data and your guests' information are always protected</li>
                <li><strong>Continuous Improvement:</strong> We listen, learn, and evolve with the industry</li>
              </ul>
              
              <h2>Looking Forward</h2>
              <p>
                As we continue to grow, our commitment remains unchanged: to provide hospitality technology 
                that truly serves both hotels and their guests. We're excited to be part of your journey toward 
                more efficient, more profitable, and more satisfying hospitality operations.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;