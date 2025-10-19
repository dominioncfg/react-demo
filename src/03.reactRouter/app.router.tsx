import { createBrowserRouter } from 'react-router';
import { Overview } from './pages/overview';
import { Reports } from './pages/reports';
import { MyDashboardLayout } from './layouts/dashboadLayout';
import { RootLayout } from './layouts/rootLayout';
import { HomePage } from './pages/home';
import { ProductDetailPage } from './pages/product';
import { AppErrorBoundary } from './pages/errorPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <AppErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'dashboard',
        element: <MyDashboardLayout />,
        children: [
          { index: true, element: <Overview /> },
          { path: 'reports', element: <Reports /> },
          { path: 'products/:productId', element: <ProductDetailPage /> },
        ],
      },
    ],
  },
]);
