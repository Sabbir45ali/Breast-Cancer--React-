import React from "react";


const Input = () => {
  const fields = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Phone No" },
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <div>
      <Input fields={fields} />
    </div>
  );
};

export default Input;

