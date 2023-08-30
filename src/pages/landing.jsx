import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useAuth,
} from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

function Landing() {
  return (
    <div className="p-5 h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-center">Micro ToDo Gamma</h1>
      <div className="flex flex-col sm:flex-row gap-3 max-w-xs w-full">
        <SignInButton>
          <Button size="sm" className="sm:flex-1">
            Sign in
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button size="sm" variant="outline" className="sm:flex-1">
            Sign up
          </Button>
        </SignUpButton>
      </div>
    </div>
  );
}

// wrap <Landing> with auth logic
function _Landing() {
  const { isLoaded } = useAuth();

  if (!isLoaded) return null;

  return (
    <>
      <SignedIn>
        <Navigate to="my-day" />
      </SignedIn>
      <SignedOut>
        <Landing />
      </SignedOut>
    </>
  );
}

export { _Landing as Landing };
