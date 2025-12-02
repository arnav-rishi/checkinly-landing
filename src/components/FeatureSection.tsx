import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Database, ScanFace, CreditCard, TrendingUp, Moon } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Real-Time PMS Sync",
      description: "Seamlessly connected to your Property Management System.",
      details: [
        "Reservations update instantly, preventing double bookings",
        "Automatic room assignment based on preferences",
        "Two-way sync with Opera, Mews, Cloudbeds & more"
      ]
    },
    {
      icon: Database,
      title: "Holds 500+ Key Cards",
      description: "Industrial-grade RFID encoder and dispenser.",
      details: [
        "Encodes standard RFID cards (Mifare, VingCard, etc.)",
        "Low-stock alerts sent to dashboard automatically",
        "Failed cards rejected into internal bin—no duds dispensed"
      ]
    },
    {
      icon: ScanFace,
      title: "AI Face Verification",
      description: "Built-in OCR scanner captures passport and ID data.",
      details: [
        "Verifies guest identity against the booking name",
        "Automatic fraud detection and security compliance",
        "Supports 190+ countries' identity documents"
      ]
    },
    {
      icon: CreditCard,
      title: "Integrated Payments",
      description: "Accept payments directly at the kiosk.",
      details: [
        "City taxes, deposits, or room upgrades via EMV terminal",
        "Supports Apple Pay, Google Pay, and all major cards",
        "PCI-DSS compliant payment processing"
      ]
    },
    {
      icon: TrendingUp,
      title: "Smart Upselling",
      description: "Increase RevPAR during the check-in flow.",
      details: [
        "Offer late check-out, breakfast packages, or upgrades",
        "Dynamic pricing based on availability",
        "Average 15% uptake rate on upsell offers"
      ]
    },
    {
      icon: Moon,
      title: "24/7 Night Audit",
      description: "Allow late arrivals without staffing overnight.",
      details: [
        "Kiosk handles entire check-in process securely",
        "Real-time notifications to on-call staff",
        "Complete audit trail for every transaction"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Built for Modern Hospitality
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything Your Front Desk Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate the handover of physical keys while maintaining full control over your operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border rounded-large bg-card hover:bg-muted/50 transition-colors duration-300 cursor-pointer relative overflow-hidden shadow-modern hover:shadow-elegant touch-target"
            >
              <CardHeader className="pb-4 sm:pb-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-bold text-foreground mb-1">{feature.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground font-medium">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
