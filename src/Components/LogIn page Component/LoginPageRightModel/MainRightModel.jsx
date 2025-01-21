import React from 'react'
import Input from "./Input";
import RightButton from "./RightButton";
import RightHeader from "./Header";
const MainRightModel = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center">
      <RightHeader FirstLetter='C' SecondLetter='A' Firstpart='reate ' Secondpart='ccount'/>
      <Input/>
      <div className="">
      <RightButton btn='SIGN-UP'/>
      </div>
    </div>
  )
}

export default MainRightModel
