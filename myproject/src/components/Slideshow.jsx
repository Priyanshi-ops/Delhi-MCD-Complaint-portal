import React, { useRef } from "react";
import myVideo from "../assets/images/your-video.mp4";
import mypic from "../assets/images/ashoka.png";
import ComplaintForm from "./ComplaintForm"; // correct relative path

function Slideshow() {
  const formRef = useRef(null);

  return (
    <div className="w-full">
      {/* VIDEO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={myVideo} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

        {/* LOGO */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <img
            src={mypic}
            alt="Logo"
            className="w-28 sm:w-36 md:w-48 lg:w-56 object-contain"
          />
        </div>

        {/* TEXT + BUTTON */}
        <div className="relative z-30 flex flex-col items-center md:pt-[450px] pt-40 sm:pt-48 md:pt-60 lg:pt-72">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-semibold italic text-center tracking-wide drop-shadow-lg">
            Welcome to Complaint Portal
          </h1>

          <button
onClick={() => {
  formRef.current.scrollIntoView({ behavior: "smooth" });
}}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-sm md:text-base hover:bg-blue-700 transition"
          >
            Register Complaint
          </button>
        </div>
      </div>

      {/* COMPLAINT FORM BELOW VIDEO */}
      <ComplaintForm ref={formRef} />
    </div>
  );
}

export default Slideshow;
