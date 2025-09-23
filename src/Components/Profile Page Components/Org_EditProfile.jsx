import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { TiTickOutline } from 'react-icons/ti'
import '../../App.css'

const Org_EditProfile = ({ open, onclose, children }) => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Custom validation: at least one field must be filled
    if (!phone.trim() && !email.trim()) {
      setError('Please enter either Phone Number or Email.')
      return
    }
    setError('')
    setPhone('')
    setEmail('')
    // Handle form submission here
    onclose() // Close modal after save
  }

  return (
    <div
      id='org-edit-modal'
      tabIndex='-1'
      aria-hidden='true'
      className='fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black/40 backdrop-blur-sm'
    >
      <div
        className='relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 transform transition-all'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='flex items-center justify-between border-b pb-3'>
          <h3 className='text-lg font-semibold text-gray-800'>
            Update Contact Info
          </h3>
          <button
            type='button'
            onClick={onclose}
            className='text-gray-500 hover:text-red-500 rounded-lg p-2 transition'
          >
            <ImCross className='w-4 h-4' />
          </button>
        </div>

        {/* Body */}
        <div className='mt-5'>
          <form className='space-y-5' onSubmit={handleSubmit}>
            {/* Phone Number */}
            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Phone Number
              </label>
              <input
                type='tel'
                name='phone'
                id='phone'
                placeholder='Enter your phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='w-full bg-pink-100 border border-pink-300 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-700 focus:border-pink-700 text-sm px-3 py-2 shadow-sm'
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full bg-pink-100 border border-pink-300 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-700 focus:border-pink-700 text-sm px-3 py-2 shadow-sm'
              />
            </div>

            {/* Error message */}
            {error && <p className='text-red-500 text-sm'>{error}</p>}

            {/* Submit Button */}
            <div className='flex justify-center pt-6'>
              <button
                type='submit'
                className='group flex items-center gap-2 bg-pink-800 hover:opacity-80 text-white font-medium px-5 py-2 rounded-2xl shadow-md transition'
              >
                Save Changes
                <TiTickOutline className='w-5 h-5' />
              </button>
            </div>
          </form>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Org_EditProfile
