import React from 'react'

// skipcq: JS-C1001
import Logo from "../../assets/Images/Logo.png";
import Navbar from "../../Components/Universal Components/Navbar";
import profileImg from "../../assets/Images/profileIcon.png";
const FormPageNavbar = () => {
  return (
    <div>
        <Navbar Logo={Logo} profileImg={profileImg} />
    </div>
  )
}

export default FormPageNavbar
