import { useEffect } from 'react'
import { useApi } from '../api/hooks'
import { useParams } from 'react-router-dom'

function Profile() {
  const { username } = useParams()
  const { fetchData, data } = useApi()
  useEffect(() => {
    fetchData(`/${username}`)
    return () => {}
  }, [])
  console.log(data)

  return (
    <div>
      Profile
      {data && data?.data?.username}
    </div>
  )
}

export default Profile
