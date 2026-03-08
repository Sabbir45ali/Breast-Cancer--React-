import React, { useState } from 'react'
import Input from './Input'
import Header from './Header'
import SignUpButton from './SignUpButton'
import DropdownMenu from './Dropdown'
import { useNavigate } from 'react-router-dom'
import { getPasswordValidation } from '../../../utils/passwordValidator'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../../../firebase'
import { FcGoogle } from 'react-icons/fc'
import Loader from '../../Universal Components/Loader'

const MainRightModel = () => {
  const navigate = useNavigate()

  const [selectedRole, setSelectedRole] = useState(null)
  const [formValues, setFormValues] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  })
  const options = ['Organisation', 'User']

  const endpoints = {
    User: 'https://breast-cancer-detection-backend.onrender.com/api/user/signup/',
    Organisation: 'https://breast-cancer-detection-backend.onrender.com/api/org/signup/'
  }

  // Handle input changes
  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }))

    if (name === 'password') {
      setPasswordRules(getPasswordValidation(value))
    }
  }

  // EMAIL SIGNUP
  const handleEmailSignup = async (e) => {
    e.preventDefault()

    if (!selectedRole) {
      setError('Please select a role')
      return
    }

    const allValid = Object.values(passwordRules).every(Boolean)
    if (!allValid) {
      setError('Invalid password structure')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      )

      const user = userCredential.user

      await sendEmailVerification(user)

      const idToken = await user.getIdToken()

      let payload = {}

      if (selectedRole === 'User') {
        payload = {
          name: formValues.name,
          phone: formValues.phone,
          email: formValues.email,
          role: 'user'
        }
      }

      if (selectedRole === 'Organisation') {
        payload = {
          org_name: formValues.org_name,
          phone: formValues.phone,
          email: formValues.email,
          type: formValues.type,
          license: formValues.license,
          role: 'org'
        }
      }

      const res = await fetch(endpoints[selectedRole], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`
        },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        setError('Backend registration failed')
        setLoading(false)
        return
      }

      alert('Verification email sent. Please verify before signing in.')
      navigate('/signin')
    } catch (err) {
      console.error(err)

      if (err.code === 'auth/email-already-in-use') {
        setError('Email already registered')
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format')
      } else if (err.code === 'auth/weak-password') {
        setError('Weak password')
      } else {
        setError('Signup failed. Try again.')
      }
    }

    setLoading(false)
  }

  // GOOGLE SIGNUP
  const handleGoogleSignup = async () => {
    if (!selectedRole) {
      setError('Please select a role first')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const provider = new GoogleAuthProvider()

      const result = await signInWithPopup(auth, provider)
      const user = result.user

      const idToken = await user.getIdToken()

      let payload = {}

      if (selectedRole === 'User') {
        payload = {
          name: user.displayName || '',
          email: user.email,
          role: 'user'
        }
      }

      if (selectedRole === 'Organisation') {
        payload = {
          org_name: user.displayName || '',
          email: user.email,
          role: 'org'
        }
      }

      const res = await fetch(endpoints[selectedRole], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`
        },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        setError('Backend registration failed')
        setLoading(false)
        return
      }

      navigate('/home')
    } catch (err) {
      console.error(err)
      setError('Google signup failed')
    }

    setLoading(false)
  }

  return loading
    ? (
      <Loader />
      )
    : (
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
            onSubmit={handleEmailSignup}
            className='space-y-3 w-80'
            autoComplete='off'
          >
            <Input
              role={selectedRole}
              passwordRules={passwordRules}
              onChange={{ values: formValues, handleChange }}
            />

            {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

            <div className='flex justify-center'>
              <SignUpButton loading={loading} role={selectedRole} />
            </div>

            <button
              type='button'
              onClick={handleGoogleSignup}
              className='w-full mt-3 flex items-center justify-center gap-3 border border-gray-300 bg-white py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200'
            >
              <FcGoogle size={22} />
              <span className='font-medium text-gray-700'>
                Continue with Google
              </span>
            </button>
          </form>
        )}
      </div>
      )
}

export default MainRightModel
