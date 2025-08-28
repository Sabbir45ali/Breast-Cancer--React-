import React from "react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="rounded-2xl w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white text-center py-4 rounded-t-2xl font-semibold mb-0">
        Welcome User !!
        <Link to="/signin" className="underline"> Sign in</Link>
      </div>
    </div>
  );
};

export default BottomNavigation;