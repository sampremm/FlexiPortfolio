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
    <section className="py-16 border-t border-[#252525]" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center gap-2 font-mono text-sm mb-12">
          <span className="text-amber">user@linux:</span>
          <span className="text-cyan">~/portfolio/gallery</span>
          <span className="text-white">$</span>
          <span className="text-white">./visual_telemetry.sh</span>
        </div>

      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Visual Telemetry
        </h2>
        <p className="font-mono text-xs md:text-sm text-muted uppercase tracking-[0.3em]">
          Beyond Code // Through the Lens.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((photo, i) => (
          <motion.a
            key={i}
            href={photo.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative block aspect-[3/4] overflow-hidden bg-[#121212] border border-[#252525] rounded-sm"
          >
            <img
              src={photo.img}
              alt="Photography"
              className="h-full w-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
            />
            
            {/* Terminal Overlay on Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
              <div className="bg-[#1a1a1a] border border-amber/30 p-3 rounded-full text-amber shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <FaInstagram className="text-xl" />
              </div>
              <span className="font-mono text-[9px] text-amber uppercase tracking-widest font-bold">view_full_res.sh</span>
            </div>

            {/* Labels from Prompt */}
            <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-start">
              <div className="bg-black/80 px-2 py-0.5 border border-white/10 rounded-none font-mono text-[8px] text-white tracking-widest uppercase">
                Photography
              </div>
              <div className="bg-amber/10 px-2 py-0.5 border border-amber/20 rounded-none font-mono text-[8px] text-amber tracking-widest uppercase">
                RAW_IMG
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 flex justify-between items-center gap-4 text-muted font-mono text-[10px] uppercase tracking-widest bg-[#121212] p-6 border border-[#252525] rounded-sm">
        <div className="flex items-center gap-4">
          <FiCamera className="text-amber" />
          <span>Photography is my way of capturing the "Static Assets" of reality.</span>
        </div>
        <a href="https://www.instagram.com/sampremm/" target="_blank" rel="noreferrer" className="text-amber hover:underline">
          View Full Gallery ↗
        </a>
      </div>
      </div>
    </section>
  );
};

export default Photography;