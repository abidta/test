import { UseFormRegister } from 'react-hook-form'
import { InputFielld } from '../utils/types'

type InputType = 'text' | 'password' | 'email'
type InputName = 'username' | 'password' | 'email' | 'fullName'
type InputProp = {
  name: InputName
  type: InputType
  label: string
  register: UseFormRegister<InputFielld>
  required?: boolean
}
function Input({ type, label, required, name, register }: InputProp) {
  return (
    <div>
      <label className="text-text-primary-color ">{label}</label>
      <br />
      <input
        className="p-1 pl-2 mb-3 border border-solid border-slate-200 rounded-md shadow-sm w-full"
        type={type}
        {...(register(name,{required}))}
        required={required ?? false}
      />
    </div>
  )
}

export default Input
