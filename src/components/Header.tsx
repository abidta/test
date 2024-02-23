import { useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import Logo from './Logo'

function Header() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-start items-center border border-slate-200 bg-white sticky top-0 w-full z-50">
      <div className="flex-initial w-1/2 flex">
        <div className="flex basis-4/12">
          <Logo small />
        </div>

        <div className="basis-8/12 flex justify-center items-center ">
          <input
            type="text"
            placeholder="Search people and posts"
            className="w-10/12 rounded-md border p-2"
          />
        </div>
      </div>
      <div className="flex-initial w-1/2 flex justify-between items-center">
        <div className="">
          <button
            onClick={() => {
              navigate('/')
            }}
          >
            Home
          </button>
        </div>
        <div className="me-10">
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Header
