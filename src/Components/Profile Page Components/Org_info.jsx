import React from 'react'
import { MdEmail, MdBloodtype } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import profileImg from '../../assets/Images/profileIcon.png'

const Org_info = (props) => {
  return (
    <div className='relative flex flex-col items-center w-full'>
      <div className='bg-black w-32 h-32 absolute -top-16 rounded-full z-10 overflow-hidden'>
        <img
          src={profileImg}
          alt='profilePicture'
          className='w-32 h-32 object-cover'
        />
      </div>

      <div className='mt-16 text-center flex flex-col items-center'>
        <h1 className='text-2xl font-bold'>{props.OrgName}</h1>
        <h2 className='text-xl font-semibold'>{props.Lisc}</h2>

        <div className='flex justify-center items-center gap-10 mt-4 text-gray-800 text-[15px] font-semibold'>
          <div className='flex items-center gap-2'>
            <FaPhone className='text-xl' />
            <span>{props.OrgPhnNo}</span>
          </div>
          <div className='flex items-center gap-2'>
            <MdEmail className='text-2xl' />
            <span>: {props.OrgEmail}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-semi-bold'>Org type: {props.OrgType}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Org_info
