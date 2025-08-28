
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleCTAClick = (action: string) => {
    // Analytics tracking for CTAs
    console.log(`CTA clicked: ${action}`);
    // In a real app, you'd send this to your analytics service
    // gtag('event', 'click', { event_category: 'CTA', event_label: action });
  };

  const handleSignInClick = () => {
    handleCTAClick('login');
    navigate('/auth');
  };

  const handleStartTrialClick = () => {
    handleCTAClick('primary_header_cta');
    navigate('/auth');
  };

  const handleSignOut = async () => {
    await signOut();
    handleCTAClick('logout');
  };

  return (
    <header className="w-full bg-gradient-to-b from-[#F5FAFF]/95 to-[#FAFCFF]/95 backdrop-blur-md border-b border-blue-100/50 sticky top-0 z-50 animate-[slideDown_0.6s_ease-out]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/188e6dc8-7310-45bd-9b68-4fab84a92c03.png" 
              alt="Checkinly Logo" 
              className="w-10 h-10 hover:scale-110 transition-all duration-300 group-hover:drop-shadow-lg"
            />
            <span className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors duration-300 hover:animate-[wiggle_0.5s_ease-in-out]">Checkinly</span>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-slate-600 hover:text-slate-800 transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/download-app" className="text-slate-600 hover:text-slate-800 transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Download App
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/checkinly-os" className="text-slate-600 hover:text-slate-800 transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Checkinly OS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/for-hotels" className="text-slate-600 hover:text-slate-800 transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              For Hotels
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/faqs" className="text-slate-600 hover:text-slate-800 transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/privacy-policy" className="text-slate-600 hover:text-slate-800 transition-all duration-300 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Authentication CTAs */}
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="hidden md:inline text-sm text-slate-600">
                  Welcome, {user.user_metadata?.full_name || user.email}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleSignOut}
                  className="hidden md:inline-flex text-sm hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-slate-600 hover:text-slate-800"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleSignInClick}
                  className="hidden md:inline-flex text-sm hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-slate-600 hover:text-slate-800"
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-slate-800 hover:bg-slate-900 text-white shadow-lg px-6 py-2 text-sm font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 group hover:shadow-xl"
                  onClick={handleStartTrialClick}
                >
                  <span className="group-hover:animate-[pulse_0.5s_ease-in-out]">Start Free Trial</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
