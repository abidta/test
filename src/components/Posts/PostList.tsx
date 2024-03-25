/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector, useOffset } from '../../api/hooks'
import { Post } from './Post'
import PostContainer from './PostContainer'
import CreatePost from './CreatePost'
import { fetchPost } from '../../redux/posts'

export function PostList() {
  const firstMount = useRef(true)
  const { offset, pageLimit } = useOffset()
  const { post: posts, isLast } = useAppSelector((state) => state.posts)
  const [apiUpdated, setApiUpdated] = useState(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    
    // fetchData(`/?page=${1}&count=${0}`)
    if (!isLast) {
      console.log(firstMount.current,'mount ');
      
      if (firstMount.current&&posts.length!==0) {
         firstMount.current=false
        return
      }
      dispatch(fetchPost({ page: offset, limit: pageLimit }))
    }
   

    return () => {
      console.log('unmount');
      
    }
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
