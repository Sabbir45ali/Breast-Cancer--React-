import React, { useState } from "react";
import MobileLandingPageFemale1 from "../../assets/Images/MobileLandingPageFemale1.png";
import { Link, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";

// Components
import Header from "../../Components/Sign Up Page Mobile Componenet/SignUpMobileHeader";
import CustomDropdown from "../../Components/Sign Up Page Mobile Componenet/CustomDropdown";
import DynamicForm from "../../Components/Sign Up Page Mobile Componenet/DynamicForm";
import SignUpButton from "../../Components/Sign Up Page Mobile Componenet/SignUpButton";
import BottomNavigation from "../../Components/Sign Up Page Mobile Componenet/BottomNavigation";
import BackgroundImage from "../../Components/Sign Up Page Mobile Componenet/BackgroundImage";
import { getCurrentFields } from "../../config/SignUpMobileFormField";

const API_ENDPOINTS = {
  User: "http://127.0.0.1:8000/api/user/signup/",
  Organisation: "http://127.0.0.1:8000/api/org/signup/",
};

const SignUpPageMobile = () => {
  const navigate = useNavigate(); // ✅ MUST be here

  const [selectedType, setSelectedType] = useState("Create Account as");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async () => {
    if (selectedType !== "User" && selectedType !== "Organisation") return;

    setLoading(true);
    setError(null);

    const isUser = selectedType === "User";

    let payload;

    if (isUser) {
      payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      };
    } else {
      payload = {
        org_name: formData.organisationName,
        phone: formData.phone,
        email: formData.email,
        type: formData.typeOfOrg,
        license: formData.licenceNumber,
        password: formData.password,
      };
    }

    try {
      const res = await fetch(API_ENDPOINTS[selectedType], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      navigate("/signin");
    } catch (err) {
      setError("Server connection error");
    } finally {
      setLoading(false);
    }
  };

  const currentFields = getCurrentFields(selectedType);

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#f0779f] bg-[#e4d4d9]">
      <BackgroundImage
        backgroundImage={MobileLandingPageFemale1}
        altText="Mobile Landing Page Female"
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-8 px-4">
        <div className="bg-white rounded-t-3xl p-6 shadow-lg">
          <div className="flex justify-end mb-2">
            <Link to="/">
              <RxCrossCircled className="text-2xl bg-pink-100 text-pink-600 rounded-full" />
            </Link>
          </div>

          <Header
            FirstLetter="C"
            Firstpart="reate"
            SecondLetter="A"
            Secondpart="ccount"
          />

          <CustomDropdown
            selectedType={selectedType}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            setSelectedType={setSelectedType}
            accountTypes={accountTypes}
          />

          <DynamicForm
            currentFields={currentFields}
            formData={formData}
            handleInputChange={handleInputChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {currentFields.length > 0 && (
            <SignUpButton onClick={handleSignUp} loading={loading} />
          )}

          {error && (
            <p className="text-red-500 text-sm text-center mt-3">{error}</p>
          )}
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default SignUpPageMobile;
