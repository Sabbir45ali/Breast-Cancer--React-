import React from "react";
import Navbar from "../../Components/Universal Components/Navbar";
import profileImg from "../../assets/Images/profileIcon.png";
import Logo from "../../assets/Images/Logo.png";

const NoPage = () => {
  return (
    <div>
      <div className='NoPageBG bg-cover bg-center min-h-screen flex flex-col overflow-auto'>
      <Navbar profileImg={profileImg} Logo={Logo} />
      </div>
    </div>
  );
};

export default NoPage;
