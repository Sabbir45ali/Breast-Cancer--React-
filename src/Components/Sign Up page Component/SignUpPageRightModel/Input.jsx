import React, { useState } from "react";
import InputField from "./InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({role}) => {
  const [showPassword, setShowPassword] = useState(false);

  const orgFields = [
    {type: "text", placeholder: "Organisation Name"},
    { type: "text", placeholder: "Phone No" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Type of Org" },
    { type: "text", placeholder: "Licence / Reg Number" },
    { type: "password", placeholder: "Password" },
  ];
  
  const userFields = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Phone No" },
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Password" },
  ];

  const fieldsToRender = 
        role=="Organisation"? orgFields : role=="User"? userFields : [];

  return (
    <form className="w-80  space-y-3">
      {fieldsToRender.map((field, index) => (
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
