import React from "react";

export default function MammogramUploadPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <img
        src="/background-flower.png" // Replace with actual path to your background flower image
        alt="Background Flower"
        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
      />

      <div className="text-center px-6 ">
        <h1 className="text-4xl md:text-5xl font-semibold text-black/80 leading-relaxed mb-10 gap-y-10">
          Early <br /> Detection <br /> Saves <br /> Lives
        </h1>

        <label className="flex items-center bg-[#851e2066] text-black font-semibold py-2 px-4 rounded-xl border-2 border-black shadow-md mb-6 cursor-pointer">
          Upload Memogram Image
          <input
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            className="hidden"
          />
        </label>

        <button className="bg-[#EEB6B7] border-2 text-black font-semibold py-2 px-6 rounded-full shadow w-32">
          Test
        </button>
      </div>
    </div>
  );
}
