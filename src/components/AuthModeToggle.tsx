
import { Button } from "@/components/ui/button";

interface AuthModeToggleProps {
  mode: 'signin' | 'reset';
  setMode: (mode: 'signin' | 'reset') => void;
}

const AuthModeToggle = ({ mode, setMode }: AuthModeToggleProps) => {
  return (
    <div className="mt-6 text-center text-sm">
      {mode === 'signin' && (
        <button
          type="button"
          onClick={() => setMode('reset')}
          className="text-primary hover:underline"
        >
          Forgot your password?
        </button>
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
