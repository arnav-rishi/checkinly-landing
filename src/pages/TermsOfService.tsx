import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, CreditCard, Clock, Mail, AlertCircle } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: "By accessing and using Checkinly's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: Shield,
      title: "2. Service Description", 
      content: "Checkinly provides cloud-based hospitality management software including but not limited to digital check-in solutions, front desk management tools, guest engagement platforms, and device integration services."
    },
    {
      icon: FileText,
      title: "3. User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password."
    },
    {
      icon: AlertCircle,
      title: "4. Acceptable Use",
      content: "You may not use our service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction or any applicable international laws."
    },
    {
      icon: CreditCard,
      title: "5. Payment Terms",
      content: "Subscription fees are billed in advance on a monthly or annual basis and are non-refundable. We reserve the right to change our pricing with 30 days notice."
    },
    {
      icon: Shield,
      title: "6. Data Protection",
      content: "We are committed to protecting your data and privacy. Please review our Privacy Policy for detailed information about how we collect, use, and protect your information."
    },
    {
      icon: Clock,
      title: "7. Service Availability",
      content: "We strive to maintain high service availability but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance when possible."
    },
    {
      icon: AlertCircle,
      title: "8. Limitation of Liability",
      content: "In no event shall Checkinly be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use our services."
    },
    {
      icon: FileText,
      title: "9. Termination",
      content: "Either party may terminate this agreement at any time with 30 days written notice. Upon termination, your access to the service will be discontinued."
    },
    {
      icon: Mail,
      title: "10. Contact Information",
      content: "If you have any questions about these Terms of Service, please contact us at legal@checkinly.com or through our support channels."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 animate-fade-in">
              <FileText className="w-4 h-4 mr-2" />
              Legal Documentation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Card */}
            <Card className="mb-12 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Important Notice</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms of Service govern your use of Checkinly's services. Please read them carefully 
                      as they contain important information about your rights and obligations when using our platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={index} className="hover-scale transition-all duration-300 hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-4">{section.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <Card className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Questions About Our Terms?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service or need clarification on any point, 
                  our legal team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:legal@checkinly.com" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Legal Team
                  </a>
                  <a 
                    href="/contact-sales" 
                    className="inline-flex items-center px-6 py-3 bg-background border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary/5 transition-colors"
                  >
                    Contact Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;