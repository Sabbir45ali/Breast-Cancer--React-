import React from "react";

// skipcq: JS-C1001
import Logo from "../../assets/Images/Logo.png";
import Navbar from "../../Components/Universal Components/Navbar";
import profileImg from "../../assets/Images/profileIcon.png";
const FormPageNavbar = () => {
  const role = localStorage.getItem("role");
  const homeLink = role === "org" ? "/org-home" : "/home";
  const profileLink = role === "org" ? "/org-profile" : "/profile";
  return (
    <div>
      <Navbar
        Logo={Logo}
        profileImg={profileImg}
        BacktoHome={homeLink}
        profileLink={profileLink}
      />
    </div>
  );
};

export default FormPageNavbar;
