import React from 'react'
import Input from "./Input";
import RightButton from "./RightButton";
import RightHeader from "./RightHeader";
const MainRightModel = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center ">
      <RightHeader/>
      <Input/>
      <div className="">
      <RightButton/>
      </div>
    </div>
  )
}

export default MainRightModel
