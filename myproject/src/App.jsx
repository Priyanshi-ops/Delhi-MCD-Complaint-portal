import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Slideshow from "./components/Slideshow";

function App() {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div className="w-full min-h-screen bg-sky-50 flex flex-col">

      {/* NAVBAR */}
      <Navbar
        onLoginClick={() => setActiveForm("login")}
        onSignupClick={() => setActiveForm("signup")}
      />

      {/* SLIDESHOW (normal flow) */}
      <div className="w-full">
        <Slideshow />
      </div>

      {/* FORM AREA */}
      <AnimatePresence mode="wait">
        {activeForm && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setActiveForm(null)} // Click outside to close
            />

            {/* Form box */}
            <motion.div
              key={activeForm}
              initial={{ x: activeForm === "login" ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: activeForm === "login" ? "100%" : "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              {activeForm === "login" && <Login />}
              {activeForm === "signup" && (
                <Signup closeSignup={() => setActiveForm(null)} />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
