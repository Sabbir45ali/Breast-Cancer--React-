import React from 'react'
import LeftModalHeader from './LeftModelHeader'
import { Link } from 'react-router-dom'

const LeftModel = (props) => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='bg-gradient-to-r from-[#FEC6D9] to-[#E3348C] h-full w-full  rounded-xl shadow-lg text-center flex flex-col items-center justify-center'>
        <LeftModalHeader Header={props.Header} Text={props.Text} />
        <div className='mt-4'>
          <Link to='/signin'>
            <button className='w-36 bg-[#DFB3D7] text-[#560530] text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300'>
              {props.btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftModel
