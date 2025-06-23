import React from "react";
import NavbarMobile from "../../Components/Form Page Components/FormPageNavbar";
import CancerAlert from "../../Components/YesPage_mobile/CancerAlert ";

const YesPage_Mobile = () => {
  return (
    <div className="YesPageBg min-h-screen flex flex-col overflow-auto">
      <div>
        <NavbarMobile />
        <CancerAlert/>
      </div>
    </div>
  );
};

export default YesPage_Mobile;
