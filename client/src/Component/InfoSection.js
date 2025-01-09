import React from 'react';
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const InfoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Section (Right Side) */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              Why choose Us
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
              Book Inspection <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          {/* Image Section (Left Side) */}
          <div className="w-full ">
            <img
              src={image1}
              alt="Example"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src={image2}
              alt="Example"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src={image3}
              alt="Example"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src={image4}
              alt="Example"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              See How We Work
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
              Book Inspection <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
