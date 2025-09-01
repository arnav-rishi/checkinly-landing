
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Zap, Users, Clock, TrendingUp, Star, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // Analytics tracking
  };

  const features = [
    { icon: Smartphone, title: "Face Recognition", description: "Instant guest verification" },
    { icon: Shield, title: "NFC Access", description: "Secure room entry" },
    { icon: Zap, title: "Instant Setup", description: "Ready in minutes" },
    { icon: Users, title: "Guest Delight", description: "Seamless experience" }
  ];

  const stats = [
    { icon: Clock, value: "90%", label: "Faster Check-in" },
    { icon: TrendingUp, value: "98%", label: "Guest Satisfaction" },
    { icon: Star, value: "Early", label: "Access Beta" }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#fefefe] overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Main content - single centered column */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="w-full max-w-4xl mx-auto px-8">
          
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">
              Hotel Check-in.
            </h1>
            
            {/* Supporting Text */}
            <div className="space-y-3">
              <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                Powered by Face & NFC Access
              </p>
              <p className="text-lg lg:text-xl text-gray-600">
                Faster, Smarter, Safer hospitality.
              </p>
            </div>
          </div>

          {/* Visual Proof - Analytics Dashboard Screenshot */}
          <div className="mb-16">
            <div className="w-full bg-white border border-gray-200 overflow-hidden">
              <img 
                src="/lovable-uploads/analytics-dashboard.png" 
                alt="Checkinly Analytics Dashboard"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/10' }}
                onError={(e) => {
                  // Fallback placeholder
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden w-full h-96 bg-gray-50 border-gray-200 items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-sm text-gray-600">Real-time insights and performance metrics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features - 4 cards in horizontal row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white border border-gray-200 p-6 text-center"
              >
                <div className="w-12 h-12 bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Social Proof - 3 stat cards in horizontal row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-white border border-gray-200 p-6 text-center"
              >
                <div className="w-10 h-10 bg-gray-100 mx-auto mb-3 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-gray-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action - Two buttons side by side */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-8 py-4 h-14 text-base font-semibold bg-black text-white hover:bg-gray-900 transition-colors border-0 rounded-none"
              onClick={() => handleCTAClick('request_demo')}
            >
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 h-14 text-base font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all bg-white rounded-none"
              onClick={() => handleCTAClick('start_trial')}
            >
              Start Free Trial
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
