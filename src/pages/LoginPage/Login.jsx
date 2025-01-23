import React from "react";
import LeftModel from "../../Components/LogIn page Component/LoginPageLeftModel/LeftModel";
import MainRightModel from "../../Components/LogIn page Component/LoginPageRightModel/MainRightModel";
const Login = () => {
  return (
    <>
      <div className="flex flex-row h-screen items-center justify-center bg-pink-100">
        <div className="flex w-3/5 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden">
          <LeftModel
            Header="Welcome user!"
            Text="If you are already registered"
            btn="SIGN-IN"
            btnColor="#9D094D"
          />
          <MainRightModel />
        </div>
      </div>
    </>
  );
};
export default Login;
