import React, { useState } from 'react'
import SignInMainModal from '../../Components/SignIn page Component/SignInMainModal'
import SignInPageLeftModal from '../../Components/SignIn page Component/SignInPageLeftModal'

const SignIn = () => {
  return (
    // skipcq: JS-0424
    <>
      <div className='flex flex-row h-screen items-center justify-center bg-pink-100 '>
        <div className='flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden '>
          <SignInMainModal
            // skipcq: JS-0417
            onForgotPasswordClick={() => console.log('Forgot Password Clicked')}
          />
          <div
            // skipcq: JS-R1004
            className=' flex w-full transform transition-transform duration-300 ease-in-out'
          >
            <SignInPageLeftModal />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
