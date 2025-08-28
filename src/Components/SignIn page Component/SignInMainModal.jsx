import React, { useState } from "react";
import Header from "../Sign Up page Component/SignUpPageRightModel/Header";
import SignInButton from "./SignInButton";
import SignInInput from "./SignInInput";
import ForgotPasswordModal from "../Universal Components/ForgotPasswordModal";

const SignInMainModal = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const openForgotPasswordModal = () => setIsForgotPasswordOpen(true);
  const closeForgotPasswordModal = () => setIsForgotPasswordOpen(false);

  return (
    <>
      {/* Main Sign In Section */}
      <div
        className={`flex flex-col items-center justify-center h-full w-full transition-all duration-300 ${
          isForgotPasswordOpen ? "blur-sm" : ""
        }`}
      >
        <div className="w-1/2 flex flex-col items-center">
          <Header
            FirstLetter="S"
            SecondLetter="I"
            Firstpart="ign "
            Secondpart="n"
            text="Use email and password"
          />
          <SignInInput onRoleSelect={setSelectedRole} />
          <div>
            <SignInButton role={selectedRole} />
          </div>
          <div className="mt-4">
            <button
              className="text-pink-500 underline hover:text-pink-700 focus:outline-none"
              onClick={openForgotPasswordModal}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={closeForgotPasswordModal}
      />
    </>
  );
};

export default SignInMainModal;
