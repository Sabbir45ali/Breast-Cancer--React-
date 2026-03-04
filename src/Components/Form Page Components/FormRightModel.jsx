import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormRightModel () {
  const navigate = useNavigate()

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

      const res = await fetch('http://13.232.232.187:8000/api/org/predict-data/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Prediction failed')
        setLoading(false)
        return
      }

      const result = data.result.toLowerCase()

      // ✅ YES / NO PAGE

      if (result === 'malignant') navigate('/yes')
      else navigate('/no')
    } catch (err) {
      setError('Server error')
    }

    setLoading(false)
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-3'>
      <div className='mt-16 bg-[#70113277] rounded-3xl shadow-xl px-10 py-8 w-[360px] sm:w-[420px] md:w-[480px]'>
        <form onSubmit={handleSubmit} className='w-full'>
          {[
            ['Radius Mean', 'radius_mean'],
            ['Texture Mean', 'texture_mean'],
            ['Area Mean', 'area_mean'],
            ['Smoothness Mean', 'smoothness_mean'],
            ['Compactness Mean', 'compactness_mean'],
            ['Concavity Mean', 'concavity_mean']
          ].map(([label, key]) => (
            <div key={key} className='flex justify-between items-center my-5'>
              <label className='text-white font-semibold text-base w-44'>
                {label} :
              </label>

              <input
                type='number'
                value={formData[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className='flex-1 rounded-md p-2 bg-[#ffd5e5] ml-6 focus:outline-none focus:ring-2 focus:ring-[#5F1A31]'
                required
              />
            </div>
          ))}

          <div className='flex justify-center mt-10'>
            <button
              type='submit'
              disabled={loading}
              className='w-[250px] h-[40px] bg-[#B82360] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#5F1A31] transition duration-200 border border-black'
            >
              {loading ? 'Checking...' : 'Check'}
            </button>
          </div>

          {error && <p className='text-red-400 text-center mt-4'>{error}</p>}
        </form>
      </div>
    </div>
  )
}
