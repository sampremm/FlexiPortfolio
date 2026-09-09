import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

const EditorialAbout = () => {
  // Motion variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="relative bg-[#F4F4F0] dark:bg-[#0D0E11] text-[#111111] dark:text-[#EDEDED] py-24 sm:py-32 px-6 md:px-12 border-b border-black/[0.12] dark:border-white/[0.12]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="max-w-7xl mx-auto"
      >
        
        {/* Top Intro Section */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div variants={itemVariants} className="font-mono text-xs uppercase tracking-widest text-[#10B981] mb-6 font-semibold">
            02 // ABOUT
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.9] mb-12">
            ENGINEER.<br />
            BUILDER.<br />
            SYSTEMS THINKER.
          </motion.h2>

          <motion.div variants={itemVariants} className="font-body text-lg sm:text-xl text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed max-w-2xl space-y-6">
            <p>
              I started in Electrical Engineering and moved into software by building things from scratch.
            </p>
            <p>
              Today I focus on backend engineering, distributed systems, cloud infrastructure and AI-powered software.
              I enjoy understanding how systems behave under load, failure and change.
            </p>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-16 border-t border-black/[0.1] dark:border-white/[0.1] pt-16">
          
          {/* Left Column: Engineering Journey */}
          <motion.div variants={itemVariants} className="relative">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#111111] dark:text-[#EDEDED] font-bold mb-12">
              ENGINEERING JOURNEY
            </div>
            
            <div className="relative pl-6 sm:pl-8 pb-4">
              {/* Animated Timeline Line */}
              <div className="absolute left-[3px] top-2 bottom-0 w-[1px] bg-black/10 dark:bg-white/10">
                <motion.div 
                  variants={lineVariants}
                  className="w-full bg-[#10B981]"
                />
              </div>

              {/* Journey Nodes */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-1.5 h-1.5 bg-[#111111] dark:bg-[#EDEDED] rounded-full" />
                  <div className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-[#EDEDED] mb-2 leading-none">
                    2022
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E]">
                    ELECTRICAL & ELECTRONICS<br />ENGINEERING
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 text-[#10B981] opacity-50">
                    <FiArrowDown />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#111111] dark:text-[#EDEDED] font-semibold">
                    SELF-LEARNED BACKEND<br />DEVELOPMENT
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 text-[#10B981] opacity-50">
                    <FiArrowDown />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#111111] dark:text-[#EDEDED] font-semibold">
                    BACKEND SYSTEMS
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 text-[#10B981] opacity-50">
                    <FiArrowDown />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#111111] dark:text-[#EDEDED] font-semibold">
                    AI SYSTEMS
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: How I Work (Principles) */}
          <motion.div variants={itemVariants} className="md:border-l md:border-black/[0.1] md:dark:border-white/[0.1] md:pl-8 lg:pl-16">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#111111] dark:text-[#EDEDED] font-bold mb-12">
              HOW I WORK
            </div>
            
            <div className="space-y-10">
              {[
                { num: '01', title: 'BUILD FROM SCRATCH' },
                { num: '02', title: 'UNDERSTAND FAILURE' },
                { num: '03', title: 'DEBUG COMPLEX SYSTEMS' },
                { num: '04', title: 'LEARN BY BUILDING' }
              ].map((principle, idx) => (
                <div key={idx} className="group cursor-default flex items-start gap-6">
                  <span className="font-mono text-xs text-[#6F6F6F] dark:text-[#9E9E9E] group-hover:text-[#10B981] transition-colors mt-1">
                    {principle.num}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight uppercase text-[#111111] dark:text-[#EDEDED] group-hover:translate-x-1 transition-transform duration-300">
                    {principle.title}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>

        </div>


      </motion.div>
    </section>
  );
};

export default EditorialAbout;
