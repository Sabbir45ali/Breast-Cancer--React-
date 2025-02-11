import React from 'react'
import SignInPageInputes from '../../Components/SignInPage_Mobile_Components/SignInPageInput'
import SigninPage_Buttons from '../../Components/SignInPage_Mobile_Components/SignInPage_Button'
import BgImageSignup from '../../assets/Images/SignInPage.png'
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
    <div 
    
    className=''>
    <div
    style={{
      backgroundImage: `url(${BgImageSignup})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    className='min-h-screen flex flex-col items-center justify-center  px-4 sm:px-6'>
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md bg-white p-6 rounded-2xl shadow-lg absolute bottom-4 right-4 '>
        <SignInPageInputes inputs={inputFields} />

        <SigninPage_Buttons
          label='Sign-Up'
          bgColor='#FF6699'
          textColor='#FFFFFF'
          className='w-full mt-4'
        />
      </div>
    </div>
    </div>
  )
}

export default SignUpPageMobile
