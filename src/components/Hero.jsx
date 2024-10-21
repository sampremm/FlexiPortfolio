import React from 'react';
import image from '../assets/img2.jpg';
import { PROFILE } from '../constants';

const Hero = () => {
  const openResume = () => {
    window.open('src/assets/resume.pdf', '_blank');
  };

  return (
    <div
      className="relative flex min-h-screen items-end justify-center"
      id="hero"
      aria-label={`${PROFILE.name} - Hero Section`}
    >
      <img
        src={image}
        alt={`${PROFILE.name} profile background`}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        loading="lazy" // Lazy loading for better performance
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black lg:from-30%">
      </div>
      <div className="z-20 mx-4 max-w-3xl pb-20 text-center text-white">
        <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
          {PROFILE.name}
        </h1>
        <p className="pt-2 text-lg font-semibold">
          {PROFILE.info}
        </p>
        <button
          className="mt-8 rounded-full bg-yellow-400 py-2 px-6 text-lg font-semibold text-gray-900 shadow-lg transition ease-in-out transform  hover:bg-yellow-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={openResume}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default React.memo(Hero);
