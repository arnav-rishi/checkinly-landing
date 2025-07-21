
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

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
  secondaryText = "Schedule a Demo",
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
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textClasses[variant]}`}>
            {title}
          </h2>
          
          <p className={`text-lg md:text-xl mb-12 ${descriptionClasses[variant]} leading-relaxed`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold rounded-large shadow-glow hover-lift group"
              onClick={() => {
                handleCTAClick('primary_cta_section');
                onPrimaryClick?.();
              }}
            >
              {primaryText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {secondaryText && (
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-medium rounded-large hover-lift"
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
          <div className="mt-8 flex justify-center">
            <div className={`text-sm ${descriptionClasses[variant]} flex items-center space-x-2`}>
              <span>✨</span>
              <span>No credit card required • Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
