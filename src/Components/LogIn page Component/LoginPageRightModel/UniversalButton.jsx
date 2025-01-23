import React from "react";

const RightButton = (props) => {
  const handleClick = () => {
    if (props.handleLeftModelClick) props.handleLeftModelClick(); 
    if (props.handleRightModelClick) props.handleRightModelClick();       
  };

  return (
    <button
      style={{ backgroundColor: props.btnColor }}
      onClick={handleClick} 
      className="w-36 text-white text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300"
    >
      {props.btn}
    </button>
  );
};

export default RightButton;
