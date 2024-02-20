import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFields } from '../utils/types'
import { useAppDispatch, useFormApi } from '../api/hooks'
import ErrorText from '../components/ErrorText'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/user'
import { useEffect } from 'react'

function Login() {
  const { register, handleSubmit } = useForm<LoginFields>()
  const { error, fetching, submitForm, data } = useFormApi('/auth/login')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // const { isLoggedIn } = useSelector((state) => state.user)
  useEffect(() => {
    console.log('mount')
    if (data?.success) {
      console.log(data, 'login data')
      dispatch(login(data?.data))
      navigate('/')
    }
    return () => {
      console.log('unmount')
    }
  }, [data])

  if (error) {
    console.log('err=>>', error)
  }
  const handleLogin: SubmitHandler<LoginFields> = async (inputData) => {
    submitForm(inputData)
  }

  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className="mb-5 md:ms-5">
        <Logo />
      </div>
      <Form fetching={fetching} onSubmit={handleSubmit(handleLogin)}>
        <>
          <div>
            <Input
              required
              register={register}
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
            />
            <Input
              required
              register={register}
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </div>
          {error && <ErrorText message={error.message} />}
          <Button child={'Login'} type="submit" path="LOGIN" className="mt-6 w-full" />
        </>
      </Form>
    </div>
  )
}

export default Login
