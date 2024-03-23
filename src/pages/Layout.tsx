import { Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import { useAppSelector } from '../api/hooks'
import CenterContainer from '../components/CenterContainer'

function Layout() {
  const { isLoggedIn } = useAppSelector((state) => state.user)
  console.log(isLoggedIn, 'this layout')

  if (!isLoggedIn) {
    return <Navigate to={'/auth/login?pr=true'} />
  }

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <CenterContainer />
        <Footer />
      </div>
    </>
  )
}

export default Layout
