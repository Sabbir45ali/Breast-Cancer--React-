import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import SignUpButton from "./SignUpButton";
import DropdownMenu from "./Dropdown";

const MainRightModel = () => {
  const [selectedRole, setSelectedRole] = useState(null); 
  const options = ["Organisation", "User"];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-4 px-4">
      <Header
        FirstLetter="C"
        SecondLetter="A"
        Firstpart="reate "
        Secondpart="ccount"
        text="Use email for registration"
      />
      <DropdownMenu
        heading="Create Account as"
        options={options}
        onSelect={setSelectedRole} 
      />
      <Input />
      <SignUpButton role={selectedRole} /> 
    </div>
  );
};

export default MainRightModel;
