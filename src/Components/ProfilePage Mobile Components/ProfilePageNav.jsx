import React, { useState, useRef, useEffect } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const ProfilePageNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <PiDotsThreeOutlineFill className=" text-[27px] text-white" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg">
          <div className="absolute right-0 top-2 items-center w-32 h-7 bg-white hover:bg-pink-400 rounded-lg shadow-lg cursor-pointer ">
            Edit profile
          </div>
          <div className="absolute right-0 top-10 items-center w-32 h-7 bg-white hover:bg-pink-400 rounded-lg shadow-lg cursor-pointer ">
            Log out
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePageNav;
