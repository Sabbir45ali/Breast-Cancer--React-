import React, { useState } from 'react'
import MobileLandingPageFemale1 from '../../assets/Images/MobileLandingPageFemale1.png'
import { Link, useNavigate } from 'react-router-dom'
import { RxCrossCircled } from 'react-icons/rx'

import Header from '../../Components/Sign Up Page Mobile Componenet/SignUpMobileHeader'
import CustomDropdown from '../../Components/Sign Up Page Mobile Componenet/CustomDropdown'
import DynamicForm from '../../Components/Sign Up Page Mobile Componenet/DynamicForm'
import SignUpButton from '../../Components/Sign Up Page Mobile Componenet/SignUpButton'
import BottomNavigation from '../../Components/Sign Up Page Mobile Componenet/BottomNavigation'
import BackgroundImage from '../../Components/Sign Up Page Mobile Componenet/BackgroundImage'
import { getCurrentFields } from '../../config/SignUpMobileFormField'
import Loader from '../../Components/Universal Components/Loader'
import { getPasswordValidation } from '../../utils/passwordValidator'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../../firebase'

const API_ENDPOINTS = {
  User: 'http://127.0.0.1:8000/api/user/signup/',
  Organisation: 'http://127.0.0.1:8000/api/org/signup/'
}

const SignUpPageMobile = () => {
  const navigate = useNavigate()

  const [selectedType, setSelectedType] = useState('Create Account as')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    organisationName: '',
    typeOfOrg: '',
    licenceNumber: ''
  })

  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  })

  const accountTypes = ['User', 'Organisation']

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (field === 'password') {
      setPasswordRules(getPasswordValidation(value))
    }
  }

  // 🔥 EMAIL SIGNUP
  const handleSignUp = async () => {
    if (selectedType !== 'User' && selectedType !== 'Organisation') return

    const allValid = Object.values(passwordRules).every(Boolean)
    if (!allValid) {
      setError('Invalid password structure')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // 1️⃣ Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      const user = userCredential.user

      // 2️⃣ Send verification email
      await sendEmailVerification(user)

      // 3️⃣ Get ID token
      const idToken = await user.getIdToken()

      const isUser = selectedType === 'User'
      let payload

      if (isUser) {
        payload = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          role: 'user'
        }
      } else {
        payload = {
          org_name: formData.organisationName,
          phone: formData.phone,
          email: formData.email,
          type: formData.typeOfOrg,
          license: formData.licenceNumber,
          role: 'org'
        }
      }

      // 4️⃣ Send profile to Django (NO PASSWORD)
      const res = await fetch(API_ENDPOINTS[selectedType], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`
        },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        setError('Backend registration failed')
        setLoading(false)
        return
      }

      alert('Verification email sent. Please verify before signing in.')
      navigate('/signin')
    } catch (err) {
      console.error(err)

      if (err.code === 'auth/email-already-in-use') {
        setError('Email already registered')
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format')
      } else {
        setError('Signup failed. Try again.')
      }
    }

    setLoading(false)
  }

  // 🔥 GOOGLE SIGNUP
  const handleGoogleSignup = async () => {
    if (selectedType !== 'User' && selectedType !== 'Organisation') {
      setError('Please select account type first')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      const idToken = await user.getIdToken()

      let payload

      if (selectedType === 'User') {
        payload = {
          name: user.displayName || '',
          email: user.email,
          role: 'user'
        }
      } else {
        payload = {
          org_name: user.displayName || '',
          email: user.email,
          role: 'org'
        }
      }

      const res = await fetch(API_ENDPOINTS[selectedType], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`
        },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        setError('Backend registration failed')
        setLoading(false)
        return
      }

      navigate('/home')
    } catch (err) {
      console.error(err)
      setError('Google signup failed')
    }

    setLoading(false)
  }

  const currentFields = getCurrentFields(selectedType)

  return loading
    ? (
      <Loader />
      )
    : (
      <div className='min-h-screen relative bg-gradient-to-r from-[#f0779f] bg-[#e4d4d9]'>
        <BackgroundImage
          backgroundImage={MobileLandingPageFemale1}
          altText='Mobile Landing Page Female'
        />

        <div className='relative z-10 min-h-screen flex flex-col justify-end pb-8 px-4'>
          <div className='bg-white rounded-t-3xl p-6 shadow-lg'>
            <div className='flex justify-end mb-2'>
              <Link to='/'>
                <RxCrossCircled className='text-2xl bg-pink-100 text-pink-600 rounded-full' />
              </Link>
            </div>

            <Header
              FirstLetter='C'
              Firstpart='reate'
              SecondLetter='A'
              Secondpart='ccount'
            />

            <CustomDropdown
              selectedType={selectedType}
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              setSelectedType={setSelectedType}
              accountTypes={accountTypes}
            />

            {currentFields.length > 0 && (
              <>
                <SignUpButton onClick={handleSignUp} loading={loading} />

                <button
                  type='button'
                  onClick={handleGoogleSignup}
                  className='w-full mt-3 border border-gray-300 bg-white py-2 rounded-lg hover:bg-gray-50 transition'
                >
                  Continue with Google
                </button>
              </>
            )}

            {error && (
              <p className='text-red-500 text-sm text-center mt-3'>{error}</p>
            )}
          </div>

          <BottomNavigation />
        </div>
      </div>
      )
}

export default SignUpPageMobile
