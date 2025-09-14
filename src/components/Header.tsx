
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { MegaMenu, downloadAppMenuConfig, checkinlyOSMenuConfig, forHotelsMenuConfig } from "@/components/ui/mega-menu";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <header className={`w-full fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-fit mx-auto">
        <div className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-lg px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group mr-8">
              <img 
                src="/lovable-uploads/188e6dc8-7310-45bd-9b68-4fab84a92c03.png" 
                alt="Checkinly Logo" 
                className="w-8 h-8 hover:scale-110 transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <span className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors duration-300">Checkinly</span>
            </div>

            {/* Main Navigation */}
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
            <div className="flex items-center space-x-3 ml-8">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage 
                          src={user.user_metadata?.avatar_url} 
                          alt={user.user_metadata?.full_name || user.email} 
                        />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {(user.user_metadata?.full_name || user.email || 'U')
                            .split(' ')
                            .map((n: string) => n[0])
                            .join('')
                            .toUpperCase()
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        {user.user_metadata?.full_name && (
                          <p className="font-medium">{user.user_metadata.full_name}</p>
                        )}
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleSignInClick}
                    className="hidden md:inline-flex text-sm hover:scale-105 transition-all duration-300 text-slate-600 hover:text-primary"
                  >
                    Log in
                  </Button>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300 rounded-xl"
                    onClick={handleStartTrialClick}
                  >
                    Try for free
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
