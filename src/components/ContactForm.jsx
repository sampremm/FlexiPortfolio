import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaMapMarkerAlt, FaTwitter, FaInstagram,
} from "react-icons/fa";

const links = [
  { icon: <FaEnvelope />, label: "Email", value: "samprem888111@gmail.com", href: "mailto:samprem888111@gmail.com", color: "text-amber-400" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/samprem1", href: "https://www.linkedin.com/in/samprem1/", color: "text-blue-400" },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/sampremm", href: "https://github.com/sampremm", color: "text-white" },
  { icon: <FaTwitter />, label: "Twitter / X", value: "x.com/sampremm", href: "https://x.com/sampremm", color: "text-sky-400" },
  { icon: <FaInstagram />, label: "Instagram", value: "@samprem__", href: "https://www.instagram.com/samprem__/", color: "text-pink-400" },
  { icon: <FaMapMarkerAlt />, label: "Status", value: "India · Open to Work", href: null, color: "text-amber-400" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-5 h-px bg-amber-500" />
          <span className="text-xs font-mono tracking-widest uppercase text-amber-500">Contact</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Let's <span className="text-amber-400">Connect.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-amber-400 border border-amber-900 bg-amber-950/40 px-3 py-1.5 rounded-full">
              Open to Backend Engineer opportunities · Immediate Joiner
            </span>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16"
        >
          {links.map((link, index) => {
            const Wrapper = link.href ? motion.a : motion.div;
            const props = link.href
              ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={index}
                variants={item}
                whileHover={link.href ? { y: -4 } : {}}
                {...props}
                className="flex items-center gap-4 p-5 bg-zinc-950 border border-zinc-800 hover:border-amber-900/60 rounded-xl transition-colors duration-200 group"
              >
                <div className={`text-xl ${link.color} p-3 rounded-lg bg-zinc-900 group-hover:scale-110 transition-transform duration-200`}>
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-mono tracking-wider uppercase text-zinc-600 mb-1">{link.label}</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{link.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* GitHub heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <FaGithub className="text-zinc-500" />
            <h3 className="text-sm font-semibold text-white">GitHub Activity</h3>
          </div>
          <img
            src="https://ghchart.rshah.org/f59e0b/sampremm"
            alt="GitHub contribution graph"
            className="w-full rounded-lg"
          />
          <div className="flex items-center justify-end gap-2 mt-3">
            <span className="text-xs font-mono text-zinc-700">Less</span>
            {["#1c1917", "#78350f", "#b45309", "#f59e0b", "#fcd34d"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
            ))}
            <span className="text-xs font-mono text-zinc-700">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;