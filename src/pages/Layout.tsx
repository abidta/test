import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
// import Footer from '../components/Footer'

function Layout() {
  let isLoggedIn: boolean = false
  return (
    <>
      {isLoggedIn && <Header />}
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
