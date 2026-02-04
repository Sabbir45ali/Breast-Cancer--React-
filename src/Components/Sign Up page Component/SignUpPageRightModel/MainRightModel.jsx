import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import SignUpButton from "./SignUpButton";
import DropdownMenu from "./Dropdown";
import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../../firebase";

const MainRightModel = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = ["Organisation", "User"];
  const navigate = useNavigate();
  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const endpoints = {
    User: "http://127.0.0.1:8000/auth/signup-user/",
    Organisation: "http://127.0.0.1:8000/auth/signup-org/"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRole) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(endpoints[selectedRole], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      // 🚨 IMPORTANT: do NOT assume JSON
      if (res.status === 201) {
        // Signup successful
        navigate("/signin");
        return;
      }

      // Only parse JSON if backend says it's JSON
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        setError(data.error || "Signup failed");
      } else {
        setError("Server error. Please try again.");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-3 px-4">
      <Header
        FirstLetter="C"
        SecondLetter="A"
        Firstpart="reate "
        Secondpart="ccount"
        text="Use email for registration"
      />

      <DropdownMenu
        heading="Create Account as"
        options={options}
        onSelect={setSelectedRole}
        buttonClassName="bg-gray-200 text-gray-600 font-semibold"
        divClassName="bg-gray-200"
      />

      {selectedRole && (
        <form
          onSubmit={handleSubmit}
          className="space-y-3 w-80"
          autoComplete="off"
        >
          <Input
            role={selectedRole}
            onChange={{ values: formValues, handleChange }}
          />

          <div className="flex justify-center">
            <SignUpButton loading={loading} role={selectedRole} />
          </div>

          {error && <span className="text-red-500">{error}</span>}
        </form>
      )}
    </div>
  );
};

export default MainRightModel;
