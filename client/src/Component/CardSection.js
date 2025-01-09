import React from 'react';
import png from "../images/Group 1000008005 (1).png"
import png1 from "../images/Group 1000008005.png"
import png2 from "../images/Group 1000008007.png"
import png4 from "../images/Group 1000008008.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CardSection = () => {
  const cards = [
    {
      title: 'Place Inspection request',
      features: [
        "Based on Technician’s Service Location",
        "Based on Technician’s Slot Availability"
      ],
      image: png,
      step: 'step 1'
    },
    {
      title: 'Inspection Requests gets mapped by Technician',
      features: [
        "Based on Technician’s Service Location",
        "Based on Technician’s Slot Availability"
      ],
      image: png1,
      step: 'step 2',
    },
    {
      title: 'Technicians performs Inspection',
      features: [
        "Based on Technician’s Slot Availability",
        "Based on Technician’s Slot Availability"
      ],
      image: png2,
      step: 'step 3'
    },
    {
      title: 'Price negotiations',
      features: [
        "Based on Technician’s Slot Availability",
        "Based on Technician’s Slot Availability"
      ],
      image: png4,
      step: 'step 4'
    },
  ];

  return (
    <div className="py-10 bg-gray-100 -mt-0 lg:-mt-28">
    <div className="max-w-full mx-auto px-2 ">
      <h2 className="text-xl font-bold text-center text-blue-400 mb-10">
        Our Work
      </h2>
      <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-12">
        Client Centric Approach
      </h2>
  

      <div className="flex flex-wrap justify-center gap-20"> 
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-md overflow-hidden transform transition-transform hover:scale-105 relative w-full sm:w-60 md:w-60 lg:w-60">
            
            <button className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition duration-300 z-10">
              {card.step}
            </button>
  
            
            <div className="flex justify-center mt-16">
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-20 object-cover transform hover:scale-110 transition-all duration-300"
              />
            </div>
  
            
            <div className="p-6 text-center flex flex-col h-full ">
              <div className="h-20" ><h3 className="text-xl flex-1 font-semibold mt-5 text-gray-800">{card.title}</h3></div>
              <p className="text-gray-600 flex-1 self-center my-11 mb-11  ">
                <ul className="list-disc list-inside space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className=' mr-1 text-blue-400' />
                      <div className=' text-gray-500 text-xs '>{feature}</div>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  

  );
};

export default CardSection;
