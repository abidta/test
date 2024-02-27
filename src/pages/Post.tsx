import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from '../api/hooks'
import PostContainer from '../components/Posts/PostContainer'
import { Post as PostComponent } from '../components/Posts/Post'

function Post() {
  const { postId } = useParams()
  const { data, fetchData, error } = useApi()
  console.log(postId)
  useEffect(() => {
    fetchData(`/posts/${postId}`)
  }, [])
  if (error) {
    throw new Error(error.message)
  }
  console.log(data?.data)

  return (
    <>
      {data && (
        <PostContainer>
          <PostComponent post={data?.data} />
        </PostContainer>
      )}
    </>
  )
}

export default Post
