import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import { useAppSelector } from '../api/hooks'
import Sidebar from '../components/Sidebar/Sidebar'

function Feed() {
  const { isLoggedIn } = useAppSelector((state) => state.user)
  console.log(isLoggedIn, 'sadf')

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="basis-5/12 ">
              <Outlet />
            </div>
            <Footer />
          </div>

          
        </>
      ) : (
        <Home />
      )}
    </>
  )
}

export default Feed
