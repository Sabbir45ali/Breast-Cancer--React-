import profileImg from '../../assets/Images/profileIcon.png'
import PersonalInfoMobile from './PersonalInfoMobile'
import ProfilePageNav from './ProfilePageNav'
import '../../App.css'

const ProfilePageMobileMainModal = () => {
  return (
    <div className='w-full h-[750px] rounded-b-2xl   relative items-center justify-center ProfileBg z-10'>
    <div className=' absolute right-5 top-4 flex items-end'>
      <ProfilePageNav />
    </div>
    <div className='w-32 h-32 mx-auto  p-1 rounded-full  -mb-10 relative top-[240px]'>
     <img
          src={profileImg}
          alt='Profile'
          className='w-full h-full rounded-full object-cover'
        />
      </div>
      <PersonalInfoMobile />
    </div>
  )
}


export default ProfilePageMobileMainModal
// prod
