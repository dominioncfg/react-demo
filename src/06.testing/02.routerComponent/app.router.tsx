import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/rootLayout';
import { ProductDetailPage } from '../../03.reactRouter/pages/product';
import { HomePage } from './pages/home';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'dashboard',
        children: [
          { path: 'products/:productId', element: <ProductDetailPage /> },
        ],
      },
    ],
  },
]);
