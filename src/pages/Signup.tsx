import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../api/axios'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { InputFielld } from '../utils/types'

function Signup() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFielld>()
  const handleSignup: SubmitHandler<InputFielld> = (data) => {
    // e.preventDefault()
    // let { data } = await api.get('/api/test')
    console.log(data, 'sdsd')
  }
  console.log(watch('username'))
  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className="mb-5 md:ms-5">
        <Logo />
      </div>
      <Form
        onSubmit={handleSubmit(handleSignup)}
        child={
          <>
            <div>
              <Input label={'username'} type="text" name="username" register={register} />
              <Input label="Full Name" type="text" name="fullName" register={register} required/>
              <Input
                label="Password"
                type="password"
                name="password"
                register={register}
              />
              <Input label="Email" type="email" name="email" register={register} />
            </div>
           
            <Button className="mt-6 w-full" type="submit" child={'Create Account'} />
          </>
        }
      />
    </div>
  )
}

export default Signup
