import React from 'react'
import profileBg from '../../assets/Images/ProfilePage.png'
import MainModalProfile from '../../Components/Profile Page Components/MainModalProfile'
import ProfileNav from '../../Components/Profile Page Components/ProfileNav'
import Logo from '../../assets/Images/Logo.png'

const Org_profile = () => {
  const orgHeaders = [
    'Sl no.',
    'Date',
    'Radius mean',
    'Texture mean',
    'Area mean',
    'Perimeter mean',
    'Smoothness mean',
    'Compactness mean',
    'Concavity mean',
    'Result'
  ]

  const orgData = [
    [1, '23/09/2025', 2.0, 50, 9, 50, 50, 50, 50, 'Positive'],
    [2, '23/10/2025', 3.5, 55, 12, 60, 52, 48, 46, 'Negative']
  ]

  const orgInfo = {
    orgName: 'Apollo Hospitals',
    orgType: 'Healthcare',
    email: 'contact@apollo.com',
    licenseNo: 'LISC-9823-ABCD',
    phnNo: '+91 9876543210'
  }

  return (
    <div
      style={{ backgroundImage: `url(${profileBg})` }}
      className='bg-cover bg-center h-screen flex justify-center items-center'
    >
      <ProfileNav BacktoHome='/org-home' Logo={Logo} />
      <MainModalProfile
        tableHeaders={orgHeaders}
        rowData={orgData}
        profileType='org'
        info={orgInfo}
        checkAgain='/form'
      />
    </div>
  )
}

export default Org_profile
