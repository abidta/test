import { api } from '../api/axios'

export const paths = {
  SIGNUP: '/signup',
  lOGIN: '/login',
  LOGOUT: '/logout',
} as const
export const rootLoader = async () => {
  let { data } = await api.get('/api/test')
  let isLoggedIn = data?.success || data?.error
  console.log(isLoggedIn)

  return { isLoggedIn }
}
