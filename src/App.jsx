import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // ✅ Switched to BrowserRouter
import LandingPage from "./pages/LandingPage/LandingPage";
import Mobile_landingPage from "./pages/Mobile_LandingPage/Mobile_landingPage";
import SignInPage_Mobile from "./pages/SignInPage_Mobile/SignINPage_Mobile";
import SignUpPageMobile from "./pages/SignUpPageMobile/SignUpPageMobile";
import HomePage from "./pages/HomePage/HomePage";
import HomePage_Mobile from "./pages/HomePage_Mobile/HomePage_Mobile";
import Profile from "./pages/ProfilePage/Profile";
import ProfilePageMobile from "./pages/Profile Page Mobile/ProfilePageMobile";
import SignIn from "./pages/SignInpage/SignIn";

import FormPage from "./pages/FormPage/FormPage";
import FormPage_Mobile from "./pages/FormPage_Mobile/FormPage_Mobile";
import YesPage from "./pages/YesPage/YesPage";
import SignUp from "./pages/signuppage/Signup";
import FormPageBtoC from "./pages/FormPageBtoC/FormPageBtoC";
import FormPageBtoC_Mobile from "./pages/FormPageBtoC_Mobile/FormPageBtoC_Mobile";
import NoPage from "./pages/NoPage/NoPage";


const ResponsiveComponent = ({ DesktopComponent, MobileComponent }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile ? <MobileComponent /> : <DesktopComponent />;
};

const App = () => {
  const basename =
    import.meta.env.MODE === "development" ? "" : "/Breast-Cancer--React-";
  return (
    <BrowserRouter basename={basename}>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <ResponsiveComponent
              DesktopComponent={LandingPage}
              MobileComponent={Mobile_landingPage}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <ResponsiveComponent
              DesktopComponent={SignIn}
              MobileComponent={SignInPage_Mobile}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <ResponsiveComponent
              DesktopComponent={SignUp}
              MobileComponent={SignUpPageMobile}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ResponsiveComponent
              DesktopComponent={Profile}
              MobileComponent={ProfilePageMobile}
            />
          }
        />
        <Route
          path="/home"
          element={
            <ResponsiveComponent
              DesktopComponent={HomePage}
              MobileComponent={HomePage_Mobile}
            />
          }
        />
        <Route
          path="/form"
          element={
            <ResponsiveComponent
              DesktopComponent={FormPage}
              MobileComponent={FormPage_Mobile}
            />
          }
        />

        <Route
          path="/yes"
          element={
            <ResponsiveComponent
              DesktopComponent={YesPage}
              MobileComponent={YesPage}
            />
          }
        />
        <Route
          path="/formtwo"
          element={
            <ResponsiveComponent
              DesktopComponent={FormPageBtoC}
              MobileComponent={FormPageBtoC_Mobile}
            />
          }
        />
        <Route
          path="/no"
          element={
            <ResponsiveComponent
              DesktopComponent={NoPage}
              MobileComponent={NoPage}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
