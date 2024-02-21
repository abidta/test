export const SESSION_TTL: number = new Date().getTime() + 60 * 60 * 1000
export const paths = {
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
  LOGOUT: 'auth//logout',
} as const
