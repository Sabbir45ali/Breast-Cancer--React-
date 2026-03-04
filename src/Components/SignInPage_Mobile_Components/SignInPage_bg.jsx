import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileLandingPageFemale1 from "../../assets/Images/MobileLandingPageFemale1.png";
import SignInPageInput from "./SignInPageInput";
import SignInButton from "../SignIn page Component/SignInButton";
import Header from "../Sign Up page Component/SignUpPageRightModel/Header";
import SignInPage_Footer from "./SignInPage_Footer";
import { RxCrossCircled } from "react-icons/rx";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
const SignInPage_bg = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isAccountLocked, setIsAccountLocked] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const [showTooltip, setShowTooltip] = useState(false);
  const MAX_LOGIN_ATTEMPTS = 5;
  const LOCKOUT_DURATION = 15 * 60 * 1000;

  // 🔒 LOCKOUT CHECK
  useEffect(() => {
    const lockoutTime = localStorage.getItem("loginLockoutTime");
    if (lockoutTime) {
      const timeRemaining = parseInt(lockoutTime) - Date.now();
      if (timeRemaining > 0) {
        setIsAccountLocked(true);
        const timer = setTimeout(() => {
          setIsAccountLocked(false);
          localStorage.removeItem("loginLockoutTime");
          localStorage.removeItem("failedLoginAttempts");
          setFailedAttempts(0);
        }, timeRemaining);
        return () => clearTimeout(timer);
      } else {
        localStorage.removeItem("loginLockoutTime");
        localStorage.removeItem("failedLoginAttempts");
      }
    }
  }, []);

  // 🔁 AUTO LOGIN
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      if (role === "user") navigate("/home", { replace: true });
      if (role === "org") navigate("/org-home", { replace: true });
    }
  }, [navigate]);

  const inputFields = [
    {
      type: "dropdown",
      placeholder: "Sign In as",
      options: ["Organisation", "User"],
      background: "#F3DCE0",
    },
    { type: "email", placeholder: "Email", background: "#F3DCE0" },
    { type: "password", placeholder: "Password", background: "#F3DCE0" },
  ];

  // 🔥 EMAIL SIGN-IN (Firebase)
  const handleSignIn = async () => {
    if (isAccountLocked) {
      setError("Account locked. Please try again later.");
      return;
    }

    if (!selectedRole || !formData.email || !formData.password) {
      setError("Please fill all fields and select a role");
      return;
    }

    setLoading(true);
    setError(null);
    setShouldShake(false);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password,
      );

      const user = userCredential.user;

      // 🚫 BLOCK IF NOT VERIFIED
      if (!user.emailVerified) {
        setError("Please verify your email before signing in.");
        setLoading(false);
        return;
      }

      const idToken = await user.getIdToken();

      // Reset lockout
      setFailedAttempts(0);
      localStorage.removeItem("failedLoginAttempts");
      localStorage.removeItem("loginLockoutTime");

      localStorage.setItem("token", idToken);
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("role", selectedRole.toLowerCase());
      localStorage.setItem("email", formData.email.toLowerCase());

      navigate(selectedRole === "Organisation" ? "/org-home" : "/home");
    } catch (err) {
      console.error(err);

      setShouldShake(true);
      if (navigator.vibrate) navigator.vibrate(100);

      const attempts = failedAttempts + 1;
      setFailedAttempts(attempts);
      localStorage.setItem("failedLoginAttempts", attempts.toString());

      if (attempts >= MAX_LOGIN_ATTEMPTS) {
        setIsAccountLocked(true);
        const lockoutTime = Date.now() + LOCKOUT_DURATION;
        localStorage.setItem("loginLockoutTime", lockoutTime.toString());
        setError("Too many failed attempts. Account locked.");
      } else {
        setError(
          `Invalid credentials. ${MAX_LOGIN_ATTEMPTS - attempts} attempts remaining.`,
        );
      }

      setTimeout(() => setShouldShake(false), 500);
    }

    setLoading(false);
  };

  // 🔥 GOOGLE SIGN-IN
  const handleGoogleSignIn = async () => {
    if (!selectedRole) {
      setError("Please select account type first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const idToken = await user.getIdToken();

      localStorage.setItem("token", idToken);
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("role", selectedRole.toLowerCase());

      navigate(selectedRole === "Organisation" ? "/org-home" : "/home");
    } catch (err) {
      console.error(err);
      setError("Google sign-in failed");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-[#f0779f] to-[#e4d4d9] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative overflow-x-hidden">
      <div className="relative top-20 w-full flex justify-center mt-8">
        <img
          src={MobileLandingPageFemale1}
          alt="Mobile Landing"
          className="w-[200px] h-[200px]"
        />
      </div>

      <div
        className={`relative top-24 flex flex-col w-full max-w-[400px] bg-white rounded-2xl shadow-2xl mx-4 transition-transform ${shouldShake ? "animate-shake" : ""
          }`}
      >
        <div className="relative flex flex-col items-center py-5 space-y-3">
          <Header
            FirstLetter="S"
            Firstpart="ign"
            SecondLetter="I"
            Secondpart="n"
            text="Use email and password"
          />

          <Link to="/">
            <RxCrossCircled className="absolute top-4 right-4 text-2xl bg-pink-100 text-pink-600 rounded-full p-1 hover:bg-pink-200 transition-colors" />
          </Link>

          <SignInPageInput
            inputs={inputFields}
            setSelectedRole={setSelectedRole}
            formData={formData}
            setFormData={setFormData}
            passwordRules={passwordRules}
            setPasswordRules={setPasswordRules}
            showTooltip={showTooltip}
            setShowTooltip={setShowTooltip}
          />

          <SignInButton
            onClick={handleSignIn}
            disabled={loading || isAccountLocked}
          />

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full mt-3 flex items-center justify-center gap-3 border border-gray-300 bg-white py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200"
          >
            <FcGoogle size={22} />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {loading && <p className="text-gray-500 text-sm">Processing...</p>}

          {error && (
            <p className="text-red-500 text-sm mb-4 px-4 font-medium">
              {error}
            </p>
          )}

          <div className="text-sm px-4">
            Forgot password?{" "}
            <Link
              to="/forgot-password"
              className="text-[#FF6699] underline hover:text-pink-700 font-medium"
            >
              Click here!
            </Link>
          </div>

          {isAccountLocked && (
            <div className="mx-4 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-700 text-xs font-medium">
                🔒 Locked for security.
              </p>
            </div>
          )}
        </div>

        <Link to="/signup">
          <SignInPage_Footer
            FooterText1="Don't have an account?"
            FooterText2="Sign-Up"
          />
        </Link>
      </div>
    </div>
  );
}

export default SignInPage_bg;