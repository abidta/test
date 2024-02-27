import { RouteObject } from 'react-router-dom'
import Post from '../pages/Post'

export const userRoutes: RouteObject[] = [
  {
    path: '/',
    async lazy() {
      let { PostList } = await import('../components/Posts/PostList')
      return { Component: PostList }
    },
  },
  {
    path:':username',
    element:<>hiii</>
  },
  {
    path: 'posts/:postId',
    element: <Post />,
  },
]
