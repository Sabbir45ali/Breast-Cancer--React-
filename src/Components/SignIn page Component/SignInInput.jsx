import React, { useState } from "react";
import InputField from "../Sign Up page Component/SignUpPageRightModel/InputField";
import DropdownMenu from "../Sign Up page Component/SignUpPageRightModel/Dropdown";

const SignInInput = ({ onRoleSelect, formValues, onChange, passwordRules, showTooltip, setShowTooltip }) => {
  const options = ["Organisation", "User"];


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
        <InputField
          type="email"
          placeholder="Email"
          value={formValues.email}
          onChange={(e) => onChange("email", e.target.value)}
        />

        <InputField
          type="password"
          placeholder="Password"
          value={formValues.password}
          onChange={(e) => onChange("password", e.target.value)}
          passwordRules={passwordRules}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
        />
      </div>
    </div>
  );
};

export default SignInInput;
