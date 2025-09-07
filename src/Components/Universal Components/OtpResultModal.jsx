import React, { useState } from "react";
import { Tick } from "./Tick";
import { Cross } from "./Cross";
import ResetPasswordModal from "./ResetPasswordModal";

function OtpResultModal({ isOpen, onClose, success }) {
  const [showReset, setShowReset] = useState(false);

  if (!isOpen) return null;

  if (showReset) {
    return <ResetPasswordModal isOpen onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          {success ? (
            <Tick size={50} style={{ display: "inline-block" }} />
          ) : (
            <Cross size={50} style={{ display: "inline-block" }} />
          )}
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold mb-2">
          {success ? "Successfully Verified!" : "Verification Failed"}
        </h2>

        <p className="text-gray-600 mb-6">
          {success
            ? "Your OTP has been verified successfully."
            : "The OTP you entered is incorrect. Please try again."}
        </p>

        {/* Buttons */}
        {success ? (
          <button
            onClick={() => setShowReset(true)} // Show reset password modal
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition"
          >
            OK
          </button>
        ) : (
          <button
            onClick={onClose}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

export default OtpResultModal;
