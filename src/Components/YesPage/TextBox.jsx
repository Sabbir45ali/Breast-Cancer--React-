import { IoMdText } from "react-icons/io";
export default function DotBulletList() {
    return (
      <div className="flex items-center justify-center min-h-screen ">
       <div className="bg-[#d0bdbd39] rounded-3xl shadow-xl p-6 w-full max-w-7xl min-h-[650px] flex flex-col md:flex-row gap-6">

          {/* Left Image */}
          <div className="w-96">
            <img
              src="src\assets\Images\memogram_detection_YES_page.png" 
              className="rounded-lg  aspect-square relative top-28"
            />
          </div>
  
          {/* Right Text Content */}
          <div className="flex flex-col justify-between text-white text-xl font-bold text-shadow-lg ">
          <h2 className="text-5xl font-extrabold mb-3 text-shadow-lg "
          style={{ WebkitTextStroke: '2px #C01D52' }}>Cancer Detected!</h2>
            <div className="space-y-10 text-shadow-lg">
             
            <span>Your recent report indicates the presence of malignant cells,which <br/> suggests cancer.  While this news can be overwhelming,  it's <br/> important to take the right steps:</span>
            

            <ul className="list-disc list-inside text-white space-y-4">
      <li>Consult your doctor immediately for a comprehensive evaluation<br/>and to discuss your treatment options.</li>
      <li>Follow any prescribed tests and treatment plans.</li>
      <li>Focus on maintaining a healthy lifestyle and seeking support<br/> from loved ones or support groups.</li>
    </ul>
            </div>
  
            {/* Button */}
            <div className="mt-6 flex relative left-48 rounded-2xl bg-gradient-to-l from-[#FF5C5C] to-[#D03061] w-96 h-12 items-center gap-4 shadow-black border-2 border-black">
              <button className=" text-white font-extrabold py-2 px-6 relative left-12 flex justify-center shadow"
              style={{ WebkitTextStroke: '1px black' }}>
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
  