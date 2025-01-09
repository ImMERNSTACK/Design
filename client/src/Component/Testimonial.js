import React from 'react';
import ellipse8 from "../images/Ellipse 8.png";
import ellipse9 from "../images/Ellipse 9.png";
import ellipse7 from "../images/Ellipse 7.png";

function Testimonial() {
    return (
        <div className="testimonial-container">
            <h2 className="text-blue-500 text-lg text-center mt-10">Testimonials</h2>
            <h1 className="text-3xl font-bold text-gray-800 text-center mt-2 mb-24">
                Client’s Valuable Feedback
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border-t-2 border-l-2 border-r-2 border-blue-300">
                    <img
                        src={ellipse7}
                        alt="Portrait of Leah Stanley"
                        className="absolute -top-16 w-24 h-24 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mt-16">Leah Stanley</h3>
                    <p className="text-gray-600 text-center mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                </div>

                <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border-b-2 border-l-2 border-r-2 border-blue-300">
                    <img
                        src={ellipse8}
                        alt="Portrait of Jenny Wilson"
                        className="absolute -top-16 w-24 h-24 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mt-16">Jenny Wilson</h3>
                    <p className="text-gray-600 text-center mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                </div>

                <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border-t-2 border-l-2 border-r-2 border-blue-300">
                    <img
                        src={ellipse9}
                        alt="Portrait of Kristin Watson"
                        className="absolute -top-16 w-24 h-24 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mt-16">Kristin Watson</h3>
                    <p className="text-gray-600 text-center mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
