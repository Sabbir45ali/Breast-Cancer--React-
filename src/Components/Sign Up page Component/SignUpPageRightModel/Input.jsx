import React, { useState } from 'react'
import InputField from './InputField'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Input = ({ role, onChange, passwordRules }) => {
  const [showPassword, setShowPassword] = useState(false)

  const orgFields = [
    {
      name: 'org_name',
      type: 'text',
      placeholder: 'Organisation Name'
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: 'Phone No'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email'
    },
    {
      name: 'type',
      type: 'text',
      placeholder: 'Type of Org'
    },
    {
      name: 'license',
      type: 'text',
      placeholder: 'Licence / Reg Number'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password'
    }
  ]

  const userFields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name'
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: 'Phone No'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password'
    }
  ]

  const fieldsToRender =
    role === 'Organisation' ? orgFields : role === 'User' ? userFields : []

  return (
    <div className='w-80 space-y-3'>
      {fieldsToRender.map((field) => (
        <div key={field.name} className='relative'>
          <InputField
            type={field.type}
            placeholder={field.placeholder}
            value={onChange.values[field.name] || ''}
            onChange={(e) => onChange.handleChange(field.name, e.target.value)}
            passwordRules={
              field.name === 'password' ? passwordRules : undefined
            }
          />

          {field.type === 'password' && (
            <div
              className='absolute right-3 top-3 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
// for deploy
export default Input
