import React from "react";

const Header_Yes_No_Mobile = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-6 px-4 sm:px-6 md:px-8">
      <h1 className="header text-3xl sm:text-3xl md:text-4xl font-extrabold">
        {title}
      </h1>
      <p className="text-lg font-medium text-white mt-4 text-justify max-w-md mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

export default Header_Yes_No_Mobile;
