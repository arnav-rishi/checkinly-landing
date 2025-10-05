import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const FaceVerification = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [currentInstruction, setCurrentInstruction] = useState("center");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartRecording = async () => {
    setIsRecording(true);
    
    // Simulate recording sequence: center -> left -> right
    setTimeout(() => setCurrentInstruction("left"), 2000);
    setTimeout(() => setCurrentInstruction("right"), 4000);
    setTimeout(() => {
      setCurrentInstruction("complete");
      setIsComplete(true);
      setIsRecording(false);
    }, 6000);
  };

  const handleContinue = () => {
    navigate("/verification-processing");
  };

  const getInstructionText = () => {
    switch (currentInstruction) {
      case "center":
        return "Look straight at the camera";
      case "left":
        return "Slowly turn your head to the left";
      case "right":
        return "Now slowly turn to the right";
      case "complete":
        return "Perfect! Verification complete";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-3 md:py-4">
        <div className="container-max flex justify-center">
          <Badge variant="secondary" className="text-xs sm:text-sm">
            Hotel Express Check-In
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-muted-foreground">Step 2 of 3</span>
              <span className="text-xs sm:text-sm font-medium text-primary">66%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3 transition-all duration-300"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Face Verification
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              We'll verify your identity with a quick video recording
            </p>
          </div>

          {/* Video Recording Area */}
          <Card className="p-6 sm:p-8 mb-6">
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-6">
              {!isRecording && !isComplete ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Camera preview will appear here
                    </p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary mx-auto mb-4 animate-pulse"></div>
                    {isComplete && (
                      <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="text-center mb-6">
              {isRecording || isComplete ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold">
                    {currentInstruction === "left" && (
                      <ArrowLeft className="w-5 h-5 animate-pulse" />
                    )}
                    {getInstructionText()}
                    {currentInstruction === "right" && (
                      <ArrowRight className="w-5 h-5 animate-pulse" />
                    )}
                  </div>
                  {isRecording && (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Recording...</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm sm:text-base text-muted-foreground">
                  Follow the on-screen instructions to complete verification
                </p>
              )}
            </div>

            {/* Start/Retry Button */}
            {!isRecording && !isComplete && (
              <Button size="lg" onClick={handleStartRecording} className="w-full">
                Start Face Verification
              </Button>
            )}
          </Card>

          {/* Instructions Card */}
          <Card className="p-4 sm:p-6 mb-6 bg-primary/5 border-primary/20">
            <h3 className="text-sm sm:text-base font-semibold mb-3">Instructions</h3>
            <ol className="space-y-2 text-xs sm:text-sm text-muted-foreground list-decimal list-inside">
              <li>Position your face in the center of the circle</li>
              <li>Follow the on-screen instructions to turn your head</li>
              <li>Keep your face clearly visible throughout the recording</li>
              <li>The process takes about 5 seconds</li>
            </ol>
          </Card>

          {/* Continue Button */}
          {isComplete && (
            <Button size="lg" onClick={handleContinue} className="w-full">
              Continue to Verification
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default FaceVerification;
