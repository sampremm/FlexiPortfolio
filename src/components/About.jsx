import React from "react";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="about">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-semibold mb-10"
      >
        About Me
      </motion.h2>

      {/* Big Intro Line */}
      <motion.h3
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold text-white leading-tight"
      >
        {ABOUT.text1}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mt-8 text-lg leading-relaxed text-gray-300 max-w-4xl"
      >
        {ABOUT.text2}
      </motion.p>

      {/* Highlights (Recruiter Focus) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap gap-3"
      >
        {[
          "Backend-focused Full Stack Developer",
          "Real-time Systems (WebSockets)",
          "Redis Caching & Performance Optimization",
          "Docker & Cloud Deployments",
          "System Design Enthusiast",
        ].map((item) => (
          <span
            key={item}
            className="text-sm px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-gray-300"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Publication Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-10 p-6 bg-gray-900 border border-gray-800 rounded-xl max-w-4xl"
      >
        <p className="text-white font-medium">
          {ABOUT.publication.title}
        </p>

        <a
          href={ABOUT.publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Publication
        </a>
      </motion.div>
    </section>
  );
};

export default About;
