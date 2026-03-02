import React, { useState, useEffect } from 'react'
import Header from '../Sign Up page Component/SignUpPageRightModel/Header'
import SignInButton from './SignInButton'
import SignInInput from './SignInInput'
import ForgotPasswordModal from '../Universal Components/ForgotPasswordModal'
import { useNavigate } from 'react-router-dom'

const SignInMainModal = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)

  const navigate = useNavigate()

  // ✅ AUTO LOGIN
  useEffect(() => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    // Only run once
    if (token) {
      if (role === 'user') {
        window.location.href = '/home'
      }

      if (role === 'org') {
        window.location.href = '/org-home'
      }
    }
  }, [])

  const endpoints = {
    Organisation: 'http://127.0.0.1:8000/api/org/login/',
    User: 'http://127.0.0.1:8000/api/user/login/'
  }

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSignIn = async () => {
    if (!selectedRole) {
      setError('Select Role')
      return
    }

    if (!formValues.email || !formValues.password) {
      setError('Enter Email and Password')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(endpoints[selectedRole], {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password
        })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Login Failed')
        setLoading(false)
        return
      }

      // ✅ SAVE TOKEN (IMPORTANT)

      localStorage.setItem('token', data.token)
      localStorage.setItem('uid', data.uid)
      localStorage.setItem('role', data.role)
      localStorage.setItem('email', formValues.email)

      // ✅ REDIRECT

      if (data.role === 'user') navigate('/home')

      if (data.role === 'org') navigate('/org-home')
    } catch {
      setError('Server Error')
    }

    setLoading(false)
  }

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-full w-full ${isForgotPasswordOpen ? 'blur-sm' : ''}`}
      >
        <div className='w-1/2 flex flex-col items-center'>
          <Header
            FirstLetter='S'
            SecondLetter='I'
            Firstpart='ign '
            Secondpart='n'
            text='Use email and password'
          />

          <SignInInput
            onRoleSelect={setSelectedRole}
            formValues={formValues}
            onChange={handleChange}
          />

          <SignInButton onClick={handleSignIn} disabled={loading} />

          {loading && <p className='mt-2 text-gray-500'>Signing in...</p>}

          {error && <p className='text-red-600 mt-2'>{error}</p>}

          <div className='mt-4'>
            <button
              className={`underline ${
                !selectedRole
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-pink-500 hover:text-pink-700'
              }`}
              onClick={() => {
                if (!selectedRole) return
                setIsForgotPasswordOpen(true)
              }}
              disabled={!selectedRole}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInMainModal
