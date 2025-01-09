import React from 'react'
import img1 from '../images/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Carousel1() {
    return (
        <div className='flex'>
            <div className=" flex-1 sm:flex-2 w-[40vw] lg:w-[52vw] h-[73vw] lg:h-[52vw] lg:-top-32 -left-20 lg:-left-20 bg-cyan-200 rounded-full grid place-content-center relative ">
                <div className="flex-1 sm:flex-2 w-[75vw] lg:w-[52vw] h-[75vw] lg:h-[52vw] lg:-top-5 bg-sky-300 rounded-full absolute left-16 lg:-left-11 bg-opacity-50 ">
                    <div className='flex-1 flex flex-col p-4 md:ml-10 md:mt-5 lg:p-8 lg:mt-14'>
                        <h1 className='text-white text-start mt-16 lg:mt-48 ml-2 lg:ml-52 text-xs md:text-2xl font-bold font-mono '>
                            Get Your Vehicle Inspected <br /> At Your Doorstep
                        </h1>
                        <p className=' text-white mb-4 text-start text-xs ml-2 lg:ml-52 mt-1 lg:mt-5 overflow-auto'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>

                        <a
                            href="#signup"
                            className="bg-blue-500 w-32 lg:w-44 px-2 lg:px-4 -py-1 md:py-4 lg:py-2 rounded-md text-white text-xs lg:text-sm font-semibold hover:bg-blue-600 transition duration-300 ml-2 lg:ml-52 -mt-2 lg:mt-4"
                        >
                            Book Inspection <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-[500px] h-[500px] top-30 flex-2 hidden lg:flex '>
                <img src={img1} className='mt-32 ml' alt='' />
            </div>

        </div>

    )
}

export default Carousel1;