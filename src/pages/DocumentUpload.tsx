import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle2, Camera, CreditCard } from "lucide-react";

const DocumentUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    navigate("/face-verification");
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

          {/* Accepted Documents */}
          <Card className="p-4 sm:p-6 mb-6 bg-muted/30">
            <h3 className="text-sm sm:text-base font-semibold mb-3">Accepted Documents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm">Passport</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm">Driver's License</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm">National ID</span>
              </div>
            </div>
          </Card>

          {/* Upload Area */}
          <Card className="p-6 sm:p-8 mb-6">
            {!preview ? (
              <label className="flex flex-col items-center justify-center min-h-[300px] cursor-pointer border-2 border-dashed border-border rounded-lg hover:border-primary transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Upload className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mb-4" />
                <p className="text-base sm:text-lg font-medium mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  PNG, JPG, or PDF (max. 10MB)
                </p>
              </label>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={preview}
                    alt="Document preview"
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{selectedFile?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(selectedFile?.size! / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedFile(null);
                    setPreview(null);
                  }}
                  className="w-full"
                >
                  Upload Different Document
                </Button>
              </div>
            )}
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
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={!selectedFile}
            className="w-full"
          >
            Continue to Face Verification
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DocumentUpload;
