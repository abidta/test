import { type RouteObject } from 'react-router-dom'
import Feed from '../pages/Feed'
import { feedLoader } from './loaders'
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
    ],
  },
  {
    path: 'ping',
    element: (
      <>
        <p className="text-9xl">Pong</p>
      </>
    ),
  },
  {
    path: 'auth',
    element: <Auth />,
    children: authRoutes,
  },
]
