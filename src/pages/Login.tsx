import React from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFields } from '../utils/types'
import { api } from '../api/axios'

function Login() {
  const { register, handleSubmit } = useForm<LoginFields>()
  const handleLogin: SubmitHandler<LoginFields> = async (inputData) => {
    try {
      const { data } = await api.post('/auth/login', inputData)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className="mb-5 md:ms-5">
        <Logo />
      </div>
      <Form
        fetching={false}
        onSubmit={handleSubmit(handleLogin)}
        child={
          <>
            <div>
              <Input
                label="Email"
                type="email"
                name="email"
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
            </div>
            <Button child={'Login'} type="submit" path="lOGIN" className="mt-6 w-full" />
          </>
        }
      />
    </div>
  )
}

export default Login
