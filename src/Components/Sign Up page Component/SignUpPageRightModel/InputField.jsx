import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

const InputField = ({ type, placeholder, value, onChange, passwordRules }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isValid = passwordRules && Object.values(passwordRules).every(Boolean);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="relative">
      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 h-9 rounded-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 pr-20"
      />

      {isPassword && (
        <>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>

          <button
            type="button"
            onClick={() => setShowTooltip((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500"
          >
            <FaInfoCircle />
          </button>
        </>
      )}

      {/* Tooltip */}
      {isPassword && showTooltip && (
        <div className="absolute left-0 right-0 top-12 bg-white border shadow-lg rounded-xl p-3 text-xs z-50">
          <p
            className={
              passwordRules?.length ? "text-green-600" : "text-gray-600"
            }
          >
            • Minimum 8 characters
          </p>
          <p
            className={
              passwordRules?.uppercase ? "text-green-600" : "text-gray-600"
            }
          >
            • One uppercase letter
          </p>
          <p
            className={
              passwordRules?.lowercase ? "text-green-600" : "text-gray-600"
            }
          >
            • One lowercase letter
          </p>
          <p
            className={
              passwordRules?.number ? "text-green-600" : "text-gray-600"
            }
          >
            • One number
          </p>
          <p
            className={
              passwordRules?.special ? "text-green-600" : "text-gray-600"
            }
          >
            • One special character
          </p>
        </div>
      )}
    </div>
  );
};

export default InputField;
