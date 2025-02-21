import React from 'react'
import ProfileIcon from './ProfileIcon'
import { Link } from 'react-router-dom'

const Navbar = ({ Logo, profileImg }) => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-md px-6 py-3 flex items-center justify-between'>
      <Link to='/landing'>
        <div className='flex items-center space-x-3'>
          <img
            src={Logo}
            alt='Logo'
            className='w-32 h-10 object-contain flex-none'
          />
        </div>
      </Link>
      <Link to='/profile'>
        <ProfileIcon profileImg={profileImg} />
      </Link>
    </nav>
  )
}

export default Navbar
