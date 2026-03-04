import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase' // Ensure your firebase.js is correctly linked
import MobileLandingPageFemale1 from '../../assets/Images/MobileLandingPageFemale1.png'
import Header from '../Sign Up page Component/SignUpPageRightModel/Header'
import { FaArrowLeft } from 'react-icons/fa'

const ForgotPasswordMobile = () => {
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
      // Firebase password reset logic
      await sendPasswordResetEmail(auth, email)

      setSuccess('Reset link sent! Check your email.')

      // Redirect to sign in after a short delay
      setTimeout(() => {
        navigate('/signin')
      }, 3000)
    } catch (err) {
      // Handle Firebase errors (e.g., user-not-found)
      setError('Email not registered or error occurred')
    }

    setLoading(false)
  }

  return (
    <div className='bg-gradient-to-r from-[#f0779f] to-[#e4d4d9] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative overflow-x-hidden'>
      {/* Back Button */}
      <button
        onClick={() => navigate('/signin')}
        className='absolute top-6 left-6 text-pink-900 bg-white/50 p-2 rounded-full shadow-md z-10'
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Top Image Section */}
      <div className='relative top-20 w-full flex justify-center mt-8'>
        <img
          src={MobileLandingPageFemale1}
          alt='Mobile Landing'
          className='w-[180px] h-[180px]'
        />
      </div>

      {/* Form Card */}
      <div className='relative top-24 flex flex-col w-full max-w-[400px] bg-white rounded-t-[40px] shadow-2xl mx-4 flex-grow p-8 pb-12'>
        <Header
          FirstLetter='F'
          Firstpart='orgot'
          SecondLetter='P'
          Secondpart='assword'
          text='Enter your email to reset password'
        />

        <form onSubmit={handleResetPassword} className='mt-10 w-full space-y-6'>
          <input
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border-b-2 border-pink-200 bg-transparent px-2 py-3 focus:outline-none focus:border-pink-500 transition-colors text-lg'
            disabled={loading}
          />

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-[#B82360] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-pink-800 transition transform active:scale-95 disabled:opacity-50 mt-4 text-lg'
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {/* Status Messages */}
        <div className='mt-6'>
          {success && (
            <p className='text-green-600 font-semibold animate-bounce'>
              {success}
            </p>
          )}

          {error && <p className='text-red-600 font-semibold'>{error}</p>}
        </div>

        {/* Footer Link */}
        <div className='text-center mt-auto pt-10'>
          <Link
            to='/signin'
            className='text-pink-600 underline font-bold text-lg'
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordMobile
