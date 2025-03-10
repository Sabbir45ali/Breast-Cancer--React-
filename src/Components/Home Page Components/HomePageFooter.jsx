import React from "react";
import FooterHomePage_desktop from "../../assets/Images/FooterHomePage_desktop.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";
import Logo from "../../assets/Images/Logo.png";

const HomePageFooter = () => {
  return (
    <div className="relative min-h-72 w-full bg-[#F44A82]">
      {/* Background Image */}
      <div className="absolute h-72 w-full">
        <img
          src={FooterHomePage_desktop}
          alt="footer img"
          className="h-72 w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="absolute top-24 w-full h-[100px] z-10 flex flex-col justify-between px-10 py-6">
        {/* Contact Details */}
        <div className='flex flex-col items-start gap-2 text-pink-100 text-xl font-semibold '>
          <p className='flex items-center gap-2'>
            <FaMapMarkerAlt /> Kolkata-700123, North 24 PGS, West Bengal
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> 8240734489 / 9038645578
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> breastcancer_detection@gmail.com
          </p>
        </div>

        {/* Wikipedia Link */}
        <p className="mt-4 text-lg font-semibold absolute right-10 top-3/4">
          <a
            href="https://en.wikipedia.org/wiki/Breast_cancer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-300 hover:text-pink-500 transition duration-300"
          >
            <FaLink /> https://en.wikipedia.org/wiki/Breast_cancer
          </a>
        </p>

        {/* Care Memmo Button */}
        <div className="absolute top-1/2 right-28 w-30 h-10 transform -translate-y-1/2">
          <img src={Logo} alt="logo" className="w-30 h-10 object-cover" />
        </div>

        {/* Footer Signature */}
        <p className="text-gray-300 text-right font-bold text-[25px] mt-4">
          ~CODEDUCKS/2024
        </p>
      </div>
    </div>
  );
};

export default HomePageFooter;
