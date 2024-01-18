import type React from 'react'
import { Form } from 'react-router-dom'
type FormType = {
  child: React.JSX.Element
  onSubmit: () => void
}

function FormComponent({ child, onSubmit }: FormType) {
  return (
    <form
      onSubmit={onSubmit}
      //   action=""
      method="POST"
      className="md:w-96 w-10/12 mx-auto border border-slate-100 rounded-md shadow-sm p-7 bg-white"
    >
      {child}
    </form>
  )
}

export default FormComponent
