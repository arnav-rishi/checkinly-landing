import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { MegaMenu, downloadAppMenuConfig, checkinlyOSMenuConfig, forHotelsMenuConfig } from "@/components/ui/mega-menu";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Smartphone, Monitor, Settings, Building2, FileText, Users, ChevronRight, Home as HomeIcon } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
                <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-md overflow-y-auto">
                  <div className="flex flex-col space-y-4 mt-6 pb-6">
                    {/* Logo area */}
                    <div className="flex items-center space-x-3 pb-4 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-white font-bold text-xl">C</span>
                      </div>
                      <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Checkinly</span>
                    </div>
                    
                    {/* Home Link */}
                    <a 
                      href="/" 
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary/20" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <HomeIcon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">Home</span>
                    </a>
                    
                    {/* Download App Section */}
                    <Collapsible defaultOpen className="space-y-2">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-muted/50 transition-all group">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Smartphone className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="font-semibold text-foreground">Download App</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pl-4 pt-2">
                        {downloadAppMenuConfig.flatMap(section => 
                          section.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/70 transition-all duration-200 group"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="p-1.5 bg-primary/5 rounded-md group-hover:bg-primary/10 transition-colors mt-0.5">
                                {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                  {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Checkinly OS Section */}
                    <Collapsible defaultOpen className="space-y-2">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-muted/50 transition-all group">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Settings className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="font-semibold text-foreground">Checkinly OS</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pl-4 pt-2">
                        {checkinlyOSMenuConfig.flatMap(section => 
                          section.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/70 transition-all duration-200 group"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="p-1.5 bg-primary/5 rounded-md group-hover:bg-primary/10 transition-colors mt-0.5">
                                {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                  {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* For Hotels Section */}
                    <Collapsible defaultOpen className="space-y-2">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-muted/50 transition-all group">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-green-500/10 rounded-lg">
                            <Building2 className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="font-semibold text-foreground">For Hotels</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pl-4 pt-2">
                        {forHotelsMenuConfig.flatMap(section => 
                          section.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/70 transition-all duration-200 group"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="p-1.5 bg-primary/5 rounded-md group-hover:bg-primary/10 transition-colors mt-0.5">
                                {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                  {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* FAQs Link */}
                    <a 
                      href="/faqs" 
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary/20" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                        <FileText className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">FAQs</span>
                    </a>
                    
                    {/* Auth section */}
                    <div className="mt-4 pt-6 border-t border-border/50 space-y-3">
                      {user ? (
                        <>
                          <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                            <Avatar className="h-12 w-12 ring-2 ring-primary/30 shadow-lg">
                              <AvatarImage src={user.user_metadata?.avatar_url} />
                              <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
                                {user.email?.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-foreground truncate">{user.email}</p>
                              <p className="text-xs text-muted-foreground">Signed in</p>
                            </div>
                          </div>
                          <Button 
                            onClick={() => {
                              handleSignOut();
                              setMobileMenuOpen(false);
                            }} 
                            variant="outline" 
                            className="w-full hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-all"
                          >
                            Sign out
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            onClick={() => {
                              handleSignInClick();
                              setMobileMenuOpen(false);
                            }} 
                            variant="outline" 
                            className="w-full border-2 hover:bg-primary/5 hover:border-primary/50 transition-all"
                          >
                            Log in
                          </Button>
                          <Button 
                            onClick={() => {
                              handleStartTrialClick();
                              setMobileMenuOpen(false);
                            }} 
                            className="w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/85 hover:to-primary/70 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                          >
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