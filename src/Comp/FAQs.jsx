import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ question, answer,image ,heading1,navigationLink}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <button
        className={`flex justify-between items-center w-full bg-gray-200 p-3 text-left text-gray-800     transition duration-300 ease-in-out `}
        onClick={toggleFAQ}
      >
        {question} 
        {isOpen ? <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/>}
      </button>
      {isOpen && (
        <div className="pl-4 pt-2 pb-4 text-gray-700">
          <div className='flex items-center flex-row'>
            <img src={`${image}`} alt="boost-mobile-topup" className='w-20' />
            <div className='pl-5'>
              <h1 className='font-bold mb-1'>{heading1}</h1>
              <p className='mb-1'>{answer}</p>
              <a href={`${navigationLink}`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FAQs = ({ data }) => {
  return (
    <div className=" ">
      {data.map((item) => (
        <FAQ key={item.question} question={item.question} answer={item.answer} image={item.image} heading1={item.heading1} navigationLink={item.navigationLink} />
      ))}
    </div>
  );
};

export default FAQs;
