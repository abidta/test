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
  const {isLoggedIn} = JSON.parse(localStorage.getItem('user')!)
  console.log(isLoggedIn,'sdghi');
  
  if (isLoggedIn) {
    return redirect('/')
  }
  return null
}
