import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaTint, FaUser } from 'react-icons/fa'

const PersonalInfoMobile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')

        console.log('TOKEN:', token) // Debug check

        const res = await fetch('http://127.0.0.1:8000/api/user/profile/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })

        if (!res.ok) {
          console.log('Forbidden or token issue')
          return
        }

        const data = await res.json()

        setProfile(data)
      } catch (err) {
        console.log('Profile error:', err)
      }
    }

    fetchProfile()
  }, [])

  if (!profile) {
    return <div className='pt-12 text-center'>Loading...</div>
  }

  return (
    <div className='pt-12 pb-6 px-6 text-center absolute top-[330px] left-1/2 transform -translate-x-1/2 w-auto max-w-sm flex flex-col items-center justify-center '>
      <h2 className='text-lg font-semibold text-gray-800 text-[23px]'>
        {profile.name || 'User'}
      </h2>

      <p className='text-gray-700 flex items-center justify-center gap-2 text-[20px]'>
        <FaEnvelope /> {profile.email || '-'}
      </p>

      <p className='text-gray-600 flex items-center justify-center gap-2 text-[17px] mt-2'>
        <FaPhoneAlt /> {profile.phone || '-'}
      </p>

      {/* Additional Info */}

      <div className='flex flex-wrap justify-center items-center mt-4 text-gray-700 px-4 gap-4'>
        <p className='flex items-center gap-1 text-[17px]'>
          <FaUser /> {profile.age || '-'}
        </p>

        <p className='flex items-center gap-1 text-[17px]'>
          Age - {profile.age || '-'}
        </p>

        <p className='flex items-center gap-1 text-[17px]'>
          <FaTint /> Group - {profile.blood_group || '-'}
        </p>
      </div>
    </div>
  )
}

export default PersonalInfoMobile
