import React, { useState } from "react";
import Header from "../Sign Up page Component/SignUpPageRightModel/Header";
import SignInButton from "./SignInButton";
import SignInInput from "./SignInInput";
import ForgotPasswordModal from "../Universal Components/ForgotPasswordModal";
import { useNavigate } from "react-router-dom";

const SignInMainModal = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const navigate = useNavigate();

  const openForgotPasswordModal = () => setIsForgotPasswordOpen(true);
  const closeForgotPasswordModal = () => setIsForgotPasswordOpen(false);

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // API endpoints by role
  const endpoints = {
    Organisation: "http://127.0.0.1:8000/auth/login-org/",
    User: "http://127.0.0.1:8000/auth/login-user/",
    Admin: null, // No API given, handle accordingly or skip for now
  };

  const handleSignIn = async () => {
    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }
    if (!formValues.email || !formValues.password) {
      alert("Please fill email and password.");
      return;
    }
    if (selectedRole === "Admin") {
      // If Admin login is handled differently or not implemented
      navigate("/admin-home");
      return;
    }

    const endpoint = endpoints[selectedRole];
    if (!endpoint) {
      alert("Unknown role or backend not configured for this role.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
        // Successful login
        if (selectedRole === "User") navigate("/home");
        else if (selectedRole === "Organisation") navigate("/org-home");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }

    setLoading(false);
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-full w-full transition-all duration-300 ${
          isForgotPasswordOpen ? "blur-sm" : ""
        }`}
      >
        <div className="w-1/2 flex flex-col items-center">
          <Header
            FirstLetter="S"
            SecondLetter="I"
            Firstpart="ign "
            Secondpart="n"
            text="Use email and password"
          />
          <SignInInput
            onRoleSelect={setSelectedRole}
            formValues={formValues}
            onChange={handleChange}
          />
          <div>
            <SignInButton onClick={handleSignIn}  />
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
          {loading && <p className="mt-2">Signing in...</p>}

          {/* Forgot Password Button */}
          <div className="mt-4">
            <button
              className={`underline focus:outline-none ${
                !selectedRole
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-pink-500 hover:text-pink-700"
              }`}
              onClick={() => {
                if (selectedRole) openForgotPasswordModal();
              }}
              disabled={!selectedRole} // disables if no role
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={closeForgotPasswordModal}
      />
    </>
  );
};

export default SignInMainModal;
