import React from "react";
import image from "../assets/naruto-uzumaki.jpg";
import { PROFILE } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const openLinkedIn = () =>
    window.open("https://www.linkedin.com/in/samprem1/", "_blank");
  const openGithub = () =>
    window.open("https://github.com/sampremm", "_blank");
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  const tags = ["Node.js", "Redis", "Docker", "AWS", "TypeScript", "System Design"];

  return (
    <section className="relative flex min-h-screen overflow-hidden" id="hero">

      {/* Background */}
      <motion.img
        src={image}
        alt="hero background"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />

      {/* Overlays — warm tinted to match the Naruto palette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />
      {/* Warm amber tint to tie into the background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-950/20" />

      {/* Subtle warm scanlines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(251,191,36,1) 0px, rgba(251,191,36,1) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Layout */}
      <div className="relative z-10 w-full flex flex-col justify-between px-8 md:px-16 lg:px-24 pt-28 pb-10">

        {/* TOP ROW */}
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-[10px] font-mono tracking-[0.22em] uppercase text-amber-400 border border-amber-900 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Open to Work · Immediate Joiner · India
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex flex-col items-end gap-1 pt-1"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-600">Backend Engineer</span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-700">Portfolio 2026</span>
          </motion.div>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mt-auto mb-10">

          {/* Name block */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-amber-500" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-400">
                Backend-Focused Software Engineer
              </span>
            </motion.div>

            {/* Giant name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="font-black leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(52px, 10vw, 140px)" }}
            >
              <span className="text-white">Sam</span>
              <br />
              <span className="text-white">Prem</span>
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px #f59e0b" }}
              >
                Kumar
              </span>
              <br />
              <span className="text-amber-400">Thalla</span>
            </motion.h1>

            {/* Tag pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-2 max-w-lg"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono tracking-wider px-3 py-1.5 border border-zinc-800 text-zinc-500 rounded-md hover:border-amber-800 hover:text-amber-400 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — desc + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col gap-6 lg:max-w-[280px] shrink-0"
          >
            <p className="text-sm text-zinc-400 leading-relaxed">
              Building <span className="text-white font-medium">scalable backend systems</span> with
              Node.js, Redis, and Docker. Clean architecture. Production-grade reliability.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={openLinkedIn}
                className="group flex items-center justify-between bg-amber-400 text-black px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-amber-300 transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin size={12} /> LinkedIn
                </div>
                <FaArrowRight size={9} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={openGithub}
                className="group flex items-center justify-between border border-zinc-700 text-white px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase hover:border-amber-700 hover:text-amber-400 transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <FaGithub size={12} /> GitHub
                </div>
                <FaArrowRight size={9} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={scrollToProjects}
                className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600 hover:text-amber-400 transition-colors text-left pl-1 pt-1"
              >
                View Projects →
              </button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ROW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-end justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-px h-10 bg-gradient-to-b from-amber-500 to-transparent" />
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-zinc-700">Scroll</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { num: "6", label: "Projects" },
              { num: "3+", label: "Years" },
              { num: "∞", label: "Coffee" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col items-end gap-0.5">
                <span className="text-xl font-black text-white leading-none">{num}</span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-600">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Hero);