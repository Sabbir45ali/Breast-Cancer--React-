import React from 'react'
import NavbarMobile from '../../Components/HomePageMobileComponents/NavbarMobile'
import FooterMobile from '../../Components/HomePageMobileComponents/FooterMobile'
// import bg_pic_Home_page_mobile from '../../assets/Images/bg_pic_Home_page_mobile.png'
import HomePageHeader from '../../Components/HomePageMobileComponents/HomaPageHeader'
const HomePage_Mobile = () => {
  return (
    <div className="bg-[url('/src/assets/Images/bg_pic_Home_page_mobile.png')] flex flex-col min-h-screen bg-cover bg-center">
      <NavbarMobile />
      <HomePageHeader />
      <div className='flex-grow' />
      <FooterMobile />
    </div>
  )
}

export default HomePage_Mobile
