import { Navigate, Outlet, useMatch } from 'react-router-dom'
import { Logo } from '@/components'

function Auth() {
  if (useMatch('/auth')) {
    return <Navigate to={'/'} />
  }

  return (
    // <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
    //   <div className="mb-5 md:ms-5">
    //     <Logo />
    //   </div>
    //   <Outlet />
    // </div>
    <Outlet />
  )
}

export default Auth
