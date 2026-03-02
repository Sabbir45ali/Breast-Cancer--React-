import React, { useEffect, useState } from "react";
import profileBg from "../../assets/Images/ProfilePage.png";
import MainModalProfile from "../../Components/Profile Page Components/MainModalProfile";
import ProfileNav from "../../Components/Profile Page Components/ProfileNav";
import Logo from "../../assets/Images/Logo.png";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo({
          name: data.name,
          email: data.email,
          age: data.age || "-",
          phnNo: data.phone || "-",
          bloodGroup: data.blood_group || "-",
        });
      });

    fetch("http://127.0.0.1:8000/api/image-history/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((item) => {
          // Format date
          const rawDate = item.date || item.created_at || item.timestamp;

          const formattedDate = rawDate
            ? new Date(rawDate).toLocaleDateString("en-GB")
            : "-";

          // Extract filename
          const imageUrl = item.image_url || item.image || item.url || "";

          return [formattedDate, imageUrl, item.result || "-"];
        });

        setProfileData(rows);
      });
  }, []);

  const profileHeaders = ["Date", "Image Link", "Result"];

  if (!userInfo) return <div>Loading...</div>;

  return (
    <div
      style={{ backgroundImage: `url(${profileBg})` }}
      className="bg-cover bg-center h-screen flex justify-center items-center"
    >
      <ProfileNav BacktoHome="/home" Logo={Logo} />

      <MainModalProfile
        tableHeaders={profileHeaders}
        rowData={profileData}
        profileType="user"
        info={userInfo}
        checkAgain="/formtwo"
      />
    </div>
  );
};

export default Profile;
