import React, { useEffect, useState } from 'react'
import profileBg from '../../assets/Images/ProfilePage.png'
import MainModalProfile from '../../Components/Profile Page Components/MainModalProfile'
import ProfileNav from '../../Components/Profile Page Components/ProfileNav'
import Logo from '../../assets/Images/Logo.png'

const Profile = () => {
  const [profileData, setProfileData] = useState([])
  const [userInfo, setUserInfo] = useState(null)

  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/user/profile/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo({
          name: data.name,
          email: data.email,
          age: data.age || '-',
          phnNo: data.phone || '-',
          bloodGroup: data.blood_group || '-'
        })
      })

    fetch('http://127.0.0.1:8000/api/image-history/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((item) => {
          // 1. Format date
          const rawDate = item.date || item.created_at || item.timestamp
          const formattedDate = rawDate
            ? new Date(rawDate).toLocaleDateString('en-GB')
            : '-'

          // 2. Extract URL and Name
          const imageUrl = item.image_url || item.image || item.url || '#'
          const imageName = item.image_name || 'View Image'

          // 3. Create the clickable link component
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

          // 4. Conditional Result Styling
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
      })
  }, [])

  const profileHeaders = ['Date', 'Image Link', 'Result']

  if (!userInfo) return <div>Loading...</div>

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
