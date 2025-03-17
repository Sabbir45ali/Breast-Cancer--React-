import React from 'react'
import FormImg from '../../assets/Images/doctor_pic_form_page.png'
import Buttons from '../../Components/Form Page Components/FormButtons'
import FormButtons from '../../Components/Form Page Components/FormButtons'

const FormLeftModal = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-r z-10 relative top-14 p-6 rounded-2xl shadow-lg w-[550px] h-[550px]'>
      <div className='relative w-[400px] h-[400px] rounded-2xl overflow-hidden  '>
        <img
          src={FormImg}
          alt='Doctor Illustration'
          className='w-full h-full object-cover'
        />
      </div>
      <FormButtons />
    </div>
  )
}

export default FormLeftModal
