import React from 'react';
import logo from '../assets/logonew.png';
import { SOCIAL_MEDIA_LINKS } from '../constants/index.jsx';
import {motion} from 'framer-motion'; 

const Footer = () => { 
  return (
    <div className='mb-8 mt-20'>
      <div className='flex items-center justify-center'>
        <motion.figure
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5,delay:1 }}
        >
          <img src={logo} alt="logo" width={200} className='mb-2' />
          <div className='mb-10 w-12 h-3 bg-yellow-400'></div>
        </motion.figure>
      </div>
      <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2,delay:0.5*index }}
          key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {/* Adding the 'text-white' class to make the icons white */}
            <span className="text-white">{link.icon}</span>
          </motion.a>
        ))}
      </div>
      <p className='mt-8 text-center text-sm tracking-wide'>
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
};

export default Footer;
