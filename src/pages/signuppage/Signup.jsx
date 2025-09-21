import React from "react";
import LeftModel from "../../Components/Sign Up page Component/SignUpPageLeftModel/LeftModel";
import MainRightModel from "../../Components/Sign Up page Component/SignUpPageRightModel/MainRightModel";
// deploy
const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden ">
        <div className="w-1/2">
          <LeftModel
            Header="Welcome user!"
            Text="If you are already registered"
            btn="SIGN-IN"
            btnColor="#9D094D"
          />
        </div>
        <div className="w-1/2">
          <MainRightModel />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
