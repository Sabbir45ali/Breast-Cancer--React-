import { useState, useEffect, useRef } from 'react'
import { FaKey, FaTimes } from 'react-icons/fa'
import OtpResultModal from './OtpResultModal' // make sure path is correct

function ForgotPasswordModal ({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [countdown, setCountdown] = useState(0)
  const [canResend, setCanResend] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [showResult, setShowResult] = useState(false)
  const [otpSuccess, setOtpSuccess] = useState(false)

  const inputRefs = useRef([])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = prev)
    }
  }, [isOpen])

  // Reset modal state every time it's opened
  useEffect(() => {
    if (isOpen) {
      setEmail('')
      setOtp(['', '', '', '', '', ''])
      setCountdown(0)
      setCanResend(false)
      setShowOtp(false)
      setShowResult(false)
      setOtpSuccess(false)
    }
  }, [isOpen])

  // Countdown timer
  useEffect(() => {
    let timer
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown((s) => s - 1), 1000)
    } else if (showOtp) {
      setCanResend(true) // Enable resend after timer finishes
    }
    return () => clearTimeout(timer)
  }, [countdown, showOtp])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleGenerateOtp = async () => {
    if (!email.trim()) {
      alert('Please enter your email before generating OTP!')
      return
    }
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/auth/forgot-password/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        }
      )

      let data
      try {
        if (
          response.headers.get('content-type')?.includes('application/json')
        ) {
          data = await response.json()
        } else {
          throw new Error('No JSON response received')
        }
      } catch (err) {
        alert('Server returned no JSON data or there was a network error.')
        return
      }

      if (response.ok) {
        setCountdown(300) // 5 minutes
        setCanResend(false)
        setShowOtp(true)
        setOtp(['', '', '', '', '', ''])
        inputRefs.current[0]?.focus()
        alert(data.message || 'OTP sent to email')
      } else {
        alert(data.error || 'Failed to send OTP')
      }
    } catch (error) {
      alert('Network error: ' + error.message)
    }
  }

  const handleResend = async () => {
    try {
      const response = await fetch('/send_otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await response.json()
      if (response.ok) {
        setCountdown(300)
        setCanResend(false)
        setOtp(['', '', '', '', '', ''])
        inputRefs.current[0]?.focus()
        alert(data.message || 'OTP resent to email')
      } else {
        alert(data.error || 'Failed to resend OTP')
      }
    } catch (error) {
      alert('Network error: ' + error.message)
    }
  }

  const handleChangeEmail = () => {
    setShowOtp(false)
    setCountdown(0)
    setCanResend(false)
    setOtp(['', '', '', '', '', ''])
    setEmail('')
  }

  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    const enteredOtp = otp.join('')
    if (enteredOtp.length < 6) {
      alert('Please enter all 6 digits of the OTP.')
      return
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/verify-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: enteredOtp })
      })
      let data
      try {
        if (
          response.headers.get('content-type')?.includes('application/json')
        ) {
          data = await response.json()
        } else {
          throw new Error('No JSON response received')
        }
      } catch (err) {
        alert('Server returned no JSON data or there was a network error.')
        return
      }
      if (response.ok) {
        setOtpSuccess(true)
        alert(data.message || 'OTP verified successfully')
        // Trigger password reset flow here as needed
      } else {
        setOtpSuccess(false)
        setCanResend(true)
        alert(data.error || 'OTP verification failed')
      }
      setShowResult(true)
    } catch (error) {
      alert('Network error: ' + error.message)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className='fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50'
        aria-modal='true'
        role='dialog'
      >
        <div className='bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative transition-all duration-200'>
          {/* Close button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
            aria-label='Close'
          >
            <FaTimes size={20} />
          </button>

          {/* Header */}
          <div className='text-center mb-6 sm:mb-8'>
            <div className='mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4'>
              <FaKey size={28} className='text-pink-300' />
            </div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2'>
              <span className='text-pink-500'>F</span>orgot{' '}
              <span className='text-pink-500'>P</span>assword?
            </h2>
            <p className='text-gray-500 text-sm sm:text-base'>
              Don’t Worry, We’ll send you reset instructions
            </p>
          </div>

          {/* Form */}
          <div className='space-y-6'>
            {!showOtp ? (
              <>
                {/* Email Input */}
                <div>
                  <label
                    htmlFor='email'
                    className='block relative left-2 text-sm font-medium text-gray-700 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-sm sm:text-base'
                    placeholder='Enter your email'
                  />
                </div>

                <button
                  onClick={handleGenerateOtp}
                  className='w-full bg-[#AB1B68] hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:pink-purple-500 focus:ring-offset-2 text-sm sm:text-base'
                >
                  Generate OTP
                </button>
              </>
            ) : (
              <>
                {/* OTP Inputs */}
                <div className='flex justify-between gap-2'>
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      type='text'
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      ref={(el) => (inputRefs.current[idx] = el)}
                      maxLength={1}
                      className='w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none'
                    />
                  ))}
                </div>

                <button
                  onClick={handleOtpSubmit}
                  className='w-full bg-[#AB1B68] hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:pink-purple-500 focus:ring-offset-2 text-sm sm:text-base'
                >
                  Submit
                </button>

                {/* Resend Option */}
                <div className='text-center mt-4'>
                  <button
                    onClick={handleResend}
                    disabled={!canResend}
                    className='text-sm text-pink-500 hover:text-pink-600 font-bold disabled:text-gray-400 disabled:cursor-not-allowed transition-colors'
                  >
                    Resend OTP
                  </button>
                  {countdown > 0 && (
                    <div className='mt-2 text-gray-500 text-sm'>
                      You can resend in {formatTime(countdown)}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Change email / Back to login */}
          <div className='text-center mt-6'>
            <button
              onClick={showOtp ? handleChangeEmail : onClose}
              className='text-sm sm:text-base text-gray-500 hover:text-pink-500 transition-colors flex items-center justify-center gap-1'
            >
              <span>←</span>
              <span>{showOtp ? 'Change Email' : 'Back to login'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      <OtpResultModal
        isOpen={showResult}
        success={otpSuccess}
        email={email} // Pass email here
        onClose={() => {
          setShowResult(false)
          if (!otpSuccess) {
            setOtp(['', '', '', '', '', ''])
          } else {
            onClose()
          }
        }}
      />
    </>
  )
}

export default ForgotPasswordModal
