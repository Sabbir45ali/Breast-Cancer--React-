import React, { useState } from "react";
import MobileLandingPageFemale1 from "../../assets/Images/MobileLandingPageFemale1.png";
import { Link } from "react-router-dom";
// Import all the separated Components
import Header from "../../Components/Sign Up Page Mobile Componenet/SignUpMobileHeader";
import CustomDropdown from "../../Components/Sign Up Page Mobile Componenet/CustomDropdown";
import DynamicForm from "../../Components/Sign Up Page Mobile Componenet/DynamicForm";
import SignUpButton from "../../Components/Sign Up Page Mobile Componenet/SignUpButton";
import BottomNavigation from "../../Components/Sign Up Page Mobile Componenet/BottomNavigation";
import BackgroundImage from "../../Components/Sign Up Page Mobile Componenet/BackgroundImage";
import { getCurrentFields } from "../../config/SignUpMobileFormField";
import { RxCrossCircled } from "react-icons/rx";
const SignUpPageMobile = () => {
  const [selectedType, setSelectedType] = useState("Create Account as");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    organisationName: "",
    typeOfOrg: "",
    licenceNumber: "",
  });

  const accountTypes = ["User", "Organisation"];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log("Sign up with data:", formData);
  };

  const currentFields = getCurrentFields(selectedType);

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#f0779f] bg-[#e4d4d9]">
      {/* Background Image */}
      <BackgroundImage
        backgroundImage={MobileLandingPageFemale1}
        altText="Mobile Landing Page Female"
      />

      {/* Form Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-8 px-4">
        <div className="bg-white rounded-t-3xl p-6 shadow-lg">
          {/* Close Button */}
          <div className="flex justify-end mb-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer text-gray-600 text-lg">
              <Link
                to="/"
                className=" rounded-full flex items-center justify-center"
              >
                <RxCrossCircled className="text-2xl bg-pink-100 text-pink-600" />
              </Link>
            </div>
          </div>

          {/* Header */}
          <Header
            FirstLetter="C"
            Firstpart="reate"
            SecondLetter="A"
            Secondpart="ccount"
          />

          {/* Custom Dropdown */}
          <CustomDropdown
            selectedType={selectedType}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            setSelectedType={setSelectedType}
            accountTypes={accountTypes}
          />

          {/* Dynamic Form Fields */}
          <DynamicForm
            currentFields={currentFields}
            formData={formData}
            handleInputChange={handleInputChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* Sign-up Button */}
          {currentFields.length > 0 && (
            <SignUpButton
              onClick={handleSignUp}
              disabled={currentFields.length === 0}
            />
          )}
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default SignUpPageMobile;
