import React from "react";

const SignUpMobileHeader = ({ FirstLetter, Firstpart, SecondLetter, Secondpart }) => (
  <div className="text-center mb-4">
    <h1 className="text-4xl font-semibold mb-2">
      <span className='text-pink-500'>{FirstLetter}</span>
      <span className="text-black">{Firstpart} </span>
      <span className='text-pink-500'>{SecondLetter}</span>
      <span className="text-black">{Secondpart}</span>
    </h1>
    <p className="text-gray-600 text-sm">Use email for registration</p>
  </div>
);

export default SignUpMobileHeader;