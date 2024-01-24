/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosHeaders, Method, MethodsHeaders, RawAxiosRequestHeaders } from 'axios'
import { UseFormRegister } from 'react-hook-form'
export type InputFields = {
  username: string
  fullName: string
  email: string
  password: string
}
export type LoginFields = Omit<InputFields, 'fullName' | 'username'>
export type RegisterType = UseFormRegister<InputFields | LoginFields>

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
  isLoggedIn: boolean
}
export type UseApiSubmit<D = any> = (
  body?: D,
  params?: any,
  headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
) => void
export type UseApi = (endpoint: string, method: Method ) => UseApiResponse
export type Session={
  user:InitialStateUser,
  expiry:number
}
