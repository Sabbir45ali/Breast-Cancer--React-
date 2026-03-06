import React, { useEffect, useState } from 'react'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTint,
  FaUser,
  FaBuilding,
  FaIdCard
} from 'react-icons/fa'

// 🟢 Import the Loader
import Loader from '../../Components/Universal Components/Loader'

const PersonalInfoMobile = () => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true) // 🟢 Added loading state

  // Get role from localStorage
  const role = localStorage.getItem('role')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true) // 🟢 Start loader
        const token = localStorage.getItem('token')

        // Dynamic endpoint based on role
        const endpoint =
          role === 'org'
            ? 'http://127.0.0.1:8000/api/org/profile/'
            : 'http://127.0.0.1:8000/api/user/profile/'

        const res = await fetch(endpoint, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })

        if (!res.ok) return

        const data = await res.json()
        setProfile(data)
      } catch (err) {
        console.log('Profile error:', err)
      } finally {
        setLoading(false) // 🟢 Stop loader
      }
    }

    fetchProfile()
  }, [role]) // Refetch if role changes

  

  return loading ? (
    <Loader />
  ) : (
    <div className='pt-12 pb-6 px-6 text-center absolute top-[330px] left-1/2 transform -translate-x-1/2 w-full max-w-sm flex flex-col items-center justify-center '>
      {/* Name: Org Name or User Name */}
      <h2 className='text-lg font-semibold text-gray-800 text-[23px] flex items-center gap-2'>
        {role === 'org' ? <FaBuilding className='text-pink-800' /> : null}
        {profile.org_name || profile.name || 'Profile'}
      </h2>

      {/* Email */}
      <p className='text-gray-700 flex items-center justify-center gap-2 text-[20px]'>
        <FaEnvelope /> {profile.email || '-'}
      </p>

      {/* Phone */}
      <p className='text-gray-600 flex items-center justify-center gap-2 text-[17px] mt-2'>
        <FaPhoneAlt /> {profile.phone || '-'}
      </p>

      {/* Role-Specific Additional Info */}
      <div className='flex flex-wrap justify-center items-center mt-4 text-gray-700 px-4 gap-4'>
        {role === 'org' ? (
          <>
            {/* ORG SPECIFIC FIELDS */}
            <p className='flex items-center gap-1 text-[17px]'>
              <FaIdCard /> License: {profile.license || '-'}
            </p>
            <p className='flex items-center gap-1 text-[17px]'>
              Type: {profile.type || '-'}
            </p>
          </>
        ) : (
          <>
            {/* USER SPECIFIC FIELDS */}
            <p className='flex items-center gap-1 text-[17px]'>
              <FaUser /> Age: {profile.age || '-'}
            </p>
            <p className='flex items-center gap-1 text-[17px]'>
              <FaTint /> Blood: {profile.blood_group || '-'}
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default PersonalInfoMobile