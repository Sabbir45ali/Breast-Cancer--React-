import { useState, React } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import PersonalInfo from "./PersonalInfo";
import ProfileButton from "./ProfileButton";
import Modal from "./EditProfileModal";

const MainModalProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="bg-pink-100 w-[90%] max-w-3xl rounded-3xl shadow-xl relative top-10 flex flex-col items-center p-6">
        {/* Edit Icon */}
        <div
          onClick={() => setOpen(true)}
          className="bg-white z-30 absolute right-6 top-5 group"
        >
          <RiEdit2Fill className="text-lg cursor-pointer" />
          <span className="absolute bottom-0 right-0 mb-[-2rem] bg-gray-700 text-pink-300 text-xs font-semibold px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
            Edit Profile
          </span>
        </div>

        {/* Modal */}
        <Modal open={open} onclose={() => setOpen(false)} />

        {/* Personal Info */}
        <PersonalInfo
          name="Priyanshu Bhattacharjee"
          email="prathamac62@gmail.com"
          age="21"
          phnNo="9823******"
          bloodGroup="B+"
        />

        {/* Table Section */}
        <div className="w-[107%] mt-6 bg-pink-100 border border-gray-500 rounded-md shadow-md shadow-gray-400">
  <table className="w-full  text-center text-sm text-black table-fixed">
    <thead className="bg-pink-50">
      <tr>
        <th className="py-4 px-2 text-xs font-semibold uppercase tracking-wide w-[12.5%]">
          DATE-DD/MM/YYYY
        </th>
        <th className="py-3 px-2 w-[12.5%]">Radius<br />mean</th>
        <th className="py-3 px-2 w-[12.5%]">Texture<br />mean</th>
        <th className="py-3 px-2 w-[12.5%]">Area<br />mean</th>
        <th className="py-3 px-2 w-[12.5%]">Perimeter<br />mean</th>
        <th className="py-3 px-2 w-[12.5%]">Smoothness<br />mean</th>
        <th className="py-3 px-2 w-[12.5%]">Compactness<br />mean</th>
        <th className="py-3 px-2 w-[12.5%]">Concavity<br />mean</th>
      </tr>
    </thead>
  </table>
</div>


        {/* Button */}
        <div className="mt-6 w-full flex justify-center">
          <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition">
            CHECK AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainModalProfile;
