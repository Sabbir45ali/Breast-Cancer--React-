import { IoMdText } from "react-icons/io";
export default function DotBulletList() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-[#d0bdbd39] rounded-3xl shadow-xl p-6 w-full max-w-7xl min-h-[650px] flex flex-col md:flex-row gap-6 fixed">
        {/* Left Image */}
        <div className="w-96">
          <img
            src="src\assets\Images\female_picNo_page.png"
            className="rounded-lg  aspect-square relative top-32"
          />
        </div>

        {/* Right Text Content */}
        <div className="flex flex-col justify-between text-white text-xl font-bold text-shadow-lg">
          <h2
            className="text-5xl font-extrabold mb-3 text-shadow-lg "
            style={{ WebkitTextStroke: "2px #C01D52" }}
          >
            No Cancer Detected!
          </h2>
          <div className="space-y-10 text-shadow-lg">
            <span>
              Your recent report confirm that no cancser has been detected,{" "}
              <br /> and the findings are benign.This is reassuring, <br /> but
              it still important to take care of your health:
            </span>

            <ul className="list-disc list-inside text-white space-y-4">
              <li>
                Schedule regular follow-ups with your doctor
                <br />
                to monitor your condition.
              </li>
              <li>
                Stay informed about any changes or recommendations for future
                screenings.
              </li>
              <li>
                Continue leading a healthy lifestyle with
                <br />
                good nutrition and regular exercise.
              </li>
            </ul>
          </div>

          {/* Button */}
          <div className="mt-6 flex relative left-48 rounded-2xl bg-gradient-to-l from-[#FF5C5C] to-[#D03061] w-96 h-12 items-center gap-4 shadow-black border-2 border-black">
            <button
              className=" text-white font-extrabold py-2 px-6 relative left-12 flex justify-center shadow"
              style={{ WebkitTextStroke: "1px black" }}
            >
              CONSULT WITH DOCTOR
            </button>
            <div className=" p-2 rounded-2xl  shadow cursor-pointer relative left-20 border-2 border-black">
              <IoMdText className="text-white w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
