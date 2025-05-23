import React from 'react'
import doctorimage from '../../assets/Images/DoctorImage.png'
import bgLanding from '../../assets/Images/desktop_landingPage.png'
import { TbArrowBigRightLinesFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgLanding})` }}
      className='bg-cover bg-center h-screen'
    >
      <div className='text-center relative top-20'>
        <h1 className='text-5xl font-bold text-black mb-2 mr-52 '>
          Welcome to
        </h1>
        <h2 className='text-4xl font-bold  mt-2 ml-44 text-[#890A0C]'>
          Care Memmo
        </h2>
      </div>
      <div>
        <img
          src={doctorimage}
          alt='Doctor in a lab coat'
          className='block mx-auto w-74 h-74 relative top-28'
        />
      </div>

      <Link to='/signin'>
        <div className='absolute bottom-4 right-4'>
          <TbArrowBigRightLinesFilled className='text-3xl text-black' />
        </div>
      </Link>
    </div>
  )
}

export default LandingPage
