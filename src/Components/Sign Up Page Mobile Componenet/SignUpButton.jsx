import React from "react";

const SignUpButton = ({ onClick, disabled = false }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full py-3 rounded-full text-white font-semibold text-sm transition-colors duration-200 hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: "#E91E63" }}
      >
        Sign-up
      </button>
    </div>
  );
};

export default SignUpButton;