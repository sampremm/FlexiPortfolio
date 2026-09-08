import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaDiagramProject,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa6';

/* ─── Shared spring physics ─── */
const SPRING = { type: 'spring', stiffness: 280, damping: 24, mass: 0.8 };
const SOFT   = { type: 'spring', stiffness: 180, damping: 22 };

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: SPRING },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: SOFT },
};

const slideLeft = {
  hidden: { opacity: 0, x: -14 },
  show:   { opacity: 1, x: 0, transition: SPRING },
};

const stagger = (delay = 0.08) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
});

const CATEGORIES = ['All', 'Cloud & Distributed', 'Core Engines', 'Systems'];

/* ─── Project Card ─── */
const ProjectCard = ({ project, index }) => {
  const [showArch, setShowArch] = useState(project.category === 'Featured System');
  const isFeatured = project.category === 'Featured System';

  return (
    <motion.div
      layout
      variants={scaleIn}
      whileHover={{
        y: -8,
        boxShadow: '0 18px 50px rgba(245,158,11,0.08)',
        borderColor: 'rgba(245,158,11,0.45)',
        transition: SPRING,
      }}
      className={`bg-[#0c0c16]/90 border border-white/[0.08] rounded-xl overflow-hidden flex flex-col justify-between relative cursor-default ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Featured top gradient bar */}
      {isFeatured && (
        <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-amber via-yellow-400 to-cyan-400" />
      )}

      {/* Image */}
      {project.image && (
        <div className="relative h-44 sm:h-52 overflow-hidden border-b border-white/[0.08] bg-black/40">
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-65 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c16] via-[#0c0c16]/50 to-transparent" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="font-mono text-[10px] bg-amber/20 border border-amber/40 text-amber px-2.5 py-0.5 rounded uppercase font-bold tracking-wider backdrop-blur-md">
              {project.category}
            </span>
            <span className="font-mono text-[10px] bg-black/60 border border-white/10 text-slate-300 px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-md">
              {project.filterCategory}
            </span>
          </div>
          <div className="absolute top-4 right-4 font-mono text-[10px] text-slate-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
            SYS_{project.id}
          </div>
        </div>
      )}

      {/* Body */}
      <div className="p-6 sm:p-8 flex-1">
        {/* Title */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-black text-white hover:text-amber transition-colors font-mono tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="font-mono text-xs sm:text-[13px] text-slate-300 leading-relaxed">
            <span className="text-cyan-400 font-bold">// </span>
            {project.description}
          </p>
        </div>

        {/* Spec grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          {project.specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING, delay: i * 0.06 }}
              className="bg-black/40 border border-white/[0.06] p-3 rounded-lg font-mono text-[11px] leading-snug"
            >
              <span className="text-amber/80 uppercase font-bold block text-[9px] tracking-wider mb-0.5">
                {spec.label}
              </span>
              <span className="text-slate-200">{spec.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Architecture drawer */}
        {project.architecture && (
          <div className="mb-6">
            <motion.button
              onClick={() => setShowArch(!showArch)}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(245,158,11,0.35)' }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING}
              className="w-full py-2 px-3 bg-white/[0.03] border border-white/[0.08] rounded-lg font-mono text-[11px] text-slate-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <FaDiagramProject className="text-amber text-xs" />
                <span className="font-bold text-white">Execution Pipeline & Architecture Flow</span>
              </span>
              <motion.span
                animate={{ rotate: showArch ? 180 : 0 }}
                transition={SPRING}
                className="text-slate-400 text-xs"
              >
                <FaChevronDown />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {showArch && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{   opacity: 0, height: 0 }}
                  transition={{ ...SOFT, duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 bg-black/60 border border-white/[0.06] p-4 rounded-lg font-mono text-[10px] text-slate-300 space-y-1.5 shadow-inner">
                    <div className="text-amber font-bold uppercase tracking-widest text-[9px] mb-2 pb-1 border-b border-white/5">
                      // EVENT-DRIVEN EXECUTION TOPOLOGY
                    </div>
                    {project.architecture.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...SPRING, delay: idx * 0.04 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-amber/60 shrink-0 select-none">[{idx + 1}]</span>
                        <span className={line.startsWith('↓') ? 'text-cyan-400' : 'text-slate-300'}>
                          {line}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Highlights */}
        {project.highlights && (
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.highlights.map((h, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.06, transition: SPRING }}
                className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded font-mono text-[10px] flex items-center gap-1.5"
              >
                <FaCheck className="text-[9px]" /> {h}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Tag pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ borderColor: 'rgba(245,158,11,0.4)', color: '#f8fafc', transition: SPRING }}
              className="px-2.5 py-0.5 bg-white/[0.03] border border-white/[0.08] text-slate-400 font-mono text-[10px] rounded"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div className="px-6 py-4 sm:px-8 bg-black/40 border-t border-white/[0.06] flex items-center justify-between gap-4">
        <motion.a
          href={project.source}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 3, color: '#f59e0b', transition: SPRING }}
          className="font-mono text-xs text-slate-300 flex items-center gap-2"
        >
          <FaGithub className="text-sm" />
          <span>View Source ↗</span>
        </motion.a>

        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(245,158,11,0.35)', transition: SPRING }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-1.5 bg-amber text-black font-mono text-xs font-bold rounded flex items-center gap-1.5"
          >
            <FaArrowUpRightFromSquare className="text-[10px]" />
            <span>Live System</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

/* ─── Projects Section ─── */
const ProjectSpecs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.filterCategory === activeCategory || p.category.includes(activeCategory));

  return (
    <section className="py-24 border-t border-white/[0.08] relative" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-amber/5 blur-[160px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...SPRING, delay: 0.05 }}
          className="flex items-center gap-2 font-mono text-xs mb-10 text-slate-400"
        >
          <span className="text-amber">user@backend:</span>
          <span className="text-cyan-400">~/projects</span>
          <span className="text-white">$</span>
          <span className="text-white">git log --all --stat -n 5</span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span className="font-mono text-xs text-amber uppercase tracking-[0.25em] font-bold">
                // SYSTEM_PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Selected Backend Systems
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="font-mono text-xs text-slate-400 max-w-md">
            Production architectures focusing on distributed isolation, idempotency barriers, asynchronous queuing, and RFC compliance.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              variants={scaleIn}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05, transition: SPRING }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-amber text-black font-bold shadow-[0_0_18px_rgba(245,158,11,0.35)]'
                  : 'bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:border-amber/40 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Bento grid */}
        <motion.div
          layout
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSpecs;
