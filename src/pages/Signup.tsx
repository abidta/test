import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../api/axios'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { InputFields } from '../utils/types'
import { useState } from 'react'

function Signup() {
  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState(null)
  const [fetching, setFetching] = useState(false)
  const { register, handleSubmit } = useForm<InputFields>()
  const handleSignup: SubmitHandler<InputFields> = async (inputData) => {
    // e.preventDefault()
    setFetching(true)
    try {
      let { data } = await api.post('/auth/signup', inputData)
      setsuccess(data?.success)
    } catch (error: any) {
      console.log(error?.data.message)
      seterror(error.data.message)
    } finally {
      setFetching(false)
    }
  }
  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className="mb-5 md:ms-5">
        <Logo />
      </div>
      {success ? (
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
              {error && <p className="text-red-500">{error} </p>}
              <Button className="mt-6 w-full" type="submit" child={'Create Account'} />
            </>
          }
        />
      )}
    </div>
  )
}

export default Signup
