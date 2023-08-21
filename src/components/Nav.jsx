import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.svg";

export default function Nav({ onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick();
  };
  return (
    <div className="flex w-screen justify-between sm:px-36">
      <img src={Logo} className="py-7 ml-3" />
      <div className="invisible sm:visible sm:flex sm:flex-row sm:mt-6 sm:ml-36">
        <div className="text-sm px-6 text-gray-400 w-fit">Pricing</div>
        <div className="text-sm px-6 text-gray-400">Product</div>
        <div className="text-sm px-6 text-gray-400 w-fit">About Us</div>
        <div className="text-sm px-6 text-gray-400">Careers</div>
        <div className="text-sm px-6 text-gray-400">Community</div>
      </div>

      <img
        src={isMenuOpen ? Close : Hamburger}
        alt="Menu"
        className="w-6 h-6 mt-7 cursor-pointer sm:invisible"
        onClick={toggleMenu}
      />
      <div className="ml-44 mt-3 sm:w-80 hidden sm:block">
            <button className="bg-orange-500 rounded-full text-white font-bold  hover:bg-orange-700 hover:shadow-lg">
              Get Started
            </button>
          </div>
    </div>
  );
}
