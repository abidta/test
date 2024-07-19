import { useEffect } from 'react'
import { useAppDispatch } from '@/api/hooks'
import { useLoaderData } from 'react-router-dom'
import { ProfileImage } from '@/components'
import { switchLayout } from '@/redux/user'

function Profile() {
  const dispatch = useAppDispatch()
  const user = useLoaderData() as {data:object}

  useEffect(() => {
    if (user?.data) {
      dispatch(switchLayout(false))
    }
  }, [user])

  return (
    <div className="p-3">
      <div className="flex  items-center">
        <ProfileImage className="h-[100px] w-[100px] border-0" src={user?.data?.image} />
        <h2 className="ml-2 font-bold"> {user && user?.data?.fullName}</h2>
      </div>
    </div>
  )
}

export default Profile
