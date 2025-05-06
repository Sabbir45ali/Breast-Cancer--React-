import React from "react";
import FormImg from "../../assets/Images/doctor_pic_form_page.png";
import FormButtons from "../../Components/Form Page Components/FormButtons";

const FormLeftModal = () => {
  return (
    <div className="min-h-screen flex items-center relative -top-7 p-4 -ml-24 ">
      <div className="flex flex-col items-center justify-center z-10 relative top-14  w-[500px] h-[500px]">
        <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden ">
          <img
            src={FormImg}
            alt="Doctor Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <FormButtons />
      </div>
    </div>
  );
};

export default FormLeftModal;
