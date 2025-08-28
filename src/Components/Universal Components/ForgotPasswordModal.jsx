import { useState, useEffect } from "react";
import { FaKey, FaTimes } from "react-icons/fa";

function ForgotPasswordModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  // lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [isOpen]);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown((s) => s - 1), 1000);
    } else if (!canResend) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, canResend]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    console.log("Password reset requested for:", email);
    setCountdown(300); // 5 minutes
    setCanResend(false);
  };

  const handleResend = () => {
    console.log("Resend requested for:", email);
    setCountdown(300);
    setCanResend(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative transition-all duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <FaKey size={28} className="text-pink-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            <span className="text-pink-500">F</span>orgot{" "}
            <span className="text-pink-500">P</span>assword?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Don’t Worry, We’ll send you reset instructions
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="email"
                className="block relative left-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <button
                onClick={handleResend}
                disabled={!canResend}
                className="text-sm text-pink-500 hover:text-pink-600 font-bold disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Resend
              </button>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-sm sm:text-base"
              placeholder="Enter your email"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#AB1B68] hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:pink-purple-500 focus:ring-offset-2 text-sm sm:text-base"
          >
            Send Password Reset Link
          </button>

          {countdown > 0 && (
            <div className="text-center">
              <span className="text-sm text-gray-500">
                You can resend in {formatTime(countdown)}
              </span>
            </div>
          )}
        </div>

        {/* Back to login */}
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="text-sm sm:text-base text-gray-500 hover:text-purple-500 transition-colors flex items-center justify-center gap-1"
          >
            <span>←</span>
            <span>Back to login</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
