import React from 'react'
import bg_pic_Sign_in_page_Mobile from '../../assets/Images/bg_pic_Sign_in_page_Mobile.png'
import Mobile_landing_page_Female from '../../assets/Images/MobileLandingPageFemale1.png'

const SignInPage_bg = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_pic_Sign_in_page_Mobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='block sm:hidden w-screen min-h-screen flex flex-col items-center justify-start text-center relative'
    >
      <div className='absolute top-10 sm:top-16 md:top-20 w-full flex justify-center'>
        <img
          src={Mobile_landing_page_Female}
          alt='My Image'
          className='w-[150px] h-[200px] sm:w-[180px] sm:h-[230px] md:w-[200px] md:h-[250px] rounded-lg object-cover'
        />
      </div>
    </div>
  )
}

export default SignInPage_bg
