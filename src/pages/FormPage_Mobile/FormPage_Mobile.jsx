import React from 'react'
import '../../App.css'
import NavbarMobile from '../../Components/Form Page Components/FormPageNavbar'
import FormCard from '../../Components/FormpageMobileComponenets/FormCard'

function FormPage_Mobile () {
  return (
    <div className='form_bg min-h-screen flex flex-col overflow-auto'>
      <div>
        <NavbarMobile />
      </div>
      <FormCard />
    </div>
  )
}

export default FormPage_Mobile
