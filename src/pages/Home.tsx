import Button from '../components/Button'
import Logo from '../components/Logo'

function Home() {
  return (
    <div className="h-[100vh] ">
      <div className=" flex justify-between items-center">
        <Logo />
      </div>
      <div className="w-full md:w-1/2 ml-5 mt-10">
        <h1 className="text-5xl font-semibold leading-relaxed">
          A Open Source Social Media App.
        </h1>
        <h3 className="text-2xl mt-5">
          Cheriya lokam helps you connect and share with the people in your life.
        </h3>
        <div className="flex items-center mt-7">
          <Button
            type="button"
            path={'SIGNUP'}
            className=" text-lg font-semibold mx-2"
            children={'Signup'}
          />
          <p className="mx-3 font-semibold">Or</p>
          <Button
            type="button"
            path={'LOGIN'}
            className=" text-lg font-semibold mx-2"
            children={'Login'}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
