import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';

export const MySimpleRoutedApp = () => {
  return <RouterProvider router={appRouter} />;
};
