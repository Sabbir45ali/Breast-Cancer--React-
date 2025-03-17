import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";
import footer_mobile from "../../assets/Images/footer_homePage_mobile.png";
const FooterMobile = () => {
  return (
    <div className="relative  text-white   text-center h-72 w-full">
      {/* Background Waves */}
      <div className="absolute inset-0 h-72 w-full top-0 bg-[#D28CA7]">
        <img
          src={footer_mobile}
          alt="Wave 1"
          className="h-72 w-full object-cover  "
        />
      </div>

      {/* Content */}
      <div className="absolute z-10 space-y-2 w-full top-24 -left-1">
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaMapMarkerAlt /> Kolkata-700116, North 24 PGS, West Bengal
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaPhone /> 8240734489 / 9038645578
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaEnvelope /> breastcancer_detection@gmail.com
        </p>

        {/* Wikipedia Link */}
        <p className="mt-4 text-lg font-semibold">
          <a
            href="https://en.wikipedia.org/wiki/Breast_cancer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-pink-300 hover:text-pink-500 transition duration-300"
          >
            <FaLink /> https://en.wikipedia.org/wiki/Breast_cancer
          </a>
        </p>

        {/* FooterMobile Signature */}
        <p className="text-gray-300 text-right mt-4">~CODEDUCKS/2024</p>
      </div>
    </div>
  );
};

export default FooterMobile;
