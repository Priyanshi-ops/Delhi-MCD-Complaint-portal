import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center transition-all duration-300">
        {/* Branding - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <div className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-sky-900" : "text-white drop-shadow-md"
            }`}>
            Delhi <span className="text-blue-600">MCD</span> Portal
          </div>
        </motion.div>

        {/* Right side content: Desktop Menu & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLoginClick}
              className={`font-semibold px-5 py-2 rounded-full transition-all duration-300 ${isScrolled
                ? "text-sky-900 hover:bg-sky-100"
                : "text-white hover:bg-white/20 backdrop-blur-sm border border-white/30"
                }`}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSignupClick}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            >
              Signup
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${isScrolled ? "text-sky-900" : "text-white"
                }`}
            >
              <span className="text-2xl font-bold">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => { onLoginClick(); setIsOpen(false); }}
                className="text-left py-3 text-sky-900 font-semibold border-b border-gray-50 flex items-center justify-between"
              >
                Login
                <span className="text-sky-300">→</span>
              </button>
              <button
                onClick={() => { onSignupClick(); setIsOpen(false); }}
                className="text-left py-3 text-sky-900 font-semibold border-b border-gray-50 flex items-center justify-between"
              >
                Signup
                <span className="text-sky-300">→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
