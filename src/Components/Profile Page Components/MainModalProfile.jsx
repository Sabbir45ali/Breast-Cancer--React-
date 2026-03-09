import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiEdit2Fill } from 'react-icons/ri'

import PersonalInfo from './PersonalInfo'
import Org_info from './Org_info'
import Modal from './EditProfileModal'
import Org_EditProfile from './Org_EditProfile'
import Loader from '../../Components/Universal Components/Loader'

const MainModalProfile = ({
  tableHeaders = [],
  rowData = [],
  profileType = 'user',
  info = {},
  checkAgain
}) => {
  const [open, setOpen] = useState(false)
  const [profileInfo, setProfileInfo] = useState(info)
  const [loading, setLoading] = useState(false)

  /// //////////////////////////
  // FETCH PROFILE AGAIN
  /// //////////////////////////

  const fetchProfile = async () => {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      setLoading(true)

      const res = await fetch(
        'https://breast-cancer-detection-backend.onrender.com/api/user/profile/',
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )

      const data = await res.json()

      setProfileInfo({
        name: data.name,
        email: data.email,
        age: data.age,
        phnNo: data.phone,
        bloodGroup: data.blood_group
      })
    } catch (err) {
      console.log('Profile refresh failed')
    } finally {
      setLoading(false)
    }
  }

  /// //////////////////////////
  // Refresh After Edit
  /// //////////////////////////

  const handleCloseModal = () => {
    setOpen(false)
    fetchProfile()
  }

  return loading ? (
    <Loader />
  ) : (
    <div className='h-full w-full flex flex-col items-center justify-center p-4'>
      <div className='bg-pink-100 w-full max-w-5xl rounded-3xl shadow-xl relative top-6 flex flex-col items-center p-8'>
        {/* EDIT BUTTON */}

        <div
          onClick={() => setOpen(true)}
          className='bg-white z-30 absolute right-6 top-5 group p-1 rounded-full shadow'
        >
          <RiEdit2Fill className='text-lg cursor-pointer' />

          <span className='absolute bottom-0 right-0 mb-[-2rem] bg-gray-700 text-pink-300 text-xs font-semibold px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap'>
            Edit Profile
          </span>
        </div>

        {/* MODAL */}

        {profileType === 'user'
          ? (
            <Modal open={open} onclose={handleCloseModal} />
            )
          : (
            <Org_EditProfile open={open} onclose={() => setOpen(false)} />
            )}

        {/* PROFILE INFO */}

        <div className='mb-6 w-full flex justify-center'>
          {profileType === 'user'
            ? (
              <PersonalInfo
                name={profileInfo?.name}
                email={profileInfo?.email}
                age={profileInfo?.age}
                phnNo={profileInfo?.phnNo}
                bloodGroup={profileInfo?.bloodGroup}
              />
              )
            : (
              <Org_info
                OrgName={profileInfo?.orgName}
                OrgType={profileInfo?.orgType}
                OrgEmail={profileInfo?.email}
                Lisc={profileInfo?.licenseNo}
                OrgPhnNo={profileInfo?.phnNo}
              />
              )}
        </div>

        {/* TABLE */}

        <div className='w-full overflow-x-auto border border-gray-400 rounded-lg shadow'>
          <table className='min-w-[700px] w-full text-center text-sm text-black border-collapse'>
            <thead className='bg-pink-200'>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className='py-3 px-4 text-xs font-semibold uppercase tracking-wide border-b border-gray-300'
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rowData.length > 0
                ? (
                    rowData.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className='bg-pink-100 hover:bg-pink-200 transition'
                      >
                        {row.map((cell, i) => (
                          <td
                            key={i}
                            className='py-2 px-4 border-b border-gray-200'
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))
                  )
                : (
                  <tr>
                    <td
                      colSpan={tableHeaders.length}
                      className='py-4 text-gray-500 italic'
                    >
                      No data available
                    </td>
                  </tr>
                  )}
            </tbody>
          </table>
        </div>

        {/* BUTTON */}

        <div className='mt-8 w-full flex justify-center'>
          <Link to={checkAgain}>
            <button className='bg-pink-800 text-white px-8 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition'>
              CHECK AGAIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainModalProfile
