import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE, SKILLS } from '../constants';

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
  const words = ['Engineer.', 'Architect.', 'Builder.', 'Developer.'];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 pb-10 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-4 relative z-10">

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="hero-status inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-green rounded-full animate-blink"></span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">{PROFILE.role}</span>
          </div>

          <div className="mb-4">
            <span className="font-mono text-amber text-xs md:text-sm font-bold tracking-widest uppercase">{PROFILE.name}</span>
          </div>

          <h1 className="text-[10vw] lg:text-[6.5rem] leading-[0.85] font-black tracking-tighter mb-8">
            <motion.span 
              className="block"
              animate={{ 
                x: [0, -1, 1, 0],
                opacity: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 0.3, 
                repeat: Infinity, 
                repeatDelay: 5 
              }}
            >
              Backend
            </motion.span>
            <span className="text-amber block min-h-[1em]">
              {displayText}
              <span className="animate-pulse">_</span>
            </span>
            <motion.span 
              className="text-transparent block bg-clip-text bg-gradient-to-r from-white/10 via-white/40 to-white/10"
              animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ 
                WebkitTextStroke: '1px rgba(241,245,249,0.15)',
                backgroundSize: '200% auto'
              }}
            >
              Systems.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-xs md:text-base text-muted2 leading-relaxed max-w-md mb-12"
          >
            {PROFILE.info}
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
            {SKILLS.slice(0, 5).map(skill => (
              <span key={skill.name} className="px-3 py-1 border border-border rounded-[2px] text-[8px] md:text-[9px] font-mono text-muted uppercase tracking-widest">
                {skill.name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex justify-center lg:justify-end relative"
        >
          <TerminalAnimation />
          {/* Subtle Yellow Gradient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber/10 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
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
