import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
    <div className="text-center">
      <h1 className="text-4xl font-semibold">
        <span className="text-pink-500">C</span>reate{' '}
        <span className="text-pink-500">A</span>ccount
      </h1>
      <p className="mt-4 text-gray-600 text-sm">Use email for registration</p>
    </div>
  </div>
    
  );
}

export default Header
