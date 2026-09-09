import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { FiArrowDown, FiFileText, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import avatarImg from '../../assets/image-sam.jpeg';

const EditorialHero = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -30]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 1.04]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.55],
    [1, 0]
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/sampremm',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/samprem1/',
      icon: FaLinkedin,
    },
    {
      label: 'X / Twitter',
      href: 'https://twitter.com/samprem1',
      icon: FaXTwitter,
    },
    {
      label: 'Email',
      href: 'mailto:samprem888111@gmail.com',
      icon: FiMail,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-black"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full"
      >
        <motion.img
          src={avatarImg}
          alt="Thalla Sam Prem Kumar - Software Engineer"
          initial={{
            scale: prefersReducedMotion ? 1 : 1.06,
            opacity: prefersReducedMotion ? 1 : 0.9,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            h-full
            w-full
            object-cover
            object-[18%_center]
            sm:object-[12%_center]
            lg:object-left
          "
        />

        {/* Main readability gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/85
            via-black/20
            to-black/10
            md:bg-none
          "
        />

        {/* Subtle top gradient for navigation */}
        <div
          className="
            absolute inset-x-0 top-0 h-32
            bg-gradient-to-b
            from-black/40
            to-transparent
          "
        />
      </motion.div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="
          relative z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1600px]
          items-center
          px-6
          pb-20
          pt-28
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            ml-auto
            flex
            w-full
            max-w-[760px]
            flex-col
            items-start
            text-left
            lg:w-[43vw]
            xl:w-[50vw]
          "
        >
          {/* ====================================================
              NAME
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: 'easeOut',
            }}
            className="
              mb-5
              font-mono
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white/80
              md:text-[#111111]/80
              sm:text-xs
            "
          >
            SAM PREM KUMAR
          </motion.div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}
          <div className="mb-7 max-w-full overflow-visible">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.58,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-full
                break-words
                font-display
                text-[3.6rem]
                font-bold
                uppercase
                leading-[0.82]
                tracking-[-0.065em]
                text-white
                md:text-[#111111]
                sm:text-[4.8rem]
                md:text-[5.8rem]
                lg:text-[7rem]
                xl:text-[8rem]
                2xl:text-[8.5rem]
              "
            >
              SOFTWARE
              <br />
              ENGINEER.
            </motion.h1>
          </div>

          {/* =====================================================
              THESIS
          ===================================================== */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.82,
              ease: 'easeOut',
            }}
            className="
              mb-7
              max-w-[580px]
              font-body
              text-base
              leading-relaxed
              text-white/85
              md:text-[#111111]/85
              sm:text-lg
              md:text-xl
            "
          >
            I build backend systems, distributed infrastructure
            and AI-powered products.
          </motion.p>

          {/* =====================================================
              META
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.96,
              ease: 'easeOut',
            }}
            className="
              mb-8
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.12em]
              text-white/65
              md:text-[#111111]/70
              sm:text-[11px]
            "
          >
            <span>HYDERABAD, INDIA</span>

            <span className="text-white/30 md:text-[#111111]/30">·</span>

            <span>BACKEND / CLOUD / AI</span>

            <span className="text-white/30 md:text-[#111111]/30">·</span>

            <span className="flex items-center gap-2 text-white/85 md:text-[#111111]/85">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              OPEN TO WORK
            </span>
          </motion.div>

          {/* =====================================================
              ACTIONS
              VIEW WORK + RESUME + SOCIAL ICONS
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* VIEW WORK */}
            <button
              type="button"
              onClick={() => scrollTo('work')}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-white
                bg-white
                px-5
                py-3
                font-mono
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-black
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-white
                md:border-[#111111]
                md:bg-[#111111]
                md:text-white
                md:hover:bg-transparent
                md:hover:text-[#111111]
                sm:px-6
              "
            >
              VIEW WORK
              <FiArrowDown className="text-sm" />
            </button>

            {/* RESUME */}
            <a
              href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-white/35
                bg-white/5
                px-5
                py-3
                font-mono
                text-[11px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white
                hover:bg-white/10
                md:border-[#111111]/35
                md:bg-[#111111]/5
                md:text-[#111111]
                md:hover:border-[#111111]
                md:hover:bg-[#111111]/10
                sm:px-6
              "
            >
              <FiFileText />
              RESUME
            </a>

            {/* =================================================
                SOCIAL ICONS — BESIDE RESUME
            ================================================= */}
            <div className="ml-1 flex items-center gap-1.5">
              {socialLinks.map(
                ({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith('mailto:')
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noreferrer'
                    }
                    aria-label={label}
                    title={label}
                    className="
                      group
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-white/20
                      bg-black/10
                      text-white/65
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-white/55
                      hover:bg-white/10
                      hover:text-white
                      md:border-[#111111]/20
                      md:bg-transparent
                      md:text-[#111111]/65
                      md:hover:border-[#111111]/55
                      md:hover:bg-[#111111]/5
                      md:hover:text-[#111111]
                    "
                  >
                    <Icon
                      className="
                        text-[17px]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.45,
        }}
        style={{ opacity: textOpacity }}
        className="
          absolute
          bottom-7
          left-1/2
          z-10
          -translate-x-1/2
          text-white/45
        "
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
            "
          >
            SCROLL
          </span>

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : { y: [0, 4, 0] }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FiArrowDown className="text-sm" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EditorialHero;