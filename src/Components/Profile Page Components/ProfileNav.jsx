import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
const ProfileNav = ({ Logo }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-md px-6 py-3 flex items-center justify-between">
      <Link to="/home">
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 h-10 object-contain flex-none"
          />
        </div>
      </Link>
      <Link to="/signin">
        <div className="relative flex items-end group">
          <BiLogOut className="absolute right-7 -top-3 text-2xl font-bold cursor-pointer " />
          <span className="absolute -bottom-2 right-0 mb-[-2rem] bg-gray-700 text-pink-300 text-xs font-semibold px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
            Log Out
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default ProfileNav;
