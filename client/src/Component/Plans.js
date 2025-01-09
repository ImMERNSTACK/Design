import React, { useState } from 'react';
import { plans } from "../fields/plan";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import group from '../images/Group 1000007889.png'; 
import group1 from "../images/ri_motorbike-fill.png";    
import { faCar, faCheckCircle, faMotorcycle } from '@fortawesome/free-solid-svg-icons';

function Plans() {
    const [selectedCategory, setSelectedCategory] = useState('Cars');
    const filteredPlans = plans.filter(plan => plan.category === selectedCategory);
    return (
        <div>
            <h1 className="text-3xl font-semibold text-gray-800 mt-8 mb-12 text-center">Select a Vehicle Category</h1>
            <div className="inline-flex rounded-md w-full justify-center mb-5" role="group">
                <button
                    type="button"
                    onClick={() => setSelectedCategory('Cars')}
                    className={`px-4 py-2 text-lg w-56 font-medium ${selectedCategory === 'Car' ? 'bg-blue-400 text-white' : 'bg-white text-gray-900'
                        } border border-gray-200 rounded-s-lg hover:bg-blue-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700`}
                >
                    <FontAwesomeIcon icon={faCar} /> Car
                </button>
                <button
                    type="button"
                    onClick={() => setSelectedCategory('Motorcycle')}
                    className={`px-4 py-2 text-lg w-56 font-medium ${selectedCategory === 'Motorcycle' ? 'bg-blue-400 text-white' : 'bg-white text-gray-900'
                        } border border-gray-200 rounded-e-lg hover:bg-blue-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700`}
                >
                    <FontAwesomeIcon icon={faMotorcycle} /> Motorcycle
                </button>
            </div>


            <div className="flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
                {filteredPlans.map((plan, index) => (
                    <div key={index} className="border rounded-lg shadow-lg p-4 w-full md:w-1/3 flex flex-col h-auto">
                        <div className="flex items-center mb-4 p-2 rounded-t-lg">
                            <div className="rounded-t-xl">
                                <img src={plan.category==="Motorcycle"?group1:group} alt="Inspection icon" className={`mr-2 rounded-full ${plan.category==="Motorcycle" &&  'bg-blue-500'}`} />
                            </div>
                            <h2 className="text-xl font-semibold">{plan.title}</h2>
                            <span className="ml-auto text-2xl font-bold">{plan.price}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Features</h3>
                        <div className="h-[40vh]">
                            <ul className="list-disc list-inside space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <FontAwesomeIcon icon={faCheckCircle} className="mt-1 mr-1 text-blue-400" />
                                        <div className="justify m-0">{feature}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 flex flex-col justify-items-center">
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
