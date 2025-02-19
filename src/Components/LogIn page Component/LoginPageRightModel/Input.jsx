import React, { useState } from 'react'
import InputField from './InputField'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
const Input = () => {
  const [showPassword, setShowPassword] = useState(false)

  const inputFields = [
    { type: 'text', placeholder: 'Name' },
    { type: 'text', placeholder: 'Phone No' },
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Password' }
  ]

  return (
    <div className='flex items-center justify-center p-6 sm:p-10 md:p-14 min-h-screen'>
      <form className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-4'>
        {inputFields.map((field, index) => (
          <div key={index} className='relative'>
            <InputField
              type={
                field.type === 'password' && !showPassword ? 'password' : 'text'
              }
              placeholder={field.placeholder}
            />
            {field.type === 'password' && (
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
      </form>
    </div>
  )
}

export default Input
