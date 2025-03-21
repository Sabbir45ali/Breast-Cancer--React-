import React from "react";
import femaleImg from "../../assets/Images/female_pic_landing_page.png";
import HomeTxt from "../../assets/Images/HomePageText.png";

const awarenessMessages = [
  "Breast cancer is the most common cancer among women worldwide.",
  "Early detection improves survival rates through screenings and self-exams.",
  "Risk factors include age, family history, and lifestyle.",
  "Early diagnosis and prompt treatment lead to better outcomes.",
  "Breast cancer is the most common cancer among women worldwide.",
  "Early detection improves survival rates through screenings and self-exams.",
  "Risk factors include age, family history, and lifestyle.",
  "Early diagnosis and prompt treatment lead to better outcomes.",
];

const AwarenessSection = () => {
  return (
    <div className='bg-gradient-to-t from-[#D28CA7] to-[#360016] min-h-screen flex flex-col items-center p-8'>
      <div className='flex overflow-x-auto  snap-x snap-mandatory space-x-6 p-4 w-full'>
        <div className='bg-white rounded-2xl  border-4 border-[#8C495F]  p-6 shadow-lg min-w-[80%] md:min-w-[450px] h-[400px] md:h-[450px] flex flex-col justify-center items-center overflow-hidden snap-center'>
          <img
            src={femaleImg}
            alt="Awareness"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="bg-white  border-4 border-[#8C495F] rounded-[25px] p-10 shadow-lg min-w-[80%] md:min-w-[450px] h-[400px] md:h-[450px] flex flex-col justify-between items-center text-center snap-center">
          <img src={HomeTxt} alt="I am and I will" className="w-3/4" />
          <button className="mt-6 bg-[#FF8ABA] text-white px-6 py-3 text-xl font-black rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
            Test Yourself
          </button>
        </div>

        <div className="bg-white  border-4 border-[#8C495F] rounded-[25px] p-6 shadow-lg min-w-[80%] md:min-w-[450px] h-[400px] md:h-[450px] flex flex-col snap-center">
          <h3 className="text-3xl font-bold text-gray-900 text-center">
            Awareness
          </h3>
          <ul className="mt-4 text-start font-semibold text-gray-800 space-x-4 text-lg flex-grow leading-relaxed overflow-y-auto max-h-[300px] px-2">
            {awarenessMessages.map((message, index) => (
              <li key={index} className="pr-2">
                • {message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AwarenessSection;
