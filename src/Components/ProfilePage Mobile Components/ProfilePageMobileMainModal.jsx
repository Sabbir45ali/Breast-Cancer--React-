import React from 'react'
import ProfilePageNav from './ProfilePageNav'
import mainModelProfile from '../../assets/Images/Main_modal_profile_page_mobile.png'
const ProfilePageMobileMainModal = () => {
  return (
    <div className='bg-gradient-to-r from-[#e9e4e6] bg-[#db5984] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative'>
      <div className='absolute top-5 right-6 z-20 sticky-right'>
        <ProfilePageNav />
      </div>
      <div className='absolute top-0 left-0 w-full sm:h-[700px] lg:h-[900px] rounded-b-[50px] '>
        <img
          src={mainModelProfile}
          alt='profile-modal'
          className='w-full h-full object-cover rounded-b-[50px]'
        />
      </div>
    </div>
  )
}

export default ProfilePageMobileMainModal
// prod
