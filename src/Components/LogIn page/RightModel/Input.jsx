import React from "react";

const Input = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="w-80 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="text"
          placeholder="Phone No"
          className="w-full p-3 rounded-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </form>
    </div>
  );
};

export default Input;

