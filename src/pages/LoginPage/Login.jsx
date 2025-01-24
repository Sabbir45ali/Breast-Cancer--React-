import React, { useState } from "react";
import LeftModel from "../../Components/LogIn page Component/LoginPageLeftModel/LeftModel";
import MainRightModel from "../../Components/LogIn page Component/LoginPageRightModel/MainRightModel";
import Signup from "../signuppage/Signup";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); 

  const handleLeftModelClick = () => {
    console.log("clicked")
    setIsSignup(true); 
  };

  return (
    <>
      {!isSignup ? (
        <div className="flex flex-row h-screen items-center justify-center bg-pink-100">
          <div className="flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden">
            <LeftModel
              Header="Welcome user!"
              Text="If you are already registered"
              btn="SIGN-IN"
              btnColor="#9D094D"
              handleLeftModelClick={handleLeftModelClick} 
            />
            <MainRightModel />
          </div>
        </div>
      ) : (
        <Signup /> 
      )}
    </>
  );
};

export default Login;
