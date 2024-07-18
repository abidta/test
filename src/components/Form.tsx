import type React from 'react'
import Loader from './Loader'

type FormType = {
  children: React.JSX.Element
  fetching?: boolean
  className?: string
  onSubmit: () => void
}

function FormComponent({ children, onSubmit, fetching, className }: FormType) {
  return (
    <form
      onSubmit={onSubmit}
      //   action=""
      className={className}
      method="POST"
    >
      {fetching && <Loader />}
      {children}
    </form>
  )
}

export default FormComponent
