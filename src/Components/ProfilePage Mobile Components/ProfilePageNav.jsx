import React, { useState, useRef, useEffect } from 'react'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom' // 1. Import useNavigate
import RichDataMobile from './RichDataMobile'

const ProfilePageNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate() // 2. Initialize the hook

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 3. Create a logout handler
  const handleLogout = () => {
    // If you're using Firebase, add your sign-out logic here:
    // auth.signOut().then(() => navigate("/signin"));

    setIsOpen(false)
    navigate('/signin') // Redirects the user
  }

  return (
    <div ref={dropdownRef} className='relative'>
      <button onClick={() => setIsOpen(!isOpen)}>
        <PiDotsThreeOutlineFill className='text-[27px] text-white' />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 z-50'>
          <div
            onClick={() => {
              setOpen(true)
              setIsOpen(false)
            }}
            className='px-4 py-2 hover:bg-pink-400 hover:text-white rounded-t-lg cursor-pointer transition-colors'
          >
            Edit Profile
          </div>
          {/* <div
            onClick={handleLogout} // 4. Attach the handler
            className="px-4 py-2 hover:bg-red-500 hover:text-white rounded-b-lg cursor-pointer transition-colors text-red-600"
          >
            Log Out
          </div> */}
          <button
            onClick={() => {
              localStorage.clear()

              window.location.href = '/signin'
            }}
          >
            Log Out
          </button>
        </div>
      )}

      <RichDataMobile open={open} onclose={() => setOpen(false)} />
    </div>
  )
}

export default ProfilePageNav
