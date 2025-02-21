import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // ✅ Switched to BrowserRouter
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/signuppage/Signup";
import LandingPage from "./pages/LandingPage/LandingPage";
import Mobile_landingPage from "./pages/Mobile_LandingPage/Mobile_landingPage";
import SignInPage_Mobile from "./pages/SignInPage_Mobile/SignINPage_Mobile";
import SignUpPageMobile from "./pages/SignUpPageMobile/SignUpPageMobile";
import HomePage from "./pages/HomePage/HomePage";
import HomePage_Mobile from "./pages/HomePage_Mobile/HomePage_Mobile";
import Profile from "./pages/ProfilePage/Profile";

const ResponsiveComponent = ({ DesktopComponent, MobileComponent }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleResize = () => setIsMobile(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  return isMobile ? <MobileComponent /> : <DesktopComponent />
}

const App = () => {
  return (
    <BrowserRouter basename="/Breast-Cancer--React-"> {/* ✅ Added basename */}
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
          path="/signup"
          element={
            <ResponsiveComponent
              DesktopComponent={Login}
              MobileComponent={SignInPage_Mobile}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <ResponsiveComponent
              DesktopComponent={Signup}
              MobileComponent={SignUpPageMobile}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ResponsiveComponent
              DesktopComponent={Profile}
            />
          }
        />
        <Route
          path='/landing'
          element={
            <ResponsiveComponent
              DesktopComponent={HomePage}
              MobileComponent={HomePage_Mobile}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
