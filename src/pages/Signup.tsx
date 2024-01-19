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
            <Button child={'Goto Login'} type="button" path="lOGIN" />{' '}
          </div>
        </>
      ) : (
        <Form
          fetching={fetching}
          onSubmit={handleSubmit(handleSignup)}
          child={
            <>
              <div>
                <Input
                  label={'username'}
                  type="text"
                  name="username"
                  register={register}
                  required
                />
                <Input
                  label="Full Name"
                  type="text"
                  name="fullName"
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
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  register={register}
                  required
                />
              </div>
              {error && <ErrorText message={error.message} />}
              <Button className="mt-6 w-full" type="submit" child={'Create Account'} />
            </>
          }
        />
      )}
    </div>
  )
}

export default Signup
