import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '../assets/Menuicon.png'
import close from '../assets/close-menu.png';

import DarkSocialIcons from "./DarkSocialIcons";


const SlideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };


  return (
    <div>
      {/* Menu Toggle Button */}
      <button
        className=""
        onClick={toggleNavbar}
      >
        <img src={MenuIcon} className="w-[20px] h-[20px]" alt="" />
      </button>

      {/* Overlay for clickaway with blur effect */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0  z-20"
          onClick={closeNavbar}
        ></div>
      )}

      {/* Sliding Navbar */}
      <div
        className={`fixed top-0 right-0  w-72  bg-black bg-opacity-30 backdrop-blur-sm z-20 text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex flex-col w-full p-6 space-y-3">
          <button onClick={closeNavbar} className="outline-none bg-none border-none">
            <img src={close} alt="close" className="w-[30px] h-[30px]" />
          </button>
          <div className="flex flex-col w-full space-y-6">
            <Link to="/" onClick={closeNavbar} className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              Home
            </Link>
            <Link onClick={closeNavbar} to="/aboutus" className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              About Us
            </Link>
            <Link onClick={closeNavbar} to="/blogs" className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              Blog
            </Link>
            <Link className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              Research
            </Link>
            <Link onClick={closeNavbar} to="/termsandcondition" className="lg:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              Terms & Condition
            </Link>
            <Link onClick={closeNavbar} to="/howitworks" className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              How it works
            </Link>
            <Link onClick={closeNavbar} to="/policyprivacy" className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              Privacy
            </Link>
            <Link onClick={closeNavbar} to="/contactus" className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              Contact Us
            </Link>
            <Link onClick={closeNavbar} to="/team/precious" className="text-sm md:text-lg text-center border-4 rounded-md px-3 border-orange-100 hover:text-gray-300">
              Team
            </Link>
          </div>
          <DarkSocialIcons />
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;