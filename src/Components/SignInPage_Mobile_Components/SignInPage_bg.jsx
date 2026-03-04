import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MobileLandingPageFemale1 from '../../assets/Images/MobileLandingPageFemale1.png'
import SignInPageInput from './SignInPageInput'
import SignInButton from '../SignIn page Component/SignInButton'
import Header from '../Sign Up page Component/SignUpPageRightModel/Header'
import SignInPage_Footer from './SignInPage_Footer'
import ForgotPasswordModal from '../Universal Components/ForgotPasswordModal'
import { RxCrossCircled } from 'react-icons/rx'

const API_ENDPOINTS = {
  User: 'http://127.0.0.1:8000/api/user/login/',
  Organisation: 'http://127.0.0.1:8000/api/org/login/'
}

const SignInPage_bg = () => {
  const navigate = useNavigate()

  const [selectedRole, setSelectedRole] = useState(null)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)

  // ✅ AUTO LOGIN
  useEffect(() => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    // ✅ Only redirect if token REALLY exists
    if (token && role) {
      if (role === 'user') {
        navigate('/home', { replace: true })
        return
      }

      if (role === 'org') {
        navigate('/org-home', { replace: true })
      }
    }
  }, [])

  const inputFields = [
    {
      type: 'dropdown',
      placeholder: 'Sign In as',
      options: ['Organisation', 'User'],
      background: '#F3DCE0'
    },
    {
      type: 'email',
      placeholder: 'Email',
      background: '#F3DCE0'
    },
    {
      type: 'password',
      placeholder: 'Password',
      background: '#F3DCE0'
    }
  ]

  // LOGIN
  const handleSignIn = async () => {
    if (!selectedRole) {
      setError('Please select role')
      return
    }

    if (!formData.email || !formData.password) {
      setError('Email and password required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(API_ENDPOINTS[selectedRole], {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Login failed')
        setLoading(false)
        return
      }

      // ✅ SAVE LOGIN SESSION

      localStorage.setItem('uid', data.uid)

      localStorage.setItem('email', data.email || formData.email)

      // Normalize role

      const role = (data.role || selectedRole).toLowerCase()

      localStorage.setItem('role', role)

      if (data.token) localStorage.setItem('token', data.token)

      // ✅ REDIRECT

      if (role === 'user') navigate('/home')

      if (role === 'org') navigate('/org-home')
    } catch (err) {
      setError('Server connection error')
    }

    setLoading(false)
  }

  return (
    <div className='bg-gradient-to-r from-[#f0779f] bg-[#e4d4d9] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative'>
      <div className='relative top-20 w-full flex justify-center mt-8'>
        <img
          src={MobileLandingPageFemale1}
          alt='Mobile Landing'
          className='w-[200px] h-[200px]'
        />
      </div>

      <div
        className={`relative top-24 flex flex-col w-full max-w-[400px] bg-white rounded-2xl shadow-2xl ${
          isForgotPasswordOpen ? 'blur-sm' : ''
        }`}
      >
        <div className='relative flex flex-col items-center py-5 space-y-3'>
          <Header
            FirstLetter='S'
            Firstpart='ign'
            SecondLetter='I'
            Secondpart='n'
            text='Use email and password'
          />

          <Link to='/'>
            <RxCrossCircled className='absolute top-4 right-4 text-2xl bg-pink-100 text-pink-600 rounded-full' />
          </Link>

          <SignInPageInput
            inputs={inputFields}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            formData={formData}
            setFormData={setFormData}
          />

          <SignInButton onClick={handleSignIn} disabled={loading} />

          {loading && <p className='text-gray-500 text-sm'>Signing in...</p>}

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <div className='text-sm'>
            Forgot password?{' '}
            <button
              onClick={() => {
                if (!selectedRole) {
                  setError('Select role first')
                  return
                }
                setIsForgotPasswordOpen(true)
              }}
              className='text-[#FF6699] underline'
            >
              Click here!
            </button>
          </div>
        </div>

        <Link to='/signup'>
          <SignInPage_Footer
            FooterText1="Don't have an account?"
            FooterText2='Sign-Up'
          />
        </Link>
      </div>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  )
}

export default SignInPage_bg
