import React from 'react'

const LeftModelHeader = (props) => {
  return (
    <>
      <div>
        <h1 className='text-white text-6xl font-light mb-2'>{props.Header}</h1>
        <p className='text-white text-lg font-extralight mb-4'>{props.Text}</p>
      </div>
    </>
  )
}

export default LeftModelHeader
