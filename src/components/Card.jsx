import React from 'react';

const Card = ({ image, title, subtitle, link }) => {
  return (
    <div className="max-w-sm w-full m-4 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
