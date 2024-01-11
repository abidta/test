type InputType = 'text' | 'password' | 'email'
type Input = {
  type: InputType
  label: string
}
function Input({ type, label }: Input) {
  return (
    <div>
      <label className="text-text-primary-color ">{label}</label>
      <br />
      <input
        className="p-1 pl-2 mb-3 border border-solid border-slate-200 rounded-md shadow-sm w-full"
        type={type}
      />
    </div>
  )
}

export default Input
