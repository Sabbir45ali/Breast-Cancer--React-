import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import Logo from '../../assets/Images/Logo.png'
import profileImg from '../../assets/Images/profileIcon.png'
import '../../App.css'
import FormLeftModal from '../../Components/Form Page Components/FormLeftModal'

const FormPage = () => {
  return (
    <div className='formPageDekstop min-h-screen w-full'>
      <Navbar Logo={Logo} profileImg={profileImg} />
      <div className='relative top-14'>
        <FormLeftModal />
      </div>
    </div>
  )
}

export default FormPage
