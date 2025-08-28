import React from "react";

const SignUpMobileHeader = ({ FirstLetter, Firstpart, SecondLetter, Secondpart }) => (
  <div className="text-center mb-4">
    <h1 className="text-2xl font-bold mb-2">
      <span style={{ color: "#E91E63" }}>{FirstLetter}</span>
      <span className="text-black">{Firstpart} </span>
      <span style={{ color: "#E91E63" }}>{SecondLetter}</span>
      <span className="text-black">{Secondpart}</span>
    </h1>
    <p className="text-gray-600 text-xs">Use email for registration</p>
  </div>
);

export default SignUpMobileHeader;