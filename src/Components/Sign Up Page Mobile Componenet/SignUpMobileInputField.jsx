import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
const InputField = ({ field, formData, handleInputChange, showPassword, setShowPassword }) => (
  <div className="relative mb-3">
    <input
      type={field.type === "password" && showPassword ? "text" : field.type}
      placeholder={field.placeholder}
      value={formData[field.key] || ""}
      onChange={(e) => handleInputChange(field.key, e.target.value)}
      className="w-full px-4 py-3 bg-pink-100 rounded-lg border border-pink-200 outline-none text-gray-700 placeholder-gray-500 text-sm focus:border-pink-300"
      style={{
        backgroundColor: "rgba(244, 193, 207, 0.3)",
        borderColor: "rgba(236, 72, 153, 0.3)",
      }}
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