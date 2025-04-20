import React from "react";
import NavbarMobile from "../../Components/HomePageMobileComponents/NavbarMobile";
import FooterMobile from '../../Components/HomePageMobileComponents/FooterMobile'
import HomePageHeader from "../../Components/HomePageMobileComponents/HomaPageHeader";
import Awareness from "../../Components/HomePageMobileComponents/AwarenessMobile";
import "../../App.css";

const HomePage_Mobile = () => {
  return (
    <div className="flex flex-col gap-0">
      <div
        className="HomeBg flex flex-col min-h-screen bg-cover bg-center overflow-auto"
        // style={{
        //   backgroundImage: "url('/assets/Images/bg_pic_Home_page_mobile.png')",
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center'
        // }}
      >
        <NavbarMobile />
        <HomePageHeader />
      </div>

      <div className="relative bottom-4">
        <Awareness />
        <FooterMobile />
      </div>
    </div>
  );
};

export default HomePage_Mobile;
