import React from 'react'
import { ImCross } from 'react-icons/im'
import { TiTickOutline } from 'react-icons/ti'
const EditProfileModal = ({ open, onclose, children }) => {
  if (!open) return null // Hide modal if not open

  return (
    <div
      id='authentication-modal'
      tabIndex='-1'
      aria-hidden='true'
      className='fixed top-0  right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen bg-black/30 backdrop-blur-sm'
    >
      <div
        className='relative p-4 w-full max-w-md min-h-[600px] h-auto max-h-full Richdatabg rounded-lg shadow transition-transform duration-300 scale-100 opacity-100'
        onClick={(e) => e.stopPropagation()} // Prevent background click from closing modal
      >
        {/* Header */}
        <div className='relative bottom-7 flex items-center justify-center p-4 md:p-5 border-b rounded-t border-gray-200'>
          <h3 className='text-xl font-bold text-gray-900 absolute left-32'>
            Fill the Details
          </h3>
          <button
            type='button'
            onClick={onclose} // Close only when clicking this button
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
          >
            <ImCross className='w-4 h-4' />
            <span className='sr-only'>Close modal</span>
          </button>
        </div>

        {/* Body */}
        <div className='p-4 relative bottom-9 md:p-5'>
          <form className='space-y-4'>
            {/* age */}
            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium text-gray-900'>
                Your Age?
              </label>
              <input
                type='number'
                name='age'
                id='age'
                className='w-2/3 border bg-[#d7819146] border-black text-gray-900 placeholder-gray-500  font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                placeholder='Enter your age '
                required
              />
            </div>

            {/* Bloodgroup */}
            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium text-gray-900'>
                Your Bloodgroup?
              </label>
              <input
                type='character'
                name='Bloodgroup'
                id='Bloodgroup'
                placeholder='Enter Your Bloodgroup'
                className='w-2/3 bg-[#d7819146] border border-black placeholder-gray-500  font-semibold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                required
              />
            </div>

            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium text-gray-900'>
                Your Height?
              </label>
              <input
                type='Number'
                name='Height'
                id='Height'
                placeholder='Enter Your Height'
                className='w-2/3 bg-[#d7819146] border placeholder-gray-500  font-semibold border-black  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                required
              />
            </div>

            <div className='flex items-center gap-2'>
              <label className='w-1/3 text-sm font-medium text-[#000000]'>
                Your Weight?
              </label>
              <input
                type='Number'
                name='Weight'
                id='Weight'
                placeholder='Enter Your Weight'
                className='w-2/3 bg-[#d7819146] placeholder-gray-500  font-semibold border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                required
              />
            </div>
            <div>
              <input
                type='Text'
                name='History'
                id='History'
                placeholder='Any past medical history?'
                className='w-full h-16 overflow-y-auto bg-[#d7819146] border-black border placeholder-gray-500  font-semibold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                required
              />
            </div>

            <div>
              <input
                type='Text'
                name='symptoms'
                id='symptoms'
                placeholder='Your any symptoms?'
                className='w-full h-20 border justify-center bg-[#d7819146] border-black placeholder-gray-500  font-semibold text-[#000000] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                required
              />
            </div>

            <button
              type='submit'
              className=' group w-full relative top-16 flex justify-end items-end font-medium rounded-full text-sm px-5 py-2.5 text-center '
            >
              <TiTickOutline className='text-lg cursor-pointer h-8 w-8 absolute -right-2 top-2 border-2 border-black rounded-full hover:bg-white ' />

              <span className='absolute bottom-0 right-0 mb-[-2rem]  text-black text-xs font-semibold px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap'>
                Save changes
              </span>
            </button>
          </form>
        </div>
      </div>
      {children}
    </div>
  )
}

export default EditProfileModal
