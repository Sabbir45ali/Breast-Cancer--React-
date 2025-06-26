import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpButton = ({ role }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (role) {
      case 'User':
        navigate('/home');
        break;
      case 'Organisation':
        navigate('/org-home');
        break;
      default:
        alert("Please select a role before signing up.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className='w-36 bg-pink-200 text-black text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-700 hover:text-pink-50 transition duration-300'
    >
      SIGN-UP
    </button>
  );
};

export default SignUpButton;
