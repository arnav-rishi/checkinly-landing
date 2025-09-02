
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { MegaMenu, downloadAppMenuConfig, checkinlyOSMenuConfig, forHotelsMenuConfig } from "@/components/ui/mega-menu";

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
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between py-4 px-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <span className="text-xl font-bold text-white">Checkinly</span>
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <MegaMenu title="Download App" sections={downloadAppMenuConfig} className="text-white/90 hover:text-white" />
            <MegaMenu title="Checkinly OS" sections={checkinlyOSMenuConfig} className="text-white/90 hover:text-white" />
            <MegaMenu title="For Hotels" sections={forHotelsMenuConfig} className="text-white/90 hover:text-white" />
            <a 
              href="/faqs" 
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              FAQs
            </a>
            <a 
              href="/privacy-policy" 
              className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Authentication */}
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleSignOut}
                  className="px-4 py-2 text-white/90 hover:text-white transition-colors"
                >
                  Sign Out
                </button>
                <span className="text-sm text-white/80">
                  Welcome, {user.user_metadata?.full_name || user.email}
                </span>
              </div>
            ) : (
              <>
                <button
                  onClick={handleSignInClick}
                  className="px-4 py-2 text-white/90 hover:text-white transition-colors"
                >
                  Log in
                </button>
                <Button 
                  onClick={handleStartTrialClick}
                  className="px-6 py-2 bg-white text-blue-600 hover:bg-white/90 rounded-lg transition-colors shadow-md hover:shadow-lg font-medium"
                >
                  Book a demo
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
