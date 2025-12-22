import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Slideshow from "./components/Slideshow";

function App() {
  const [activeForm, setActiveForm] = useState(null);

  const closeForm = () => setActiveForm(null);

  return (
    <div className="w-full min-h-screen bg-sky-50 flex flex-col">

      {/* NAVBAR */}
      <Navbar
        onLoginClick={() => setActiveForm("login")}
        onSignupClick={() => setActiveForm("signup")}
      />

      {/* SLIDESHOW */}
      <div className="w-full">
        <Slideshow />
      </div>

      {/* LOGIN / SIGNUP MODAL */}
      <AnimatePresence mode="wait">
        {activeForm && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={closeForm}
            />

            {/* Form box */}
            <motion.div
              key={activeForm}
              initial={{
                x: activeForm === "login" ? "100%" : "-100%",
                opacity: 0
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: activeForm === "login" ? "100%" : "-100%",
                opacity: 0
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative z-50 flex items-center justify-center h-full"
            >
              {activeForm === "login" && (
                <Login closeLogin={closeForm} />
              )}

              {activeForm === "signup" && (
                <Signup closeSignup={closeForm} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
