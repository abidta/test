import { type RouteObject } from 'react-router-dom'
import { feedLoader } from './loaders'
import { authRoutes } from './authRoutes'
import Auth from '../pages/Auth/Auth'
import { userRoutes } from './userRoutes'
import Layout from '../pages/Layout'
import Profile from '../pages/Profile'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    loader: feedLoader,
    children: userRoutes,
  },
  {
    path: ':username',
    element: <Profile />,
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
