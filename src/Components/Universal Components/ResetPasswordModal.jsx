import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa'

function ResetPasswordModal ({ isOpen, onClose, email }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      alert('Please fill out both fields.')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/auth/reset-password/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email, // Use email passed from parent
            new_password: password
          })
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
        setLoading(false)
        return
      }

      if (response.ok) {
        alert(data.message || 'Password reset successfully!')
        onClose()
      } else {
        alert(data.error || 'Failed to reset password.')
      }
    } catch (error) {
      alert('Network error: ' + error.message)
    }
    setLoading(false)
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='relative bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 text-center'>
        {/* Close Icon */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'
        >
          <FaTimes size={20} />
        </button>
        {/* Title */}
        <h2 className='text-2xl font-bold mb-4'>Reset Password</h2>
        {/* New Password Input */}
        <div className='relative mb-4'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='New Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
            disabled={loading}
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute inset-y-0 right-3 flex items-center text-gray-500'
            disabled={loading}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {/* Confirm Password Input */}
        <div className='relative mb-6'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
            disabled={loading}
          />
          <button
            type='button'
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className='absolute inset-y-0 right-3 flex items-center text-gray-500'
            disabled={loading}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className='w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition disabled:opacity-50'
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  )
}

export default ResetPasswordModal
