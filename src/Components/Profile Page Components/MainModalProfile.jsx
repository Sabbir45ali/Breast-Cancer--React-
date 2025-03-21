import React, { useState } from 'react'
import { RiEdit2Fill } from 'react-icons/ri'
import PersonalInfo from './PersonalInfo'
import ProfileButton from './ProfileButton'

const MainModalProfile = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <div className='bg-white w-2/4 h-3/5 relative top-20 rounded-3xl shadow-xl flex flex-col items-center'>
        <div className='bg-white z-30 absolute right-6 top-5 group'>
          <RiEdit2Fill className='text-lg cursor-pointer' />
          <span className='absolute bottom-0 right-0 mb-[-2rem] bg-gray-700 text-pink-300 text-xs font-semibold px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap'>
            Edit Profile
          </span>
        </div>
        <PersonalInfo
          name='Priyanshu Bhattacharya'
          email='prathamachak@gmail.com'
          age='21'
          phnNo='9876543456'
          bloodGroup='B+'
        />
        <div className='absolute top-64'>
          <ProfileButton />
        </div>
      </div>
    </div>
  )
}

export default MainModalProfile
