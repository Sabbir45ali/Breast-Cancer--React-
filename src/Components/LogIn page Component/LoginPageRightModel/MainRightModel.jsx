import React from 'react'
import Input from './Input'
import UniversalButton from './UniversalButton'
import Header from './Header'
const MainRightModel = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-1/2'>
      <Header
        FirstLetter='C'
        SecondLetter='A'
        Firstpart='reate '
        Secondpart='ccount'
      />
      <Input />
      <div className=''>
        <UniversalButton btn='SIGN-UP' btnColor='#FF8ABA' />
      </div>
    </div>
  )
}

export default MainRightModel
