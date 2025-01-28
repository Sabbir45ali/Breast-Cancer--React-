import React from "react";

const SignInPageInput = ({ inputs }) => {
  return (
    <div className="mb-10 flex flex-col justify-center items-center">
      <div className="max-w-sm space-y-4">
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            style={{ background: input.background || "#F3DCE0" }}
            className="w-full px-4 py-3 rounded-lg border border-gray-500 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        ))}
      </div>
    </div>
  );
};

export default SignInPageInput;
