
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  variant?: 'default' | 'gradient' | 'minimal';
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const CTASection = ({
  title = "Ready to Transform Your Hotel Operations?",
  description = "Join 500+ hotels already using Checkinly to create seamless guest experiences.",
  primaryText = "Start Your Free Trial",
  secondaryText,
  variant = 'default',
  onPrimaryClick,
  onSecondaryClick
}: CTASectionProps) => {
  const handleCTAClick = (action: string) => {
    console.log(`CTA Section clicked: ${action}`);
    // Analytics tracking
  };

  const sectionClasses = {
    default: "bg-muted/30 border border-border/30",
    gradient: "bg-gradient-primary text-primary-foreground",
    minimal: "bg-transparent"
  };

  const textClasses = {
    default: "text-foreground",
    gradient: "text-primary-foreground",
    minimal: "text-foreground"
  };

  const descriptionClasses = {
    default: "text-muted-foreground",
    gradient: "text-primary-foreground/90",
    minimal: "text-muted-foreground"
  };

  return (
    <section className={`section-padding ${sectionClasses[variant]} rounded-large`}>
      <div className="container-max text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-glow">
              <Zap className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${textClasses[variant]}`}>
            {title}
          </h2>
          
          <p className={`text-xl md:text-2xl mb-12 ${descriptionClasses[variant]} leading-relaxed`}>
            {description}
          </p>

          {/* Single primary CTA for better conversion */}
          <div className="flex flex-col items-center space-y-6 mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-16 py-8 text-xl font-bold rounded-large shadow-glow hover-lift group"
              onClick={() => {
                handleCTAClick('primary_cta_section');
                onPrimaryClick?.();
              }}
            >
              {primaryText}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Only show secondary CTA if explicitly provided */}
            {secondaryText && (
              <Button 
                variant="outline" 
                size="lg"
                className="px-10 py-6 text-lg font-medium rounded-large hover-lift"
                onClick={() => {
                  handleCTAClick('secondary_cta_section');
                  onSecondaryClick?.();
                }}
              >
                {secondaryText}
              </Button>
            )}
          </div>

          {/* Trust Signal */}
          <div className="flex justify-center">
            <div className={`${descriptionClasses[variant]} flex flex-wrap justify-center items-center gap-6 text-sm`}>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Setup in 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
