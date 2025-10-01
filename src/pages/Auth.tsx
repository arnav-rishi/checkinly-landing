
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModeToggle from '@/components/AuthModeToggle';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const initialMode = (searchParams.get('mode') as 'signin' | 'reset') || 'signin';
  const [mode, setMode] = useState<'signin' | 'reset'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Update mode when URL parameter changes
  useEffect(() => {
    const urlMode = (searchParams.get('mode') as 'signin' | 'reset') || 'signin';
    setMode(urlMode);
  }, [searchParams]);

  // Redirect if already authenticated
  if (user) {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'signin') {
        const result = await signIn(email, password);
        if (result.error) {
          toast({
            title: "Error",
            description: result.error.message,
            variant: "destructive"
          });
        } else {
          toast({
            title: "Welcome back!",
            description: "You've been signed in successfully."
          });
          navigate('/');
        }
      } else {
        // Send notification to company about password reset request
        const { error } = await supabase.functions.invoke('forgot-password-notification', {
          body: { email }
        });

        if (error) {
          toast({
            title: "Error",
            description: "Failed to send notification. Please try again.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Request Submitted",
            description: "We've notified our team. You'll receive new credentials shortly."
          });
          setMode('signin');
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSales = () => {
    navigate('/contact-sales');
  };


  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {mode === 'signin' && 'Dashboard Login'}
              {mode === 'reset' && 'Forgot Credentials'}
            </CardTitle>
            <CardDescription>
              {mode === 'signin' && 'Sign in to access your dashboard'}
              {mode === 'reset' && 'Request new credentials from our team'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {mode !== 'reset' && (
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                      minLength={6}
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {mode === 'signin' && 'Signing in...'}
                    {mode === 'reset' && 'Submitting request...'}
                  </>
                ) : (
                  <>
                    {mode === 'signin' && 'Sign In'}
                    {mode === 'reset' && 'Request New Credentials'}
                  </>
                )}
              </Button>
            </form>

            {mode === 'signin' && (
              <Button
                type="button"
                variant="outline"
                className="w-full mt-2"
                onClick={handleContactSales}
              >
                Contact Sales for Credentials
              </Button>
            )}


            <AuthModeToggle mode={mode} setMode={setMode} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
