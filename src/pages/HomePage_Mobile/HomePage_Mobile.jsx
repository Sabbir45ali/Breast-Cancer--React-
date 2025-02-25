import React from 'react'
import NavbarMobile from '../../Components/HomePageMobileComponents/NavbarMobile'
import FooterMobile from '../../Components/HomePageMobileComponents/FooterMobile'

const HomePage_Mobile = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarMobile />
      <div className='flex-grow' />
      <FooterMobile />
    </div>
  )
}

export default HomePage_Mobile
