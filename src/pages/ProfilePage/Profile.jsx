import React, { useEffect, useState } from 'react'
import profileBg from '../../assets/Images/ProfilePage.png'
import MainModalProfile from '../../Components/Profile Page Components/MainModalProfile'
import ProfileNav from '../../Components/Profile Page Components/ProfileNav'
import Logo from '../../assets/Images/Logo.png'
import Loader from '../../Components/Universal Components/Loader' // 🟢 Added

const Profile = () => {
  const [profileData, setProfileData] = useState([])
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(true) // 🟢 Added

  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true) // 🟢 Added

        const profileRes = await fetch(
          'https://breast-cancer-detection-backend.onrender.com/api/user/profile/',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        const profileData = await profileRes.json()

        setUserInfo({
          name: profileData.name,
          email: profileData.email,
          age: profileData.age || '-',
          phnNo: profileData.phone || '-',
          bloodGroup: profileData.blood_group || '-'
        })

        const historyRes = await fetch(
          'https://breast-cancer-detection-backend.onrender.com/api/image-history/',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        const historyData = await historyRes.json()

        const rows = historyData.map((item) => {
          const rawDate = item.date || item.created_at || item.timestamp
          const formattedDate = rawDate
            ? new Date(rawDate).toLocaleDateString('en-GB')
            : '-'

          const imageUrl = item.image_url || item.image || item.url || '#'
          const imageName = item.image_name || 'View Image'

          const imageLink = (
            <a
              href={imageUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline font-medium'
            >
              {imageName}
            </a>
          )

          const resultValue = item.result || '-'
          const isMalignant = resultValue.toLowerCase() === 'malignant'
          const isBenign = resultValue.toLowerCase() === 'benign'

          const styledResult = (
            <span
              className={`font-bold px-2 py-1 rounded ${
                isMalignant
                  ? 'text-red-600 bg-red-50'
                  : isBenign
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-600'
              }`}
            >
              {resultValue}
            </span>
          )

          return [formattedDate, imageLink, styledResult]
        })

        setProfileData(rows)
      } catch (err) {
        console.error('Error fetching profile data:', err)
      } finally {
        setLoading(false) // 🟢 Added
      }
    }

    fetchData()
  }, [])

  const profileHeaders = ['Date', 'Image Link', 'Result']

  if (loading) return <Loader /> // 🟢 Changed

  return (
    <div
      style={{ backgroundImage: `url(${profileBg})` }}
      className='bg-cover bg-center h-screen flex justify-center items-center'
    >
      <ProfileNav BacktoHome='/home' Logo={Logo} />

      <MainModalProfile
        tableHeaders={profileHeaders}
        rowData={profileData}
        profileType='user'
        info={userInfo}
        checkAgain='/formtwo'
      />
    </div>
  )
}

export default Profile
