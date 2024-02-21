import { type RouteObject } from 'react-router-dom'
import Feed from '../pages/Feed'
import { authLoader, feedLoader } from './loaders'
import { authRoutes } from './authRoutes'
import Auth from '../pages/Auth/Auth'
//import PostList from '../components/Posts/PostList'
// import { loginUser, createUser as signupAction } from '../api/userApi'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Feed />,
    loader: feedLoader,
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
    path: 'auth/',
    loader: authLoader,
    element: <Auth />,
    children: authRoutes,
  },
]
