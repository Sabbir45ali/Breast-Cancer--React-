import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpSquareFill } from 'react-icons/bs'

const BottomNavigation = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='rounded-2xl w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white text-center py-4 rounded-t-2xl font-semibold mb-0'>
        Already have an account?
        <Link to='/signin'>
          {' '}
          Sign-In{' '}
          <BsArrowUpSquareFill className='relative bottom-5 left-80 text-xl' />
        </Link>
      </div>
    </div>
  )
}

export default BottomNavigation
