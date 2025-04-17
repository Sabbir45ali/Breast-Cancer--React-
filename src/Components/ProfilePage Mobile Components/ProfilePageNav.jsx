import React, { useState, useRef, useEffect } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import RichDataMobile from "./RichDataMobile";

const ProfilePageNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false); // Modal state
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
    <div ref={dropdownRef} className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <PiDotsThreeOutlineFill className=" text-[27px] text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg">
          <div
            onClick={() => {
              setOpen(true);
              setIsOpen(false);
            }} // Open modal & close dropdown
            className="px-4 py-2 hover:bg-pink-400 rounded-lg cursor-pointer"
          >
            Edit Profile
          </div>
          <div className="px-4 py-2 hover:bg-pink-400 rounded-lg cursor-pointer">
            Log Out
          </div>
        </div>
      )}

      {/* Render the modal */}
      <RichDataMobile open={open} onclose={() => setOpen(false)} />
    </div>
  );
};

export default ProfilePageNav;