import React from 'react'
import { BsArrowUpSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const FooterLinks = ({ FooterText1, FooterText2, link }) => {
  return (
    <div className='flex items-center w-full'>
      <div className='rounded-2xl w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white text-center py-4 rounded-t-2xl font-semibold mb-0'>
        {/* Use Link for navigation */}
        <Link to={link} className='text-white no-underline hover:text-gray-200'>
          <span>{FooterText1}</span>
          <span className='font-bold ml-2'>
            {FooterText2}{' '}
            <BsArrowUpSquareFill className='inline-block text-xl ml-1' />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default FooterLinks

// I've already done this story , I just raised this PR
