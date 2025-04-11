import React, { useState } from "react";
import InputField from "./InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = () => {
  const [showPassword, setShowPassword] = useState(false);

  const inputFields = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Phone No" },
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <form className="w-80 space-y-3">
      {inputFields.map((field, index) => (
        <div key={index} className="relative">
          <InputField
            type={
              field.type === "password" && !showPassword ? "password" : "text"
            }
            placeholder={field.placeholder}
          />
          {field.type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          )}
        </div>
      ))}
    </form>
  );
};

export default Input;
