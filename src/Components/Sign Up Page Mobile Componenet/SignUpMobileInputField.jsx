import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const InputField = ({
  field,
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
}) => (
  <div className="relative mb-3">
    <input
      type={field.type === "password" && showPassword ? "text" : field.type}
      placeholder={field.placeholder}
      value={formData[field.key] || ""}
      onChange={(e) => handleInputChange(field.key, e.target.value)}
      className="w-full  py-3 h-12  px-4 rounded-lg  bg-pink-100  focus:outline-none focus:ring-2 focus:ring-pink-300 border border-gray-300 text-gray-700 "
    />
    {field.type === "password" && (
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    )}
  </div>
);

export default InputField;
