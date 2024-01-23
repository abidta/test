import { type RouteObject } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Feed from '../pages/Feed'
import { authLoader } from './pathConstants'
import Logout from '../pages/Logout'
//import PostList from '../components/Posts/PostList'
// import { loginUser, createUser as signupAction } from '../api/userApi'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Feed />,
    children: [
      {
        path: '/',
        async lazy() {
          let { PostList } = await import('../components/Posts/PostList')
          return { Component: PostList }
        },
      },
      {
        path: '/test',
        element: <>Test</>,
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />,
    loader: authLoader,
  },
  {
    path: '/login',
    element: <Login />,
    loader: authLoader,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
]
