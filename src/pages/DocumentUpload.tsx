import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, CheckCircle2, Camera, CreditCard, RotateCcw } from "lucide-react";
const DocumentUpload = () => {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState<string>("");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const startCamera = async () => {
    try {
      console.log("Starting camera...");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      
      console.log("Camera stream obtained:", stream);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        // Show the camera UI immediately
        setIsCameraActive(true);
        console.log("Camera active, video should be visible");
      } else {
        console.error("Video ref is null");
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please ensure you've granted camera permissions.");
    }
  };
  const capturePhoto = () => {
    console.log("Attempting to capture photo...");
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      console.log("Video dimensions:", video.videoWidth, video.videoHeight);
      
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        console.error("Video dimensions are zero - video not ready");
        alert("Camera is not ready yet. Please wait a moment and try again.");
        return;
      }
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL("image/jpeg");
        console.log("Image captured successfully");
        setCapturedImage(imageData);
        stopCamera();
      }
    } else {
      console.error("Video or canvas ref is null");
    }
  };
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };
  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera();
  };
  const handleContinue = () => {
    navigate("/face-verification");
  };
  return <div className="min-h-screen bg-background">
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
              <span className="text-xs sm:text-sm text-muted-foreground">Step 1 of 3</span>
              <span className="text-xs sm:text-sm font-medium text-primary">33%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/3 transition-all duration-300"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Upload Your ID Document
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Please upload a clear photo of your government-issued ID
            </p>
          </div>

          {/* Document Type Selection */}
          <Card className="p-4 sm:p-6 mb-6">
            <h3 className="text-sm sm:text-base font-semibold mb-3">Select Document Type</h3>
            <Select value={documentType} onValueChange={setDocumentType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your document type" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="drivers-license">Driver's License</SelectItem>
                <SelectItem value="national-id">National ID Card</SelectItem>
                <SelectItem value="residence-permit">Residence Permit</SelectItem>
              </SelectContent>
            </Select>
          </Card>

          {/* Accepted Documents */}
          

          {/* Camera Capture Area */}
          <Card className="p-6 sm:p-8 mb-6">
            {!isCameraActive && !capturedImage ? <div className="flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Capture Your Document
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center mb-6">
                  Use your camera to take a photo of your ID
                </p>
                <Button size="lg" onClick={startCamera} className="gap-2" disabled={!documentType}>
                  <Camera className="w-4 h-4" />
                  Open Camera
                </Button>
              </div> : isCameraActive ? <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden bg-black">
                  <video ref={videoRef} autoPlay playsInline className="w-full h-auto" />
                  <div className="absolute inset-0 border-4 border-primary/30 pointer-events-none"></div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={stopCamera} className="flex-1">
                    Cancel
                  </Button>
                  <Button onClick={capturePhoto} className="flex-1 gap-2">
                    <Camera className="w-4 h-4" />
                    Capture Photo
                  </Button>
                </div>
              </div> : <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={capturedImage!} alt="Captured document" className="w-full h-auto" />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Document Captured</p>
                      <p className="text-xs text-muted-foreground">
                        Ready for verification
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <Button variant="outline" onClick={retakePhoto} className="w-full gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Retake Photo
                </Button>
              </div>}
            <canvas ref={canvasRef} className="hidden" />
          </Card>

          {/* Tips */}
          <Card className="p-4 sm:p-6 mb-6 bg-primary/5 border-primary/20">
            <h3 className="text-sm sm:text-base font-semibold mb-3">Tips for best results</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Camera className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ensure good lighting and avoid glare</span>
              </li>
              <li className="flex items-start gap-2">
                <Camera className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Place document on a flat, contrasting surface</span>
              </li>
              <li className="flex items-start gap-2">
                <Camera className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Make sure all text is clearly visible</span>
              </li>
            </ul>
          </Card>

          {/* Continue Button */}
          <Button size="lg" onClick={handleContinue} disabled={!capturedImage || !documentType} className="w-full">
            Continue to Face Verification
          </Button>
        </div>
      </section>
    </div>;
};
export default DocumentUpload;