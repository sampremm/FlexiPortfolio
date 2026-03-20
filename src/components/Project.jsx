import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-5 h-px bg-amber-500" />
              <span className="text-xs font-mono tracking-widest uppercase text-amber-500">Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Selected <span className="text-amber-400">Projects.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xs md:text-right"
          >
            Production-style systems focused on scalability, performance, and real-world architecture.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="group bg-zinc-950 border border-zinc-800 hover:border-amber-900/60 rounded-xl overflow-hidden flex flex-col transition-colors duration-300"
            >
              <div className="h-44 overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-mono text-amber-800 tracking-widest mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-5 flex-1">
                  {project.subtitle}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-500 hover:text-amber-400 transition"
                  >
                    <FaGithub size={11} /> View Code
                  </a>
                  <span className="text-xs font-mono text-zinc-700 group-hover:text-amber-600 transition">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;