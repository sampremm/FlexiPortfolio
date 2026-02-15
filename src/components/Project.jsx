import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 text-white text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        Production-style systems focused on scalability, performance, and real-world architecture.
      </p>

      {/* Project Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4 line-clamp-4">
                {project.subtitle}
              </p>

              {/* GitHub Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 transition"
              >
                <FaGithub />
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
