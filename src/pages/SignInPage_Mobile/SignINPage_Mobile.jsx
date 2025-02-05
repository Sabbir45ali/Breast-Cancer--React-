import React from 'react'
import SignInPageInput from '../../Components/SignInPage_Mobile_Components/SignInPageInput'
import SigninPage_Buttons from '../../Components/SignInPage_Mobile_Components/SignInPage_Button'
import Header from '../../Components/LogIn page Component/LoginPageRightModel/Header'

const SignInPage_Mobile = () => {
  const inputFields = [
    { type: 'email', placeholder: 'Enter your email', background: '#F3DCE0' },
    {
      type: 'password',
      placeholder: 'Enter your password',
      background: '#F3DCE0'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-pink-50'>
      <Header 
         FirstLetter='S'
         Firstpart="ign "
         SecondLetter="I"
         Secondpart="n"
         text="Use email and password"/>
      <SignInPageInput inputs={inputFields} />
      <SigninPage_Buttons
        label='Sign-In'
        bgColor='#FF6699'
        textColor='#FFFFFF'
      />
    </div>
  )
}

export default SignInPage_Mobile
