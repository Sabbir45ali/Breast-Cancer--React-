import React from 'react'
import Header from '../../Components/LogIn page Component/LoginPageRightModel/Header'
import SignupInput from '../../Components/Signup page Component/signupinput'
import UniversalButton from '../../Components/LogIn page Component/LoginPageRightModel/UniversalButton'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-1/2">
      <Header FirstLetter='S' SecondLetter='I' Firstpart='ign ' Secondpart='n'/>
      <SignupInput/>
      <div className="">
        <UniversalButton btn='SIGN-IN' btnColor='#FF8ABA'/>
      </div>

    </div>
  )
}

export default Signup
