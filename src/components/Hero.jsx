import React from 'react';
import image from '../assets/img2.jpg';
import { PROFILE } from '../constants';
import { motion } from 'framer-motion';

const Hero = () => {
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1VtPW-7oV0p8LhGYoFK98nt8kn0elMrBH/view?usp=sharing', '_blank');
  };

  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-center"
        id="hero"
      >
        <motion.img
          src={image}
          alt={`${PROFILE.name} profile background`}
          className="absolute sm:object-left sm:w-full inset-0 z-10 h-full w-full object-cover"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black lg:from-30%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="z-20 mx-4 max-w-3xl pb-20 text-center text-white"
        >
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            {PROFILE.name}
          </h1>
          <p className="pt-2 text-lg font-semibold">
            {PROFILE.info}
          </p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            className="mt-8 rounded-full bg-yellow-400 py-2 px-6 text-lg font-semibold text-gray-900 shadow-lg transition ease-in-out transform hover:bg-yellow-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onClick={openResume}
          >
            Resume
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default React.memo(Hero);
