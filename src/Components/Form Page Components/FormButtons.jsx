import React from "react";
import { FaCamera } from "react-icons/fa";

const FormButtons = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      {/* Upload Button */}
      <label className="mt-4 border-2 h-10 w-96 flex items-center justify-center border-black text-black px-4 py-2 rounded-lg shadow-xl font-semibold gap-3">
        <FaCamera />
        Upload Memmogram Image
        <input
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="hidden"
        />
      </label>

      {/* Test Button */}
      <button className="mt-3 font-semibold bg-pink-200 text-black px-6 py-2 rounded-lg shadow-md hover:bg-pink-400 h-10 w-36 border-2 border-pink-900 flex items-center justify-center">
        Test
      </button>
    </div>
  );
};

export default FormButtons;
