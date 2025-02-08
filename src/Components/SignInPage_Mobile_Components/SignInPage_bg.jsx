import * as React from "react";
import SignInPageInput from "./SignInPageInput";
import SigninPage_Buttons from "./SignInPage_Button";
import Header from "../LogIn page Component/LoginPageRightModel/Header";
import SignInPage_Footer from "./SignInPage_Footer";
const SignInPage_bg = () => {
  const bgImage = "/Images/bg_pic_Landing_page_mobile.png";
  const Mobile_landing_page_Female = "/Images/MobileLandingPageFemale1.png";
  const inputFields = [
    { type: "email", placeholder: "Enter your email", background: "#F3DCE0" },
    {
      type: "password",
      placeholder: "Enter your password",
      background: "#F3DCE0",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="sm:hidden w-screen min-h-screen flex flex-col items-center justify-start text-center relative"
    >
      <div className="w-full flex justify-center mt-8">
        <img
          src={Mobile_landing_page_Female}
          alt="Person on landing page"
          className="w-[200px] h-[200px]  object-cover"
        />
      </div>
      <SignInSection inputFields={inputFields} />
    </div>
  );
};

const SignInSection = ({ inputFields }) => {
  return (
    <div className="w-full max-w-[400px] bg-white rounded-t-2xl shadow-2xl  mt-[-15px] flex flex-col justify-between items-center z-10 ">
      <div className="w-full max-w-[400px] bg-white rounded-t-2xl shadow-2xl  mt-[-15px] flex flex-col justify-between items-center z-10 p-8">
        <Header
          FirstLetter="S"
          Firstpart="ign "
          SecondLetter="I"
          Secondpart="n"
          text="Use email and password"
        />
        <div className="w-full mt-4">
          <SignInPageInput inputs={inputFields} />
        </div>
        <SigninPage_Buttons
          label="Sign-In"
          bgColor="#FF6699"
          textColor="#FFFFFF"
        />
        <div className="text-gray-700 text-sm mb-4 mt-5">
          Forgot password?{" "}
          <a href='/forgot-password" className="text-[#FF6699] underline'>
            Click here!
          </a>
        </div>
      </div>
      <div className="min-w-full max-w-[400px] mt-auto">
        <SignInPage_Footer
          FooterText1="Don't have an account?"
          FooterText2="Sign-Up"
        />
      </div>
    </div>
  );
};

export default SignInPage_bg;
