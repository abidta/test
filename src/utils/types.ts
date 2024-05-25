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

// type IndexType<T> = {
//   T: [keyof T]
// }

type OmitIndexSignature<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}
// IndexType<InputFields>
export type PostField = {
  content: string
  posts: File[] | Blob[]
}

export type LoginFields = Omit<OmitIndexSignature<InputFields>, 'fullName' | 'username'>

export type RegisterType = UseFormRegister<
  InputFields | LoginFields | PostField | OtpField
>

export type UseForm = () => UseFormResponse

export type UseFormResponse = {
  submitForm: SubmitForm
} & Omit<UseApiResponse, 'submitApi' | 'mutate' | 'fetchData'>

/**
 * Use api types
 */
export type UseApiResponse = {
  fetching: boolean
  data: any
  error?: Error | null
  success: boolean
  fetchData: FetchData
  mutate: Mutate
  submitApi: UseApiSubmit
}

export type FetchData = (endpoint: string, identifier?: number | string) => void

export type Mutate = (
  endpoint: string,
  body?: any,
  method?: Method,
  identifier?: number | string
) => void

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
  identifier?: number | string,
  params?: any,
  headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
) => void

export type UseApi = () => UseApiResponse

/**
 * session types
 */
export type Session = {
  user: InitialStateUser
  expiry: number
}

/**
 * input props types
 */

type InputType = 'text' | 'password' | 'email' | 'file'
type InputName = 'username' | 'password' | 'email' | 'fullName' | string
export type InputProps = {
  name: InputName
  type: InputType
  label?: string
  register: RegisterType
  required?: boolean
  placeholder?: string
  autoComplete?: string
}

export type FileInputProps = {
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  multiple?: boolean
} & InputProps

// async thunk fetchpost param type
export type FetchPostArg = {
  page: number
  limit?: number
}
