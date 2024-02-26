import { type RouteObject } from 'react-router-dom'
import { feedLoader } from './loaders'
import { authRoutes } from './authRoutes'
import Auth from '../pages/Auth/Auth'
import { userRoutes } from './userRoutes'

export const routes: RouteObject[] = [
  {
    path: '/',
    loader: feedLoader,
    children: userRoutes,
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
