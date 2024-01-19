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
  fetching: boolean
  data: object | null
  error?: Error | null
  submitForm: SubmitForm
}

type SubmitForm = (inputData: object) => void
