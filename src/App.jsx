import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // ✅ Use HashRouter
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/signuppage/Signup";
import LandingPage from "./pages/LandingPage/LandingPage";
import Mobile_landingPage from "./pages/Mobile_LandingPage/Mobile_landingPage";
import SignInPage_Mobile from "./pages/SignInPage_Mobile/SignINPage_Mobile";
import SignUpPageMobile from "./pages/SignUpPageMobile/SignUpPageMobile";
import HomePage from './pages/HomePage/HomePage'
//For mobile and desktop view
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
// PR
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ResponsiveComponent
              DesktopComponent={LandingPage}
              MobileComponent={Mobile_landingPage}
            />
          }
        />
        <Route
          path='/signin'
          element={
            <ResponsiveComponent
              DesktopComponent={Login}
              MobileComponent={SignInPage_Mobile}
            />
          }
        />

        <Route
          path='/signup'
          element={
            <ResponsiveComponent
              DesktopComponent={Signup}
              MobileComponent={SignUpPageMobile}
            />
          }
        />
        <Route
          path='/landing'
          element={<ResponsiveComponent DesktopComponent={HomePage} />}
        />

        
      </Routes>
    </Router>
  )
}

export default App
