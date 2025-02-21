// skipcq: JS-W1028
import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
// skipcq: JS-C1001, JS-0128
import profileImg from '../../assets/Images/profileIcon.png'
import Logo from '../../assets/Images/Logo.png'
import Header from '../../Components/Home Page Components/Header'
const HomePage = () => {
  return (
    <div className="bg-[url('/src/assets/Images/bg_pic_landing_page_dekstop.png')] bg-cover bg-center h-screen flex flex-col overflow-auto items-center justify-center">
      <div className=''>
        <Navbar profileImg={profileImg} Logo={Logo} />
        <Header />
      </div>
    </div>
  )
}
export default HomePage
