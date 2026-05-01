import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const InfrastructureGrid = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="skills">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[10px] md:text-[11px] text-amber tracking-[0.3em] mb-4 uppercase flex items-center gap-4">
            <div className="w-8 h-px bg-amber"></div> Tools of the Craft
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Skills that fuel<br/><span className="text-amber">my systems.</span></h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {SKILLS.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -5, borderColor: 'rgba(245,158,11,0.3)' }}
            className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6 group transition-all"
          >
            <div className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
              <div className="text-3xl md:text-5xl">
                {skill.icon}
              </div>
            </div>
            <div className="font-mono text-[9px] md:text-[10px] text-muted tracking-widest uppercase group-hover:text-text transition-colors text-center">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-6 md:p-10 border border-white/5 bg-surface rounded-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-amber"></div>
        <h4 className="font-mono text-[10px] text-amber uppercase tracking-[0.3em] mb-6 font-bold flex items-center gap-3">
          <span className="w-2 h-2 bg-amber rounded-full animate-pulse"></span>
          In-Progress Specialization
        </h4>
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs md:text-sm text-muted2 font-medium">
          <span className="hover:text-amber transition-colors cursor-default">Distributed Systems Design</span>
          <span className="hover:text-amber transition-colors cursor-default">Kubernetes Orchestration</span>
          <span className="hover:text-amber transition-colors cursor-default">FinTech Compliance (PCI DSS)</span>
          <span className="hover:text-amber transition-colors cursor-default">Performance Benchmarking</span>
        </div>
      </motion.div>
    </section>
  );
};

export default InfrastructureGrid;
