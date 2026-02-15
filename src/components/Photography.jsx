import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

import photo1 from "../assets/birds.jpeg";
import photo2 from "../assets/leaf.jpeg";
import photo3 from "../assets/chruch.jpeg";
import photo4 from "../assets/smarty.jpeg";

const photos = [
  {
    img: photo1,
    link: "https://www.instagram.com/p/DTVF0Nkk_Ip/",
  },
  {
    img: photo2,
    link: "https://www.instagram.com/p/CiNgnROtEpL/",
  },
  {
    img: photo3,
    link: "https://www.instagram.com/p/Cb4hUcINcQH/",
  },
  {
    img: photo4,
    link: "https://www.instagram.com/p/CQBYl_XNhBh/",
  },
];

const Photography = () => {
  return (
    <section id="photography" className="py-24 px-6 text-white text-center">
      {/* Title */}
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Beyond Code
      </motion.h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        Photography is my creative space where I explore storytelling, composition, and visual aesthetics.
      </p>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {photos.map((photo, index) => (
          <motion.a
            key={index}
            href={photo.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-xl border border-zinc-800"
          >
            {/* Image */}
            <div className="aspect-[4/5]">
              <img
                src={photo.img}
                alt="Photography work"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay (premium effect) */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
              <FaInstagram className="text-white opacity-0 group-hover:opacity-100 text-xl transition" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Instagram Profile Button */}
      <motion.a
        href="https://www.instagram.com/pixel_studio___"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-2 mt-12 bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full hover:bg-zinc-800 transition"
      >
        <FaInstagram />
        View Instagram
      </motion.a>
    </section>
  );
};

export default Photography;
