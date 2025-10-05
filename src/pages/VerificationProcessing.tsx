import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Loader2, Shield } from "lucide-react";

const VerificationProcessing = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const verificationSteps = [
    { id: 1, title: "Verifying document authenticity", status: "pending" },
    { id: 2, title: "Checking liveness detection", status: "pending" },
    { id: 3, title: "Matching face with ID", status: "pending" },
  ];

  const [steps, setSteps] = useState(verificationSteps);

  useEffect(() => {
    // Simulate verification steps
    const timer1 = setTimeout(() => {
      setSteps((prev) => prev.map((step, idx) => 
        idx === 0 ? { ...step, status: "complete" } : step
      ));
      setCurrentStep(1);
    }, 2000);

    const timer2 = setTimeout(() => {
      setSteps((prev) => prev.map((step, idx) => 
        idx === 1 ? { ...step, status: "complete" } : step
      ));
      setCurrentStep(2);
    }, 4000);

    const timer3 = setTimeout(() => {
      setSteps((prev) => prev.map((step, idx) => 
        idx === 2 ? { ...step, status: "complete" } : step
      ));
    }, 6000);

    const timer4 = setTimeout(() => {
      navigate("/checkin-success");
    }, 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container-max max-w-2xl mx-auto px-4">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="text-xs sm:text-sm">
            Demo Hotel Express Check-In
          </Badge>
        </div>

        {/* Main Card */}
        <Card className="p-6 sm:p-8">
          {/* Loading Spinner */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-spin" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              We're Verifying Your Identity...
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              This will just take a few seconds. Please don't close this window.
            </p>
          </div>

          {/* Verification Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  currentStep === index ? "bg-primary/5" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  {step.status === "complete" ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : currentStep === index ? (
                    <Loader2 className="w-6 h-6 text-primary animate-spin" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-muted"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm sm:text-base font-medium ${
                    step.status === "complete" ? "text-muted-foreground" : ""
                  }`}>
                    {step.title}
                  </p>
                  {currentStep === index && (
                    <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                    </div>
                  )}
                </div>
                {step.status === "complete" && (
                  <span className="text-xs sm:text-sm text-green-500 font-medium">
                    Complete
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Secure Processing Notice */}
          <Card className="p-4 bg-muted/30 border-0">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold mb-1">Secure Processing</h3>
                <p className="text-xs text-muted-foreground">
                  Your biometric data is processed securely and is not stored permanently. 
                  All verification happens through encrypted channels.
                </p>
              </div>
            </div>
          </Card>

          {/* Progress Footer */}
          <div className="text-center mt-6">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Processing step {currentStep + 1} of {steps.length}
            </p>
            <div className="mt-2 w-full h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VerificationProcessing;
