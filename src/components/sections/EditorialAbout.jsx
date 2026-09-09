import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const PRINCIPLES = [
  {
    num: "01",
    title: "BUILD FROM SCRATCH"
  },
  {
    num: "02",
    title: "UNDERSTAND FAILURE"
  },
  {
    num: "03",
    title: "DEBUG COMPLEX SYSTEMS"
  },
  {
    num: "04",
    title: "LEARN BY BUILDING"
  }
];

const JOURNEY = [
  { label: "ELECTRICAL ENGINEERING", year: "2022" },
  { label: "SELF-LEARNED BACKEND DEVELOPMENT", year: "" },
  { label: "BACKEND SYSTEMS", year: "" },
  { label: "AI SYSTEMS", year: "" }
];

const EditorialAbout = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col gap-24"
      >
        
        {/* Intro Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Heading */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#6F6F6F] dark:text-[#8E8E93] font-medium mb-8">
              02 // ABOUT
            </div>
            
            <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.85] uppercase text-[#111111] dark:text-[#EDEDED]">
              ENGINEER.<br />
              BUILDER.<br />
              SYSTEMS<br />
              THINKER.
            </h2>
          </motion.div>

          {/* Right: Narrative */}
          <motion.div variants={itemVariants} className="flex flex-col justify-end space-y-6 lg:pb-2">
            <p className="font-body text-base sm:text-lg text-[#111111] dark:text-[#EDEDED] leading-relaxed max-w-lg">
              I started in Electrical Engineering and moved into software by building things from scratch.
            </p>
            <p className="font-body text-base sm:text-lg text-[#111111] dark:text-[#EDEDED] leading-relaxed max-w-lg">
              Today I focus on backend engineering, distributed systems, cloud infrastructure and AI-powered software.
            </p>
            <p className="font-body text-base sm:text-lg text-[#111111] dark:text-[#EDEDED] leading-relaxed max-w-lg">
              I enjoy understanding how systems behave under load, failure and change.
            </p>
          </motion.div>
          
        </div>

        {/* Engineering Journey */}
        <motion.div variants={itemVariants} className="pt-12 border-t border-black/10 dark:border-white/10">
          <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#8E8E93] mb-12">
            ENGINEERING JOURNEY
          </div>
          
          <div className="flex flex-col space-y-4">
            {JOURNEY.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-6">
                  {/* Subtle vertical line connecting stages if not last */}
                  <div className="relative flex flex-col items-center justify-center w-8">
                    {step.year && (
                      <span className="font-display font-bold text-xl text-[#10B981] absolute -left-16">
                        {step.year}
                      </span>
                    )}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#EDEDED]" />
                    {idx !== JOURNEY.length - 1 && (
                      <div className="w-[1px] h-10 bg-black/20 dark:bg-white/20 absolute top-4" />
                    )}
                  </div>
                  <span className="font-mono text-sm sm:text-base uppercase tracking-wider text-[#111111] dark:text-[#EDEDED]">
                    {step.label}
                  </span>
                </div>
                {/* Arrow spacing for visual flow */}
                {idx !== JOURNEY.length - 1 && (
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex flex-col items-center justify-center w-8">
                      <FiArrowDown className="text-black/30 dark:text-white/30 text-xs" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Principles */}
        <motion.div variants={itemVariants} className="pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
            {PRINCIPLES.map((p, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-[#F4F4F0] dark:bg-[#0D0E11] p-8 lg:p-10 flex flex-col items-start justify-between min-h-[200px]"
              >
                <span className="font-display font-bold text-3xl text-[#10B981] mb-8">
                  {p.num}
                </span>
                <h4 className="font-mono text-sm uppercase tracking-widest leading-relaxed text-[#111111] dark:text-[#EDEDED] max-w-[120px]">
                  {p.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition to Work */}
        <motion.div variants={itemVariants} className="pt-32 pb-16 flex flex-col items-center justify-center text-center space-y-12">
          <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-[#111111] dark:text-[#EDEDED]">
            THEN I BUILD.
          </h3>
          
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="text-2xl text-[#6F6F6F] dark:text-[#8E8E93]" />
          </motion.div>
          
          <div className="font-mono text-xs uppercase tracking-widest text-[#10B981] font-semibold">
            03 // SELECTED WORK
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default EditorialAbout;
