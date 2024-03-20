import { Outlet, useMatch } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../api/hooks'
import Home from './Home'
import { logout, switchLayout } from '../redux/user'
import { Session } from '../utils/types'
import { useEffect } from 'react'
import Header from '../components/Header'

function Root() {
  const session: Session = JSON.parse(localStorage.getItem('session')!)
  const dispatch = useAppDispatch()
  const { isLoggedIn, layout } = useAppSelector((state) => state.user)
  const isRoot = useMatch('/')

  console.log(isLoggedIn, 'logged in ')
  console.log(isRoot, 'kllllll')

  if (isLoggedIn && !layout && isRoot) {
    console.log('done me')
    
    dispatch(switchLayout(!layout))
  }

  useEffect(() => {
    if (session?.expiry < new Date().getTime()) {
      dispatch(logout())
    }
  }, [])

  return (
    <>
      {isLoggedIn && layout ? (
        <Outlet />
      ) : (
        <>
          {isRoot ? (
            <Home />
          ) : (
            <>
              {isLoggedIn ? (
                <>
                  <Header />
                  <Outlet />
                </>
              ) : (
                <Outlet />
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Root
