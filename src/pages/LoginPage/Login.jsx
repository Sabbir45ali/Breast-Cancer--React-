import React, { useState } from 'react'
import LeftModel from '../../Components/LogIn page Component/LoginPageLeftModel/LeftModel'
import MainRightModel from '../../Components/LogIn page Component/LoginPageRightModel/MainRightModel'

const Login = () => {
  return (
    // skipcq: JS-0424
    <>
      <div className='flex flex-row h-screen items-center justify-center bg-pink-100'>
        <div className='flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden'>
          <div
            // skipcq: JS-R1004
            className=' flex w-full transform transition-transform duration-300 ease-in-out'
          >
            <LeftModel
              Header='Welcome user!'
              Text='If you are already registered'
              btn='SIGN-IN'
              btnColor='#9D094D'
              // skipcq: JS-0417, JS-0125
            />
          </div>
          <MainRightModel />
        </div>
      </div>
    </>
  )
}

export default Login
