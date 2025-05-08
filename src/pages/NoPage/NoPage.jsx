import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import profileImg from "../../assets/Images/profileIcon.png";
import Logo from "../../assets/Images/Logo.png";

const NoPage = () => {
  return (
    <div>
      <Navbar profileImg={profileImg} Logo={Logo} />
    </div>
  )
}

export default NoPage
