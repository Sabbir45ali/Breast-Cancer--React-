import React, { useState } from "react";
import InputField from "../Sign Up page Component/SignUpPageRightModel/InputField";
import DropdownMenu from "../Sign Up page Component/SignUpPageRightModel/Dropdown";

const SignInInput = ({ onRoleSelect, formValues, onChange }) => {
  const inputFields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const options = ["Organisation", "User", "Admin"];

  return (
    <div className="flex flex-col items-center justify-center p-14 gap-4">
      <DropdownMenu
        heading="Sign In as"
        options={options}
        onSelect={onRoleSelect}
        buttonClassName="bg-gray-200 text-gray-600 font-semibold"
        divClassName=" bg-gray-200 "
      />
      <div className="w-80 space-y-4">
        {inputFields.map((field) => (
          <InputField
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formValues[field.name] || ""}
            onChange={(e) => onChange(field.name, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default SignInInput;
