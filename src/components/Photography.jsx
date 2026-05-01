import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import photo1 from "../assets/birds.jpeg";
import photo2 from "../assets/leaf.jpeg";
import photo3 from "../assets/chruch.jpeg";
import photo4 from "../assets/smarty.jpeg";

const photos = [
  { img: photo1, link: "https://www.instagram.com/p/DTVF0Nkk_Ip/" },
  { img: photo2, link: "https://www.instagram.com/p/CiNgnROtEpL/" },
  { img: photo3, link: "https://www.instagram.com/p/Cb4hUcINcQH/" },
  { img: photo4, link: "https://www.instagram.com/p/CQBYl_XNhBh/" },
];

const Photography = () => {
  return (
    <section id="photography" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <FiCamera className="text-accent-secondary" />
          <h2 className="text-3xl font-bold font-mono tracking-tighter uppercase text-white">Visual Telemetry</h2>
        </div>
        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Beyond Code // Through the Lens.</p>
        <div className="h-0.5 w-full bg-zinc-800 mt-6 relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-accent-secondary"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <motion.a
            key={index}
            href={photo.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1e]"
          >
            <div className="aspect-[3/4]">
              <img
                src={photo.img}
                alt="Photography"
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-accent-secondary/0 group-hover:bg-accent-secondary/10 transition-all duration-400 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                <div className="p-3 bg-black/80 rounded-full text-accent-secondary border border-accent-secondary/50">
                  <FaInstagram className="text-xl" />
                </div>
                <span className="text-accent-secondary text-[10px] font-mono uppercase tracking-[0.2em] font-bold">RAW_IMG</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://www.instagram.com/pixel_studio___"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] uppercase text-gray-500 border border-white/10 px-8 py-4 rounded-xl hover:border-accent-secondary/50 hover:text-accent-secondary transition-all duration-300 group"
        >
          <FaInstagram className="group-hover:rotate-12 transition-transform" /> View Full Gallery
        </a>
      </div>
    </section>
  );
};

export default Photography;