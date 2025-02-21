import React from 'react'
import profileBg from '../../assets/Images/ProfilePage.png'

const Profile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${profileBg})` }}
      className='bg-cover bg-center h-screen'
    />
  )
}

export default Profile
