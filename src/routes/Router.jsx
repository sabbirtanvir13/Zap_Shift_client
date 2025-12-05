import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,   
    children: [
      {
        index: true,
        Component: Home,     
      },
      {
        path:'/rider',
        element:<PrivateRoute>
          <Rider></Rider>
        </PrivateRoute>
      },
      {
        path:'/coverage',
        Component: Coverage,
        loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
      }
    ],
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      }
    ]
  }
]);
