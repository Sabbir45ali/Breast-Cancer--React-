import React from "react";
import { FaCamera } from "react-icons/fa";

const SideButton = () => {
  return (
    <div className="flex flex-col items-start w-36 space-y-6 relative">
      {/* Check Button */}
      <button
        type="button"
        className="bg-pink-200 text-black font-semibold shadow-lg text-[20px] rounded-r-full py-2 px-4 w-24"
      >
        Check
      </button>

      {/* Test with Camera Icon */}
      <div className="flex items-center space-x-2 ml-2">
        <span className="text-black ">Test</span>
        <FaCamera className="h-5 w-5 text-black" />
      </div>
    </div>
  );
};

export default SideButton;
