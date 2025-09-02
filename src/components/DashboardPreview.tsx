import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock dashboard screenshots - replace with actual dashboard images
  const dashboardScreenshots = [
    {
      title: "Guest Management Dashboard",
      image: "/lovable-uploads/188e6dc8-7310-45bd-9b68-4fab84a92c03.png",
      description: "Real-time guest check-in status and room management"
    },
    {
      title: "Analytics & Reporting",
      image: "/lovable-uploads/29c2bdee-25d5-4a58-bddb-7f91cf9191c5.png", 
      description: "Comprehensive insights and performance metrics"
    },
    {
      title: "Smart Lock Integration",
      image: "/lovable-uploads/3385535b-25b3-4b81-b101-a75b979cff69.png",
      description: "Seamless room access control system"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboardScreenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [dashboardScreenshots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dashboardScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dashboardScreenshots.length) % dashboardScreenshots.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto mt-16">
      {/* Dashboard Preview Card */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Card Header */}
        <div className="px-8 py-6 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                {dashboardScreenshots[currentSlide].title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {dashboardScreenshots[currentSlide].description}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative aspect-video overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {dashboardScreenshots.map((screenshot, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-3 py-6">
          {dashboardScreenshots.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary shadow-md' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-sm opacity-60"></div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-full blur-sm opacity-40"></div>
    </div>
  );
};

export default DashboardPreview;