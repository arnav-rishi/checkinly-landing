
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can I set up Checkinly?",
      answer: "Most properties are up and running within 24 hours. Our onboarding team will help you integrate with your existing systems, configure your smart locks, and train your staff. The whole process is designed to be seamless and non-disruptive to your operations."
    },
    {
      question: "Which smart lock brands do you support?",
      answer: "We integrate with 50+ smart lock brands including August, Yale, Schlage, Kwikset, Baldwin, and Ultraloq. Our system works with both Wi-Fi and Bluetooth-enabled locks. If your brand isn't listed, we can usually add custom integrations within 2-4 weeks."
    },
    {
      question: "Is guest data secure?",
      answer: "Absolutely. We use military-grade AES-256 encryption for all data transmission and storage. Our platform is SOC 2 Type II compliant and regularly audited by third-party security firms. Guest personal information is never shared with third parties and is automatically purged according to your retention policies."
    },
    {
      question: "What happens if the internet goes down?",
      answer: "Our smart locks have offline backup codes that guests can use in emergencies. Your staff can also generate temporary codes through our mobile app even without internet. We also provide 24/7 phone support to help guests gain access if needed."
    },
    {
      question: "Can I customize the check-in experience?",
      answer: "Yes! You can fully customize the check-in flow with your branding, colors, and messaging. Add custom questions, upsell opportunities, local recommendations, and house rules. The Professional and Enterprise plans include white-label options."
    },
    {
      question: "How does pricing work for multiple properties?",
      answer: "We offer volume discounts for property management companies and hotel chains. Each property is billed separately, but you get a unified dashboard and bulk pricing. Contact our sales team for custom enterprise pricing if you manage more than 5 properties."
    },
    {
      question: "Do you integrate with my existing PMS?",
      answer: "We integrate with 20+ property management systems including Opera, Cloudbeds, Hostfully, Guesty, and more. Our API also allows custom integrations. During onboarding, we'll set up the integration to automatically sync reservations and guest information."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support with responses within 4 hours. Professional plans add phone support, and Enterprise customers get 24/7 priority support with a dedicated account manager. We also provide free training sessions and comprehensive documentation."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Everything you need to know about Checkinly. Can't find the answer you're looking for? 
            <span className="text-primary"> Contact our support team.</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/30 rounded-lg px-6 bg-card hover:shadow-modern transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 border border-border/30 rounded-large p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Get in touch and we'll respond within 4 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-lift transition-smooth">
                Contact Support
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-smooth">
                Schedule Demo Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
