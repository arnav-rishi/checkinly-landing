
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
  const initialMode = (searchParams.get('mode') as 'signin' | 'signup' | 'reset') || 'signup';
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp, resetPassword, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Update mode when URL parameter changes
  useEffect(() => {
    const urlMode = (searchParams.get('mode') as 'signin' | 'signup' | 'reset') || 'signup';
    setMode(urlMode);
  }, [searchParams]);

  // Redirect if already authenticated
  if (user) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let result;
      
      if (mode === 'signin') {
        result = await signIn(email, password);
      } else if (mode === 'signup') {
        result = await signUp(email, password, fullName);
      } else {
        result = await resetPassword(email);
      }

      if (result.error) {
        toast({
          title: "Error",
          description: result.error.message,
          variant: "destructive"
        });
      } else {
        if (mode === 'signin') {
          toast({
            title: "Welcome back!",
            description: "You've been signed in successfully."
          });
          navigate('/dashboard');
        } else if (mode === 'signup') {
          toast({
            title: "Account created!",
            description: "Welcome to Checkinly! Please check your email to verify your account."
          });
          navigate('/'); // Redirect to home page as logged in user
        } else {
          toast({
            title: "Reset email sent!",
            description: "Check your email for password reset instructions."
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

  const handleMagicLink = async () => {
    if (!email) {
      toast({ title: "Email required", description: "Please enter your email first." });
      return;
    }
    setIsLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/dashboard`;
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectUrl }
      });
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Magic link sent!", description: "Check your inbox to complete sign-in." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (!email) {
      toast({ title: "Email required", description: "Please enter your email to resend verification." });
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resend({ type: 'signup', email });
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Verification sent", description: "Please check your email inbox and spam folder." });
      }
    } finally {
      setIsLoading(false);
    }
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
              {mode === 'signin' && 'Welcome Back'}
              {mode === 'signup' && 'Create Account'}
              {mode === 'reset' && 'Reset Password'}
            </CardTitle>
            <CardDescription>
              {mode === 'signin' && 'Sign in to your Checkinly account'}
              {mode === 'signup' && 'Join thousands of hotels using Checkinly'}
              {mode === 'reset' && 'Enter your email to reset your password'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

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
                    {mode === 'signup' && 'Creating account...'}
                    {mode === 'reset' && 'Sending reset email...'}
                  </>
                ) : (
                  <>
                    {mode === 'signin' && 'Sign In'}
                    {mode === 'signup' && 'Create Account'}
                    {mode === 'reset' && 'Send Reset Email'}
                  </>
                )}
              </Button>
            </form>

            {mode === 'signin' && (
              <Button
                type="button"
                variant="outline"
                className="w-full mt-2"
                onClick={handleMagicLink}
                disabled={isLoading}
              >
                Send Magic Link
              </Button>
            )}

            {(mode === 'signup' || mode === 'signin') && (
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Didn't receive the email?
                <button
                  type="button"
                  onClick={handleResendVerification}
                  className="text-primary hover:underline ml-1"
                >
                  Resend verification
                </button>
              </p>
            )}

            <AuthModeToggle mode={mode} setMode={setMode} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
