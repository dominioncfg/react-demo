import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/rootLayout';
import { HomePage } from './pages/Home';
import { MyProductDetailPage } from './pages/MyProductDetailPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'dashboard',
        children: [
          { path: 'products/:productId', element: <MyProductDetailPage /> },
        ],
      },
    ],
  },
]);
