import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import Logo from '../../assets/Images/Logo.png'
import profileImg from '../../assets/Images/profileIcon.png'
import FormHeader from '../../Components/Form Page BtoC Components/FormHeader'
import '../../App.css'

const FormPageBtoC = () => {
  return (
    <div className=' min-h-screen w-full formtwo'>
      <div>
        <Navbar Logo={Logo} profileImg={profileImg} />
      </div>
      <div>
        <FormHeader />
      </div>
    </div>
  )
}

export default FormPageBtoC
