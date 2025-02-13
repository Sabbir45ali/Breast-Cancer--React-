// skipcq: JS-W1028
import React from "react";
import Navbar from "../../Components/Universal Components/Navbar";
// skipcq: JS-C1001, JS-0128
import profileImg from "../../assets/Images/profileIcon.png";
import Logo from "../../assets/Images/logo.png";
const HomePage = () => {
  return (
    <div className="">
      <Navbar profileImg={profileImg} Logo={Logo}/>
    </div>
  );
}
export default HomePage;