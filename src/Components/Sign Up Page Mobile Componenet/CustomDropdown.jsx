import React from "react";

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
        className="w-full px-4 py-3 rounded-lg border cursor-pointer flex justify-between items-center text-sm"
        style={{
          backgroundColor: "rgba(244, 193, 207, 0.3)",
          borderColor: "rgba(236, 72, 153, 0.3)",
          color: "#6B7280",
        }}
      >
        <span>{selectedType}</span>
        <div
          className={`text-gray-500 transition-transform text-sm ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          style={{
            transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▼
        </div>
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