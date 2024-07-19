import { RouteObject } from 'react-router-dom'
import { Login, Logout, Signup, VerifyOTP } from '@/pages/Auth'
import { authLoader } from './loaders'

export const authRoutes: RouteObject[] = [
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
    path: 'verify-otp',
    element: <VerifyOTP />,
  },
  {
    path: 'logout',
    element: <Logout />,
  },
]
