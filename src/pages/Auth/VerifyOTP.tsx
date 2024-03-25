import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormApi } from '../../api/hooks'
import Form from '../../components/Form'
import Input from '../../components/Input'
import ErrorText from '../../components/ErrorText'
import Button from '../../components/Button'
import { OtpField } from '../../utils/types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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

  return (
    <>
      <Form fetching={fetching} onSubmit={handleSubmit(handleOtp)}>
        <>
          <Input
            label="Enter 6 digit OTP"
            register={register}
            name="otp"
            type="text"
            placeholder="Enter Your otp"
          />
          {error && <ErrorText message={error.message} />}
          <Button children={'Submit'} type="submit" className="mt-6 w-full" />
        </>
      </Form>
    </>
  )
}

export default VerifyOTP
