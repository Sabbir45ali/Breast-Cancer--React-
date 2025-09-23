import React from 'react'
import profileBg from '../../assets/Images/ProfilePage.png'
import MainModalProfile from '../../Components/Profile Page Components/MainModalProfile'
import ProfileNav from '../../Components/Profile Page Components/ProfileNav'
import Logo from '../../assets/Images/Logo.png'

const Profile = () => {
  const profileHeaders = ['Date', 'Image Name', 'Result']
  const profileData = [
    ['23/09/2025', 'scan1.png', 'Positive'],
    ['24/09/2025', 'scan2.png', 'Negative']
  ]

  const userInfo = {
    name: 'Priyanshu Bhattacharjee',
    email: 'prathamac62@gmail.com',
    age: '21',
    phnNo: '9823******',
    bloodGroup: 'B+'
  }

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
