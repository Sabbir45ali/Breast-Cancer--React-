import React from "react";
import InputField from "../Sign Up page Component/SignUpPageRightModel/InputField";
import DropdownMenu from "../Sign Up page Component/SignUpPageRightModel/Dropdown";

const SignInInput = () => {
  const inputFields = [
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-14 gap-4">
      <DropdownMenu heading="Sign In as" />
      <form className="w-80 space-y-4">
        {inputFields.map((field, index) => (
          <InputField
            key={index}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
      </form>
    </div>
  );
};

export default SignInInput;
