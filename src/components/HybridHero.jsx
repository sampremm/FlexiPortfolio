import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalAnimation = () => {
  const [lines, setLines] = useState([]);
  
  const allLines = useMemo(() => [
    { text: "fetching package metadata...", type: "info" },
    { text: "resolved dependency: distributed-systems@latest", type: "success" },
    { text: "resolved dependency: high-performance-infra@1.2.0", type: "success" },
    { text: "installing binary: thalla-engine-v2.bin", type: "info" },
    { text: "[████████████████████] 100%", type: "progress" },
    { text: "linking artifacts...", type: "info" },
    { text: "optimizing AWS ECS orchestration nodes...", type: "success" },
    { text: "synchronizing Redis idempotency layers...", type: "success" },
    { text: "fetching research assets (ISSN: 2236-6124)...", type: "info" },
    { text: "Ready. System initialized.", type: "system" },
  ], []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < allLines.length) {
        const nextLine = allLines[i];
        setLines(prev => [...prev, nextLine]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [allLines]);

  return (
    <div className="code-card w-full lg:max-w-xl shadow-[0_0_50px_rgba(245,158,11,0.05)] border-white/5">
      <div className="code-header">
        <div className="dot dr"></div>
        <div className="dot dy"></div>
        <div className="dot dg"></div>
        <span className="ml-2 text-[9px] text-muted uppercase tracking-widest font-mono">installer.sh</span>
      </div>
      <div className="p-5 md:p-8 font-mono text-[11px] md:text-[12px] min-h-[300px] md:min-h-[380px]">
        <div className="flex items-center gap-2 mb-6 text-amber">
          <span className="opacity-50">❯</span>
          <span className="animate-pulse font-bold tracking-tight text-[10px] md:text-sm">npm install thalla.dev --force</span>
        </div>
        <div className="space-y-2 md:space-y-3">
          {lines.map((line, idx) => {
            if (!line) return null;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className={`
                  ${line.type === 'success' ? 'text-green' : ''}
                  ${line.type === 'progress' ? 'text-amber font-bold' : ''}
                  ${line.type === 'system' ? 'text-white border-t border-white/10 pt-4 mt-6' : 'text-muted2'}
                `}
              >
                {line.type === 'success' ? '✓ ' : ''}{line.text}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HybridHero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-4 relative z-10">
        
        {/* Profile Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="hero-status inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-green rounded-full animate-blink"></span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Infrastructure & Systems Specialist</span>
          </div>
          
          <h1 className="text-[12vw] lg:text-[7rem] leading-[0.85] font-black tracking-tighter mb-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >Backend</motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-amber block"
            >Engineer.</motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-transparent block" 
              style={{ WebkitTextStroke: '1px rgba(241,245,249,0.15)' }}
            >Builder.</motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-xs md:text-base text-muted2 leading-relaxed max-w-md mb-12"
          >
            Building the <span className="text-amber">"Plumbing"</span> of the Cloud. 
            Specializing in distributed systems, idempotency, and high-performance infrastructure.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#projects" className="btn-amber">View Projects</a>
            <div className="flex gap-3">
              <a href="https://github.com/sampremm" target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
              <a href="https://linkedin.com/in/samprem1" target="_blank" rel="noreferrer" className="btn-outline px-4 sm:px-8">LinkedIn ↗</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-2"
          >
            {[ "Node.js", "Java", "Docker","Redis","AWS", ].map(tech => (
              <span key={tech} className="px-3 py-1 border border-border rounded-[2px] text-[8px] md:text-[9px] font-mono text-muted uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center lg:justify-end relative"
        >
          <TerminalAnimation />
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-amber/5 blur-[80px] rounded-full -z-10 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-amber/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[30%] h-[30%] bg-green/5 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
};

export default HybridHero;
