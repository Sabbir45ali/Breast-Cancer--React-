import React from 'react'
import Input from './Input'
import Header from './Header'
import LoginButton from './LoginButton'
const MainRightModel = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-1/2'>
      <Header
        FirstLetter='C'
        SecondLetter='A'
        Firstpart='reate '
        Secondpart='ccount'
        text='Use email for registartion'
      />
      <Input />
      <div className=''>
        <LoginButton />
      </div>
    </div>
  )
}

export default MainRightModel
