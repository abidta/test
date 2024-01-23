import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import { useAppSelector } from '../api/hooks'

function Feed() {
  const { isLoggedIn } = useAppSelector((state) => state.user)
  console.log(isLoggedIn, 'sadf')

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Home />
      )}
    </>
  )
}

export default Feed
