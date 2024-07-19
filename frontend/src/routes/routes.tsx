import { type RouteObject } from 'react-router-dom'
import { feedLoader, userLoader } from './loaders'
import { authRoutes } from './authRoutes'
import { Auth, Layout, Profile } from '@/pages'
import { userRoutes } from './userRoutes'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    loader: feedLoader,
    children: userRoutes,
  },
  {
    path: ':username',
    loader: userLoader,
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
