function ErrorText({ message }: { message: string | Error['message'] }) {
  return (
    <div>
      <p className="text-red-500">{message} </p>
    </div>
  )
}

export default ErrorText
