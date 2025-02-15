import React from "react";
import SignInPageInputes from "../../Components/SignInPage_Mobile_Components/SignInPageInput";
import BGImage from "../../assets/Images/SignInPageMobileBg.png";
import SignupButton from "../../Components/Signup page Component/SignupButton";
import Header from "../../Components/LogIn page Component/LoginPageRightModel/Header";
const SignUpPageMobile = () => {
  const inputFields = [
    { type: "text", placeholder: "Enter your name", background: "#F3DCE0" },
    {
      type: "number",
      placeholder: "Enter your phone number",
      background: "#F3DCE0",
    },
    { type: "email", placeholder: "Enter your email", background: "#F3DCE0" },
    {
      type: "password",
      placeholder: "Enter your password",
      background: "#F3DCE0",
    },
  ];

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen flex flex-col items-center justify-center  px-4 sm:px-6"
      >
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white p-6 rounded-2xl shadow-lg absolute bottom-0 right-4 ">
          <Header
            FirstLetter="C"
            Firstpart="reate"
            SecondLetter="A"
            Secondpart="ccount"
          />
          <SignInPageInputes inputs={inputFields} />

          <div className="flex items-center justify-center  ">
            <SignupButton
              label="Sign-Up"
              bgColor="#FF6699"
              textColor="#FFFFFF"
              className="w-full mt-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageMobile;
