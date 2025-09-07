import React from 'react';

const Card = ({ image, title, subtitle, link }) => {
  return (
    <div className="max-w-sm w-full m-4 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col h-64"> 
        {/* Set fixed height for the content area */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        
        {/* Scrollable subtitle */}
        <div className="text-gray-600 mb-4 overflow-y-auto pr-1 flex-1">
          {subtitle}
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 self-start"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
