import React from 'react'
import { Link } from 'react-router-dom'

const SignUpButton = () => {
  return (
    <Link to='/home'>
      <button className='w-36 bg-pink-200 text-black text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-700 hover:text-pink-50 transition duration-300'>
        SIGN-UP
      </button>
    </Link>
  )
}

export default SignUpButton
