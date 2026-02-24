import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('[ErrorBoundary] Error caught:', error);
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary] Component stack:', errorInfo.componentStack);
    console.error('[ErrorBoundary] Error details:', error);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-card border border-border rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-destructive/10 rounded-full">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
                <p className="text-muted-foreground">The application encountered an unexpected error</p>
              </div>
            </div>

            {this.state.error && (
              <div className="mb-6 p-4 bg-muted rounded-md">
                <p className="font-semibold text-foreground mb-2">Error Details:</p>
                <p className="text-sm text-muted-foreground font-mono break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {this.state.errorInfo && (
              <details className="mb-6">
                <summary className="cursor-pointer text-sm font-semibold text-foreground mb-2">
                  Component Stack Trace
                </summary>
                <pre className="text-xs text-muted-foreground bg-muted p-4 rounded-md overflow-auto max-h-64">
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div className="flex gap-4">
              <Button onClick={this.handleReload} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Reload Application
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  this.setState({ hasError: false, error: null, errorInfo: null });
                }}
              >
                Try Again
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-md">
              <p className="text-sm text-muted-foreground">
                If this problem persists, please check the browser console for more details or contact support.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
