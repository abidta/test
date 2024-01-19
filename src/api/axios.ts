import axios, { type AxiosInstance} from 'axios'

export const api: AxiosInstance = axios.create({ baseURL: 'http://localhost:3000' })
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('error')
    let errObj = error?.response

  return  Promise.reject(errObj)
  }
)
