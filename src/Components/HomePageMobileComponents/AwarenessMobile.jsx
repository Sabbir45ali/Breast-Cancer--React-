import React from 'react';
import femaleImg from '../../assets/Images/female_pic_landing_page.png';
import HomeTxt from '../../assets/Images/HomePageText.png';

const awarenessMessages = [
  
  'Early detection significantly improves survival rates through regular screenings and self-examinations.',
  
];

const AwarenessSection = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-6 p-4 bg-gradient-to-t from-[#D28CA7] to-[#360016] min-h-screen'>
      
      <div className='bg-white border-4 border-pink-400 rounded-[40px] p-4 shadow-lg w-full max-w-xs h-auto flex flex-row justify-center items-center overflow-hidden'>
        <img
          src={femaleImg}
          alt='Awareness'
          className='w-full h-auto object-contain rounded-lg'
        />
      </div>

      <div className='bg-white border-4 border-pink-400 rounded-[40px] p-4 shadow-lg w-full max-w-xs h-auto flex flex-col justify-between items-center text-center'>
        <img src={HomeTxt} alt='I am and I will' className='w-3/4' />
        <button className='mt-4 bg-[#FF8ABA] text-black px-4 py-2 text-base font-bold rounded-lg shadow-md border-2 border-black hover:bg-pink-600 transition duration-300'>
          Test Yourself
        </button>
      </div>

      <div className='bg-white border-4 border-pink-400 rounded-[40px] p-4 shadow-lg w-full max-w-xs h-auto flex flex-col'>
        <h3 className='text-2xl font-bold text-gray-900 text-center mb-3'>Awareness</h3>
        <ul className='text-gray-800 space-y-2 text-sm flex-grow leading-relaxed'>
          {awarenessMessages.map((message, index) => (
            <li key={index}>• {message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AwarenessSection;
