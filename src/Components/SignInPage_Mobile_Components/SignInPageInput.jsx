import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import DropdownMenu from '../Sign Up page Component/SignUpPageRightModel/Dropdown'

const SignInPageInput = ({
  inputs,
  selectedRole,
  setSelectedRole,
  formData,
  setFormData
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='mb-10 flex flex-col items-center w-full px-4'>
      <div className='w-full max-w-md space-y-4'>
        {inputs.map((input, index) => (
          <div key={index} className='relative'>
            {input.type === 'dropdown'
              ? (
                <DropdownMenu
                  heading={input.placeholder}
                  options={input.options}
                  onSelect={setSelectedRole}
                  buttonClassName='h-11 px-4 rounded-lg bg-pink-100 border border-gray-300 text-gray-500'
                  divClassName='bg-white'
                />
                )
              : (
                <>
                  <input
                    type={
                    input.type === 'password' && !showPassword
                      ? 'password'
                      : input.type
                  }
                    placeholder={input.placeholder}
                    value={formData[input.type] || ''}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [input.type]: e.target.value
                      }))}
                    className='w-full h-10 px-4 rounded-lg bg-pink-100 border border-gray-400
                  text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300'
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
                </>
                )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SignInPageInput
