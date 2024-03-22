/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../api/hooks'
import { Post } from './Post'
import PostContainer from './PostContainer'
import CreatePost from './CreatePost'
import { fetchPost } from '../../redux/posts'
import { useOffset } from '../../pages/Layout'

export function PostList() {
  const { offset } = useOffset()
  const posts = useAppSelector((state) => state.posts.post)
  const [apiUpdated, setApiUpdated] = useState(0)
  const dispatch = useAppDispatch()
  console.log(posts)

  useEffect(() => {
    // fetchData(`/?page=${1}&count=${0}`)
    dispatch(fetchPost(offset))
    return () => {}
  }, [apiUpdated])

  return (
    <>
      <CreatePost setApiUpdate={setApiUpdated} />
      {posts?.map((post: any) => (
        <PostContainer key={post?._id}>
          <Post post={post} />
        </PostContainer>
      ))}
    </>
  )
}
