import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import '../../App.css'
import medicalIcon from '../../assets/Images/inside_pic_rich_data.png'

const RichDataMobile = ({ open, onclose }) => {
  const [formData, setFormData] = useState({
    age: '',
    blood_group: '',
    height: '',
    weight: '',
    medical_history: '',
    symptoms: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!open) return null

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    try {
      const token = localStorage.getItem('token')

      const res = await fetch(
        'http://13.232.232.187:8000/api/user/update-profile/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          },
          body: JSON.stringify(formData)
        }
      )

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Update failed')
        setLoading(false)
        return
      }

      // Success
      onclose()

      window.location.reload()
    } catch (err) {
      setError('Server error')
    }

    setLoading(false)
  }

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50'
      onClick={onclose}
    >
      <div
        className='relative w-4/5 h-3/5 MobileRichBg max-w-md text-white p-6 rounded-3xl shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='flex flex-row relative -top-6'>
          <img src={medicalIcon} alt='Medical Icon' className='w-52 mb-2' />

          <span className='relative top-10'>
            <h3 className='text-xl font-bold'>Fill your details below</h3>
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-0 relative -top-8'>
          <div>
            <label className='block text-left font-bold text-black'>Age:</label>

            <input
              type='number'
              className='w-full border-b-2 border-black bg-transparent text-black outline-none'
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </div>

          <div>
            <label className='block text-left text-black font-bold'>
              Blood group:
            </label>

            <input
              type='text'
              className='w-full border-b-2 border-black bg-transparent text-black outline-none'
              value={formData.blood_group}
              onChange={(e) => handleChange('blood_group', e.target.value)}
            />
          </div>

          <div className='flex gap-2'>
            <div className='flex-1'>
              <label className='block text-left text-black font-bold'>
                Height:
              </label>

              <input
                type='number'
                className='w-full border-b-2 border-black bg-transparent text-black outline-none'
                value={formData.height}
                onChange={(e) => handleChange('height', e.target.value)}
              />
            </div>

            <div className='flex-1'>
              <label className='block text-left text-black font-bold'>
                Weight:
              </label>

              <input
                type='number'
                className='w-full border-b-2 border-black bg-transparent text-black outline-none'
                value={formData.weight}
                onChange={(e) => handleChange('weight', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className='block text-left text-black font-bold'>
              Any past medical history:
            </label>

            <textarea
              className='w-full border-b-2 border-black bg-transparent text-black outline-none p-2'
              value={formData.medical_history}
              onChange={(e) => handleChange('medical_history', e.target.value)}
            />
          </div>

          <div>
            <label className='block text-left text-black font-bold'>
              Current symptoms:
            </label>

            <textarea
              className='w-full border-b-2 border-black bg-transparent text-black outline-none p-2'
              value={formData.symptoms}
              onChange={(e) => handleChange('symptoms', e.target.value)}
            />
          </div>

          <button
            type='submit'
            className='w-1/2 bg-[#C01D52] text-white border border-black font-bold py-2 rounded-lg shadow-md mt-4'
          >
            {loading ? 'Saving...' : 'Submit'}
          </button>

          {error && <p className='text-red-600 text-sm mt-2'>{error}</p>}
        </form>

        {/* Close */}
        <button
          onClick={onclose}
          className='absolute top-4 right-4 text-white hover:text-gray-300'
        >
          <ImCross className='w-4 h-4' />
        </button>
      </div>
    </div>
  )
}

export default RichDataMobile
