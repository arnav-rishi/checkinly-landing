import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Last updated: December 2024
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Checkinly's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
              
              <h2>2. Service Description</h2>
              <p>
                Checkinly provides cloud-based hospitality management software including but not limited to 
                digital check-in solutions, front desk management tools, guest engagement platforms, and 
                device integration services.
              </p>
              
              <h2>3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password and for 
                restricting access to your computer. You agree to accept responsibility for all activities 
                that occur under your account or password.
              </p>
              
              <h2>4. Acceptable Use</h2>
              <p>
                You may not use our service for any illegal or unauthorized purpose. You must not, in the 
                use of the service, violate any laws in your jurisdiction or any applicable international laws.
              </p>
              
              <h2>5. Payment Terms</h2>
              <p>
                Subscription fees are billed in advance on a monthly or annual basis and are non-refundable. 
                We reserve the right to change our pricing with 30 days notice.
              </p>
              
              <h2>6. Data Protection</h2>
              <p>
                We are committed to protecting your data and privacy. Please review our Privacy Policy for 
                detailed information about how we collect, use, and protect your information.
              </p>
              
              <h2>7. Service Availability</h2>
              <p>
                We strive to maintain high service availability but do not guarantee uninterrupted access. 
                Scheduled maintenance will be communicated in advance when possible.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall Checkinly be liable for any direct, indirect, incidental, special, or 
                consequential damages arising out of the use or inability to use our services.
              </p>
              
              <h2>9. Termination</h2>
              <p>
                Either party may terminate this agreement at any time with 30 days written notice. Upon 
                termination, your access to the service will be discontinued.
              </p>
              
              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at 
                legal@checkinly.com or through our support channels.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;