import React from "react";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const highlights = [
  "Backend-focused Full Stack Developer",
  "Real-time Systems (WebSockets)",
  "Redis Caching & Performance Optimization",
  "Docker & Cloud Deployments",
  "System Design Enthusiast",
];

const About = () => {
  return (
    <section className="py-28 px-6" id="about">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-5 h-px bg-amber-500" />
          <span className="text-xs font-mono tracking-widest uppercase text-amber-500">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.9] tracking-tight">
              Backend<br />
              Engineer<br />
              Focused on<br />
              <span className="text-amber-400">Scalable</span><br />
              Systems.
            </h2>

            <div className="mt-10 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-3 py-1.5 bg-amber-950/40 border border-amber-900/60 text-amber-400 rounded-md tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {ABOUT.text2.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-zinc-400">
                {para}
              </p>
            ))}

            <div className="mt-2 p-5 bg-zinc-950 border-l-2 border-amber-500 border-r border-t border-b border-zinc-800 rounded-r-xl">
              <span className="text-xs font-mono tracking-widest uppercase text-amber-500 block mb-3">
                Research Publication
              </span>
              <p className="text-sm text-white font-medium leading-snug mb-4">
                {ABOUT.publication.title.replace("Research Publication: ", "")}
              </p>
              <a
                href={ABOUT.publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-amber-400 hover:text-amber-300 transition border-b border-amber-800 pb-0.5"
              >
                View Publication →
              </a>
            </div>

            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between gap-4">
              <p className="text-sm text-zinc-400 leading-relaxed">
                Photography is my creative space — storytelling through a lens.
              </p>
              <a
                href="https://www.instagram.com/pixel_studio___/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-wider uppercase text-amber-400 hover:text-amber-300 transition whitespace-nowrap border-b border-amber-800 pb-0.5"
              >
                @pixel_studio___→
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;