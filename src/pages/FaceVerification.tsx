import { useState, useRef, useEffect } from "react";
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
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attach stream to video element when both are ready
  useEffect(() => {
    if (stream && videoRef.current && isCameraActive) {
      videoRef.current.srcObject = stream;
      videoRef.current.play().catch(err => {
        console.error("Error playing video:", err);
      });
    }
  }, [stream, isCameraActive]);

  // Cleanup camera on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      console.log("Starting camera for face verification...");
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user", // Front-facing camera for selfie
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      console.log("Camera stream obtained successfully");
      setStream(mediaStream);
      setIsCameraActive(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please ensure you've granted camera permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
  };

  const handleStartRecording = async () => {
    if (!isCameraActive) {
      await startCamera();
    }
    
    setIsRecording(true);
    
    // Simulate recording sequence: center -> left -> right
    setTimeout(() => setCurrentInstruction("left"), 2000);
    setTimeout(() => setCurrentInstruction("right"), 4000);
    setTimeout(() => {
      setCurrentInstruction("complete");
      setIsComplete(true);
      setIsRecording(false);
      stopCamera();
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
        <div className="container-max flex items-center justify-between px-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/document-upload')}
            className="gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Badge variant="secondary" className="text-xs sm:text-sm">
            Demo Hotel Express Check-In
          </Badge>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-muted-foreground">Step 3 of 4</span>
              <span className="text-xs sm:text-sm font-medium text-primary">75%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4 transition-all duration-300"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Face Verification
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              We'll verify your identity with a quick video recording
            </p>
          </div>

          {/* Video Recording Area */}
          <Card className="p-6 sm:p-8 mb-6">
            <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden mb-6">
              {!isCameraActive && !isComplete ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                      Camera preview will appear here
                    </p>
                  </div>
                </div>
              ) : isCameraActive ? (
                <>
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    muted
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-primary/50"></div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-center">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-2" />
                    <p className="text-lg font-semibold text-primary">Verification Complete!</p>
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
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
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
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">Instructions</h3>
            <ol className="space-y-2 text-sm sm:text-base md:text-lg text-muted-foreground list-decimal list-inside">
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
