import React from 'react'
import Input from "./Input";
import RightButton from "./RightButton";
const MainRightModel = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center ">
      <Input/>
      <div className="">
      <RightButton/>
      </div>
    </div>
  )
}

export default MainRightModel
