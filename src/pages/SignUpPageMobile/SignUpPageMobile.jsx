import React from 'react'
import {Link} from 'react-router-dom'
import SignInPageInputes from '../../Components/SignInPage_Mobile_Components/SignInPageInput'
import Header from '../../Components/Sign Up page Component/SignUpPageRightModel/Header'
import { RxCrossCircled } from 'react-icons/rx'
import SignInPage_Footer from '../../Components/SignInPage_Mobile_Components/SignInPage_Footer'
import MobileLandingPageFemale1 from '../../assets/Images/MobileLandingPageFemale1.png'
import SigninPage_Buttons from '../../Components/SignInPage_Mobile_Components/SignInPage_Button'

const SignUpPageMobile = () => {
  const inputFields = [
    { type: 'text', placeholder: 'Enter your name', background: '#F3DCE0' },
    {
      type: 'number',
      placeholder: 'Enter your phone number',
      background: '#F3DCE0'
    },
    { type: 'email', placeholder: 'Enter your email', background: '#F3DCE0' },
    {
      type: 'password',
      placeholder: 'Enter your password',
      background: '#F3DCE0'
    }
  ]

  return (
    <div className='bg-gradient-to-r from-[#f0779f] bg-[#e4d4d9] flex sm:hidden w-screen min-h-screen flex-col items-center justify-start text-center relative'>
      <div className='relative top-20 w-full flex justify-center mt-8'>
        <img
          src={MobileLandingPageFemale1}
          alt='Person on mobile landing page'
          className='w-[200px] h-[200px]  object-cover'
        />
      </div>
      <div className='relative top-24 flex flex-col w-full max-w-[400px] bg-white rounded-2xl shadow-2xl  mt-[-15px]'>
        <div className='relative w-full max-w-[400px] bg-white rounded-2xl shadow-2xl  mt-[-15px] flex flex-col justify-between items-center z-10 py-5 '>
          <Header
            FirstLetter='C'
            Firstpart='reate'
            SecondLetter='A'
            Secondpart='ccount'
          />
        <Link to='/'>
          <RxCrossCircled className='absolute top-4 right-4 text-3xl text-black cursor-pointer z-40' /></Link>
          <div className=' items-center justify-center px-5'>
            <SignInPageInputes inputs={inputFields} />
          </div>
          <div className='flex justify-center items-center'>
            <Link to='/home'>
            <SigninPage_Buttons
              label='SIGN-UP'
            
            />
            </Link>
          </div>
        </div>
      
        <div className='min-w-full max-w-[400px] mt-auto'>
          <SignInPage_Footer
            FooterText1="Already have an account?"
            FooterText2='Sign-In'
            link='/signin'
          />
        </div>
      </div>
    </div>
  )
}

export default SignUpPageMobile
