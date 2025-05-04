import React from 'react'

export default function BreastCancerForm () {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-3'>
      <div className='mt-16 bg-[#70113277] rounded-3xl shadow-xl px-10 py-8 w-[360px] sm:w-[420px] md:w-[480px]'>
        <form className='w-full'>
          {[
            'Radius Mean',
            'Texture Mean',
            'Area Mean',
            'Smoothness Mean',
            'Compactness Mean',
            'Concavity Mean'
          ].map((label) => (
            <div
              key={label}
              className='flex justify-between items-center my-5'
            >
              <label className='text-white font-semibold text-base w-44'>
                {label} :
              </label>
              <input
                type='number'
                className='flex-1 rounded-md p-2 bg-[#ffd5e5] ml-6 focus:outline-none focus:ring-2 focus:ring-[#5F1A31]'
              />
            </div>
          ))}

          <div className='flex justify-center mt-10'>
            <button
              type='submit'
              className='w-[250px] h-[40px] bg-[#B82360] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#5F1A31] transition duration-200 border border-black'
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
