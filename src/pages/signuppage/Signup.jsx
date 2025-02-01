import React, { useState } from 'react'
import SignupMainModal from '../../Components/Signup page Component/SignupMainModal'
import LeftModel from '../../Components/LogIn page Component/LoginPageLeftModel/LeftModel'
import Login from '../LoginPage/Login'

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [animationClass, setAnimationClass] = useState('')

  const handleRightModelClick = () => {
    setAnimationClass('-translate-x-full') // Apply sliding out effect for signup -> login transition
    setTimeout(() => setIsLogin(true), 500) // After animation, switch to Login
  }

  return (
    <>
      {!isLogin
        ? (
          <div className='flex flex-row h-screen items-center justify-center bg-pink-100 '>
            <div className='flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden '>
              <SignupMainModal
                onForgotPasswordClick={() =>
                  console.log('Forgot Password Clicked')}
              />
              <div
                className={` flex w-full transform transition-transform duration-300 ease-in-out ${animationClass}`}
              >
                <LeftModel
                  Header='Hello user!'
                  Text="If you don't have an account"
                  btn='SIGN-UP'
                  btnColor='#EE3E90'
                  handleRightModelClick={handleRightModelClick}
                />
              </div>
            </div>
          </div>
          )
        : (
          <div className='transform translate-x-0 transition-transform duration-500'>
            <Login />
          </div>
          )}
    </>
  )
}

export default Signup
