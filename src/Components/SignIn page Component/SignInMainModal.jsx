import React, { useState } from "react";
import Header from "../Sign Up page Component/SignUpPageRightModel/Header";
import SignInButton from "./SignInButton";
import SignInInput from "./SignInInput";

const SignInMainModal = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-full w-1/2">
      <Header
        FirstLetter="S"
        SecondLetter="I"
        Firstpart="ign "
        Secondpart="n"
        text="Use email and password"
      />
      <SignInInput onRoleSelect={setSelectedRole} />
      <div className="">
        <SignInButton role={selectedRole} />
      </div>
      <div className="mt-4">
        <button
          className="text-pink-500 underline hover:text-pink-700 focus:outline-none"
          onClick={() => console.log("Forgot Password Clicked")}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default SignInMainModal;
