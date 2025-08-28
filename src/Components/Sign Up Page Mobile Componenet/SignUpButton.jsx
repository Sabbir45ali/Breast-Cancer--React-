import React from "react";

const SignUpButton = ({ onClick, disabled = false }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        disabled={disabled}
         className="w-36 text-white text-lg py-2 px-6 bg-[#AB1B68] shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300 position-center"
      >
        Sign-up
      </button>
    </div>
  );
};

export default SignUpButton;