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
            <div className="flex items-center space-x-2 sm:space-x-3 group md:mr-2 lg:mr-8">
              
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
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md overflow-y-auto">
                  <div className="flex flex-col space-y-6 mt-6 h-full">
                    {/* Logo area */}
                    <div className="flex items-center space-x-3 pb-6 border-b border-border/50">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <span className="font-bold text-xl text-foreground">Checkinly</span>
                    </div>
                    
                    <a href="/" className="text-lg font-semibold hover:text-primary transition-colors py-2 px-1 rounded-lg hover:bg-muted/50" onClick={() => setMobileMenuOpen(false)}>
                      Home
                    </a>
                    
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">DOWNLOAD APP</h3>
                      <a href="/download-app" className="block text-base text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/30" onClick={() => setMobileMenuOpen(false)}>
                        Download
                      </a>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">CHECKINLY OS</h3>
                      <a href="/checkinly-os" className="block text-base text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/30" onClick={() => setMobileMenuOpen(false)}>
                        Platform
                      </a>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">FOR HOTELS</h3>
                      <a href="/for-hotels" className="block text-base text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/30" onClick={() => setMobileMenuOpen(false)}>
                        Solutions
                      </a>
                    </div>
                    
                    <a href="/faqs" className="text-lg font-semibold hover:text-primary transition-colors py-2 px-1 rounded-lg hover:bg-muted/50" onClick={() => setMobileMenuOpen(false)}>
                      FAQs
                    </a>
                    
                    {/* Auth section at bottom */}
                    <div className="mt-2 pt-4 border-t border-border/50 space-y-4">
                      {user ? (
                        <>
                          <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                            <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                              <AvatarImage src={user.user_metadata?.avatar_url} />
                              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                {user.email?.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
                              <p className="text-xs text-muted-foreground">Signed in</p>
                            </div>
                          </div>
                          <Button onClick={() => { handleSignOut(); setMobileMenuOpen(false); }} variant="outline" className="w-full hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20">
                            Sign out
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button onClick={() => { handleSignInClick(); setMobileMenuOpen(false); }} variant="outline" className="w-full">
                            Log in
                          </Button>
                          <Button onClick={() => { handleStartTrialClick(); setMobileMenuOpen(false); }} className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-sm">
                            Contact Sales
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Main Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center md:space-x-2 lg:space-x-6">
              <a href="/" className="text-slate-600 hover:text-primary transition-all duration-300 md:text-xs lg:text-sm font-medium hover:scale-105 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Mega Menus */}
              <MegaMenu title="Download App" sections={downloadAppMenuConfig} />
              <MegaMenu title="Checkinly OS" sections={checkinlyOSMenuConfig} />
              <MegaMenu title="For Hotels" sections={forHotelsMenuConfig} />
              <a href="/faqs" className="text-slate-600 hover:text-primary transition-all duration-300 md:text-xs lg:text-sm font-medium hover:scale-105 relative group">
                FAQs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Authentication CTAs */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:ml-2 lg:ml-8">
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
                  <DropdownMenuContent className="w-56 z-[100] bg-white dark:bg-gray-800" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        {user.user_metadata?.full_name && <p className="font-medium text-sm">{user.user_metadata.full_name}</p>}
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> : <>
                  <Button variant="ghost" size="sm" onClick={handleSignInClick} className="hidden sm:inline-flex md:text-xs lg:text-sm hover:scale-105 transition-all duration-300 text-slate-600 hover:text-primary md:px-2 lg:px-3 py-2">
                    Log in
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md md:px-2 lg:px-4 py-2 md:text-xs lg:text-sm font-medium hover:scale-105 transition-all duration-300 rounded-lg sm:rounded-xl" onClick={handleStartTrialClick}>
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