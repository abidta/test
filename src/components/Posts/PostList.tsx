/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector, useOffset } from '../../api/hooks'
import { Post } from './Post'
import PostContainer from './PostContainer'
import CreatePost from './CreatePost'
import { fetchPost } from '../../redux/posts'

export function PostList() {
  const { offset, pageLimit } = useOffset()
  const { post: posts, isLast } = useAppSelector((state) => state.posts)
  const [apiUpdated, setApiUpdated] = useState(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // fetchData(`/?page=${1}&count=${0}`)
    if (!isLast) {
      dispatch(fetchPost({ page: offset, limit: pageLimit }))
    }

    return () => {}
  }, [apiUpdated, offset])

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
