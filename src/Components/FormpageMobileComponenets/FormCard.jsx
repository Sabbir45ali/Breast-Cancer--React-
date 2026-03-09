import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideButton from './SideButton'

const FormCard = () => {
  const navigate = useNavigate()

  // 1. State Management
  const [formData, setFormData] = useState({
    radius_mean: '',
    texture_mean: '',
    area_mean: '',
    smoothness_mean: '',
    compactness_mean: '',
    concavity_mean: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // 2. Handle Input Changes
  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // 3. API Submission Logic
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const token = localStorage.getItem('token')

      const res = await fetch(
        'https://breast-cancer-detection-backend.onrender.com/api/org/predict-data/',
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
        setError(data.error || 'Prediction failed')
        setLoading(false)
        return
      }

      const result = data.result.toLowerCase()

      // Redirect based on result
      if (result === 'malignant') navigate('/yes')
      else navigate('/no')
    } catch (err) {
      setError('Server error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='h-1/2 flex items-center justify-between space-x-2 relative top-10'>
      <SideButton />

      {/* Container turned into a Form */}
      <form
        onSubmit={handleSubmit}
        className='relative top-16 right-0 justify-end ml-auto bg-gradient-to-b from-pink-600/30 via-purple-200/10 to-blue-600/50 bg-opacity-30 backdrop-blur-md rounded-l-3xl p-8 shadow-2xl w-50 h-[600px]'
      >
        <div className='space-y-4'>
          {[
            ['Radius Mean', 'radius_mean'],
            ['Texture Mean', 'texture_mean'],
            ['Area Mean', 'area_mean'],
            ['Smoothness Mean', 'smoothness_mean'],
            ['Compactness Mean', 'compactness_mean'],
            ['Concavity Mean', 'concavity_mean']
          ].map(([label, key]) => (
            <div key={key}>
              <label className='block text-white font-bold mb-1'>
                {label}:
              </label>
              <input
                type='number'
                step='any'
                required
                value={formData[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className='w-full p-2 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all'
              />
            </div>
          ))}
        </div>

        {/* Error Message Display */}
        {error && (
          <p className='text-red-200 text-[10px] mt-2 text-center bg-red-900/40 rounded py-1'>
            {error}
          </p>
        )}

        <button
          type='submit'
          disabled={loading}
          className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-36 bg-white/80 px-6 py-2 rounded-full shadow-md border-2 border-pink-900 text-pink-900 font-bold transition-all ${loading
              ? 'opacity-70 cursor-not-allowed'
              : 'hover:bg-white active:scale-95'
            }`}
        >
          {loading ? 'Checking...' : 'Check'}
        </button>
      </form>
    </div>
  )
}

export default FormCard
