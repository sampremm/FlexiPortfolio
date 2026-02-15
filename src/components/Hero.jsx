import React from "react";
import image from "../assets/naruto-uzumaki.jpg";
import { PROFILE } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/samprem1/", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/sampremm", "_blank");
  };

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt="hero background"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Dark Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
          {PROFILE.name}
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          {PROFILE.info}
        </p>

        {/* Backend Highlights */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "Node.js Backend",
            "Redis Caching",
            "Docker & AWS",
            "Real-time Systems",
            "System Design",
          ].map((item) => (
            <span
              key={item}
              className="text-sm px-4 py-1 bg-gray-900/80 border border-gray-700 rounded-full text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* LinkedIn */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={openLinkedIn}
            className="rounded-full border border-blue-500 px-6 py-2 text-blue-400 hover:bg-blue-500 hover:text-white"
          >
            LinkedIn
          </motion.button>

          {/* GitHub */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={openGithub}
            className="rounded-full border border-gray-600 px-6 py-2 text-white hover:bg-gray-900"
          >
            GitHub
          </motion.button>

          {/* Projects */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={scrollToProjects}
            className="rounded-full border border-gray-600 px-6 py-2 text-white hover:bg-gray-900"
          >
            View Projects
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
