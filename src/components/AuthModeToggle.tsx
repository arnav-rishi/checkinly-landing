
import { Button } from "@/components/ui/button";

interface AuthModeToggleProps {
  mode: 'signin' | 'signup' | 'reset';
  setMode: (mode: 'signin' | 'signup' | 'reset') => void;
}

const AuthModeToggle = ({ mode, setMode }: AuthModeToggleProps) => {
  return (
    <div className="mt-6 text-center text-sm">
      {mode === 'signin' && (
        <>
          <button
            type="button"
            onClick={() => setMode('reset')}
            className="text-primary hover:underline"
          >
            Forgot your password?
          </button>
          <div className="mt-4">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => setMode('signup')}
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </button>
          </div>
        </>
      )}

      {mode === 'signup' && (
        <div>
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => setMode('signin')}
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </button>
        </div>
      )}

      {mode === 'reset' && (
        <div>
          Remember your password?{' '}
          <button
            type="button"
            onClick={() => setMode('signin')}
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthModeToggle;
