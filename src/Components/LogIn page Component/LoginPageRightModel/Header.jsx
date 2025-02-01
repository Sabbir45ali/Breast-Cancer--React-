import React from 'react'

const Header = (props) => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='text-center'>
        <h1 className='text-4xl font-semibold'>
          <span className='text-pink-500'>{props.FirstLetter}</span>
          {props.Firstpart}
          <span className='text-pink-500'>{props.SecondLetter}</span>
          {props.Secondpart}
        </h1>
        <p className='mt-4 text-gray-600 text-sm'>Use email for registration</p>
      </div>
    </div>
  )
}

export default Header
