import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFields } from '../utils/types'
import { useFormApi } from '../api/hooks'
import ErrorText from '../components/ErrorText'

function Login() {
  const { register, handleSubmit } = useForm<LoginFields>()
  const { error, fetching, submitForm } = useFormApi('/auth/login')
  if (error) {
    console.log(error)
  }
  const handleLogin: SubmitHandler<LoginFields> = async (inputData) => {
    submitForm(inputData)
  }
  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className="mb-5 md:ms-5">
        <Logo />
      </div>
      <Form
        fetching={fetching}
        onSubmit={handleSubmit(handleLogin)}
        child={
          <>
            <div>
              <Input
                label="Email"
                type="email"
                name="email"
                register={register}
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                register={register}
                required
              />
            </div>
            {error && <ErrorText message={error.message} />}
            <Button child={'Login'} type="submit" path="lOGIN" className="mt-6 w-full" />
          </>
        }
      />
    </div>
  )
}

export default Login
