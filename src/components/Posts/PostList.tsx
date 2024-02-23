/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useApi } from '../../api/hooks'
import Post from './Post'
import PostContainer from './PostContainer'
import CreatePost from './CreatePost'

export function PostList() {
  const { data, submitApi } = useApi('/', 'GET')
  const [apiUpdated, setApiUpdated] = useState(0)

  useEffect(() => {
    submitApi()
    return () => {}
  }, [apiUpdated])

  return (
    <>
      <CreatePost setApiUpdate={setApiUpdated} />
      {data?.data.map((post: any) => (
        <PostContainer key={post?._id}>
          
          <Post post={post} />
        </PostContainer>
      ))}
    </>
  )
}
