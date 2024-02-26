import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import { useAppSelector } from '../api/hooks'

function Layout() {
  const { isLoggedIn } = useAppSelector((state) => state.user)
  console.log('this layout');
  if (!isLoggedIn) {
    return <Navigate to={'/auth/login?pr=true'}/>
  }
  return (
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
  )
}

export default Layout
