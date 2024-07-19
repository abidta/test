import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormApi } from '@/api/hooks'
import { Form, ErrorText } from '@/components'
import { OtpField } from '@/utils/types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button, Input, Typography } from '@material-tailwind/react'

function VerifyOTP() {
  const navigate = useNavigate()
  const location = useLocation()

  const { data, fetching, error, submitForm } = useFormApi()
  const { register, handleSubmit } = useForm<OtpField>()

  const handleOtp: SubmitHandler<OtpField> = (inputData) => {
    const query = new URLSearchParams(location.search)
    inputData.email = query.get('email')!
    console.log(inputData, query.get('email'))
    submitForm('/auth/verify-otp', inputData)
  }

  useEffect(() => {
    if (data?.success) {
      navigate('/auth/login?success=true')
    }
  }, [data])
  console.log(error, 'lll')

  return (
    <>
      <section className='w-full lg:w-3/5 mt-24'>
        <Form
          fetching={fetching}
          onSubmit={handleSubmit(handleOtp)}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                Enter Your Otp
              </Typography>
              <Input
                {...register('otp', { required: true })}
                autoComplete="username"
                size="lg"
                placeholder="Enter Your otp"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            {error && <ErrorText message={error.message ?? error} />}
            <Button
              loading={fetching}
              type="submit"
              className="mt-6 bg-primary-color"
              fullWidth
            >
              Verify Otp
            </Button>
          </>
        </Form>
      </section>
    </>
  )
}

export default VerifyOTP
