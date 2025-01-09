import React from 'react'
import img1 from '../images/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


 function Carousel2() {
     return (
      <div class="w-full flex justify-between h-[58vw] ">
        <div class="left flex flex-col gap-3 border relative">
          <div class="box"><div className=" flex-1 sm:flex-2 w-[60vw] lg:w-[60vw] h-[60vw] lg:h-[60vw] md:-top-8 lg:-top-36 -left-16 lg:-left-20 bg-cyan-200 rounded-full grid place-content-center absolute "></div></div>
          <div class="box"><div className=" flex-1 sm:flex-2 w-[60vw] lg:w-[60vw] h-[60vw] lg:h-[60vw] md:-top-8 lg:-top-36 -left-24 lg:-left-36 bg-cyan-400 rounded-full grid place-content-center absolute opacity-50 "></div></div>
          <div class="box z-40 absolute">
            <h1 className='text-white text-start mt-24 lg:mt-48 ml-5 lg:ml-40 text-xs md:text-2xl lg:text-2xl font-bold font-mono w-56 md:w-80 lg:w-96  '>
            Get Your Vehicle Inspected At Your Doorstep
          </h1>
            <p className=' text-white text-wrap mb-4 text-start text-xs ml-5 lg:ml-40 mt-1 lg:mt-5 overflow-hidden w-80 lg:w-96'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>

            <a
              href="#signup"
              className="bg-blue-500 w-32 lg:w-44 px-2 lg:px-4 -py-1 md:py-4 lg:py-2 rounded-md text-white text-xs lg:text-sm font-semibold hover:bg-blue-600 transition duration-300 ml-5 lg:ml-40 mt-4 lg:mt-4"
            >
              Book Inspection <FontAwesomeIcon icon={faArrowRight} />
            </a></div>
        </div>
        <div class="right flex  align-middle">
          <div class="box"><img src={img1} className='mt-20 w-56 object-cover lg:w-full md:w-80' alt='' /></div>
        </div>
      </div>
    
     )
 }

 export default Carousel2;