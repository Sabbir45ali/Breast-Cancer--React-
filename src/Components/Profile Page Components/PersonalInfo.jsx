import React from 'react'
import { MdEmail, MdBloodtype } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'

const PersonalInfo = () => {
  return (
    <>
      <div className='bg-black w-32 h-32 absolute -top-24 rounded-full z-10 overflow-hidden'>
        <img
          src='/src/assets/Images/profileIcon.png'
          alt='profilePicture'
          className='w-32 h-32 object-cover'
        />
      </div>
      <div className=' py-12 px-40 text-center flex flex-col items-center gap-0 absolute -top-4'>
        <div className='flex flex-col justify-center items-center relative'>
          <h1 className='text-2xl font-bold gap-2'>Priyanshu Bhattacharjee</h1>
          <div className='flex flex-row gap-1'>
            <MdEmail className='absolute top-10 left-3 text-gray-900 text-lg' />
            <p className='text-gray-900 text-lg font-semibold'>
              prathamac62@gmail.com
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center text-center gap-10 mt-4 text-gray-800 text-[15px] font-semibold'>
          <div className='flex flex-row gap-2'>
            <FaPhone className='text-xl' />
            <span>9823678980</span>
          </div>
          <div className='flex flex-row gap-2'>
            <span clasName='font-bold'>Age-21</span>
          </div>
          <div className='flex flex-row gap-2'>
            <MdBloodtype className='text-2xl' />
            <span> Group- B+</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo
