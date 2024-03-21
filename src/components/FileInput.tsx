import { FileInput } from '../utils/types'

function FileInput({ name, register, type, multiple, onchange }: FileInput) {
  return (
    <div>
      <input
        type={type}
        {...register(name)}
        onChange={onchange}
        multiple={multiple}
      />
    </div>
  )
}

export default FileInput
