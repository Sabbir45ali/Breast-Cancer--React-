import React from "react";
import { IoMenuOutline } from "react-icons/io5";
// skipcq: JS-C1001
import ProfileIcon from "../../Components/Universal Components/ProfileIcon";
import profileimg from "../../assets/Images/profileIcon.png";
const NavbarMobile = () => {
  return (
    <navbar className="fixed top-0 left-0 w-full z-50 bg-transparent md:bg-white shadow md:shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty Hamburger Menu (Left Side) */}
          <button className="text-black md:hidden p-2 cursor-pointer">
            <IoMenuOutline size={24} />
          </button>

          {/* Profile Image (Right Side) */}
          <div className="pr-2">
            <ProfileIcon profileImg={profileimg} />
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default NavbarMobile;
