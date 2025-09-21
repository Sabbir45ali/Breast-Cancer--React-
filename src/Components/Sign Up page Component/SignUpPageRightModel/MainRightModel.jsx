import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import SignUpButton from "./SignUpButton";
import DropdownMenu from "./Dropdown";

const endpoints = {
  Organisation: "http://127.0.0.1:8000/auth/signup-org/",
  User: "http://127.0.0.1:8000/auth/signup/",
};

const MainRightModel = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = ["Organisation", "User"];

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
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
      if (res.status === 201) {
        window.location.href = "/signin"; // singin page
      } else {
        const data = await res.json();
        console.log(data); // <-- Add this line here for error details
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
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
        divClassName=" bg-gray-200 "
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
