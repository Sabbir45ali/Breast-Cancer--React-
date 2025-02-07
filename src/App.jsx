import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/LoginPage/Login'
import LandingPage from './pages/LandingPage/LandingPage'
import Mobile_landingPage from './pages/Mobile_LandingPage/Mobile_landingPage'
import SignInPage_Mobile from './pages/SignInPage_Mobile/SignINPage_Mobile'
import SignUpPageMobile from './pages/SignUpPageMobile/SignUpPageMobile'


const ResponsiveComponent = ({ DesktopComponent, MobileComponent }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile ? <MobileComponent /> : <DesktopComponent />
}

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
              DesktopComponent={Login}
              MobileComponent={SignUpPageMobile}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
