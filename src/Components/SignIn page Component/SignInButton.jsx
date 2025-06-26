import React from "react";
import { useNavigate } from "react-router-dom";

const SignInButton = ({ btnColor, role }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (role) {
      case "User":
        navigate("/home");
        break;
      case "Admin":
        navigate("/admin-home");
        break;
      case "Organisation":
        navigate("/org-home");
        break;
      default:
        alert("Please select a role.");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: btnColor }}
      className="w-36 text-white text-lg py-2 px-6 bg-[#AB1B68] shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300"
    >
      SIGN-IN
    </button>
  );
};

export default SignInButton;
