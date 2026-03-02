import React, { useState } from 'react'
import Input from './Input'
import Header from './Header'
import SignUpButton from './SignUpButton'
import DropdownMenu from './Dropdown'
import { useNavigate } from 'react-router-dom'

const MainRightModel = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [formValues, setFormValues] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const options = ['Organisation', 'User']

  const endpoints = {
    User: 'http://127.0.0.1:8000/api/user/signup/',
    Organisation: 'http://127.0.0.1:8000/api/org/signup/'
  }

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedRole) return

    setLoading(true)
    setError(null)

    try {
      let payload = {}

      if (selectedRole === 'User') {
        payload = {
          name: formValues.name,
          phone: formValues.phone,
          email: formValues.email,
          password: formValues.password
        }
      }

      if (selectedRole === 'Organisation') {
        payload = {
          org_name: formValues.org_name,
          phone: formValues.phone,
          email: formValues.email,
          type: formValues.type,
          license: formValues.license,
          password: formValues.password
        }
      }

      console.log('SENDING:', payload)

      const res = await fetch(endpoints[selectedRole], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (res.ok) {
        navigate('/signin')
      } else {
        setError(data.error || 'Signup failed')
      }
    } catch (err) {
      setError('Server connection error')
    }

    setLoading(false)
  }

  return (
    <div className='flex flex-col items-center justify-center h-full w-full space-y-3 px-4'>
      <Header
        FirstLetter='C'
        SecondLetter='A'
        Firstpart='reate '
        Secondpart='ccount'
        text='Use email for registration'
      />

      <DropdownMenu
        heading='Create Account as'
        options={options}
        onSelect={setSelectedRole}
        buttonClassName='bg-gray-200 text-gray-600 font-semibold'
        divClassName='bg-gray-200'
      />

      {selectedRole && (
        <form
          onSubmit={handleSubmit}
          className='space-y-3 w-80'
          autoComplete='off'
        >
          <Input
            role={selectedRole}
            onChange={{ values: formValues, handleChange }}
          />

          <div className='flex justify-center'>
            <SignUpButton loading={loading} role={selectedRole} />
          </div>

          {error && <span className='text-red-500'>{error}</span>}
        </form>
      )}
    </div>
  )
}

export default MainRightModel
