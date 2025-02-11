import React from 'react'
import Header from '../../Components/LogIn page Component/LoginPageRightModel/Header'
import SignupInput from '../../Components/Signup page Component/signupinput'
import SignupButton from './SignupButton'


const SignupMainModal = (props) => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-1/2'>
      <Header
        FirstLetter='S'
        SecondLetter='I'
        Firstpart='ign '
        Secondpart='n'
        text='Use email and password'
      />
      <SignupInput />
      <div className=''>
        <SignupButton/>
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
