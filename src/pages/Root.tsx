import { Outlet, useMatch } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../api/hooks'
import Home from './Home'
import { logout } from '../redux/user'
import { Session } from '../utils/types'
import { useEffect } from 'react'

function Root() {
  const session: Session = JSON.parse(localStorage.getItem('session')!)
  const dispatch = useAppDispatch()
  const { isLoggedIn } = useAppSelector((state) => state.user)
  console.log(isLoggedIn, 'logged in ')
  const isRoot = useMatch('/')
  console.log(isRoot, 'kllllll')

  useEffect(() => {
    if (session?.expiry) {
      if (session?.expiry < new Date().getTime()) {
        console.log(session.expiry, new Date().getTime())
        console.log('workout root expiry')
        dispatch(logout())
      }
    }
  }, [])

  return <>{isLoggedIn ? <Outlet /> : <>{isRoot ? <Home /> : <Outlet />}</>}</>
}

export default Root
