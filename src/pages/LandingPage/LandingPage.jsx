import React from 'react'
import doctorimage from '../../assets/Images/MobileLandingPageFemale1.png' // If needed
import bgImage from '../../assets/Images/desktop_landingPage.png'

import { TbArrowBigRightLinesFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className='flex flex-col items-center justify-center h-screen text-center '
    >
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-black mb-2 mr-52'>Welcome to</h1>
        <h2
          className='text-4xl font-bold  mt-2 ml-44'
          style={{ color: '#890A0C' }}
        >
          Care Memmo
        </h2>
      </div>
      <div className='relative mb-7'>
        <img
          src={doctorimage}
          alt='Care Memmo Illustration'
          className='w-[460px] relative top-20 rounded-lg h-[365px] '
        />
      </div>
      <Link to='/login'>
        <div className=' absolute bottom-4 right-4 '>
          <TbArrowBigRightLinesFilled className='text-3xl text-black' />
        </div>
      </Link>
    </div>
  )
}

export default LandingPage
