import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, CategoriesPage } from "@/pages";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/hotels",
        element: <CategoriesPage />,
      },
    ],
  },
]);

export const MainRoutes = () => {
  return <RouterProvider router={router} />;
};
