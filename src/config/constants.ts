export const SESSION_TTL: number = new Date().getTime() + 60 * 60 * 1000
export const paths = {
  SIGNUP: '/signup',
  LOGIN: '/login',
  LOGOUT: '/logout',
} as const
