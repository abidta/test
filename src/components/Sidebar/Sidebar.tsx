import { Link } from 'react-router-dom'
import { useAppSelector } from '@/api/hooks'
import { ProfileImage } from '@/components'

function Sidebar() {
  const { data } = useAppSelector((state) => state.user)
  console.log(data, 'selector')

  return (
    <div className="basis-3/12 flex flex-row p-2 overflow-y-scroll scroll-hide h-screen">
      <div className="ml-2 h-14 flex items-center bg-orange-50 w-full p-1">
        <ProfileImage src={data?.fullNAme} className="h-[32px] w-[32px]" />
        <Link to={`/${data.username}`}>
          <h2 className="font-bold ml-2">{data?.fullName}</h2>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
