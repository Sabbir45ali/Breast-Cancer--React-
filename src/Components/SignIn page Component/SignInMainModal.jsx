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
  

  const endpoints = {
    Organisation: "http://127.0.0.1:8000/auth/login-org/",
    User: "http://127.0.0.1:8000/auth/login-user/",
  };

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async () => {
    if (!selectedRole) {
      setError("Please select a role.");
      return;
    }

    if (!formValues.email || !formValues.password) {
      setError("Email and password are required.");
      return;
    }

    if (selectedRole === "Admin") {
      navigate("/admin-home");
      return;
    }

    const endpoint = endpoints[selectedRole];
    if (!endpoint) {
      setError("Login not configured for this role.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const contentType = res.headers.get("content-type");
      const data =
        contentType && contentType.includes("application/json")
          ? await res.json()
          : null;

      if (!res.ok) {
        setError(data?.error || "Invalid credentials");
        setLoading(false);
        return;
      }

      // ✅ SAVE SESSION (VERY IMPORTANT)
      localStorage.setItem("uid", data.uid);
      localStorage.setItem("email", data.email);
      localStorage.setItem("role", selectedRole);

      // ✅ REDIRECT
      if (selectedRole === "User") navigate("/home");
      else if (selectedRole === "Organisation") navigate("/org-home");
    } catch (err) {
      setError("Network error. Try again.");
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

          <SignInButton onClick={handleSignIn} disabled={loading} />

          {loading && <p className="mt-2 text-gray-500">Signing in...</p>}
          {error && <p className="text-red-600 mt-2">{error}</p>}

          <div className="mt-4">
            <button
              className={`underline ${
                !selectedRole
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-pink-500 hover:text-pink-700"
              }`}
              onClick={() => selectedRole && setIsForgotPasswordOpen(true)}
              disabled={!selectedRole}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </>
  );
};

export default SignInMainModal;
