import { type RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
// import { loginUser, createUser as signupAction } from '../api/userApi'



let isLoggedIn:boolean=false
export const routes: RouteObject[] = [
  {
    path: '/',
    element: isLoggedIn ? <>hi</> : <Home />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
