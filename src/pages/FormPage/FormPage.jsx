import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import Logo from '../../assets/Images/Logo.png'
import profileImg from '../../assets/Images/profileIcon.png'
import '../../App.css'

const FormPage = () => {
  return (
    <div className='formPageDekstop min-h-screen w-full' >
      <Navbar Logo={Logo} profileImg={profileImg} />
    </div>
  )
}

export default FormPage
