/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosHeaders, Method, MethodsHeaders, RawAxiosRequestHeaders } from 'axios'
import { UseFormRegister } from 'react-hook-form'
export type InputFields = {
  username: string
  fullName: string
  email: string
  password: string
  [key: string]: string
}
export type OtpField = {
  email: string
  otp: string
}
type IndexType<T> = {
  T: [keyof T]
}
type OmitIndexSignature<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}
export type PostField = IndexType<InputFields>
export type LoginFields = Omit<OmitIndexSignature<InputFields>, 'fullName' | 'username'>
export type RegisterType = UseFormRegister<
  InputFields | LoginFields | PostField | OtpField
>

export type UseForm = () => UseFormResponse
export type UseFormResponse = {
  submitForm: SubmitForm
} & Omit<UseApiResponse, 'submitApi' | 'mutate' | 'fetchData'>

export type UseApiResponse = {
  fetching: boolean
  data: any
  error?: Error | null
  success: boolean
  fetchData: FetchData
  mutate: Mutate
  submitApi: UseApiSubmit
}
export type FetchData = (endpoint: string) => void
export type Mutate = (endpoint: string, body?: any, method?: Method) => void

type SubmitForm = (endpoint: string, inputData: object) => void

export type InitialStateUser = {
  data: any
  isLoggedIn: boolean
  layout: boolean
  expiry: number
}
export type UseApiSubmit<D = any> = (
  endpoint: string,
  body?: D,
  method?: Method,
  params?: any,
  headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
) => void
export type UseApi = () => UseApiResponse
export type Session = {
  user: InitialStateUser
  expiry: number | null
}
