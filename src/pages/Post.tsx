import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApi, useAppSelector } from '../api/hooks'
import PostContainer from '../components/Posts/PostContainer'
import { Post as PostComponent } from '../components/Posts/Post'
import Button from '../components/Button'

function Post() {
  const { postId } = useParams()
  const { data, fetchData, mutate, error, success } = useApi()
  const { data: userData } = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  console.log(postId)

  const handleDelete = () => {
    mutate(`/posts/${postId}`, {}, 'DELETE', postId)
  }

  useEffect(() => {
    fetchData(`/posts/${postId}`)
  }, [])

  useEffect(() => {
    if (data && data?.identifier === postId) {
      return navigate('/')
    }
  }, [data])

  if (error) {
    throw new Error(error.message)
  }
  if (success) {
    console.log('succes')
  }
  console.log(data?.data, 'data on fetch')

  return (
    <>
      {data && (
        <PostContainer>
          <>
            <PostComponent post={data?.data} />
            {data?.data?.user?._id === userData?._id && (
              <Button
                children={'Delete Post'}
                type="button"
                className="bg-red-300 mt-2"
                onClick={handleDelete}
              />
            )}
          </>
        </PostContainer>
      )}
    </>
  )
}

export default Post
