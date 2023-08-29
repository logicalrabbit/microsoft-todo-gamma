import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

function Auth({ children }) {
  const { isLoaded } = useAuth();

  if (!isLoaded) return null;

  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/" replace />
      </SignedOut>
    </>
  );
}
export { Auth };
