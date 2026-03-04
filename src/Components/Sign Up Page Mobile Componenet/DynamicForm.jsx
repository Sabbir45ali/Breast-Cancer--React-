import React from 'react'
import SignUpMobileInputField from './SignUpMobileInputField'

const DynamicForm = ({
  currentFields,
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
  passwordRules,
  showTooltip,
  setShowTooltip
}) => {
  return (
    <div className='mb-4'>
      {currentFields.map((field) => (
        <SignUpMobileInputField
          key={field.key}
          field={field}
          formData={formData}
          handleInputChange={handleInputChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          passwordRules={passwordRules}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
        />
      ))}
    </div>
  )
}

export default DynamicForm