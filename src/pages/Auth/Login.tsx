import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFields } from '@/utils/types'
import { useAppDispatch, useFormApi } from '@/api/hooks'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '@/redux/user'
import { useEffect } from 'react'
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react'
import { ErrorText, Form } from '@/components'
import { GoogleIcon } from '@/components/Icons'

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
    if (error?.data.status === 403) {
      navigate(`/auth/verify-otp?email=${error.data.email}`)
    }
  }, [data, error])

  if (error) {
    console.log('err=>>', error)
  }

  return (
    <div className="w-full lg:w-3/5 mt-24">
      <div className="text-center">
        <Typography variant="h2" className="font-bold mb-4">
          Sign In
        </Typography>
        <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
          Enter your email and password to Sign In.
        </Typography>
      </div>
      <Form
        onSubmit={handleSubmit(handleLogin)}
        className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
      >
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
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              {...register('email', { required: true })}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              {...register('password', { required: true })}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center justify-start font-medium"
              >
                Remember Me
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          {error && <ErrorText message={error.message} />}
          <Button
            loading={fetching}
            type="submit"
            className="mt-6 bg-primary-color"
            fullWidth
          >
            Sign In
          </Button>
          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography variant="small" className="font-medium text-gray-900 underline">
              <a href="#">Forgot Password?</a>
            </Typography>
          </div>
          <div className="space-y-4 mt-8">
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md "
              fullWidth
            >
              <GoogleIcon />
              <span>Sign in With Google</span>
            </Button>
          </div>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Not registered?
            <Link to="/auth/signup" className="text-gray-900 ml-1">
              Create account
            </Link>
          </Typography>
        </>
      </Form>
    </div>
  )
}

export default Login
