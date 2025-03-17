import React from 'react';
import { ImCross } from 'react-icons/im';

const RichDataMobile = ({ open, onclose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
      onClick={onclose}
    >
      <div
        className="relative w-4/5 h-3/5 MobileRichBg max-w-md text-white p-6 rounded-3xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-row relative -top-6   ">
          <img src="src/assets/Images/inside_pic_rich_data.png" alt="Medical Icon" className="w-52  mb-2" />
          <span className="relative top-10 ">
          <h3 className="text-xl font-bold ">Fill your details below</h3>
          </span>
        </div>

        {/* Form */}
        <form className="space-y-0 relative -top-8 ">
          <div>
            <label className="block text-left font-bold text-black ">Age:</label>
            <input type="number" className=" w-full  border-b-2 border-black bg-transparent text-black outline-none" />
          </div>

          <div>
            <label className="block text-left text-black font-bold ">Blood group:</label>
            <input type="text" className="w-full  border-b-2 border-black bg-transparent text-black outline-none" />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-left  text-black font-bold ">Height:</label>
              <input type="number" className="w-full  border-b-2 border-black bg-transparent text-black outline-none" />
            </div>
            <div className="flex-1">
              <label className="block text-left text-black font-bold ">Weight:</label>
              <input type="number" className="w-full  border-b-2 border-black bg-transparent text-black outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-left text-black font-bold ">Any past medical history:</label>
            <textarea className="w-full  border-b-2 border-black bg-transparent text-black outline-none p-2 "></textarea>
          </div>

          <div>
            <label className="block text-left text-black font-bold ">Current symptoms:</label>
            <textarea className="w-full  border-b-2 border-black bg-transparent text-black outline-none p-2"></textarea>
          </div>

          <button
            type="submit"
            className="w-1/2 bg-[#C01D52] text-white border border-black font-bold py-2 rounded-lg shadow-md mt-4"
          >
            Submit
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onclose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <ImCross className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RichDataMobile;