import React from 'react'
import SignInPageInputes from '../../Components/SignInPage_Mobile_Components/SignInPageInput'
// import SignInPage_Buttons from '../../Components/SignInPage_Mobile_Components/SignInPage_Button'
import Header from '../../Components/LogIn page Component/LoginPageRightModel/Header'
import SignupButton from '../../Components/Signup page Component/SignupButton'
import { RxCrossCircled } from 'react-icons/rx'

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
    <div className='min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4 sm:px-6'>
      <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-white p-6 rounded-2xl shadow-lg'>
        <RxCrossCircled className='absolute top-2 right-4 text-3xl text-black cursor-pointer z-40' />
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
  );
};

export default SignUpPageMobile;
