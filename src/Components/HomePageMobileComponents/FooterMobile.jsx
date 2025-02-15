import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";
import footerImg1 from "../../assets/Images/Footer_home_page_mobile.png";
import footerImg2 from "../../assets/Images/Footer_home_page_mobile2.png";
const FooterMobile = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#6D093B] to-[#AA2B6F] text-white py-8 px-6 text-center">
      {/* Background Waves */}
      <div className="absolute inset-0">
        <img
          src={footerImg1}
          alt="Wave 1"
          className="absolute top-0 left-0 w-full opacity-30"
        />
        <img
          src={footerImg2}
          alt="Wave 2"
          className="absolute bottom-0 left-0 w-full opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-2">
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
    </footer>
  );
};

export default FooterMobile;
