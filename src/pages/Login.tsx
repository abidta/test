import React from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Logo from '../components/Logo'

function Login() {
  const handleLogin = async (e: React.FormEvent) => {
    console.log(e)
    e.preventDefault()
  }
  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className="mb-5 md:ms-5">
        <Logo />
      </div>
      <Form
        onSubmit={handleLogin}
        child={
          <>
            <div>
              <Input label="Email" type="email" name='email' required  />
              <Input label="Password" type="password" name='password' required />
            </div>
            <Button child={'Login'} type="submit" path="lOGIN" className="mt-6 w-full" />
          </>
        }
      />
    </div>
  )
}

export default Login
