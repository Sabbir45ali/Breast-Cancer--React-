import React from 'react'
import profileBg from '../../assets/Images/ProfilePage.png'
import MainModalProfile from '../../Components/Profile Page Components/MainModalProfile'

const Profile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${profileBg})` }}
      className='bg-cover bg-center h-screen flex justify-center items-center'
    >
      <MainModalProfile />
    </div>
  )
}

export default Profile
