import React from 'react'
import { Link } from 'react-router-dom'
import Mobile_landing_page_Female from '../../assets/Images/MobileLandingPageFemale1.png'

import { FaArrowRight } from 'react-icons/fa6'

const Mobile_landingPage = () => {
  return (
    <div className='block sm:hidden h-screen bg-gradient-to-b from-pink-200 to-white flex flex-col justify-between'>
      <div className='w-full max-w-xs mx-auto mt-8'>
        <div className='pt-64'>
          <h1 className='text-4xl font-bold text-black'>Welcome to</h1>
          <h2 className='text-5xl font-bold text-pink-500 mt-2'>Care Memmo</h2>
        </div>
      </div>
      <div className='relative flex justify-center items-end'>
        <img
          src={Mobile_landing_page_Female}
          alt='Illustration of a doctor'
          className='w-full max-w-xs h-auto'
        />
        <Link to='/signin'>
          <button
            className='absolute bottom-4 right-4 w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 flex items-center justify-center z-10 opacity-70 backdrop-blur-md hover:opacity-100 transition-opacity duration-300'
            aria-label='Next'
          >
            <span className='relative'>
              <FaArrowRight color='Black' size={22} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Mobile_landingPage
