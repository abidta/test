import Button from '../components/Button'
import Input from '../components/Input'
import Logo from '../components/Logo'

function Signup() {
  return (
    <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
      <div className='mb-5 md:ms-5'><Logo /></div>
      
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        action=""
        className="md:w-96 w-10/12 mx-auto border border-slate-100 rounded-md shadow-sm p-7 bg-white"
      >
        <div>
          <Input label={'username'} type="text" />
          <Input label="Full Name" type="text" />
          <Input label="Password" type="password" />
          <Input label="Email" type="email" />
        </div>
        <Button className="mt-6 w-full" type="submit" child={'Create Account'} />
      </form>
    </div>
  )
}

export default Signup
