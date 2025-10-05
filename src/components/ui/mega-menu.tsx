import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Smartphone, Monitor, Settings, Building2, FileText, Users, HelpCircle, Shield } from "lucide-react";

interface MegaMenuSection {
  title: string;
  description?: string;
  icon: React.ElementType;
  items: {
    title: string;
    description: string;
    href: string;
    icon?: React.ElementType;
  }[];
}

interface MegaMenuProps {
  title: string;
  sections: MegaMenuSection[];
  className?: string;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ title, sections, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button className={cn(
        "text-slate-600 hover:text-primary transition-all duration-300 md:text-xs lg:text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group flex items-center",
        className
      )}>
        {title}
        <ChevronDown className={cn(
          "ml-1 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 transition-transform duration-300",
          isOpen && "rotate-180"
        )} />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Mega Menu Content */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] sm:w-screen max-w-4xl z-50">
          <div className="bg-white rounded-2xl shadow-elegant border border-gray-100 p-8 animate-fade-in">
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  {/* Section Header */}
                  <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{section.title}</h3>
                      {section.description && (
                        <p className="text-xs text-gray-500 mt-1">{section.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Section Items */}
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        className="group block p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-start space-x-3">
                          {item.icon && (
                            <div className="p-1.5 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                              <item.icon className="h-4 w-4 text-primary" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-gray-100 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Need help getting started?</h4>
                  <p className="text-xs text-gray-600 mt-1">Our team is here to help you succeed</p>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-300 hover:scale-105">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Predefined menu configurations
export const downloadAppMenuConfig: MegaMenuSection[] = [
  {
    title: "Mobile Apps",
    description: "Download for iOS and Android",
    icon: Smartphone,
    items: [
      {
        title: "iOS App",
        description: "Available on the App Store for iPhone and iPad",
        href: "/download-app#ios",
        icon: Smartphone
      },
      {
        title: "Android App",
        description: "Get it on Google Play for Android devices",
        href: "/download-app#android",
        icon: Smartphone
      }
    ]
  },
  {
    title: "Desktop",
    description: "Cross-platform desktop solutions",
    icon: Monitor,
    items: [
      {
        title: "Desktop Version",
        description: "Full-featured desktop application for Windows, Mac, and Linux",
        href: "/download-app#desktop",
        icon: Monitor
      },
      {
        title: "Web Portal",
        description: "Access your dashboard from any browser",
        href: "/checkinly-os",
        icon: Monitor
      }
    ]
  }
];

export const checkinlyOSMenuConfig: MegaMenuSection[] = [
  {
    title: "Features",
    description: "Core platform capabilities",
    icon: Settings,
    items: [
      {
        title: "Face Recognition",
        description: "Advanced biometric check-in technology",
        href: "/checkinly-os#features",
        icon: Users
      },
      {
        title: "NFC Access",
        description: "Contactless room entry system",
        href: "/checkinly-os#nfc",
        icon: Shield
      }
    ]
  },
  {
    title: "Setup",
    description: "Installation and configuration",
    icon: Settings,
    items: [
      {
        title: "Installation Guide",
        description: "Step-by-step setup instructions",
        href: "/checkinly-os#installation",
        icon: FileText
      },
      {
        title: "System Requirements",
        description: "Hardware and software requirements",
        href: "/checkinly-os#requirements",
        icon: Settings
      }
    ]
  }
];

export const forHotelsMenuConfig: MegaMenuSection[] = [
  {
    title: "Solutions",
    description: "Enterprise hotel solutions",
    icon: Building2,
    items: [
      {
        title: "Enterprise Solution",
        description: "Complete hotel management platform",
        href: "/enterprise-solution",
        icon: Building2
      },
      {
        title: "Integration Guide",
        description: "Connect with your existing systems",
        href: "/integration-guide",
        icon: Settings
      }
    ]
  },
  {
    title: "Resources",
    description: "Success stories and guides",
    icon: FileText,
    items: [
      {
        title: "Case Studies",
        description: "See how hotels improve with Checkinly",
        href: "/case-studies",
        icon: Users
      },
      {
        title: "ROI Calculator",
        description: "Calculate your return on investment",
        href: "/roi-calculator",
        icon: FileText
      }
    ]
  }
];