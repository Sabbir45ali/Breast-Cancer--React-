import React from "react";
import Input from "./Input";
import RightButton from "./RightButton";
import RightHeader from "./RightHeader";
const MainRightModel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-1/2">
      <RightHeader />
      <Input />
      <div className="">
        <RightButton />
      </div>
    </div>
  );
};

export default MainRightModel;
