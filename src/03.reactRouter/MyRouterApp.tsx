import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

export const MyRoutedApp = () => {
   return (
      <RouterProvider router={appRouter} />
   )
};
