import React from 'react'
import ProfilePageMobileMainModal from '../../Components/ProfilePage Mobile Components/ProfilePageMobileMainModal'
import ProfileButton_M from '../../Components/ProfilePage Mobile Components/ProfileButton_M'

const ProfilePageMobile = () => {
  return (
    <div className='bg-gradient-to-r from-[#e9e4e6] bg-[#db5984] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative gap-10'>
      <ProfilePageMobileMainModal />
      <ProfileButton_M />
    </div>
  )
}

export default ProfilePageMobile
