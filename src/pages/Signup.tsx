import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { InputFields } from '../utils/types'
import ErrorText from '../components/ErrorText'
import { useFormApi } from '../api/hooks'

function Signup() {
  const { register, handleSubmit } = useForm<InputFields>()
  const { data, error, fetching, submitForm } = useFormApi('/auth/signup')
  const handleSignup: SubmitHandler<InputFields> = async (inputData) => {
    submitForm(inputData)
  }
  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className="mb-5 md:ms-5">
        <Logo />
      </div>
      {data ? (
        <>
          Success
          <div>
            <Button child={'Goto Login'} type="button" path="LOGIN" />{' '}
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
            <Button className="mt-6 w-full" type="submit" child={'Create Account'} />
          </>
        </Form>
      )}
    </div>
  )
}

export default Signup
