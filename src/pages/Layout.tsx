import { Navigate } from 'react-router-dom'
import { Header, Footer, Sidebar, CenterContainer } from '@/components'
import { useAppSelector } from '../api/hooks'

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
