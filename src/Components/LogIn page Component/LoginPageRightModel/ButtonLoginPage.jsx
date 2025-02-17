import React from "react";
import { Link } from "react-router-dom";

const ButtonLoginPage = (props) => {

  return (
    <Link to={"/signup"}>
      <button
        style={{ backgroundColor: props.btnColor }}
        className="w-36 text-white text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300"
      >
        Sign-Up
      </button>
    </Link>
  );
};

export default ButtonLoginPage;
