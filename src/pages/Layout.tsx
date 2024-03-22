import { Navigate, Outlet, useOutletContext } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import { useAppSelector } from '../api/hooks'
import { useState } from 'react'

function Layout() {
  const [offset, setOffset] = useState(0)
  const { isLoggedIn } = useAppSelector((state) => state.user)
  console.log(isLoggedIn, 'this layout')

  if (!isLoggedIn) {
    return <Navigate to={'/auth/login?pr=true'} />
  }
  const handleScroll = () => {
    console.log('scroll')
  }
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div
          onScroll={handleScroll}
          className="basis-5/12 overflow-y-scroll h-screen scroll-hide"
        >
          <Outlet context={{ offset }} />
        </div>
        <Footer />
      </div>
    </>
  )
}
export function useOffset() {
  return useOutletContext<{ offset: number }>()
}

export default Layout
