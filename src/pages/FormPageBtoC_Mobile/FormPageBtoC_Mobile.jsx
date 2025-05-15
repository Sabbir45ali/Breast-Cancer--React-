import React from "react";
import "../../App.css";
import NavbarMobile from "../../Components/Form Page Components/FormPageNavbar";
import TextBoxBtoC from "../../Components/Form Page BtoC Components/TextBoxBtoC";
const FormPageBtoC_Mobile = () => {
  return (
    <div className=" min-h-screen formBtoC_mob">
      <NavbarMobile />
      <TextBoxBtoC />
    </div>
  );
};

export default FormPageBtoC_Mobile;
