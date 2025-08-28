import React, { useState } from "react";
import InputField from "./InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ role, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const orgFields = [
    {
      name: "org_name",
      type: "text",
      placeholder: "Organisation Name",
    },
    { name: "phnumber", type: "text", placeholder: "Phone No" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "org_type", type: "text", placeholder: "Type of Org" },
    { name: "license_number", type: "text", placeholder: "Licence / Reg Number" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const userFields = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "phone", type: "text", placeholder: "Phone No" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const fieldsToRender =
    role === "Organisation" ? orgFields : role === "User" ? userFields : [];

  return (
    <div className="w-80 space-y-3">
      {fieldsToRender.map((field, index) => (
        <div key={field.name} className="relative">
          <InputField
            type={
              field.type === "password" && !showPassword ? "password" : "text"
            }
            placeholder={field.placeholder}
            value={onChange.values[field.name] || ""}
            onChange={(e) => onChange.handleChange(field.name, e.target.value)}
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
    </div>
  );
};

export default Input;
