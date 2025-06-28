import React, { useState, useRef, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

function DropdownMenu({ heading, options = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null); // ✅ define it here

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option); // call onSelect if it's provided
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-80">
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-12 rounded-lg bg-gray-200 flex justify-between items-center px-4 text-gray-600 font-semibold"
      >
        <span>{selected || heading}</span>
        <TiArrowSortedDown
          className={`w-4 h-4 transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-full rounded-md shadow bg-gray-200 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-pink-400"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
