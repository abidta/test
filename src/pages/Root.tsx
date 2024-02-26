import { Outlet, useMatch } from 'react-router-dom'
import { useAppSelector } from '../api/hooks'
import Layout from './Layout'
import Home from './Home'

function Root() {
  const { isLoggedIn } = useAppSelector((state) => state.user)
  console.log(isLoggedIn,'logged in ');
  const isRoot= useMatch('/')
  console.log(isRoot,'kllllll');
  
  return (
    <>
      {isLoggedIn ? <Layout /> : <>{isRoot  ?  <Home /> :<Outlet />}</>}
    </>
  )
}

export default Root
