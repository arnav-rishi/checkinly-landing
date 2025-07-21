import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQs = () => {
  const faqs = [
    {
      question: "How does contactless check-in work?",
      answer: "Guests receive a secure link via email or SMS before arrival. They can complete check-in, upload ID verification, and receive their digital room key - all from their smartphone."
    },
    {
      question: "Is my data secure with Checkinly?",
      answer: "Yes, we use bank-level encryption and are fully compliant with PCI DSS, GDPR, and other international security standards. Your data is protected with end-to-end encryption."
    },
    {
      question: "What if guests don't have smartphones?",
      answer: "Checkinly works alongside traditional check-in methods. Guests without smartphones can still use the front desk, while others enjoy the contactless option."
    },
    {
      question: "How long does implementation take?",
      answer: "Most hotels are up and running within 1-2 weeks. Our team handles the setup, staff training, and integration with your existing systems."
    },
    {
      question: "What hotel management systems do you integrate with?",
      answer: "We integrate with all major PMS systems including Opera, Amadeus, Protel, and many others. Our API can connect to virtually any hotel system."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 30-day free trial with no setup fees or commitment. You can test all features and see the results before making any payment."
    },
    {
      question: "What support do you provide?",
      answer: "We provide 24/7 customer support, dedicated account managers for enterprise clients, and comprehensive staff training to ensure smooth adoption."
    },
    {
      question: "Can guests access their rooms immediately?",
      answer: "Yes, once check-in is complete, guests receive their digital key instantly. They can access their room via NFC, QR code, or our mobile app."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Checkinly
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-large px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-muted/50 rounded-large p-8">
            <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you find the perfect solution for your hotel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@checkinly.com" className="text-primary hover:underline">
                Email us at support@checkinly.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a href="tel:+1-555-CHECKIN" className="text-primary hover:underline">
                Call us at +1-555-CHECKIN
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQs;