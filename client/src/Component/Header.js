import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../images/image.png'
import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-70 text-black py-5">
        <div className=" max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-black">Logo</span>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
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
          {/* Call to Action Button */}
          <div>
            <a href="#signup" className="bg-blue-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-blue-600 transition duration-300">
              Book Inspection <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </header>
      <div class="w-full flex justify-between border ">
        <div class="left flex flex-col gap-3 border relative">
          <div class="box"><div className=" flex-1 sm:flex-2 w-[40vw] lg:w-[60vw] h-[73vw] lg:h-[60vw] lg:-top-36 -left-20 lg:-left-20 bg-cyan-200 rounded-full grid place-content-center absolute "></div></div>
          <div class="box"><div className=" flex-1 sm:flex-2 w-[40vw] lg:w-[60vw] h-[73vw] lg:h-[60vw] lg:-top-36 -left-20 lg:-left-36 bg-cyan-400 rounded-full grid place-content-center absolute opacity-50 "></div></div>
          <div class="box z-50 absolute">
            <h1 className='text-white text-start mt-16 lg:mt-48 ml-2 lg:ml-40 text-xs md:text-2xl lg:text-2xl font-bold font-mono w-96  '>
            Get Your Vehicle Inspected At Your Doorstep
          </h1>
            <p className=' text-white text-wrap mb-4 text-start text-xs ml-2 lg:ml-40 mt-1 lg:mt-5 overflow-hidden w-96'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>

            <a
              href="#signup"
              className="bg-blue-500 w-32 lg:w-44 px-2 lg:px-4 -py-1 md:py-4 lg:py-2 rounded-md text-white text-xs lg:text-sm font-semibold hover:bg-blue-600 transition duration-300 ml-2 lg:ml-40 -mt-2 lg:mt-4"
            >
              Book Inspection <FontAwesomeIcon icon={faArrowRight} />
            </a></div>
        </div>
        <div class="right flex border align-baseline">
          <div class="box"><img src={img1} className='mt-32 ' alt='' /></div>
        </div>
      </div>

    </div>
  );
};

export default Header;
