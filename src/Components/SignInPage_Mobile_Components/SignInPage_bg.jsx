import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileLandingPageFemale1 from "../../assets/Images/MobileLandingPageFemale1.png";
import SignInPageInput from "./SignInPageInput";
import SignInButton from "../SignIn page Component/SignInButton";
import Header from "../Sign Up page Component/SignUpPageRightModel/Header";
import SignInPage_Footer from "./SignInPage_Footer";
import ForgotPasswordModal from "../Universal Components/ForgotPasswordModal";
import { RxCrossCircled } from "react-icons/rx";

const API_ENDPOINTS = {
  User: "http://127.0.0.1:8000/auth/login-user/",
  Organisation: "http://127.0.0.1:8000/auth/login-org/",
};

const SignInPage_bg = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const navigate = useNavigate();

  const inputFields = [
    {
      type: "dropdown",
      placeholder: "Sign In as",
      options: ["Organisation", "User"],
      background: "#F3DCE0",
    },
    {
      type: "email",
      placeholder: "Email",
      background: "#F3DCE0",
    },
    {
      type: "password",
      placeholder: "Password",
      background: "#F3DCE0",
    },
  ];

  // 🔐 LOGIN HANDLER
  const handleSignIn = async () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }

    if (!formData.email || !formData.password) {
      alert("Email and password required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_ENDPOINTS[selectedRole], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // ✅ STORE SESSION (OPTIONAL BUT RECOMMENDED)
      localStorage.setItem("uid", data.uid);
      localStorage.setItem("role", selectedRole);

      // ✅ REDIRECT
      if (selectedRole === "User") navigate("/home");
      if (selectedRole === "Organisation") navigate("/org-home");
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#f0779f] bg-[#e4d4d9] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative">
      {/* Image */}
      <div className="relative top-20 w-full flex justify-center mt-8">
        <img
          src={MobileLandingPageFemale1}
          alt="Mobile Landing"
          className="w-[200px] h-[200px]"
        />
      </div>

      {/* Card */}
      <div
        className={`relative top-24 flex flex-col w-full max-w-[400px] bg-white rounded-2xl shadow-2xl ${
          isForgotPasswordOpen ? "blur-sm" : ""
        }`}
      >
        <div className="relative flex flex-col items-center py-5 space-y-3">
          <Header
            FirstLetter="S"
            Firstpart="ign"
            SecondLetter="I"
            Secondpart="n"
            text="Use email and password"
          />

          <Link to="/">
            <RxCrossCircled className="absolute top-4 right-4 text-2xl bg-pink-100 text-pink-600 rounded-full" />
          </Link>

          {/* Inputs */}
          <SignInPageInput
            inputs={inputFields}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            formData={formData}
            setFormData={setFormData}
          />

          {/* Button */}
          <SignInButton onClick={handleSignIn} loading={loading} />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Forgot password */}
          <div className="text-sm">
            Forgot password?{" "}
            <button
              onClick={() => {
                if (!selectedRole) {
                  alert("Select role first");
                  return;
                }
                setIsForgotPasswordOpen(true);
              }}
              className="text-[#FF6699] underline"
            >
              Click here!
            </button>
          </div>
        </div>

        {/* Footer */}
        <Link to="/signup">
          <SignInPage_Footer
            FooterText1="Don't have an account?"
            FooterText2="Sign-Up"
          />
        </Link>
      </div>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  );
};

export default SignInPage_bg;
