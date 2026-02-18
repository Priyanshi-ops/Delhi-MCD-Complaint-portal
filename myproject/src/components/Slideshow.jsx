import React, { useRef } from "react";
import { motion } from "framer-motion";
import DynamicBackground from "./DynamicBackground";
import ComplaintForm from "./ComplaintForm";

const myVideo = "/Delhi-MCD-Complaint-portal/your-video.mp4";

function Slideshow() {
  const formRef = useRef(null);

  return (
    <div className="w-full relative overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] md:h-[85vh] flex flex-col items-center justify-center overflow-hidden">

        {/* VIDEO BACKGROUND (BLURRED) */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover blur-[4px] brightness-90 grayscale-[20%]"
          >
            <source src={myVideo} type="video/mp4" />
          </video>
        </div>

        {/* INTERACTIVE PARTICLES ON TOP OF VIDEO */}
        <div className="absolute inset-0 z-1">
          <DynamicBackground />
        </div>

        {/* GLASSMORPHISM CONTENT CARD */}
        <motion.div
          className="relative z-10 mx-4 mt-16 sm:mt-24 md:mt-32"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="backdrop-blur-md bg-white/40 p-8 md:p-12 rounded-3xl border border-white/50 shadow-2xl text-center max-w-4xl transition-transform duration-200">
            <h1 className="text-sky-900 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Empowering <span className="text-blue-600">Digital</span> Governance
            </h1>

            <p className="text-sky-800 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience a seamless, interactive way to report and track municipal issues. Your voice matters for a cleaner Delhi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* MAGNETIC-STYLE BUTTONS */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Register Complaint
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </motion.button>

              <motion.a
                href="https://mcdonline.nic.in/portal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/50 text-sky-900 rounded-full font-semibold backdrop-blur-sm border border-white/50 hover:bg-white/70 shadow-lg transition-all flex items-center justify-center"
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-sky-400 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* COMPLAINT FORM SECTION */}
      <div className="bg-white">
        <ComplaintForm ref={formRef} />
      </div>
    </div>
  );
}

export default Slideshow;

