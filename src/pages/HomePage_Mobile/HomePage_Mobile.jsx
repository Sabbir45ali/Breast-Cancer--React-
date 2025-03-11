import React from "react";
import NavbarMobile from "../../Components/HomePageMobileComponents/NavbarMobile";
import FooterMobile from "../../Components/HomePageMobileComponents/FooterMobile";
import bgPicHomePageMobile from "../../assets/Images/bg_pic_Home_page_mobile.png";
import HomePageHeader from "../../Components/HomePageMobileComponents/HomaPageHeader";
import Awareness from "../../Components/HomePageMobileComponents/AwarenessMobile";

const HomePage_Mobile = () => {
  return (
    <div className="flex flex-col gap-0">
      <div
        className="flex flex-col min-h-screen bg-cover bg-center overflow-auto"
        style={{
          backgroundImage: `url(${bgPicHomePageMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavbarMobile />
        <HomePageHeader />
      </div>

      <div className="relative bottom-4">
        <Awareness />
      </div>
    </div>
  );
};

export default HomePage_Mobile;
