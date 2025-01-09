import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Header1 = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="shadow-sm shadow-gray-200 fixed top-0 left-0 w-full z-50 bg-white bg-opacity-70 text-black py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-black">Logo</span>
        </div>
        {/* Navigation (Desktop & Mobile) */}
        <nav>
          <ul className={`flex hidden space-x-6 ${menuOpen ? 'hidden' : 'block'} lg:flex  lg:space-x-6`}>
            <li>
              <a href="#home" className="hover:text-blue-500 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
            </li>
            <li>
              <a href="#contactUs" className="hover:text-blue-500 transition duration-300">Contact Us</a>
            </li>
            <li>
              <a href="#insurance" className="hover:text-blue-500 transition duration-300">Insurance</a>
            </li>
            <li>
              <a href="#testimonial" className="hover:text-blue-500 transition duration-300">Testimonial</a>
            </li>
          </ul>
        </nav>
        <div >
          <a href="#signup" className=" bg-blue-500 px-4 py-2  rounded-md text-white font-semibold hover:bg-blue-600 transition duration-300">
            Book Inspection <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="block lg:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-white py-4 z-50`}>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a href="#home" className="hover:text-blue-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
          </li>
          <li>
            <a href="#contactUs" className="hover:text-blue-500 transition duration-300">Contact Us</a>
          </li>
          <li>
            <a href="#insurance" className="hover:text-blue-500 transition duration-300">Insurance</a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-blue-500 transition duration-300">Testimonial</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header1;
