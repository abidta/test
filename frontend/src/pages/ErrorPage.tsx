import { useRouteError } from 'react-router-dom'

type ErrorType = {
  statusText: string
  message: string
  status: number
}

function ErrorPage() {
  const error = useRouteError() as ErrorType
  console.error(error)
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <p>Oops</p>
        <p>{error.status}</p>
        <i>{error.statusText || error.message}</i>
      </div>
    </>
  )
}

export default ErrorPage
