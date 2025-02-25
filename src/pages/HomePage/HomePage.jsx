import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import profileImg from '../../assets/Images/profileIcon.png'
import Logo from '../../assets/Images/Logo.png'
import Header from '../../Components/Home Page Components/Header'
import AwarenessSection from '../../Components/Home Page Components/AwarenessSection'

const HomePage = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/Images/bg_pic_landing_page_dekstop.png')] bg-cover bg-center min-h-screen flex flex-col overflow-auto">
        <Navbar profileImg={profileImg} Logo={Logo} />
        <Header />
      </div>
      <AwarenessSection />
    </div>
  )
}

export default HomePage
