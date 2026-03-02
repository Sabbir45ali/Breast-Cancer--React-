import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import LandingPage from './pages/LandingPage/LandingPage'
import Mobile_landingPage from './pages/Mobile_LandingPage/Mobile_landingPage'
import SignInPage_Mobile from './pages/SignInPage_Mobile/SignINPage_Mobile'
import SignUpPageMobile from './pages/SignUpPageMobile/SignUpPageMobile'
import HomePage from './pages/HomePage/HomePage'
import HomePage_Mobile from './pages/HomePage_Mobile/HomePage_Mobile'
import Profile from './pages/ProfilePage/Profile'
import ProfilePageMobile from './pages/Profile Page Mobile/ProfilePageMobile'
import SignIn from './pages/SignInpage/SignIn'
import SignUp from './pages/signuppage/Signup'
import FormPage from './pages/FormPage/FormPage'
import FormPage_Mobile from './pages/FormPage_Mobile/FormPage_Mobile'
import YesPage from './pages/YesPage/YesPage'
import YesPage_Mobile from './pages/YeaPage_Mobile/YesPage_Mobile'
import FormPageBtoC from './pages/FormPageBtoC/FormPageBtoC'
import FormPageBtoC_Mobile from './pages/FormPageBtoC_Mobile/FormPageBtoC_Mobile'
import NoPage from './pages/NoPage/NoPage'
import NoPageMobile from './pages/NoPageMobile/NoPageMobile'
import Org_HomePage from './pages/Org-Home page/Org_HomePage'
import Org_HomePageMobile from './pages/Org-HomePage_mobile/Org_HomePageMobile'
import Org_profile from './pages/Org-profile/Org_profile'

import ProtectedRoute from './Components/Universal Components/ProtectedRoute'
import './index.css'

// Responsive wrapper
const ResponsiveComponent = ({ DesktopComponent, MobileComponent }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 640px)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')
    const handler = () => setIsMobile(mediaQuery.matches)

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isMobile ? <MobileComponent /> : <DesktopComponent />
}

const App = () => {
  return (
    <Routes>
      {/* 🌐 Public */}
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
            DesktopComponent={SignIn}
            MobileComponent={SignInPage_Mobile}
          />
        }
      />

      <Route
        path='/signup'
        element={
          <ResponsiveComponent
            DesktopComponent={SignUp}
            MobileComponent={SignUpPageMobile}
          />
        }
      />

      {/* 👤 USER ROUTES */}
      <Route
        path='/home'
        element={
          <ProtectedRoute allowedRoles={['User']}>
            <ResponsiveComponent
              DesktopComponent={HomePage}
              MobileComponent={HomePage_Mobile}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path='/profile'
        element={
          <ProtectedRoute allowedRoles={['User']}>
            <ResponsiveComponent
              DesktopComponent={Profile}
              MobileComponent={ProfilePageMobile}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path='/form'
        element={
          <ProtectedRoute allowedRoles={['User']}>
            <ResponsiveComponent
              DesktopComponent={FormPage}
              MobileComponent={FormPage_Mobile}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path='/yes'
        element={
          <ProtectedRoute allowedRoles={['User']}>
            <ResponsiveComponent
              DesktopComponent={YesPage}
              MobileComponent={YesPage_Mobile}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path='/no'
        element={
          <ProtectedRoute allowedRoles={['User']}>
            <ResponsiveComponent
              DesktopComponent={NoPage}
              MobileComponent={NoPageMobile}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path='/formtwo'
        element={
          <ProtectedRoute allowedRoles={['User']}>
            <ResponsiveComponent
              DesktopComponent={FormPageBtoC}
              MobileComponent={FormPageBtoC_Mobile}
            />
          </ProtectedRoute>
        }
      />

      {/* 🏢 ORGANISATION ROUTES */}
      <Route
        path='/org-home'
        element={
          <ProtectedRoute allowedRoles={['Organisation']}>
            <ResponsiveComponent
              DesktopComponent={Org_HomePage}
              MobileComponent={Org_HomePageMobile}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path='/org-profile'
        element={
          <ProtectedRoute allowedRoles={['Organisation']}>
            <ResponsiveComponent
              DesktopComponent={Org_profile}
              MobileComponent={ProfilePageMobile}
            />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
