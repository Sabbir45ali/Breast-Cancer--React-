import React from 'react'
import { MdEmail, MdBloodtype } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'

const PersonalInfo = (props) => {
  return (
    <div className="relative flex flex-col items-center w-full">
     
      <div className="bg-black w-32 h-32 absolute -top-16 rounded-full z-10 overflow-hidden">
        <img
          src="/src/assets/Images/profileIcon.png"
          alt="profilePicture"
          className="w-32 h-32 object-cover"
        />
      </div>

    
      <div className="mt-16 text-center flex flex-col items-center">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <div className="flex items-center gap-2 mt-1">
          <MdEmail className="text-gray-900 text-xl" />
          <p className="text-gray-900 text-lg font-semibold">{props.email}</p>
        </div>

       
        <div className="flex justify-center items-center gap-10 mt-4 text-gray-800 text-[15px] font-semibold">
          <div className="flex items-center gap-2">
            <FaPhone className="text-xl" />
            <span>{props.phnNo}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Age: {props.age}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdBloodtype className="text-2xl" />
            <span>Group: {props.bloodGroup}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
