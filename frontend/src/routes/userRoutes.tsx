import { RouteObject } from 'react-router-dom'
import { Post } from '@/pages'

export const userRoutes: RouteObject[] = [
  {
    path: '/',
    async lazy() {
      let { PostList } = await import('../components/Posts/PostList')
      return { Component: PostList }
    },
  },
  {
    path: 'posts/:postId',
    element: <Post />,
  },
]
