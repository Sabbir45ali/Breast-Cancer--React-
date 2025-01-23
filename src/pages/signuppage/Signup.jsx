import React from "react";
import SignupMainModal from "../../Components/Signup page Component/SignupMainModal";
import LeftModel from "../../Components/LogIn page Component/LoginPageLeftModel/LeftModel";
const Signup = () => {
  return (
    <div className="flex flex-row h-screen items-center justify-center bg-pink-100">
      <div className="flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden">
        <SignupMainModal
          onForgotPasswordClick={() => console.log("Forgot Password Clicked")}
        />
        <LeftModel
          Header="Hello user!"
          Text="If you don't have an account "
          btn="SIGN-UP"
          btnColor="#EE3E90"
        />
      </div>
    </div>
  );
};

export default Signup;
