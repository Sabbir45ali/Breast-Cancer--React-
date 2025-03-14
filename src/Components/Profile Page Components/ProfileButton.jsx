import React from 'react'
import { Link } from 'react-router-dom'

const ProfileButton = () => {
  return (
    <Link to='/form'>
      <button className='w-52 bg-pink-700 text-pink-50 text-lg py-2 px-6 shadow-lg rounded-2xl hover:bg-pink-300 hover:text-pink-50 transition duration-300'>
        CHECK AGAIN
      </button>
    </Link>
  )
}

export default ProfileButton
