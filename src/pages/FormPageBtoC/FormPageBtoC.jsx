import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import Logo from '../../assets/Images/Logo.png'
import profileImg from '../../assets/Images/profileIcon.png'
import '../../App.css'


const FormPageBtoC = () => {
  return (
    <div className=' min-h-screen w-full'>
      <div className='formtwo'>
      <Navbar Logo={Logo} profileImg={profileImg} />
      </div>
    </div>
  )
}

export default FormPageBtoC