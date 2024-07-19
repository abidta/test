import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { Session } from '@/utils/types'
import { asyncApi } from '@/api/hooks'

const isLoggedIn = () => {
  const session: Session = JSON.parse(localStorage.getItem('session')!)
  return session?.user?.isLoggedIn
}

export const authLoader = () => {
  if (isLoggedIn()) {
    return redirect('/')
  }
  return null
}

export const feedLoader = () => {
  return null
}

export const rootLoader = async () => {
  return null
}

export const userLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!isLoggedIn()) {
    return redirect('/auth/login?pr=true')
  }
  
  return await asyncApi(`/${params.username}`)
 
}
