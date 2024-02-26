import { RouteObject } from 'react-router-dom'
import Post from '../pages/Post'
import { feedLoader } from './loaders'

export const userRoutes: RouteObject[] = [
  {
    path: '/',
    async lazy() {
      let { PostList } = await import('../components/Posts/PostList')
      return { Component: PostList }
    },
    // loader:feedLoader
  },
  {
    path: '/posts/:postId',
    element: <Post />,
    loader: feedLoader,
  },
]
