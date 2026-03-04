import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa'
import DropdownMenu from '../Sign Up page Component/SignUpPageRightModel/Dropdown'
import { getPasswordValidation } from '../../utils/passwordValidator'

const SignInPageInput = ({
  inputs,
  selectedRole,
  setSelectedRole,
  formData,
  setFormData,
  passwordRules,
  setPasswordRules,
  showTooltip,
  setShowTooltip
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='mb-10 flex flex-col items-center w-full px-4'>
      <div className='w-full max-w-md space-y-4'>
        {inputs.map((input, index) => (
          <div key={index} className='relative'>
            {input.type === 'dropdown' ? (
              <DropdownMenu
                heading={input.placeholder}
                options={input.options}
                onSelect={setSelectedRole}
                buttonClassName='h-11 px-4 rounded-lg bg-pink-100 border border-gray-300 text-gray-500'
                divClassName='bg-white'
              />
            ) : (
              <>
                <input
                  type={
                    input.type === 'password' && !showPassword
                      ? 'password'
                      : input.type
                  }
                  placeholder={input.placeholder}
                  value={formData[input.type] || ''}
                  onChange={(e) => {
                    const value = e.target.value

                    setFormData((prev) => ({
                      ...prev,
                      [input.type]: value
                    }))

                    if (input.type === 'password') {
                      setPasswordRules(getPasswordValidation(value))
                    }
                  }}
                  className='w-full h-10 px-4 pr-20 rounded-lg bg-pink-100 border border-gray-400 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300'
                />

                {/* PASSWORD ICONS */}
                {input.type === 'password' && (
                  <>
                    {/* Eye */}
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-10 top-1/2 -translate-y-1/2 text-gray-600'
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>

                    {/* Info */}
                    <button
                      type='button'
                      onClick={() => setShowTooltip((prev) => !prev)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-blue-500'
                    >
                      <FaInfoCircle />
                    </button>
                  </>
                )}

                {/* Floating Tooltip */}
                {input.type === 'password' && showTooltip && (
                  <div className='absolute left-0 right-0 top-12 bg-white border shadow-lg rounded-xl p-3 text-xs z-50'>
                    <p
                      className={
                        passwordRules.length
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                    >
                      • Minimum 8 characters
                    </p>
                    <p
                      className={
                        passwordRules.uppercase
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                    >
                      • One uppercase letter
                    </p>
                    <p
                      className={
                        passwordRules.lowercase
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                    >
                      • One lowercase letter
                    </p>
                    <p
                      className={
                        passwordRules.number
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                    >
                      • One number
                    </p>
                    <p
                      className={
                        passwordRules.special
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                    >
                      • One special character
                    </p>
                  </div>
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
