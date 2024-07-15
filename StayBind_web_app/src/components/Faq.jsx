// import React from 'react'
// import Line from '../assets/Line.png'

// const Faq = () => {
//   return (
//     <div className='mx-auto my-14'>
//       <h1 className="text-center font-black text-4xl">FAQ</h1>
//       <img className="mx-auto " src={Line} alt="" />
//       <div className="accordian">

//       </div>
      
//     </div>
//   )
// }

// export default Faq

import React, { useState } from 'react';
import Line from '../assets/Line.png';
import { RiArrowDropDownLine } from "react-icons/ri";


const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-2 border-blue-500 rounded mb-4 w-[60vw] mx-auto">
      <div
        className="flex justify-between items-center p-6 cursor-pointer"
        onClick={onClick}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className='text-blue-500 text-4xl' >{isOpen ? <RiArrowDropDownLine  className='text-white bg-blue-500 rounded-full' /> : '>'}</span>
      </div>
      {isOpen && (
        <div className="px-8 pb-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: 'What color should you choose as a primary?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet et. Tincidunt feugiat in lectus quis. Neque porttitor arcu faucibus elementum egestas. Id proin malesuada leo nunc est fringilla purus consectetur platea. Dis rhoncus magnis dictum dui interdum ullamcorper donec adipiscing.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mx-auto my-14'>
      <h1 className="text-center font-black text-4xl">FAQ</h1>
      <img className="mx-auto " src={Line} alt="line" />
      <div className="accordion flex flex-col items-center mt-20">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
