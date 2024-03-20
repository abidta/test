import Button from '../../components/Button'
import Form from '../../components/Form'
import Input from '../../components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFields } from '../../utils/types'
import { useAppDispatch, useFormApi } from '../../api/hooks'
import ErrorText from '../../components/ErrorText'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../../redux/user'
import { useEffect } from 'react'

function Login() {
  const { register, handleSubmit } = useForm<LoginFields>()
  const { error, fetching, submitForm, data } = useFormApi()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const query = new URLSearchParams(location.search)
  const isSuccess = query.get('success')
  const pr = query.get('pr')

  const handleLogin: SubmitHandler<LoginFields> = async (inputData) => {
    console.log(inputData, 'input login')

    submitForm('/auth/login', inputData)
  }

  useEffect(() => {
    if (data?.success) {
      console.log(data, 'login data')
      dispatch(login(data?.data))
      navigate('/')
    }
  }, [data])

  if (error) {
    console.log('err=>>', error)
  }

  return (
    <>
      <Form fetching={fetching} onSubmit={handleSubmit(handleLogin)}>
        <>
          {pr && (
            <>
              <p className="mb-6 text-red-400">You must login first</p>
            </>
          )}
          {isSuccess && (
            <>
              <p className="mb-6 text-green-400">
                Verification is successful, <span>Login to continue.</span>{' '}
              </p>
            </>
          )}
          <div>
            <Input
              required
              register={register}
              label="Email"
              type="text"
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
          <Button children={'Login'} type="submit" path="LOGIN" className="mt-6 w-full" />
        </>
      </Form>
    </>
  )
}

export default Login
