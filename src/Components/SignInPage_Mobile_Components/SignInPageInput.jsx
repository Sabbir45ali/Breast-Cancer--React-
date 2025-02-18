import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignInPageInput = ({ inputs }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='mb-10 flex flex-col justify-center items-center w-full px-4'>
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-4'>
        {inputs.map((input, index) => (
          <div key={index} className='relative'>
            <input
              type={
                input.type === 'password' && !showPassword ? 'password' : 'text'
              }
              placeholder={input.placeholder}
              style={{ background: input.background || '#F3DCE0' }}
              className='w-full px-4 py-3 rounded-lg border border-gray-400 text-gray-700
                placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300
                sm:py-4 sm:text-lg md:py-5 md:text-xl pr-12'
            />
            {input.type === 'password' && (
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute inset-y-0 right-3 flex items-center text-gray-600'
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SignInPageInput
