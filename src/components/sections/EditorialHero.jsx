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

  // Subtle cinematic scroll-away effect (scale 1.00 -> 0.96, subtle fade)
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.75]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center py-8 sm:py-12 lg:py-12 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/[0.12] dark:border-white/[0.12]"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-14">
        
        {/* Left Column: Minimal Identity, Massive Headline, One-line Thesis, CTA (55% desktop) */}
        <motion.div
          style={{ y: textY }}
          className="w-full lg:w-[55%] flex flex-col justify-center space-y-5 sm:space-y-6"
        >
          {/* Top Identity Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#6F6F6F] dark:text-[#9E9E9E] font-medium"
          >
            SAM PREM KUMAR
          </motion.div>

          {/* Massive Two-Line Headline with Staggered Entrance */}
          <div className="overflow-hidden space-y-1">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[5.4rem] xl:text-[6.8rem] tracking-tighter leading-[0.88] uppercase text-[#111111] dark:text-[#EDEDED] whitespace-nowrap"
              >
                SOFTWARE
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[5.4rem] xl:text-[6.8rem] tracking-tighter leading-[0.88] uppercase text-[#111111] dark:text-[#EDEDED] whitespace-nowrap"
              >
                ENGINEER.
              </motion.div>
            </div>
          </div>

          {/* Crisp Single-Sentence Thesis */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-base sm:text-lg md:text-xl text-[#111111] dark:text-[#EDEDED] font-normal leading-relaxed max-w-lg"
          >
            I build backend systems, distributed infrastructure and AI-powered products.
          </motion.p>

          {/* Concise Metadata: Location & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#6F6F6F] dark:text-[#9E9E9E]"
          >
            <span>HYDERABAD, INDIA</span>
            <span>·</span>
            <div className="flex items-center gap-2 text-[#111111] dark:text-[#EDEDED] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>OPEN TO WORK</span>
            </div>
          </motion.div>

          {/* Action Buttons: VIEW WORK, RESUME, GITHUB */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
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
        </motion.div>

        {/* Right Column: Much Larger Professional Editorial Photograph (45% desktop, 90% mobile) */}
        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="w-full sm:w-[85%] lg:w-[44%] flex items-center justify-center shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, clipPath: 'inset(12% 0 0 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] xl:h-[540px] overflow-hidden bg-[#EAEAE6] dark:bg-[#14161B] border border-black/[0.12] dark:border-white/[0.12] rounded-[2px]"
          >
            <img
              src={avatarImg}
              alt="Thalla Sam Prem Kumar - Backend Engineer"
              className="w-full h-full object-cover object-[62%_25%] filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700 block"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default EditorialHero;
