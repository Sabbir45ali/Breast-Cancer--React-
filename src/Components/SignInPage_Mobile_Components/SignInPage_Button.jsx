import React from "react";
import { Link } from "react-router-dom";
const SigninPage_Buttons = ({ label, bgColor, textColor, onClick }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Link to="/signup">
        <button
          className="w-3/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border border-gray-300 px-5 py-3 rounded-lg
                   shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          style={{ backgroundColor: bgColor, color: textColor }}
          onClick={onClick}
        >
          {label}
        </button>
      </Link>
    </div>
  );
};

export default SigninPage_Buttons;
