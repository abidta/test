import { RouteObject } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import { authLoader } from "./loaders";
import VerifyOTP from "../pages/Auth/VerifyOTP";
import Logout from "../pages/Auth/Logout";

export const authRoutes:RouteObject[]=[
    {
        path: 'signup',
        element: <Signup />,
        loader: authLoader,
      },
      {
        path: 'login',
        element: <Login />,
        loader: authLoader,
      },
      {
        path:'verify-otp',
        element:<VerifyOTP/>
      },
      {
        path: 'logout',
        element: <Logout />,
      },
]