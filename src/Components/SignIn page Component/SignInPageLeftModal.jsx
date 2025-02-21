import React from 'react'
import { Link } from 'react-router-dom'

const SignInPageLeftModal = (props) => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='bg-gradient-to-r from-pink-200 to-pink-500 h-full w-full  rounded-xl shadow-lg text-center flex flex-col items-center justify-center'>
        <div>
          <h1 className='text-white text-6xl font-light mb-2'>Hello User!</h1>
          <p className='text-white text-lg font-extralight mb-4'>
            {/* skipcq: JS-0454 */}
            If you don&apos;t have an account
          </p>
        </div>
        <div className='mt-4'>
          <Link to='/signup'>
            <button className='w-36 bg-pink-500 text-white text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300'>
              SIGN-UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPageLeftModal;
