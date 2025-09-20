import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSalesForm from "@/components/ContactSalesForm";

const ContactSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Contact Sales
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your hotel operations? Get in touch with our sales team for a personalized demonstration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get Started Today</h2>
                <ContactSalesForm />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Checkinly?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>30-day free trial with full feature access</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>White-glove implementation and training</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integration with 200+ hotel systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Proven ROI within 60 days</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Sales:</strong> sales@checkinly.com</p>
                    <p><strong>Phone:</strong> +1 (800) 555-HOTEL</p>
                    <p><strong>Hours:</strong> Monday - Friday, 8 AM - 8 PM EST</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Next Steps</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>1. Submit your information</p>
                    <p>2. Schedule a personalized demo</p>
                    <p>3. Receive custom pricing proposal</p>
                    <p>4. Start your free 30-day trial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactSales;