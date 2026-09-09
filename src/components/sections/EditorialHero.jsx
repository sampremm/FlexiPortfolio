import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiFileText } from 'react-icons/fi';
import avatarImg from '../../assets/avatar.jpg';

const EditorialHero = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.04]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] overflow-hidden bg-black flex flex-col justify-center"
    >
      {/* Background Image Layer */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.img
          initial={{ scale: prefersReducedMotion ? 1 : 1.06, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src={avatarImg}
          alt="Thalla Sam Prem Kumar - Software Engineer"
          className="w-full h-full object-cover object-[0%_center] lg:object-left"
        />
        {/* Readability Gradient Overlay - Subtle Right-Side Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent" />
      </motion.div>

      {/* Content Container (Right Side Composition) */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-end justify-center h-full pt-20 pb-16"
      >
        <div className="flex flex-col items-start text-left w-full md:w-auto max-w-full md:max-w-[50%] lg:max-w-[45%] xl:max-w-[40%] mt-auto md:mt-0">
          
          {/* Identity Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#E0E0E0] font-medium mb-6 md:mb-8"
          >
            SAM PREM KUMAR
          </motion.div>

          {/* Massive Two-Line Headline */}
          <div className="overflow-hidden space-y-1 mb-6">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[9rem] tracking-tighter leading-[0.85] uppercase text-white"
              >
                SOFTWARE
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[9rem] tracking-tighter leading-[0.85] uppercase text-white"
              >
                ENGINEER.
              </motion.div>
            </div>
          </div>

          {/* Thesis */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
            className="font-body text-base sm:text-lg md:text-xl text-[#E0E0E0] font-normal leading-relaxed max-w-[90%] md:max-w-lg mb-8 text-shadow-sm"
          >
            I build backend systems, distributed infrastructure and AI-powered products.
          </motion.p>

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#D0D0D0] flex flex-wrap items-center gap-2 sm:gap-4 mb-8"
          >
            <span>HYDERABAD, INDIA</span>
            <span className="hidden sm:inline">·</span>
            <span>BACKEND / CLOUD / AI</span>
            <span className="hidden sm:inline">·</span>
            <div className="flex items-center gap-2 text-white font-medium drop-shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>OPEN TO WORK</span>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo('work')}
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-3 px-6 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 gap-2 shadow-sm"
            >
              <span>VIEW WORK</span>
              <FiArrowDown className="text-xs" />
            </button>

            <a
              href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium py-3 px-6 bg-transparent text-white border border-white/30 hover:border-white transition-all duration-300 gap-2 backdrop-blur-sm"
            >
              <FiFileText className="text-xs" />
              <span>RESUME</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 font-mono text-[10px] tracking-widest uppercase"
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default EditorialHero;
