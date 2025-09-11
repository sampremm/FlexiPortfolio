import React from 'react';
import { ABOUT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        About
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-4 text-6xl uppercase lg:text-[8rem] text-white"
      >
        {ABOUT.text1}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mr-24 pl-4 text-lg leading-loose text-white"
      >
        {ABOUT.text2}
      </motion.p>

      {/* Publication Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-6 mr-24 pl-4 text-lg leading-loose text-white"
      >
        <p>{ABOUT.publication.title}</p>
        <a
          href={ABOUT.publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          📄 View Publication PDF
        </a>
      </motion.div>
    </div>
  );
};

export default About;
