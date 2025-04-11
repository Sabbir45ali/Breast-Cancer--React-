import React, { useState, useRef, useEffect } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

function DropdownMenu(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const options = ['Organisation', 'User', 'Admin'];


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left ">
      <button
        onClick={() => setOpen(!open)}
        className="w-80 h-12 p-3 rounded-lg bg-gray-200 flex justify-between items-center px-4 py-2 text-gray-600 font-semibold   transition"
      >
        <span>{selected || props.heading}</span>
        <TiArrowSortedDown
          className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-80 rounded-md shadow bg-gray-200 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-1 text-gray-800 hover:bg-pink-400"
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
