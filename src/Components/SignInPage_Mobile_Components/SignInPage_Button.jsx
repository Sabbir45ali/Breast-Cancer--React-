import React from 'react'
import { Link } from 'react-router-dom'
const SigninPage_Buttons = ({ label, bgColor, textColor, onClick }) => {
  return (
    <div className='flex justify-center items-center w-full'>
        <button
          className='w-36 text-white text-lg py-2 px-6 bg-[#AB1B68] shadow-lg rounded-lg  cursor-pointer'
        >
          {label}
        </button>
    </div>
  )
}

export default SigninPage_Buttons
