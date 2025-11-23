import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,   // Component না, element ব্যবহার
    children: [
      {
        index: true,
        Component: Home,     // একইভাবে element
      },
    ],
  },
]);
