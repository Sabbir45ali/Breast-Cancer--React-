import React from 'react'
import femaleImg from '../../assets/Images/female_pic_landing_page.png'
import HomeTxt from '../../assets/Images/HomePageText.png'
import { Link } from 'react-router-dom'

const awarenessMessages = [
  'Breast cancer is the most common cancer among women worldwide.',
  'Early detection improves survival rates through screenings and self-exams.',
  'Risk factors include age, family history, and lifestyle.',
  'Early diagnosis and prompt treatment lead to better outcomes.',
  'Stay informed—early detection saves lives.'
]

const AwarenessSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-12 p-8 bg-gradient-to-b from-[#FD8AAB] to-[#F44A82] min-h-screen'>
      <div className='bg-white rounded-[35px] p-6 shadow-lg w-96 md:w-[450px] h-[400px] md:h-[450px] flex flex-col justify-center items-center overflow-hidden border border-pink-700'>
        <img
          src={femaleImg}
          alt='Awareness'
          className='w-full h-full object-contain rounded-lg'
        />
      </div>
      <div className='bg-white rounded-2xl p-10 shadow-lg w-96 md:w-[450px] h-[400px] md:h-[450px] flex flex-col justify-between items-center text-center rounded-[35px] border border-pink-700'>
        <img src={HomeTxt} alt='I am and I will' className='w-3/4' />
        <Link to='/form'>
          <button className='mt-6 bg-[#FF8ABA] text-white px-6 py-3 text-xl font-black rounded-lg shadow-md hover:bg-pink-600 transition duration-300'>
            Test Yourself
          </button>
        </Link>
      </div>

      <div className='bg-white rounded-2xl p-6 shadow-lg w-96 md:w-[450px] h-[400px] md:h-[450px] flex flex-col rounded-[35px] overflow-hidden border border-pink-700'>
        <h3 className='text-3xl font-bold text-gray-900 text-center'>
          Awareness
        </h3>
        <ul className='mt-4 font-bold text-gray-800 space-y-4 text-lg flex-grow leading-relaxed'>
          {awarenessMessages.map((message) => (
            <li key={message.id}>• {message}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AwarenessSection
