import React from "react";
import InputField from "./SignUpMobileInputField";

const DynamicForm = ({
  currentFields,
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="mb-4">
      {currentFields.map((field) => (
        <InputField
          key={field.key}
          field={field}
          formData={formData}
          handleInputChange={handleInputChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      ))}
    </div>
  );
};

export default DynamicForm;
