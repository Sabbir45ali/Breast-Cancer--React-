import React from 'react'
import Input from './Input'
import Header from './Header'
import SignUpButton from './SignUpButton'
import DropdownMenu from './Dropdown'

const MainRightModel = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full space-y-4 px-4'>
      <Header
        FirstLetter='C'
        SecondLetter='A'
        Firstpart='reate '
        Secondpart='ccount'
        text='Use email for registration'
      />
      <DropdownMenu heading="Create Account as" />
      <Input />
      <SignUpButton />
    </div>
  )
}

export default MainRightModel
