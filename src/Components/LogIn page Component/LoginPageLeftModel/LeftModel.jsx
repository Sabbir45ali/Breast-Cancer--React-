import React from "react";
import LeftModalHeader from "./LeftModelHeader";
import UniversalButton from "../LoginPageRightModel/UniversalButton"

const LeftModel = () => {
  return (
    <div className="flex items-center justify-center h-full w-1/2">
      <div className="bg-gradient-to-r from-pink-200 to-pink-500 h-full w-full  rounded-xl shadow-lg text-center flex flex-col items-center justify-center">
        <LeftModalHeader />
        <div className="mt-4">
          <UniversalButton btn='SIGN-IN' btnColor='#F44A82' />
        </div>
      </div>
    </div>
  );
};

export default LeftModel;
