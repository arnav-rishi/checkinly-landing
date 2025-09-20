
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import DownloadApp from "./pages/DownloadApp";
import CheckinlyOS from "./pages/CheckinlyOS";
import ForHotels from "./pages/ForHotels";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import ContactSales from "./pages/ContactSales";
import DigitalCheckin from "./pages/DigitalCheckin";
import FrontDeskManagement from "./pages/FrontDeskManagement";
import GuestEngagement from "./pages/GuestEngagement";
import DeviceIntegration from "./pages/DeviceIntegration";
import ROICalculator from "./pages/ROICalculator";
import CaseStudies from "./pages/CaseStudies";
import IntegrationGuide from "./pages/IntegrationGuide";
import EnterpriseSolution from "./pages/EnterpriseSolution";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/download-app" element={<DownloadApp />} />
            <Route path="/checkinly-os" element={<CheckinlyOS />} />
            <Route path="/for-hotels" element={<ForHotels />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/digital-checkin" element={<DigitalCheckin />} />
            <Route path="/front-desk-management" element={<FrontDeskManagement />} />
            <Route path="/guest-engagement" element={<GuestEngagement />} />
            <Route path="/device-integration" element={<DeviceIntegration />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/integration-guide" element={<IntegrationGuide />} />
            <Route path="/enterprise-solution" element={<EnterpriseSolution />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
