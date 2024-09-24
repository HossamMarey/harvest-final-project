import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, CategoriesPage, SingleHotelPage } from "@/pages";
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
      {
        path: "/hotels/:id",
        element: <SingleHotelPage />,
      },
    ],
  },
]);

export const MainRoutes = () => {
  return <RouterProvider router={router} />;
};
