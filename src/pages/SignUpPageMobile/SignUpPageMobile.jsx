import React from 'react'
import SignInPageInputes from '../../Components/SignInPage_Mobile_Components/SignInPageInput'
import SignInPage_Buttons from '../../Components/SignInPage_Mobile_Components/SignInPage_Button'
import Header from '../../Components/LogIn page Component/LoginPageRightModel/Header'

const SignUpPageMobile = () => {
  const inputFields = [
    { type: 'text', placeholder: 'Enter your name', background: '#F3DCE0' },
    {
      type: 'number',
      placeholder: 'Enter your phone number',
      background: '#F3DCE0'
    },
    { type: 'email', placeholder: 'Enter your email', background: '#F3DCE0' },
    {
      type: 'password',
      placeholder: 'Enter your password',
      background: '#F3DCE0'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4 sm:px-6'>
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md bg-white p-6 rounded-2xl shadow-lg'>
        <Header
          FirstLetter='C'
          Firstpart='reate'
          SecondLetter='A'
          Secondpart='ccount'
          text='Use email for registration'
        />
        <SignInPageInputes inputs={inputFields} />

        <SignInPage_Buttons
          label='Sign-Up'
          bgColor='#FF6699'
          textColor='#FFFFFF'
          className='w-full mt-4'
        />
      </div>
    </div>
    
  )
}

export default SignUpPageMobile
