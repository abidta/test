import { useEffect } from 'react'
import { useApi, useAppDispatch } from '@/api/hooks'
import { useParams } from 'react-router-dom'
import {ProfileImage} from '@/components'
import { switchLayout } from '@/redux/user'

function Profile() {
  const { username } = useParams()
  const { fetchData, data } = useApi()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    fetchData(`/${username}`)
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(switchLayout(false))
    }
  }, [data])

  console.log(data)
  return (
    <div className="p-3">
      <div className="flex  items-center">
        <ProfileImage className="h-[100px] w-[100px] border-0" src={data?.data?.image} />
        <h2 className="ml-2 font-bold"> {data && data?.data?.fullName}</h2>
      </div>
    </div>
  )
}

export default Profile
