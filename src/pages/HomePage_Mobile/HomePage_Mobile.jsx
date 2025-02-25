import React from 'react'
import NavbarMobile from '../../Components/HomePageMobileComponents/NavbarMobile'
import FooterMobile from '../../Components/HomePageMobileComponents/FooterMobile'
import bg_pic_Home_page_mobile from '../../assets/Images/bg_pic_Home_page_mobile.png'

const HomePage_Mobile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_pic_Home_page_mobile})` }}
      className='flex flex-col min-h-screen bg-cover bg-center'
    >
      <NavbarMobile />
      <div className='flex-grow' />
      <FooterMobile />
    </div>
  )
}

export default HomePage_Mobile
