import React from "react";
import { FaEnvelope, FaPhoneAlt, FaTint, FaUser } from "react-icons/fa";


const PersonalInfoMobile = () => {
  return (
    <div className="pt-12 pb-6 px-3 text-center absolute top-[330px] w-72 left-16 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-gray-800 text-[23px] ">Sabbir Ali</h2>
        <p className="text-gray-700 flex items-center justify-center gap-2 text-[20px]">
          <FaEnvelope className="text-gray-500" /> prathamac62@gmail.com
        </p>
        <p className="text-gray-600 flex items-center justify-center gap-2 text-[17px] mt-2">
          <FaPhoneAlt className="text-gray-500" /> -9823******
        </p>

        {/* Additional Info */}
        <div className="flex justify-between items-center mt-4 text-gray-600 px-4 gap-2">
          <p className="flex items-center gap-1 text-[17px]">
            <FaUser className="text-gray-500" /> 21
          </p>
          <p className="flex items-center gap-1 text-[17px]">
            Age- 21
          </p>
          <p className="flex items-center gap-1 text-[17px]">
            <FaTint className="text-gray-500" /> Group- B+
          </p>
        </div>
      </div>
  );
};

export default PersonalInfoMobile;
