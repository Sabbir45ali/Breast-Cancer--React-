import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase'
import Logo from '../../assets/Images/Logo.png'

const ForgotPassword = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleResetPassword = async (e) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (!email) {
      setError('Enter your email')
      return
    }

    setLoading(true)

    try {
      await sendPasswordResetEmail(auth, email)

      setSuccess('Password reset link sent to your email')

      setTimeout(() => {
        navigate('/signin')
      }, 3000)
    } catch (err) {
      setError('Email not registered')
    }

    setLoading(false)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-pink-200'>
      <div className='bg-white rounded-2xl shadow-xl p-8 w-[350px]'>
        <div className='flex flex-col items-center mb-6'>
          <img src={Logo} className='w-32' />

          <h2 className='text-2xl font-bold mt-3'>Forgot Password</h2>

          <p className='text-gray-500 text-sm text-center mt-2'>
            Enter your email to reset password
          </p>
        </div>

        <form onSubmit={handleResetPassword}>
          <input
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 border rounded-lg mb-4 outline-none'
          />

          <button
            type='submit'
            className='w-full bg-pink-600 text-white p-3 rounded-lg font-semibold'
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {success && (
          <p className='text-green-600 text-sm mt-3 text-center'>{success}</p>
        )}

        {error && (
          <p className='text-red-600 text-sm mt-3 text-center'>{error}</p>
        )}

        <div className='text-center mt-5'>
          <Link to='/signin' className='text-pink-600 underline'>
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
