import React, { useState } from "react";
import SignupMainModal from "../../Components/Signup page Component/SignupMainModal";
import LeftModel from "../../Components/LogIn page Component/LoginPageLeftModel/LeftModel";
import Login from "../LoginPage/Login";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false); 

  const handleRightModelClick = () => {
    console.log("Signup button clicked - switching to Login page");
    setIsLogin(true); 
  };

  return (
    <>
      {!isLogin ? (
        <div className="flex flex-row h-screen items-center justify-center bg-pink-100">
          <div className="flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden">
            <SignupMainModal
              onForgotPasswordClick={() =>
                console.log("Forgot Password Clicked")
              }
            />
            <LeftModel
              Header="Hello user!"
              Text="If you don't have an account"
              btn="SIGN-UP"
              btnColor="#EE3E90"
              handleRightModelClick={handleRightModelClick}
            />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Signup;
