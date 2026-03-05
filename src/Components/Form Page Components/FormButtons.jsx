import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const FormButtons = () => {
  const navigate = useNavigate()

  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleUpload = (e) => {
    const selected = e.target.files[0]
    setError('')
    setSuccess('')

    if (!selected) return

    const allowedTypes = ['image/png', 'image/jpeg']
    if (!allowedTypes.includes(selected.type)) {
      setError('⚠️ Please upload only JPG or PNG files')
      e.target.value = ''
      return
    }

    const maxSize = 200 * 1024 // 200KB
    if (selected.size > maxSize) {
      setError(
        `⚠️ Image size exceeds 200KB. Your file is ${(selected.size / 1024).toFixed(2)}KB`
      )
      e.target.value = ''
      return
    }

    setFile(selected)
    setSuccess(`✓ File selected: ${selected.name}`)
  }

  const handleTest = async () => {
    if (!file) {
      alert('Upload image first')
      return
    }

    const token = localStorage.getItem('token')

    const formData = new FormData()
    formData.append('image', file)

    const res = await fetch(
      'http://127.0.0.1:8000/api/predict-image/',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        },
        body: formData
      }
    )

    const data = await res.json()

    const result = data.result.toLowerCase()

    if (result === 'Benign') {
      navigate('/no')
    } else {
      navigate('/yes')
    }
  }

  return (
    <div className=' flex flex-col items-center justify-center'>
      <label className='mt-4 border-2 h-10 w-96 flex items-center justify-center border-black text-black px-4 py-2 rounded-lg shadow-xl font-semibold gap-3 cursor-pointer hover:bg-[#851e20a0] transition'>
        <FaCamera />
        Upload Memmogram Image
        <input
          type='file'
          accept='.png,.jpg,.jpeg'
          className='hidden'
          onChange={handleUpload}
        />
      </label>

      <button
        onClick={handleTest}
        className='mt-3 font-semibold bg-pink-200 text-black px-6 py-2 rounded-lg shadow-md hover:bg-pink-400 h-10 w-36 border-2 border-pink-900 flex items-center justify-center'
      >
        Test
      </button>
      {error && <div className='text-red-600 mt-2'>{error}</div>}
      {success && <div className='text-green-600 mt-2'>{success}</div>}
    </div>
  )
}

export default FormButtons
