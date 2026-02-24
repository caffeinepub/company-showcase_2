import { AlertCircle, RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ConnectionStatusProps {
  isConnected: boolean;
  error?: string;
  onRetry?: () => void;
  retryCount?: number;
}

export default function ConnectionStatus({ 
  isConnected, 
  error, 
  onRetry,
  retryCount = 0 
}: ConnectionStatusProps) {
  if (isConnected) {
    return (
      <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
        <Wifi className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-800 dark:text-green-200">Connected</AlertTitle>
        <AlertDescription className="text-green-700 dark:text-green-300">
          Successfully connected to backend services
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert variant="destructive">
      <WifiOff className="h-4 w-4" />
      <AlertTitle>Connection Error</AlertTitle>
      <AlertDescription className="space-y-3">
        <p>Unable to connect to backend services. {error && `Error: ${error}`}</p>
        {retryCount > 0 && (
          <p className="text-sm">Retry attempts: {retryCount}</p>
        )}
        {onRetry && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRetry}
            className="mt-2"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry Connection
          </Button>
        )}
        <p className="text-sm mt-2">
          The application will continue to work with default content while offline.
        </p>
      </AlertDescription>
    </Alert>
  );
}
