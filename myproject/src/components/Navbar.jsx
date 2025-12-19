import React, { useState } from "react";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="bg-sky-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Delhi MCD Complaint Portal</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            ☰
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:space-x-4 mt-2 md:mt-0`}
        >
          <button
            onClick={onLoginClick}
            className="block md:inline-block w-full md:w-auto hover:bg-red-700 px-3 py-2 rounded"
          >
            Login
          </button>
          <button
            onClick={onSignupClick}
            className="block md:inline-block w-full md:w-auto hover:bg-red-700 px-3 py-2 rounded mt-2 md:mt-0"
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
