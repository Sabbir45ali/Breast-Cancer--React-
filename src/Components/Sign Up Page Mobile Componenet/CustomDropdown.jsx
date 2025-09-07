import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const CustomDropdown = ({
  selectedType,
  isDropdownOpen,
  setIsDropdownOpen,
  setSelectedType,
  accountTypes
}) => {
  return (
    <div className="relative mb-4">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full px-4 py-3  rounded-lg  bg-pink-100  focus:outline-none focus:ring-2 focus:ring-pink-300 border border-gray-300 text-gray-500 font-mediumr flex justify-between items-center text-sm"
        
      >
        <span>{selectedType}</span>
                <TiArrowSortedDown
                  className={`w-4 h-4 transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border z-50">
          {accountTypes.map((type) => (
            <div
              key={type}
              onClick={() => {
                setSelectedType(type);
                setIsDropdownOpen(false);
              }}
              className="px-4 py-3 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;