import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import profileImg from '../../assets/Images/profileIcon.png'
import Logo from '../../assets/Images/Logo.png'
import TextBox from '../../Components/NoPage/TextBox'

const NoPage = () => {
  const role = localStorage.getItem('role')
  const homeLink = role === 'org' ? '/org-home' : '/home'
  const profileLink = role === 'org' ? '/org-profile' : '/profile'

  return (
    <div className='NoPageBG bg-cover bg-center min-h-screen flex flex-col overflow-auto'>
      <Navbar
        profileImg={profileImg}
        Logo={Logo}
        BacktoHome={homeLink}
        profileLink={profileLink}
      />

      <TextBox />
    </div>
  )
}

export default NoPage
