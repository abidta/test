import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../../components/Button'
import Form from '../../components/Form'
import Input from '../../components/Input'
import { InputFields } from '../../utils/types'
import ErrorText from '../../components/ErrorText'
import { useFormApi } from '../../api/hooks'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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
            <Button children={'Goto Login'} type="button" path="LOGIN" />{' '}
          </div>
        </>
      ) : (
        <Form fetching={fetching} onSubmit={handleSubmit(handleSignup)}>
          <>
            <div>
              <Input
                required
                register={register}
                label="username"
                type="text"
                name="username"
                autoComplete="username"
              />
              <Input
                required
                register={register}
                label="Full Name"
                type="text"
                name="fullName"
                autoComplete="name"
              />
              <Input
                required
                register={register}
                label="Password"
                type="password"
                name="password"
                autoComplete="new-password"
              />
              <Input
                required
                register={register}
                label="Email"
                type="email"
                name="email"
              />
            </div>
            {error && <ErrorText message={error.message} />}
            <Button className="mt-6 w-full" type="submit" children={'Create Account'} />
          </>
        </Form>
      )}
    </>
  )
}

export default Signup
