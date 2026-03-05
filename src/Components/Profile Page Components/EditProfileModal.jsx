import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { TiTickOutline } from 'react-icons/ti'
import '../../App.css'

const EditProfileModal = ({ open, onclose }) => {
  const [formData, setFormData] = useState({
    age: '',
    blood_group: '',
    height: '',
    weight: '',
    medical_history: '',
    symptoms: ''
  })

  if (!open) return null

  /// //////////////////////////
  // HANDLE CHANGE
  /// //////////////////////////

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  /// //////////////////////////
  // SAVE PROFILE
  /// //////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem('token')

    if (!token) {
      alert('Login expired')
      return
    }

    try {
      await fetch('https://13-232-232-187.nip.io/api/user/update-profile/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
          age: formData.age,
          blood_group: formData.blood_group,
          height: formData.height,
          weight: formData.weight,
          medical_history: formData.medical_history,
          symptoms: formData.symptoms
        })
      })

      onclose()
    } catch (err) {
      alert('Update failed')
    }
  }

  return (
    <div
      id='authentication-modal'
      className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen bg-black/30 backdrop-blur-sm'
    >
      <div
        className='relative p-4 w-full max-w-md min-h-[600px] h-auto Richdatabg rounded-lg shadow'
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}

        <div className='relative bottom-7 flex items-center justify-center p-4 border-b'>
          <h3 className='text-xl font-bold text-gray-900 absolute left-32'>
            Fill the Details
          </h3>

          <button
            onClick={onclose}
            className='text-gray-400 hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto flex justify-center items-center'
          >
            <ImCross className='w-4 h-4' />
          </button>
        </div>

        {/* BODY */}

        <div className='p-4 relative bottom-9'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* AGE */}

            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium'>Your Age?</label>

              <input
                type='number'
                className='w-2/3 border bg-[#d7819146] border-black font-semibold text-sm rounded-lg p-2.5'
                placeholder='Enter your age'
                onChange={(e) => handleChange('age', e.target.value)}
              />
            </div>

            {/* BLOOD */}

            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium'>
                Your Bloodgroup?
              </label>

              <input
                type='text'
                placeholder='Enter Bloodgroup'
                className='w-2/3 bg-[#d7819146] border border-black font-semibold text-sm rounded-lg p-2.5'
                onChange={(e) => handleChange('blood_group', e.target.value)}
              />
            </div>

            {/* HEIGHT */}

            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium'>Your Height?</label>

              <input
                type='number'
                placeholder='Enter Height'
                className='w-2/3 bg-[#d7819146] border border-black font-semibold text-sm rounded-lg p-2.5'
                onChange={(e) => handleChange('height', e.target.value)}
              />
            </div>

            {/* WEIGHT */}

            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium'>Your Weight?</label>

              <input
                type='number'
                placeholder='Enter Weight'
                className='w-2/3 bg-[#d7819146] border border-black font-semibold text-sm rounded-lg p-2.5'
                onChange={(e) => handleChange('weight', e.target.value)}
              />
            </div>

            {/* HISTORY */}

            <div>
              <input
                type='text'
                placeholder='Any past medical history?'
                className='w-full h-16 bg-[#d7819146] border-black border font-semibold text-sm rounded-lg p-2.5'
                onChange={(e) =>
                  handleChange('medical_history', e.target.value)}
              />
            </div>

            {/* SYMPTOMS */}

            <div>
              <input
                type='text'
                placeholder='Your any symptoms?'
                className='w-full h-20 bg-[#d7819146] border-black border font-semibold text-sm rounded-lg p-2.5'
                onChange={(e) => handleChange('symptoms', e.target.value)}
              />
            </div>

            {/* SAVE */}

            <button
              type='submit'
              className='group w-full relative top-16 flex justify-end'
            >
              <TiTickOutline className='h-8 w-8 border-2 border-black rounded-full hover:bg-white' />

              <span className='absolute bottom-0 right-0 mb-[-2rem] text-black text-xs font-semibold opacity-0 group-hover:opacity-100'>
                Save changes
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfileModal
