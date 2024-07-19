export const SESSION_TTL: number = 60 * 60 * 1000

export const paths = {
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
} as const

export const fileTypes = {
  'image/png': true,
  'image/jpeg': true,
} 
