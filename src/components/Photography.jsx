import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
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
    <section id="photography" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-end justify-between mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-5 h-px bg-amber-500" />
              <span className="text-xs font-mono tracking-widest uppercase text-amber-500">
                Beyond Code
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white"
            >
              Through the Lens.
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/pixel_studio___"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="hidden md:flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-zinc-400 border border-zinc-800 px-4 py-2.5 rounded-lg hover:border-amber-800 hover:text-amber-400 transition"
          >
            <FaInstagram size={12} /> View Instagram
          </motion.a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {photos.map((photo, index) => (
            <motion.a
              key={index}
              href={photo.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 hover:border-amber-900 transition-colors"
            >
              <div className="aspect-[3/4]">
                <img
                  src={photo.img}
                  alt="Photography"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-amber-950/40 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-1">
                  <FaInstagram className="text-amber-400 text-xl" />
                  <span className="text-amber-400 text-xs font-mono tracking-wider">View</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="https://www.instagram.com/pixel_studio___"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-zinc-400 border border-zinc-800 px-5 py-2.5 rounded-lg hover:border-amber-800 hover:text-amber-400 transition"
          >
            <FaInstagram size={12} /> View Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Photography;