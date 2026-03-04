import React, { useEffect, useState } from 'react'
import profileBg from '../../assets/Images/ProfilePage.png'
import MainModalProfile from '../../Components/Profile Page Components/MainModalProfile'
import ProfileNav from '../../Components/Profile Page Components/ProfileNav'
import Logo from '../../assets/Images/Logo.png'

const Org_profile = () => {
  const [orgInfo, setOrgInfo] = useState({})
  const [history, setHistory] = useState([])
  const [historyType, setHistoryType] = useState('data')

  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch('http://13.232.232.187:8000/api/org/profile/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setOrgInfo(data))

    fetch('http://13.232.232.187:8000/api/org/full-history/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setHistory(data))
  }, [])

  // DATE FORMAT
  const formatDate = (date) => {
    if (!date) return '-'
    if (typeof date === 'string') return date.split('T')[0]
    if (date._seconds) {
      return new Date(date._seconds * 1000).toISOString().split('T')[0]
    }
    return '-'
  }

  // Helper function for styling results
  const renderStyledResult = (result) => {
    const resText = result || '-'
    const isMalignant = resText.toLowerCase() === 'malignant'
    const isBenign = resText.toLowerCase() === 'benign'

    return (
      <span
        className={`font-bold px-3 py-1 rounded-full text-sm ${
          isMalignant
            ? 'text-red-600 bg-red-50'
            : isBenign
              ? 'text-green-600 bg-green-50'
              : 'text-gray-600'
        }`}
      >
        {resText}
      </span>
    )
  }

  // IMAGE HISTORY TABLE
  const imageRows = history
    .filter((item) => item.type === 'image')
    .map((item, i) => [
      i + 1,
      formatDate(item.date),
      <a
        href={item.image_url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 hover:underline font-medium'
      >
        {item.image_name || 'scan.png'}
      </a>,
      renderStyledResult(item.result) // Applied styling here
    ])

  // DATA HISTORY TABLE
  const dataRows = history
    .filter((item) => item.type === 'data')
    .map((item, i) => [
      i + 1,
      formatDate(item.date),
      item.inputs?.radius_mean ?? '-',
      item.inputs?.texture_mean ?? '-',
      item.inputs?.area_mean ?? '-',
      item.inputs?.smoothness_mean ?? '-',
      item.inputs?.compactness_mean ?? '-',
      item.inputs?.concavity_mean ?? '-',
      renderStyledResult(item.result) // Applied styling here
    ])

  const tableHeadersImage = ['SL NO', 'DATE', 'IMAGE NAME', 'RESULT']

  const tableHeadersData = [
    'SL NO',
    'DATE',
    'RADIUS MEAN',
    'TEXTURE MEAN',
    'AREA MEAN',
    'SMOOTHNESS MEAN',
    'COMPACTNESS MEAN',
    'CONCAVITY MEAN',
    'RESULT'
  ]

  return (
    <div
      style={{ backgroundImage: `url(${profileBg})` }}
      className='bg-cover bg-center h-screen flex justify-center items-center'
    >
      <ProfileNav BacktoHome='/org-home' Logo={Logo} />

      {/* DROPDOWN */}
      <div className='absolute top-24'>
        <select
          value={historyType}
          onChange={(e) => setHistoryType(e.target.value)}
          className='mb-4 border p-2 rounded shadow-sm bg-white cursor-pointer'
        >
          <option value='data'>Data Prediction</option>
          <option value='image'>Image Prediction</option>
        </select>
      </div>

      <MainModalProfile
        tableHeaders={
          historyType === 'data' ? tableHeadersData : tableHeadersImage
        }
        rowData={historyType === 'data' ? dataRows : imageRows}
        profileType='org'
        info={{
          orgName: orgInfo.org_name,
          orgType: orgInfo.type,
          email: orgInfo.email,
          licenseNo: orgInfo.license_no,
          phnNo: orgInfo.phone
        }}
        checkAgain='/form'
      />
    </div>
  )
}

export default Org_profile
