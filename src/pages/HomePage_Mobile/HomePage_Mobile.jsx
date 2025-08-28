import React from "react";
import NavbarMobile from "../../Components/HomePageMobileComponents/NavbarMobile";
import FooterMobile from "../../Components/HomePageMobileComponents/FooterMobile";
import HomePageHeader from "../../Components/HomePageMobileComponents/HomaPageHeader";
import Awareness from "../../Components/HomePageMobileComponents/AwarenessMobile";
import "../../App.css";

const HomePage_Mobile = () => {
  return (
    <div className="flex flex-col gap-0">
      <div className="HomeBg flex flex-col min-h-screen bg-cover bg-center overflow-auto">
        <NavbarMobile />
        <HomePageHeader />
      </div>

      <div className="relative bottom-4">
        <Awareness testBtn="Test Yourself" />
        <FooterMobile />
      </div>
    </div>
  );
};

export default HomePage_Mobile;
