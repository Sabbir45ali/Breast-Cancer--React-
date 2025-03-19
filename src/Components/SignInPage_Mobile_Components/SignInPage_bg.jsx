import React from 'react' 
import {Link} from 'react-router-dom'
import MobileLandingPageFemale1 from '../../assets/Images/MobileLandingPageFemale1.png'
import SignInPageInput from './SignInPageInput'
import SignInButton from '../SignIn page Component/SignInButton'
// import SigninPage_Buttons from './SignInPage_Button'
import Header from '../Sign Up page Component/SignUpPageRightModel/Header'
import SignInPage_Footer from './SignInPage_Footer'
import { RxCrossCircled } from 'react-icons/rx'
// const SignInPageHeader = ({ headerData }) => (
//   <div className='w-full max-w-[400px] bg-white rounded-t-2xl shadow-2xl  mt-[-15px] flex flex-col  z-10 px-8'>
//     <Header
//       FirstLetter={headerData.FirstLetter}
//       Firstpart={headerData.Firstpart}
//       SecondLetter={headerData.SecondLetter}
//       Secondpart={headerData.Secondpart}
//       text={headerData.text}
//     />
//     <div className='w-full mt-4'>
//       <SignInPageInput inputs={headerData.inputFields} />
//     </div>
//     <SigninPage_Buttons
//       label={headerData.label}
//       bgColor={headerData.bgColor}
//       textColor={headerData.textColor}
//     />
  <div className='text-gray-700 text-sm mb-4 mt-5'>
    Forgot password?{' '}
    <a href='/forgot-password' className='text-[#FF6699] underline'>
    Click here!
  </a>
  </div>
//   </div>
// )

const SignInPage_bg = () => {
  const inputFields = [
    { type: 'email', placeholder: 'Enter your email', background: '#F3DCE0' },
    {
      type: 'password',
      placeholder: 'Enter your password',
      background: '#F3DCE0'
    }
  ]
  // const headerData = {
  //   FirstLetter: 'S',
  //   Firstpart: 'ign ',
  //   SecondLetter: 'I',
  //   Secondpart: 'n',
  //   text: 'Use email and password',
  //   inputFields,
  //   label: 'Sign-In',
  //   bgColor: '#FF6699',
  //   textColor: '#FFFFFF'
  // }

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
            FirstLetter='S'
            Firstpart='ign'
            SecondLetter='I'
            Secondpart='n'
          />
        <Link to='/'>
          <RxCrossCircled className='absolute top-4 right-4 text-3xl text-black cursor-pointer z-40 ' />
          </Link>
          <div className=' items-center justify-center px-5'>
            <SignInPageInput inputs={inputFields} />
          </div>
          <div className='flex justify-center items-center'>
            <SignInButton className='bg-[#c45e80]' />
          </div>
          <div className='text-gray-700 text-sm mb-4 mt-5'>
            Forgot password?{' '}
            <a href='/forgot-password' className='text-[#FF6699] underline'>
              Click here!
            </a>
          </div>
        </div>
        <div className='min-w-full max-w-[400px] mt-auto'>
          <SignInPage_Footer
            FooterText1="Don't have an account?"
            FooterText2='Sign-Up'
          />
        </div>
      </div>
    </div>
  )
}

export default SignInPage_bg
