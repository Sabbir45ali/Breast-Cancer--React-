import React from 'react'

export default function BreastCancerForm () {
  return (
    <div className='min-h-screen flex items-center relative top-8 justify-end p-4'>
      <div className='bg-[#70113277] rounded-3xl shadow-xl p-8 w-5/12 min-h-[600px]'>
        <form className='space-y-4'>
          {[
            'Radius Mean',
            'Texture Mean',
            'Area Mean',
            'Smoothness Mean',
            'Compactness Mean',
            'Concavity Mean'
          ].map((label) => (
            <div key={label} className='flex items-center gap-6 p-4'>
              <label className='font-semibold  text-white text-base w-40'>
                {label} :
              </label>
              <input
                type='number'
                className='flex-1 rounded-md p-2 bg-rose-200 focus:outline-none focus:ring-2 focus:ring-[#5F1A31]'
              />
            </div>
          ))}
          <button
            type='submit'
            className='w-10/12 bg-[#B82360] text-white font-semibold text-2xl py-2 rounded-xl mt-4 hover:bg-[#5F1A31] transition duration-200 shadow-md relative top-12 left-16 h-12'
          >
            Check
          </button>
        </form>
      </div>
    </div>
  )
}
