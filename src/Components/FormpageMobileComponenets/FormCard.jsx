import React from 'react'
import SideButton from './SideButton'

const FormCard = () => {
  return (
    <div className='h-1/2 flex items-center justify-between space-x-2 relative top-10'>
      <SideButton />
      <div className='relative top-16 right-0 justify-end ml-auto  bg-gradient-to-b from-pink-600/30 via-purple-200/10 to-blue-600/50 bg-opacity-30 backdrop-blur-md rounded-l-3xl p-8 shadow-2xl w-50 h-[600px]'>
        <div className='space-y-4'>
          <div>
            <label className='block text-white font-bold  mb-1'>
              Radius Mean:
            </label>
            <input
              type='number'
              className='w-full p-2 rounded-lg bg-white/50 focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-1'>
              Texture Mean:
            </label>
            <input
              type='number'
              className='w-full p-2 rounded-lg bg-white/50 focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-1'>
              Area Mean:
            </label>
            <input
              type='number'
              className='w-full p-2 rounded-lg bg-white/50 focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-1'>
              Smoothness Mean:
            </label>
            <input
              type='number'
              className='w-full p-2 rounded-lg bg-white/50 focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-1'>
              Compactness Mean:
            </label>
            <input
              type='number'
              className='w-full p-2 rounded-lg bg-white/50 focus:outline-none'
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-1'>
              Concavity Mean:
            </label>
            <input
              type='number'
              className='w-full p-2 rounded-lg bg-white/50 focus:outline-none'
            />
          </div>
        </div>

        <button
          type='submit'
          className='absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-36 bg-white/80 px-6 py-2 rounded-full shadow-md border-2 border-pink-900 text-pink-900 font-bold'
        >
          Check
        </button>
      </div>
    </div>
  )
}

export default FormCard
