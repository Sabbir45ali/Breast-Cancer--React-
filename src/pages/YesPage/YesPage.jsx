import React from "react";
import Navbar from "../../Components/Universal Components/Navbar";
import profileImg from "../../assets/Images/profileIcon.png";
import Logo from "../../assets/Images/Logo.png";
import TextBox from "../../Components/YesPage/TextBox";
const YesPage = () => {
  return (
    <div>
      <div className=" bg-cover bg-center min-h-screen flex flex-col overflow-auto bg_Yespage">
        <Navbar profileImg={profileImg} Logo={Logo} />
        <div>
          <TextBox />
        </div>
      </div>
    </div>
  );
};

export default YesPage;
