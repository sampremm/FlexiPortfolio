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

  // ------------------------------------------------------------
  // IMAGE PARALLAX
  // ------------------------------------------------------------

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -20]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 1.03]
  );

  // ------------------------------------------------------------
  // TEXT PARALLAX / FADE
  // ------------------------------------------------------------

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -12]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0]
  );

  // ------------------------------------------------------------
  // SCROLL NAVIGATION
  // ------------------------------------------------------------

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // ------------------------------------------------------------
  // SOCIAL LINKS
  // ------------------------------------------------------------

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
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        items-center
        overflow-hidden
        bg-black
      "
    >
      {/* =========================================================
          BACKGROUND / PORTRAIT
      ========================================================= */}

      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          will-change-transform
        "
      >
        <motion.img
          src={avatarImg}
          alt="Thalla Sam Prem Kumar illustrated portrait"
          initial={{
            scale: prefersReducedMotion ? 1 : 1.05,
            opacity: prefersReducedMotion ? 1 : 0.92,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            h-full
            w-full
            object-cover
            object-top
            md:object-center
          "
        />

        {/* Bottom readability gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-black/10
            to-transparent
          "
        />

        {/* Right-side readability gradient.
            Keeps the face/illustration visible while giving
            the text a darker field on desktop. */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-black/5
            to-black/50
            md:to-black/60
          "
        />

        {/* Mobile readability layer */}
        <div
          className="
            absolute
            inset-0
            md:hidden
            bg-black/10
          "
        />

        {/* Top navigation readability */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-36
            bg-gradient-to-b
            from-black/45
            to-transparent
          "
        />
      </motion.div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
        }}
        className="
          relative
          z-10
          min-h-[100svh]
          w-full
        "
      >
        {/* -------------------------------------------------------
            DESKTOP / TABLET CONTENT
            Explicitly anchored to the RIGHT
        ------------------------------------------------------- */}

        <div
          className="
            absolute
            right-[1.5vw]
            top-1/2
            hidden
            w-[54vw]
            max-w-[900px]
            -translate-y-1/2
            flex-col
            items-start
            text-left
            lg:flex
            xl:right-[1vw]
            xl:w-[45vw]
          "
        >
          {/* =====================================================
              NAME
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className="
              mb-5
              font-mono
              text-[11px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/80
              sm:text-xs
            "
          >
            SAM PREM KUMAR
          </motion.div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}

          <div className="mb-7 w-full overflow-visible">
            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-full
                whitespace-normal
                font-display
                text-[4.6rem]
                font-semibold
                uppercase
                leading-[0.8]
                tracking-[-0.065em]
                text-white
                sm:text-[5.5rem]
                lg:text-[6.8rem]
                xl:text-[7.8rem]
                2xl:text-[8.4rem]
              "
            >
              SOFTWARE
            </motion.h1>

            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.56,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-full
                whitespace-normal
                font-display
                text-[4.6rem]
                font-semibold
                uppercase
                leading-[0.8]
                tracking-[-0.065em]
                text-white
                sm:text-[5.5rem]
                lg:text-[6.8rem]
                xl:text-[7.8rem]
                2xl:text-[8.4rem]
              "
            >
              ENGINEER.
            </motion.h1>
          </div>

          {/* =====================================================
              THESIS
          ===================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.75,
              ease: 'easeOut',
            }}
            className="
              mb-7
              max-w-[590px]
              font-body
              text-base
              leading-relaxed
              text-white/85
              sm:text-lg
              xl:text-xl
            "
          >
            I build backend systems, distributed infrastructure
            and AI-powered products.
          </motion.p>

          {/* =====================================================
              META
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.88,
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
              sm:text-[11px]
            "
          >
            <span>HYDERABAD, INDIA</span>

            <span className="text-white/30">
              ·
            </span>

            <span>
              BACKEND / CLOUD / AI
            </span>

            <span className="text-white/30">
              ·
            </span>

            <span className="flex items-center gap-2 text-white/85">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              OPEN TO WORK
            </span>
          </motion.div>

          {/* =====================================================
              ACTIONS
              VIEW WORK + RESUME + SOCIALS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* VIEW WORK */}

            <button
              type="button"
              onClick={() => scrollTo('work')}
              className="
                group
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
                sm:px-6
              "
            >
              <span>
                VIEW WORK
              </span>

              <FiArrowDown
                className="
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
            </button>

            {/* RESUME */}

            <a
              href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="
                group
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
                sm:px-6
              "
            >
              <FiFileText
                className="
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              <span>
                RESUME
              </span>
            </a>

            {/* =================================================
                SOCIAL ICONS
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

        {/* -------------------------------------------------------
            MOBILE CONTENT
        ------------------------------------------------------- */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            flex
            w-full
            flex-col
            items-start
            px-5
            pb-20
            pt-28
            text-left
            lg:hidden
            sm:px-8
          "
        >
          {/* NAME */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className="
              mb-4
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.23em]
              text-white/80
              sm:text-xs
            "
          >
            SAM PREM KUMAR
          </motion.div>

          {/* MOBILE HEADLINE */}

          <div className="mb-6">
            <motion.h1
              initial={{
                opacity: 0,
                y: 38,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.44,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-display
                text-[3.5rem]
                font-semibold
                uppercase
                leading-[0.82]
                tracking-[-0.06em]
                text-white
                sm:text-[4.8rem]
              "
            >
              SOFTWARE
            </motion.h1>

            <motion.h1
              initial={{
                opacity: 0,
                y: 38,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.54,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-display
                text-[3.5rem]
                font-semibold
                uppercase
                leading-[0.82]
                tracking-[-0.06em]
                text-white
                sm:text-[4.8rem]
              "
            >
              ENGINEER.
            </motion.h1>
          </div>

          {/* MOBILE THESIS */}

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.73,
              ease: 'easeOut',
            }}
            className="
              mb-6
              max-w-[540px]
              font-body
              text-sm
              leading-relaxed
              text-white/85
              sm:text-lg
            "
          >
            I build backend systems, distributed infrastructure
            and AI-powered products.
          </motion.p>

          {/* MOBILE META */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.87,
              ease: 'easeOut',
            }}
            className="
              mb-7
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.11em]
              text-white/65
              sm:text-[10px]
            "
          >
            <span>
              HYDERABAD, INDIA
            </span>

            <span className="text-white/30">
              ·
            </span>

            <span>
              BACKEND / CLOUD / AI
            </span>

            <span className="text-white/30">
              ·
            </span>

            <span className="flex items-center gap-2 text-white/85">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              OPEN TO WORK
            </span>
          </motion.div>

          {/* MOBILE ACTIONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              w-full
              flex-wrap
              items-center
              gap-2.5
            "
          >
            {/* VIEW WORK */}

            <button
              type="button"
              onClick={() => scrollTo('work')}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-white
                bg-white
                px-4
                py-3
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-black
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-white
              "
            >
              VIEW WORK

              <FiArrowDown
                className="
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
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
                px-4
                py-3
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white
                hover:bg-white/10
              "
            >
              <FiFileText />
              RESUME
            </a>

            {/* MOBILE SOCIAL ICONS */}

            <div className="flex items-center gap-1">
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
                    "
                  >
                    <Icon className="text-[16px]" />
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
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.45,
        }}
        style={{
          opacity: textOpacity,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
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
                : {
                    y: [0, 4, 0],
                  }
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