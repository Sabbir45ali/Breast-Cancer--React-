import React from 'react'
const RightButton = (props) => {
  return (
    <button className='w-36 bg-[#DFB3C5] text-white text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300'>
      {props.btn}
    </button>
  )
}
export default RightButton
