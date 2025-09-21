import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { MegaMenu, downloadAppMenuConfig, checkinlyOSMenuConfig, forHotelsMenuConfig } from "@/components/ui/mega-menu";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
const Header = () => {
  const {
    user,
    signOut
  } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  const handleCTAClick = (action: string) => {
    // Analytics tracking for CTAs
    console.log(`CTA clicked: ${action}`);
    // In a real app, you'd send this to your analytics service
    // gtag('event', 'click', { event_category: 'CTA', event_label: action });
  };
  const handleSignInClick = () => {
    handleCTAClick('login');
    navigate('/auth?mode=signin');
  };
  const handleStartTrialClick = () => {
    handleCTAClick('primary_header_cta');
    navigate('/contact-sales');
  };
  const handleSignOut = async () => {
    await signOut();
    handleCTAClick('logout');
  };
  return <header className={`w-full fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-fit mx-auto">
        <div className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-xl sm:rounded-2xl shadow-lg px-3 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 group mr-4 sm:mr-8">
              
              <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-primary transition-colors duration-300 px-0 py-0 my-0 mx-0">Checkinly</span>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-6">
                    <a href="/" className="text-slate-700 hover:text-primary transition-colors text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                      Home
                    </a>
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Download App</h3>
                      <a href="/download-app" className="block text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Download</a>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Checkinly OS</h3>
                      <a href="/checkinly-os" className="block text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Platform</a>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">For Hotels</h3>
                      <a href="/for-hotels" className="block text-slate-600 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
                    </div>
                    <a href="/faqs" className="text-slate-700 hover:text-primary transition-colors text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                      FAQs
                    </a>
                    {!user && (
                      <div className="pt-4 border-t space-y-3">
                        <Button variant="ghost" onClick={() => { handleSignInClick(); setMobileMenuOpen(false); }} className="w-full justify-start">
                          Log in
                        </Button>
                        <Button onClick={() => { handleStartTrialClick(); setMobileMenuOpen(false); }} className="w-full">
                          Contact Sales
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Main Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-slate-600 hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-105 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Mega Menus */}
              <MegaMenu title="Download App" sections={downloadAppMenuConfig} />
              <MegaMenu title="Checkinly OS" sections={checkinlyOSMenuConfig} />
              <MegaMenu title="For Hotels" sections={forHotelsMenuConfig} />
              <a href="/faqs" className="text-slate-600 hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-105 relative group">
                FAQs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Authentication CTAs */}
            <div className="flex items-center space-x-2 sm:space-x-3 ml-4 sm:ml-8">
              {user ? <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                        <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || user.email} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-sm sm:text-base">
                          {(user.user_metadata?.full_name || user.email || 'U').split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        {user.user_metadata?.full_name && <p className="font-medium text-sm">{user.user_metadata.full_name}</p>}
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> : <>
                  <Button variant="ghost" size="sm" onClick={handleSignInClick} className="hidden sm:inline-flex text-sm hover:scale-105 transition-all duration-300 text-slate-600 hover:text-primary px-3 py-2">
                    Log in
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300 rounded-lg sm:rounded-xl" onClick={handleStartTrialClick}>
                     Contact Sales
                   </Button>
                </>}
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;