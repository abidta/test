import { InputProps } from '../utils/types'

function Input({
  type,
  label,
  required,
  name,
  register,
  placeholder,
  autoComplete,
}: InputProps) {
  return (
    <div>
      <label className="text-text-primary-color ">{label ?? null}</label>
      <br />
      <input
        placeholder={placeholder && placeholder}
        className="p-1 pl-2 mb-3 border border-solid border-slate-200 rounded-md shadow-sm w-full"
        type={type}
        {...register(name, { required })}
        required={required ?? false}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default Input
