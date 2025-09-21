
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EmailCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert({
          email,
          source: 'waitlist'
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed!",
            description: "You're already on our waitlist. We'll keep you updated!",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "You're on the list!",
          description: "We'll notify you when new features are available.",
        });
      }
    } catch (error) {
      console.error('Email subscription error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Thanks for joining our waitlist. We'll keep you updated on new features and improvements.
            </p>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-primary-foreground/90 mb-4">
                In the meantime, why not start your free trial?
              </p>
              <Button 
                className="bg-white text-primary hover:bg-white/90"
                size="lg"
                onClick={() => window.location.href = '/auth'}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-primary text-primary-foreground">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <div className="w-16 h-16 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Early Access to New Features
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Join 2,000+ hotel owners getting exclusive updates on new integrations, 
            features, and industry insights.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-primary-foreground text-foreground border-0 focus:ring-2 focus:ring-primary-foreground/50"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      "Joining..."
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-primary-foreground/70 mb-4">
                  What you'll get:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/90">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>New feature announcements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Industry insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Early access discounts</span>
                  </div>
                </div>
                <p className="text-xs text-primary-foreground/60 mt-4">
                  Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
