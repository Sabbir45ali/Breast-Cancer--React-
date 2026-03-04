import React, { useState, useEffect } from 'react'
import Header from '../Sign Up page Component/SignUpPageRightModel/Header'
import SignInButton from './SignInButton'
import SignInInput from './SignInInput'
import { useNavigate, Link } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../../firebase'
import { FcGoogle } from 'react-icons/fc'
const SignInMainModal = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })
  const [passwordRules] = useState(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const [isAccountLocked, setIsAccountLocked] = useState(false)
  const [shouldShake, setShouldShake] = useState(false)

  const MAX_LOGIN_ATTEMPTS = 5
  const LOCKOUT_DURATION = 15 * 60 * 1000

  const navigate = useNavigate()

  // 🔒 LOCKOUT CHECK
  useEffect(() => {
    const lockoutTime = localStorage.getItem('loginLockoutTime')
    if (lockoutTime) {
      const timeRemaining = parseInt(lockoutTime) - Date.now()
      if (timeRemaining > 0) {
        setIsAccountLocked(true)
        setTimeout(() => {
          setIsAccountLocked(false)
          localStorage.removeItem('loginLockoutTime')
          localStorage.removeItem('failedLoginAttempts')
          setFailedAttempts(0)
        }, timeRemaining)
      } else {
        localStorage.removeItem('loginLockoutTime')
        localStorage.removeItem('failedLoginAttempts')
      }
    }
  }, [])

  // 🔁 AUTO LOGIN
  useEffect(() => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    if (token && role) {
      if (role === 'user') navigate('/home')
      if (role === 'org') navigate('/org-home')
    }
  }, [navigate])

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }))
    setError(null)
  }

  // 🔥 EMAIL SIGN-IN (Firebase)
  const handleSignIn = async () => {
    if (isAccountLocked) {
      setError('Account locked. Try again later.')
      return
    }

    if (!selectedRole) {
      setError('Please select your role')
      return
    }

    if (!formValues.email || !formValues.password) {
      setError('Please fill all fields')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formValues.email.trim(),
        formValues.password
      )

      const user = userCredential.user

      // 🚫 BLOCK IF EMAIL NOT VERIFIED
      if (!user.emailVerified) {
        setError('Please verify your email before signing in.')
        setLoading(false)
        return
      }

      const idToken = await user.getIdToken()

      // RESET LOCKOUT
      setFailedAttempts(0)
      localStorage.removeItem('failedLoginAttempts')
      localStorage.removeItem('loginLockoutTime')

      localStorage.setItem('token', idToken)
      localStorage.setItem('uid', user.uid)
      localStorage.setItem('role', selectedRole.toLowerCase())

      navigate(selectedRole === 'Organisation' ? '/org-home' : '/home')
    } catch (err) {
      console.error(err)

      setShouldShake(true)
      if (navigator.vibrate) navigator.vibrate(100)

      const attempts = failedAttempts + 1
      setFailedAttempts(attempts)
      localStorage.setItem('failedLoginAttempts', attempts.toString())

      if (attempts >= MAX_LOGIN_ATTEMPTS) {
        setIsAccountLocked(true)
        const lockoutTime = Date.now() + LOCKOUT_DURATION
        localStorage.setItem('loginLockoutTime', lockoutTime.toString())
        setError('Too many failed attempts. Account locked for 15 minutes.')
      } else {
        setError(
          `Invalid credentials. ${MAX_LOGIN_ATTEMPTS - attempts} attempts remaining.`
        )
      }

      setTimeout(() => setShouldShake(false), 500)
    }

    setLoading(false)
  }

  // 🔥 GOOGLE SIGN-IN
  const handleGoogleSignIn = async () => {
    if (!selectedRole) {
      setError('Please select your role first')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      const idToken = await user.getIdToken()

      localStorage.setItem('token', idToken)
      localStorage.setItem('uid', user.uid)
      localStorage.setItem('role', selectedRole.toLowerCase())

      navigate(selectedRole === 'Organisation' ? '/org-home' : '/home')
    } catch (err) {
      console.error(err)
      setError('Google sign-in failed')
    }

    setLoading(false)
  }

  return (
    <div
      className={`flex flex-col items-center justify-center h-full w-full ${
        shouldShake ? 'animate-shake' : ''
      }`}
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
          passwordRules={passwordRules}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
        />

        <SignInButton
          onClick={handleSignIn}
          disabled={loading || isAccountLocked}
        />

        {/* Google Button */}
        <button
          type='button'
          onClick={handleGoogleSignIn}
          className='w-full mt-3 flex items-center justify-center gap-3 border border-gray-300 bg-white py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200'
        >
          <FcGoogle size={22} />
          <span className='font-medium text-gray-700'>
            Continue with Google
          </span>
        </button>

        {loading && (
          <p className='mt-4 text-gray-600 font-medium'>Signing in...</p>
        )}

        {error && (
          <div className='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg w-full'>
            <p className='text-red-700 text-sm font-medium'>{error}</p>
          </div>
        )}

        <div className='mt-6 flex gap-2'>
          <Link
            to='/forgot-password'
            className='text-blue-600 hover:text-blue-800 text-sm font-medium'
          >
            Forgot Password?
          </Link>
          <span className='text-gray-300'>|</span>
          <Link
            to='/signup'
            className='text-blue-600 hover:text-blue-800 text-sm font-medium'
          >
            Create Account
          </Link>
        </div>

        {isAccountLocked && (
          <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg w-full'>
            <p className='text-yellow-700 text-xs font-medium'>
              🔒 Account temporarily locked for security.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignInMainModal
