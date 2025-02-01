import React from 'react'

const SigninPage_Buttons = ({ label, bgColor, textColor, onClick }) => {
  return (
    <button
      className='w-1/6 border border-gray-500 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300'
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {label}
    </button>
  )
}

export default SigninPage_Buttons
