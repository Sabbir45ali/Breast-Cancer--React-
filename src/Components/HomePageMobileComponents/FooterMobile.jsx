import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";

import FooterHomePage_desktop from "../../assets/Images/FooterHomePage_desktop.png";

const FooterMobile = () => {
  return (
    <div>
      <div className="relative w-full h-full">
        {/* Background Image */}
        <img
          src={FooterHomePage_desktop}
          alt="footer img"
          className="absolute -top-20 left-0  h-52"
        />
      </div>
      {/* Overlay for content */}
      <div className="relative z-10 flex flex-col justify-between  text-white">
        {/* Contact Details */}
        <div className="flex flex-col gap-1 text-sm sm:text-base font-semibold text-pink-100">
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-lg" />
            Kolkata-700123, North 24 PGS, West Bengal
          </p>
          <p className="flex items-center gap-1">
            <FaPhone className="text-lg" />
            8240734489 / 9038645578
          </p>
          <p className="flex items-center gap-1 break-words">
            <FaEnvelope className="text-lg" />
            breastcancer_detection@gmail.com
          </p>
        </div>

        {/* Wikipedia Link */}
        <div className="mt-4">
          <a
            href="https://en.wikipedia.org/wiki/Breast_cancer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-pink-300 hover:text-pink-500 text-sm sm:text-base transition duration-300 break-all"
          >
            <FaLink /> https://en.wikipedia.org/wiki/Breast_cancer
          </a>
        </div>

        {/* Footer Signature */}
        <p className="text-right text-xs sm:text-sm text-gray-300 font-bold mt-2">
          ~CODEDUCKS/-
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
