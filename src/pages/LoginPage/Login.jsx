import React, { useState } from "react";
import LeftModel from "../../Components/LogIn page Component/LoginPageLeftModel/LeftModel";
import MainRightModel from "../../Components/LogIn page Component/LoginPageRightModel/MainRightModel";
import Signup from "../signuppage/Signup";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); 
  const [animationClass, setAnimationClass] = useState(""); 

  const handleLeftModelClick = () => {
    setAnimationClass("translate-x-full");  // Apply sliding out effect for login -> signup transition
    setTimeout(() => setIsSignup(true), 500);  // After animation, switch to Signup
  };

  return (
    <>
      {!isSignup ? (
        <div
          className="flex flex-row h-screen items-center justify-center bg-pink-100"
        >
          <div className="flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className={` flex w-full transform transition-transform duration-300 ease-in-out ${animationClass}`}>
            <LeftModel
              Header="Welcome user!"
              Text="If you are already registered"
              btn="SIGN-IN"
              btnColor="#9D094D"
              handleLeftModelClick={handleLeftModelClick}
            />
            </div>
            <MainRightModel />
          </div>
        </div>
      ) : (
        <div className="transform translate-x-0 transition-transform duration-500 ease-in-out">
          <Signup />
        </div>
      )}
    </>
  );
};

export default Login;
