import React, { useState } from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import Logo from '../../assets/Images/Logo.png'
import profileImg from '../../assets/Images/profileIcon.png'
import FormHeader from '../../Components/Form Page BtoC Components/FormHeader'
import '../../App.css'
import { FaCamera } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const FormPageBtoC = () => {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  // Select image
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setError('')

    if (!file) return

    // Check file type
    const allowedTypes = ['image/png', 'image/jpeg']
    if (!allowedTypes.includes(file.type)) {
      setError('⚠️ Please upload only JPG or PNG files')
      e.target.value = ''
      return
    }

    // Check file size (200KB = 204800 bytes)
    const maxSize = 200 * 1024 // 200KB
    if (file.size > maxSize) {
      setError(
        `⚠️ Image size exceeds 200KB. Your file is ${(file.size / 1024).toFixed(2)}KB`
      )
      e.target.value = ''
      return
    }

    setImage(file)
  }

  // Test Image
  const handleTest = async () => {
    if (!image) {
      setError('Please upload image')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('image', image)

      const res = await fetch(
        'https://breast-cancer-detection-backend.onrender.com/api/predict-image/',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token
          },
          body: formData
        }
      )

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Prediction failed')
        setLoading(false)
        return
      }

      // ✅ AUTO REDIRECT BASED ON RESULT

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
    <div className='min-h-screen w-full formtwo'>
      <Navbar
        BacktoHome='/home'
        profileLink='/profile'
        Logo={Logo}
        profileImg={profileImg}
      />

      <div className='gap-8 flex flex-col items-center justify-center relative top-96'>
        {/* Upload */}
        <label className='mt-4 border-2 h-16 w-96 flex items-center justify-center bg-[#851e2081] border-black text-black text-2xl px-4 py-2 rounded-xl shadow-xl font-semibold gap-3 cursor-pointer hover:bg-[#851e20a0] transition'>
          <FaCamera />

          {image ? image.name : 'Upload Memmogram Image'}

          <input
            type='file'
            accept='.png,.jpg,.jpeg'
            className='hidden'
            onChange={handleImageChange}
          />
        </label>

        {/* Test Button */}
        <button
          onClick={handleTest}
          className='mt-3 font-semibold bg-[#EEB6B7] text-black text-2xl px-6 py-2 rounded-lg shadow-md hover:bg-[#851e208f] hover:text-[#EEB6B7] h-12 w-36 border-2 border-[#561a1a] flex items-center justify-center'
        >
          {loading ? 'Testing...' : 'Test'}
        </button>

        {error && <div className='text-red-600'>{error}</div>}
      </div>

      <FormHeader />
    </div>
  )
}

export default FormPageBtoC
