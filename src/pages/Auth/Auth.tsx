import { Logo } from '@/components'
import { Navigate, Outlet, useMatch } from 'react-router-dom'

function Auth() {
  if (useMatch('/auth')) {
    return <Navigate to={'/'} />
  }

  return (
    <section className="m-8 flex gap-4">
      <Outlet />
      <div className="w-2/5 h-full hidden lg:block bg-blend-color  ">
        <div className="absolute">
          <Logo />
        </div>
        <img
          src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl "
        />
      </div>
    </section>
  )
}

export default Auth
