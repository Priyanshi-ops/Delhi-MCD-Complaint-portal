import React, { useRef, useState } from "react";
const myVideo = "/Delhi-MCD-Complaint-portal/your-video.mp4";
import mypic from "../assets/images/ashoka.png";
import ComplaintForm from "./ComplaintForm";

function Slideshow() {
  const formRef = useRef(null);
  const [toast, setToast] = useState(false);

  const handleRegisterClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      // Show warning toast
      setToast(true);
      setTimeout(() => setToast(false), 3500);
      return;
    }
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">

      {/* ── Not-logged-in Toast ── */}
      {toast && (
        <div
          style={{ animation: "slideDown 0.4s ease" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-2xl text-sm font-semibold"
        >
          <span className="text-xl">🔒</span>
          <span>Please <strong>Login</strong> first to register a complaint.</span>
        </div>
      )}

      {/* VIDEO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          fetchPriority="high"
          poster={mypic}
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
            onClick={handleRegisterClick}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-sm md:text-base hover:bg-blue-700 transition"
          >
            Register Complaint
          </button>
        </div>
      </div>

      {/* COMPLAINT FORM BELOW VIDEO */}
      <ComplaintForm ref={formRef} />

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
}

export default Slideshow;

