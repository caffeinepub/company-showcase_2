import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import LoadingSpinner from './components/LoadingSpinner';

console.log('[Router] Initializing router configuration...');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Root layout component
function RootLayout() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminDashboard,
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);

const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
});

console.log('[Router] Router created with routes:', router.routeTree);

// Add navigation logging
if (typeof window !== 'undefined') {
  router.subscribe('onBeforeLoad', (event) => {
    console.log('[Router] Navigating to:', event.toLocation.pathname);
  });
  
  router.subscribe('onLoad', (event) => {
    console.log('[Router] Loaded route:', event.toLocation.pathname);
  });
}

function App() {
  console.log('[App] Rendering App component');
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
