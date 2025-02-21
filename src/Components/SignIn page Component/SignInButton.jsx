import React from 'react'
import { Link } from 'react-router-dom'

const SignInButton = (props) => {
  return (
    <Link to='/home'>
      <button
        style={{ backgroundColor: props.btnColor }}
        className='w-36 text-white text-lg py-2 px-6 bg-[#AB1B68] shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300'
      >
        SIGN-IN
      </button>
    </Link>
  )
}

export default SignInButton ;
