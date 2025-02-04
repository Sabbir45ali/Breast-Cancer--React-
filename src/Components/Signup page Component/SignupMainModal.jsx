import React from 'react'
import Header from '../../Components/LogIn page Component/LoginPageRightModel/Header'
import SignupInput from '../../Components/Signup page Component/signupinput'
import UniversalButton from '../../Components/LogIn page Component/LoginPageRightModel/UniversalButton'

const SignupMainModal = (props) => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-1/2'>
      <Header
        FirstLetter='S'
        SecondLetter='I'
        Firstpart='ign '
        Secondpart='n'
      />
      <SignupInput />
      <div className=''>
        <UniversalButton btn='SIGN-IN' btnColor='#FF8ABA' />
      </div>
      <div className='mt-4'>
        <button
          className='text-pink-500 underline hover:text-pink-700 focus:outline-none'
          onClick={() => console.log('Forgot Password Clicked')}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  )
}

export default SignupMainModal
