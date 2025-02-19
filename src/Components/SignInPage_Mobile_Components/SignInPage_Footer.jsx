import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinks = (props) => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='w-full flex justify-center bg-gradient-to-r from-pink-300 to-pink-500 text-white text-center py-4 rounded-t-2xl font-semibold mb-0'>
        {`${props.FooterText1} `}
        <Link to='/signup'>
          <p className=' underline font-bold'>{props.FooterText2}</p>
        </Link>
      </div>
    </div>
  )
}

export default FooterLinks

// I've already done this story , I just raised this PR
