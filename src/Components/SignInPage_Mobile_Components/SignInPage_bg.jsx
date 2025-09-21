import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileLandingPageFemale1 from "../../assets/Images/MobileLandingPageFemale1.png";
import SignInPageInput from "./SignInPageInput";
import SignInButton from "../SignIn page Component/SignInButton";
import Header from "../Sign Up page Component/SignUpPageRightModel/Header";
import SignInPage_Footer from "./SignInPage_Footer";
import ForgotPasswordModal from "../Universal Components/ForgotPasswordModal"; // Import Modal
import { RxCrossCircled } from "react-icons/rx";

const SignInPage_bg = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const inputFields = [
    {
      type: "dropdown",
      placeholder: "Sign In as",
      options: ["Organisation", "User", "Admin"],
      background: "#F3DCE0",
    },
    { type: "email", placeholder: "Email", background: "#F3DCE0" },
    { type: "password", placeholder: "Password", background: "#F3DCE0" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#f0779f] bg-[#e4d4d9] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative">
      {/* Top Image */}
      <div className="relative top-20 w-full flex justify-center mt-8">
        <img
          src={MobileLandingPageFemale1}
          alt="Person on mobile landing page"
          className="w-[200px] h-[200px] object-cover"
        />
      </div>

      {/* Sign In Card */}
      <div
        className={`relative top-24 flex flex-col w-full max-w-[400px] bg-white rounded-2xl shadow-2xl mt-[-15px] ${
          isForgotPasswordOpen ? "blur-sm" : ""
        }`}
      >
        <div className="relative w-full max-w-[400px] bg-white rounded-2xl shadow-2xl mt-[-15px] flex flex-col justify-between items-center z-10 py-5 space-y-3">
          {/* Header */}
          <Header
            FirstLetter="S"
            Firstpart="ign"
            SecondLetter="I"
            Secondpart="n"
            text="Use email and password"
          />

          {/* Close Button */}
          <Link to="/">
            <RxCrossCircled className="absolute top-4 right-4 text-3xl z-40 w-6 h-6 bg-pink-100 rounded-full flex items-center text-pink-600 " />
          </Link>

          {/* Inputs */}
          <div className="items-center justify-center px-5 w-full">
            <SignInPageInput
              inputs={inputFields}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          </div>

          {/* Button */}
          <div className="flex justify-center items-center">
            <SignInButton role={selectedRole} />
          </div>

          {/* Forgot Password */}
          <div className="text-gray-700 text-sm mb-4 mt-5">
            Forgot password?{" "}
            <button
              onClick={() => {
                if (!selectedRole) {
                  alert("Please select a role before resetting password.");
                  return;
                }
                setIsForgotPasswordOpen(true);
              }}
              className="text-[#FF6699] underline focus:outline-none"
            >
              Click here!
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="min-w-full max-w-[400px] mt-auto">
          <Link to="/Signup">
            <SignInPage_Footer
              FooterText1="Don't have an account?"
              FooterText2="Sign-Up"
            />
          </Link>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  );
};

export default SignInPage_bg;
