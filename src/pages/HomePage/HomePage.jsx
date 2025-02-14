// skipcq: JS-W1028
import React from "react";
import Navbar from "../../Components/Universal Components/Navbar";
import HomePage_Bg from "../../Components/Home Page Component/HomePage_Bg";
// skipcq: JS-C1001, JS-0128
import profileImg from "../../assets/Images/profileIcon.png";
import Logo from "../../assets/Images/logo.png";
const HomePage = () => {
  return (
    <div className="">
      <Navbar profileImg={profileImg} Logo={Logo} />
      <HomePage_Bg />
    </div>
  );
};
export default HomePage;
