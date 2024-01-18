import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
// import Footer from '../components/Footer'

function Layout() {
  let user=false

  return (
    <>
      {user && <Header />}
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
