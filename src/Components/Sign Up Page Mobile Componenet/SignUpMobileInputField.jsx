import React from "react";
import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";

const SignUpMobileInputField = ({
  field,
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
  passwordRules,
  showTooltip,
  setShowTooltip,
}) => {
  const isPassword = field.type === "password";
  const isValid = passwordRules && Object.values(passwordRules).every(Boolean);
  return (
    <div className="relative mb-3">
      {/* INPUT */}
      <input
        type={isPassword && showPassword ? "text" : field.type}
        placeholder={field.placeholder}
        value={formData[field.key] || ""}
        onChange={(e) => handleInputChange(field.key, e.target.value)}
        className="w-full py-3 h-12 px-4 pr-20 rounded-lg bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 border border-gray-300 text-gray-700"
      />

      {/* PASSWORD ICONS */}
      {isPassword && (
        <>
          {/* Eye */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>

          {/* Info */}
          <button
            type="button"
            onClick={() => setShowTooltip((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500"
          >
            <FaInfoCircle />
          </button>
        </>
      )}

      {/* SMALL ERROR TEXT */}
      {isPassword && formData.password && !isValid && (
        <p className="text-red-500 text-xs mt-1">Invalid password structure</p>
      )}

      {/* FLOATING TOOLTIP */}
      {isPassword && showTooltip && (
        <div className="absolute left-0 right-0 top-14 bg-white border shadow-lg rounded-xl p-3 text-xs z-50 animate-fadeIn">
          <p
            className={
              passwordRules.length ? "text-green-600" : "text-gray-600"
            }
          >
            • Minimum 8 characters
          </p>
          <p
            className={
              passwordRules.uppercase ? "text-green-600" : "text-gray-600"
            }
          >
            • One uppercase letter
          </p>
          <p
            className={
              passwordRules.lowercase ? "text-green-600" : "text-gray-600"
            }
          >
            • One lowercase letter
          </p>
          <p
            className={
              passwordRules.number ? "text-green-600" : "text-gray-600"
            }
          >
            • One number
          </p>
          <p
            className={
              passwordRules.special ? "text-green-600" : "text-gray-600"
            }
          >
            • One special character
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUpMobileInputField;