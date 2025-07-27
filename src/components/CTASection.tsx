
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";

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
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    console.log(`CTA Section clicked: primary_cta`);
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      navigate('/auth');
    }
  };

  const handleSecondaryClick = () => {
    console.log(`CTA Section clicked: secondary_cta`);
    if (onSecondaryClick) {
      onSecondaryClick();
    }
  };

  const sectionClasses = {
    default: "bg-muted/30 border border-border/30",
    gradient: "bg-background border border-border/20",
    minimal: "bg-transparent"
  };

  const textClasses = {
    default: "text-foreground",
    gradient: "text-foreground",
    minimal: "text-foreground"
  };

  const descriptionClasses = {
    default: "text-muted-foreground",
    gradient: "text-muted-foreground",
    minimal: "text-muted-foreground"
  };

  return (
    <section className={`section-padding ${sectionClasses[variant]} rounded-large`}>
      <div className="container-max text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-elegant">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${textClasses[variant]}`}>
            {title}
          </h2>
          
          <p className={`text-xl md:text-2xl mb-12 ${descriptionClasses[variant]} leading-relaxed`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-8 text-xl font-bold rounded-large shadow-elegant hover-lift group w-full sm:w-auto"
              onClick={handlePrimaryClick}
            >
              {primaryText}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {secondaryText && (
              secondaryText === "Schedule Live Demo" ? (
                <ContactModal 
                  triggerText={secondaryText}
                  variant="outline"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-16 py-8 text-xl font-bold rounded-large hover-lift transition-all duration-300 w-full sm:w-auto"
                  >
                    {secondaryText}
                  </Button>
                </ContactModal>
              ) : (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-16 py-8 text-xl font-bold rounded-large hover-lift transition-all duration-300 w-full sm:w-auto"
                  onClick={handleSecondaryClick}
                >
                  {secondaryText}
                </Button>
              )
            )}
          </div>

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
