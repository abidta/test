import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, ErrorText } from '@/components'
import { InputFields } from '@/utils/types'
import { useFormApi } from '@/api/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react'
import { GoogleIcon } from '@/components/Icons'

function Signup() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<InputFields>()
  const { data, error, fetching, submitForm } = useFormApi()

  const handleSignup: SubmitHandler<InputFields> = async (inputData) => {
    submitForm('/auth/signup', inputData)
  }

  useEffect(() => {
    if (data?.success) {
      navigate(`/auth/verify-otp?email=${data?.data?.email}`)
    }
  }, [data])

  return (
    <>
      {data ? (
        <>
          Success
          <div>
            <Link to={'auth/login'}>
              <Button children={'Goto Login'} type="button" />
            </Link>
          </div>
        </>
      ) : (
        <div className="w-full lg:w-3/5 mt-24">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">
              Sign Up
            </Typography>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="text-lg font-normal"
            >
              Enter your email and password to Sign Up.
            </Typography>
          </div>
          <Form
            onSubmit={handleSubmit(handleSignup)}
            className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          >
            <>
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  username
                </Typography>
                <Input
                  {...register('username', { required: true })}
                  autoComplete="username"
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                />
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  Your Full Name
                </Typography>
                <Input
                  {...register('fullName', { required: true })}
                  autoComplete="name"
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                />
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
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
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  Password
                </Typography>
                <Input
                  {...register('password', { required: true })}
                  autoComplete="new-password"
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
                    color="gray"
                    className="flex items-center justify-start font-medium"
                  >
                    I agree the&nbsp;
                    <a
                      href="#"
                      className="font-normal text-black transition-colors hover:text-gray-900 underline"
                    >
                      Terms and Conditions
                    </a>
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
                Sign up
              </Button>

              <div className="flex items-center justify-between gap-2 mt-6">
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center justify-start font-medium"
                    >
                      Subscribe me to newsletter
                    </Typography>
                  }
                  containerProps={{ className: '-ml-2.5' }}
                />
              </div>
              <div className="space-y-4 mt-8">
                <Button
                  size="lg"
                  color="white"
                  className="flex items-center gap-2 justify-center shadow-md "
                  fullWidth
                >
                  <GoogleIcon />
                  <span>Sign Up With Google</span>
                </Button>
              </div>
              <Typography
                variant="paragraph"
                className="text-center text-blue-gray-500 font-medium mt-4"
              >
                Already registered?
                <Link to="/auth/login" className="text-gray-900 ml-1">
                  Goto Login
                </Link>
              </Typography>
            </>
          </Form>
        </div>
      )}
    </>
  )
}

export default Signup
