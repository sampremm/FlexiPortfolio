import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 text-white text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let’s Connect
      </motion.h2>

      <p className="text-gray-400 mb-12">
        Open to Backend Engineer opportunities • Immediate Joiner
      </p>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-16">

        {/* Email */}
        <motion.a
          whileHover={{ y: -6, scale: 1.03 }}
          href="mailto:samprem888111@gmail.com"
          className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-xl w-72 hover:bg-zinc-800 transition"
        >
          <FaEnvelope className="mb-2 text-yellow-400 text-xl" />
          <p className="text-sm text-gray-400">Email</p>
          <p className="text-sm">samprem888111@gmail.com</p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          whileHover={{ y: -6, scale: 1.03 }}
          href="https://www.linkedin.com/in/samprem1/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-xl w-72 hover:bg-zinc-800"
        >
          <FaLinkedin className="mb-2 text-blue-400 text-xl" />
          <p className="text-sm text-gray-400">LinkedIn</p>
          <p className="text-sm">linkedin.com/in/samprem1</p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{ y: -6, scale: 1.03 }}
          href="https://github.com/sampremm"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-xl w-72 hover:bg-zinc-800"
        >
          <FaGithub className="mb-2 text-white text-xl" />
          <p className="text-sm text-gray-400">GitHub</p>
          <p className="text-sm">github.com/sampremm</p>
        </motion.a>

        {/* Twitter / X */}
        <motion.a
          whileHover={{ y: -6, scale: 1.03 }}
          href="https://x.com/sampremm"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-xl w-72 hover:bg-zinc-800"
        >
          <FaTwitter className="mb-2 text-sky-400 text-xl" />
          <p className="text-sm text-gray-400">Twitter / X</p>
          <p className="text-sm">x.com/sampremm</p>
        </motion.a>

        {/* Instagram */}
        <motion.a
          whileHover={{ y: -6, scale: 1.03 }}
          href="https://www.instagram.com/samprem__/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-xl w-72 hover:bg-zinc-800"
        >
          <FaInstagram className="mb-2 text-pink-400 text-xl" />
          <p className="text-sm text-gray-400">Instagram</p>
          <p className="text-sm">@samprem__</p>
        </motion.a>

        {/* Status */}
        <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-xl w-72">
          <FaMapMarkerAlt className="mb-2 text-green-400 text-xl" />
          <p className="text-sm text-gray-400">Status</p>
          <p className="text-sm">India • Open to Work</p>
        </div>
      </div>

      {/* GitHub Contribution Graph */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-6">GitHub Activity</h3>
        <img
          src="https://ghchart.rshah.org/22c55e/sampremm"
          alt="GitHub contribution graph"
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-4"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
