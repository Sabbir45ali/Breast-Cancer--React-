import React from 'react'
import LeftModalHeader from './LeftModelHeader'
import { Link } from 'react-router-dom'

const LeftModel = (props) => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='bg-gradient-to-r from-pink-200 to-pink-500 h-full w-full  rounded-xl shadow-lg text-center flex flex-col items-center justify-center'>
        <LeftModalHeader Header={props.Header} Text={props.Text} />
        <div className='mt-4'>
          <Link to='/signup'>
            <button className='w-36 bg-pink-500 text-white text-lg py-2 px-6 shadow-lg rounded-lg hover:bg-pink-200 hover:text-pink-950 transition duration-300'>
              {props.btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftModel
