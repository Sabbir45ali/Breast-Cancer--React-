import React from "react";

const Header = () => {
  return (
    <div className="relative mt-24 px-8 w-full top-32 flex">
      <div className="w-[80%] max-w-6xl ml-auto">
        <h1 className="text-[4.25rem] leading-[4.5rem] justify-center font-bold text-pink-800 text-right drop-shadow-lg">
          Strength is not in facing <br />
          cancer, but in fighting it with
          <br />
          hope and resilience.
        </h1>

        <p className="text-lg text-pink-900 font-bold mt-2 text-right">
          &quot;Early detection saves lives&quot;
        </p>
      </div>
    </div>
  );
};

export default Header;
