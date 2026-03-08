import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SideButton = () => {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setError(null)
    if (!file) return

    const allowedTypes = ['image/png', 'image/jpeg']
    if (!allowedTypes.includes(file.type)) {
      setError('Use JPG/PNG')
      return
    }

    const maxSize = 200 * 1024 // 200KB
    if (file.size > maxSize) {
      setError('Max 200KB')
      return
    }

    setImage(file)
  }

  const handleImageTest = async () => {
    if (!image) {
      setError('Upload Image First')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('image', image)

      const res = await fetch('https://breast-cancer-detection-backend.onrender.com/api/prediction/org_predict_image/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed')
        setLoading(false)
        return
      }

      if (data.result === 'Benign') navigate('/no')
      else navigate('/yes')
    } catch (err) {
      setError('Server Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-start w-36 space-y-4 relative'>
      {/* 1. DATA PREDICTION BUTTON (Existing Check) */}
      <button
        type='button'
        className='bg-pink-200 text-black font-semibold shadow-lg text-[18px] rounded-r-full py-2 px-4 w-24'
      >
        Check
      </button>

      {/* 2. IMAGE SELECTION (Camera) */}
      <label className='flex items-center space-x-2 ml-2 cursor-pointer group'>
        <span className='text-black font-medium'>
          {image ? 'Selected' : 'Upload'}
        </span>
        <FaCamera className='h-5 w-5 text-black group-hover:text-pink-600 transition-colors' />
        <input
          type='file'
          accept='.png,.jpg,.jpeg'
          className='hidden'
          onChange={handleImageChange}
        />
      </label>

      {/* 3. TEST IMAGE BUTTON (New Action Button) */}
      <button
        type='button'
        onClick={handleImageTest}
        disabled={loading}
        className={`ml-2 bg-[#EEB6B7] text-black text-[14px] font-bold py-1 px-3 rounded-lg border-2 border-[#561a1a] shadow-md transition-all ${loading
            ? 'opacity-50'
            : 'hover:bg-[#851e20] hover:text-white active:scale-95'
          }`}
      >
        {loading ? 'Testing...' : 'Test Image'}
      </button>

      {/* 4. FEEDBACK AREA */}
      <div className='ml-2 w-full'>
        {image && !error && (
          <p className='text-[10px] text-green-800 font-bold truncate w-24'>
            {image.name}
          </p>
        )}
        {error && (
          <p className='text-[10px] text-red-600 font-bold leading-tight'>
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default SideButton
