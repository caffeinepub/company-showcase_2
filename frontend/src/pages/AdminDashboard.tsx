import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import LoginScreen from '../components/admin/LoginScreen';
import AdminLayout from '../components/admin/AdminLayout';
import ProfileSetup from '../components/admin/ProfileSetup';
import LoadingSpinner from '../components/LoadingSpinner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  console.log('[AdminDashboard] Rendering admin dashboard');
  
  const { identity, loginStatus, loginError } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched, error: profileError } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';
  const isInitializing = loginStatus === 'initializing';

  console.log('[AdminDashboard] State:', { 
    isAuthenticated, 
    isLoggingIn, 
    isInitializing,
    profileLoading, 
    isFetched,
    hasProfile: !!userProfile 
  });

  // Show loading during initialization
  if (isInitializing) {
    return <LoadingSpinner />;
  }

  // Show login screen if not authenticated
  if (!isAuthenticated && !isLoggingIn) {
    return <LoginScreen />;
  }

  // Show loading state while checking authentication or profile
  if (isLoggingIn || profileLoading) {
    return <LoadingSpinner />;
  }

  // Show error if profile fetch failed (but user is authenticated)
  if (isAuthenticated && profileError) {
    console.error('[AdminDashboard] Profile fetch error:', profileError);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Authentication Error</AlertTitle>
          <AlertDescription>
            Failed to load user profile. Please try logging out and logging in again.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Show profile setup if user doesn't have a profile yet
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;
  if (showProfileSetup) {
    return <ProfileSetup />;
  }

  // Show admin dashboard
  return <AdminLayout />;
}
