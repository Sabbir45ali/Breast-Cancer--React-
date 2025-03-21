import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import Logo from '../../assets/Images/Logo.png'
import profileImg from '../../assets/Images/profileIcon.png'
// import FormLeftModal from '../../Components/Form Page Components/FormLeftModal'

const FormPage = () => {
  return (
    <div className="bg-[url('src/assets/Images/bg_pic_Form_page_dekstop.png')] bg-cover bg-center min-h-screen flex flex-col overflow-auto">
      <Navbar Logo={Logo} profileImg={profileImg} />
      {/* <FormLeftModal/> */}
    </div>
  )
}

export default FormPage
