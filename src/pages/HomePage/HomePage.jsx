// skipcq: JS-W1028
import React from "react";
import Navbar from "../../Components/Universal Components/Navbar";
// skipcq: JS-C1001, JS-0128
import profileImg from "../../assets/Images/profileIcon.png";
import Logo from "../../assets/Images/logo.png";
import Header from "../../Components/Home Page Components/Header";
const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Navbar profileImg={profileImg} Logo={Logo} />
    </div>
  );
};
export default HomePage;
