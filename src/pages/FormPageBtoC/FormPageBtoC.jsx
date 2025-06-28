import React from "react";
import Navbar from "../../Components/Universal Components/Navbar";
import Logo from "../../assets/Images/Logo.png";
import profileImg from "../../assets/Images/profileIcon.png";
import FormHeader from "../../Components/Form Page BtoC Components/FormHeader";
import "../../App.css";
import { FaCamera } from "react-icons/fa";

const FormPageBtoC = () => {
  return (
    <div className=" min-h-screen w-full formtwo">
      <div>
        <Navbar Logo={Logo} profileImg={profileImg} />
      </div>
      <div className=" gap-8 flex flex-col items-center justify-center relative top-96">
        <label className="mt-4 border-2 h-16 w-96 flex items-center justify-center bg-[#851e2081] border-black text-black text-2xl px-4 py-2 rounded-xl shadow-xl font-semibold gap-3">
          <FaCamera />
          Upload Memmogram Image
          <input
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            className="hidden"
          />
        </label>

        {/* Test Button */}
        <button className="mt-3 font-semibold bg-[#EEB6B7]  text-black text-2xl px-6 py-2 rounded-lg shadow-md hover:bg-[#851e208f] hover:text-[#EEB6B7] h-12 w-36 border-2 border-[#561a1a] flex items-center justify-center">
          Test
        </button>
      </div>
      <div>
        <FormHeader />
      </div>
    </div>
  );
};

export default FormPageBtoC;
