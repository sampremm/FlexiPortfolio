import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiGithub, FiFileText } from 'react-icons/fi';
import avatarImg from '../../assets/avatar.jpg';

const EditorialHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle cinematic scroll-away effect (scale 1.00 -> 0.97, subtle translation)
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.75]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12 md:py-20 px-6 max-w-7xl mx-auto border-b border-black/[0.12] dark:border-white/[0.12]"
    >
      <motion.div style={{ y: heroY }} className="w-full flex flex-col items-center text-center space-y-8 sm:space-y-10">
        
        {/* Large Professional Portrait */}
        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="w-full sm:w-[90%] md:w-[65%] lg:w-[50%] xl:w-[45%] flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, clipPath: 'inset(12% 0 0 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden bg-[#EAEAE6] dark:bg-[#14161B] border border-black/[0.12] dark:border-white/[0.12]"
          >
            <img
              src={avatarImg}
              alt="Thalla Sam Prem Kumar - Backend Engineer"
              className="w-full h-full object-cover object-[50%_25%] filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700 block"
            />
          </motion.div>
        </motion.div>

        {/* Text Container */}
        <div className="flex flex-col items-center space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          
          {/* Top Identity Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#6F6F6F] dark:text-[#9E9E9E] font-medium"
          >
            THALLA SAM PREM KUMAR
          </motion.div>

          {/* Massive Headline with Staggered Entrance */}
          <div className="overflow-hidden space-y-1">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[5.4rem] xl:text-[6.8rem] tracking-tighter leading-[0.88] uppercase text-[#111111] dark:text-[#EDEDED]"
              >
                SOFTWARE
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[5.4rem] xl:text-[6.8rem] tracking-tighter leading-[0.88] uppercase text-[#111111] dark:text-[#EDEDED]"
              >
                ENGINEER.
              </motion.div>
            </div>
          </div>

          {/* Crisp Single-Sentence Thesis */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-base sm:text-lg md:text-xl text-[#111111] dark:text-[#EDEDED] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            I build backend systems, distributed infrastructure and AI-powered products.
          </motion.p>

          {/* Concise Metadata: Location & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 font-mono text-xs uppercase tracking-wider text-[#6F6F6F] dark:text-[#9E9E9E] mt-2"
          >
            <span>HYDERABAD, INDIA</span>
            <span className="hidden sm:inline">·</span>
            <span>BACKEND / CLOUD / AI</span>
            <span className="hidden sm:inline">·</span>
            <div className="flex items-center gap-2 text-[#111111] dark:text-[#EDEDED] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>OPEN TO WORK</span>
            </div>
          </motion.div>

          {/* Action Buttons: VIEW WORK, RESUME, GITHUB */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.60, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <button
              onClick={() => scrollTo('work')}
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-3 px-6 bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11] border border-[#111111] dark:border-[#EDEDED] hover:bg-transparent hover:text-[#111111] dark:hover:text-[#EDEDED] transition-all duration-200 gap-2"
            >
              <span>VIEW WORK</span>
              <FiArrowDown className="text-xs" />
            </button>

            <a
              href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium py-3 px-6 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED] transition-all duration-200 gap-2"
            >
              <FiFileText className="text-xs" />
              <span>RESUME</span>
            </a>

            <a
              href="https://github.com/sampremm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium py-3 px-6 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED] transition-all duration-200 gap-2"
            >
              <FiGithub className="text-xs" />
              <span>GITHUB</span>
            </a>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default EditorialHero;
