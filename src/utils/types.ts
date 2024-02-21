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
export type OtpField={
  email:string
  otp:string
}
type IndexType<T> = {
  T: [keyof T]
}
type OmitIndexSignature<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}
export type PostField = IndexType<InputFields>
export type LoginFields = Omit<OmitIndexSignature<InputFields>, 'fullName' | 'username'>
export type RegisterType = UseFormRegister<InputFields | LoginFields | PostField |OtpField>

export type UseForm = (endpoint: string) => UseFormResponse
export type UseFormResponse = {
  submitForm: SubmitForm
} & Omit<UseApiResponse, 'submitApi'>

export type UseApiResponse = {
  fetching: boolean
  data: any
  error?: Error | null
  submitApi: UseApiSubmit
}

type SubmitForm = (inputData: object) => void

export type InitialStateUser = {
  data: any
  isLoggedIn: boolean
}
export type UseApiSubmit<D = any> = (
  body?: D,
  params?: any,
  headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
) => void
export type UseApi = (endpoint: string, method: Method) => UseApiResponse
export type Session = {
  user: InitialStateUser
  expiry: number
}
