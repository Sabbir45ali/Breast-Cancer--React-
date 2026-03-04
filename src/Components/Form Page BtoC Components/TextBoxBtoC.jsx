import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MammogramUploadPage () {
  const [error, setError] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]

    setError('')

    if (!selectedFile) return

    // File type validation
    const allowedTypes = ['image/png', 'image/jpeg']

    if (!allowedTypes.includes(selectedFile.type)) {
      setError('⚠️ Only JPG or PNG allowed')
      e.target.value = ''
      return
    }

    // File size validation
    const maxSize = 200 * 1024

    if (selectedFile.size > maxSize) {
      setError('⚠️ Image must be under 200KB')

      e.target.value = ''
      return
    }

    setFile(selectedFile)
  }

  // TEST IMAGE API
  const handleTest = async () => {
    if (!file) {
      setError('Upload image first')
      return
    }
    // deploy
    setLoading(true)
    setError('')

    try {
      const formData = new FormData()

      formData.append('image', file)

      const res = await fetch('http://13.232.232.187:8000/api/predict-image/', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        },
        body: formData
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Prediction failed')
        setLoading(false)
        return
      }

      // AUTO NAVIGATION

      if (data.result === 'Benign') {
        navigate('/no')
      } else {
        navigate('/yes')
      }
    } catch (err) {
      setError('Server error')
    }

    setLoading(false)
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      <img
        src='/background-flower.png'
        alt='Background Flower'
        className='absolute inset-0 w-full h-full object-cover opacity-60 -z-10'
      />

      <div className='text-center px-6 '>
        <h1 className='text-4xl md:text-5xl font-semibold text-black/80 leading-relaxed mb-10 gap-y-10'>
          Early <br /> Detection <br /> Saves <br /> Lives
        </h1>

        {/* Upload */}
        <label className='flex items-center bg-[#851e2066] text-black font-semibold py-2 px-4 rounded-xl border-2 border-black shadow-md mb-6 cursor-pointer hover:bg-[#851e2080] transition'>
          {file ? file.name : 'Upload Memogram Image'}

          <input
            type='file'
            accept='.png,.jpg,.jpeg'
            className='hidden'
            onChange={handleFileChange}
          />
        </label>

        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
            {error}
          </div>
        )}

        {/* Test Button */}
        <button
          onClick={handleTest}
          className='bg-[#EEB6B7] border-2 text-black font-semibold py-2 px-6 rounded-full shadow w-32'
        >
          {loading ? 'Testing...' : 'Test'}
        </button>
      </div>
    </div>
  )
}
