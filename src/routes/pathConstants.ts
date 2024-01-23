import { redirect } from "react-router-dom"

export const paths = {
  SIGNUP: '/signup',
  LOGIN: '/login',
  LOGOUT: '/logout',
} as const
export const rootLoader = async () => {
  return true
}
export const authLoader=()=>{
  const user = JSON.parse(localStorage.getItem('user')!)
  console.log(user,'sdghi');
  
  if (user?.isLoggedIn) {
    return redirect('/')
  }
  return null
}
