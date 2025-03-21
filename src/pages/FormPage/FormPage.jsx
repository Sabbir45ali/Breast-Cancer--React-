import React from 'react'
import Navbar from '../../Components/Universal Components/Navbar'
import Logo from '../../assets/Images/Logo.png'
import profileImg from '../../assets/Images/profileIcon.png'

const FormPage = () => {
  return (
    <div>
      <Navbar Logo={Logo} profileImg={profileImg} />
    </div>
  );
};

export default FormPage;
