import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/home/Home";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,   // Component না, element ব্যবহার
    children: [
      {
        index: true,
        Component: Home,     // একইভাবে element
      },
      {
        path:'/coverage',
        Component: Coverage,
        loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
      }
    ],
  },
]);
