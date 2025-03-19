import React from 'react'
import { Link } from 'react-router-dom'

const ProfileButton_M = () => {
  return (
    <Link to='/form'>
      <div className='w-80'>
        <button className='w-full bg-[#d14070] border border-black shadow-lg text-white font-bold py-2 rounded-xl '>
          CHECK AGAIN
        </button>
      </div>
    </Link>
  )
}

export default ProfileButton_M
