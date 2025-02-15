import React from 'react'

const ProfileIcon = ({ profileImg }) => {
  return (
    <div className='relative group flex items-center'>
      <img
        src={profileImg}
        alt='Profile'
        className='w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer'
        loading='lazy'
      />

      <span className='absolute bottom-0 right-0 mb-[-2rem] bg-gray-700 text-white text-xs px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap'>
        User Profile
      </span>
    </div>
  )
}

export default ProfileIcon
