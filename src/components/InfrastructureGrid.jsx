import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS, SPECIALIZATIONS } from '../constants';
import { FaLayerGroup, FaServer, FaCheck } from 'react-icons/fa6';

/* ─── Shared spring physics ─── */
const SPRING = { type: 'spring', stiffness: 280, damping: 24, mass: 0.8 };
const SOFT   = { type: 'spring', stiffness: 180, damping: 22 };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: SPRING },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: SOFT },
};

const stagger = (delay = 0.06) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
});

const CATEGORIES = [
  'All',
  'Languages & Runtimes',
  'Databases & Storage',
  'Queues & Distributed',
  'DevOps & Cloud'
];

const InfrastructureGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory || (
        selectedCategory === 'Queues & Distributed' && (s.name === 'BullMQ' || s.name === 'Redis')
      ));

  return (
    <section className="py-24 border-t border-white/[0.08] relative" id="skills">
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber/5 blur-[160px] rounded-full pointer-events-none -z-10"
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
          <span className="text-cyan-400">~/stack</span>
          <span className="text-white">$</span>
          <span className="text-white">sys_diagnostic --inspect-capabilities</span>
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
                // PRODUCTION_TOOLING
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Engineering Stack & Infrastructure
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="font-mono text-xs text-slate-400 max-w-md">
            Production-proven backend runtimes, high-concurrency databases, asynchronous queues, and cloud orchestration tooling.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              variants={scaleIn}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05, transition: SPRING }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 font-mono text-[11px] rounded-md uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber text-black font-bold shadow-[0_0_18px_rgba(245,158,11,0.35)]'
                  : 'bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:border-amber/40 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* 15-Skill Bento Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          <AnimatePresence>
            {filteredSkills.map((skill, i) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                exit={{    opacity: 0, scale: 0.85, y: -8 }}
                transition={{ ...SOFT, delay: i * 0.025 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 12px 35px rgba(245,158,11,0.12)',
                  borderColor: 'rgba(245,158,11,0.55)',
                  transition: SPRING,
                }}
                className="group relative bg-[#0d0d16]/90 border border-white/[0.08] p-5 rounded-lg flex flex-col justify-between transition-colors cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="text-3xl md:text-4xl"
                      whileHover={{ scale: 1.2, rotate: -5, transition: SPRING }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                      {skill.category.split(' ')[0]}
                    </span>
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white group-hover:text-amber transition-colors mb-1">
                    {skill.name}
                  </h3>
                </div>
                <p className="font-mono text-[10px] text-slate-400 leading-snug mt-2 line-clamp-2 group-hover:text-slate-300 transition-colors">
                  {skill.desc}
                </p>
                <div className="w-full h-[1px] bg-white/[0.04] group-hover:bg-amber/50 transition-colors mt-4" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* System Diagnostics & Specializations */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Architecture Spec Card */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-7 bg-[#0b0b12] border border-[#232332] rounded-xl p-6 md:p-8 font-mono shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-widest font-bold">
                <span className="animate-pulse">●</span> sys_runtime_profile.spec
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">ENV: PRODUCTION</span>
            </div>

            <div className="space-y-4 text-xs">
              {[
                { label: 'Primary Specialization',      value: 'High-Concurrency Distributed Systems & APIs' },
                { label: 'Core Engineering Pillars',    value: 'Two-Tier Idempotency, Event-Driven, Append-Only Ledgers' },
                { label: 'Infrastructure Orchestration',value: 'AWS ECS Fargate, Docker, NGINX Reverse Proxy' },
                { label: 'Asynchronous Processing',     value: 'BullMQ Queues, Redis Pub/Sub, Worker Pools' },
                { label: 'Data Layer & Consistency',    value: 'PostgreSQL ACID Row Locks, Redis Caching, Prisma ORM' },
              ].map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...SPRING, delay: i * 0.08 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/[0.04] pb-3"
                >
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider">{info.label}:</span>
                  <span className="text-white font-semibold text-right">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Specializations */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 bg-[#0e0e16] border border-[#232332] rounded-xl p-6 md:p-8 font-mono shadow-xl"
          >
            <div className="flex items-center gap-2 text-amber text-xs uppercase tracking-widest mb-6 font-bold pb-4 border-b border-white/[0.08]">
              <span className="animate-pulse">●</span> architectural_focus.list
            </div>
            <div className="space-y-3">
              {SPECIALIZATIONS.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...SPRING, delay: i * 0.1 }}
                  whileHover={{ x: 6, transition: SPRING }}
                  className="flex items-center gap-3.5 bg-[#09090f] p-3.5 rounded-lg border border-white/[0.06] hover:border-amber/40 transition-colors cursor-default"
                >
                  <span className="text-xs text-amber font-bold font-mono">0{i + 1}</span>
                  <span className="text-xs text-slate-200 font-semibold tracking-tight">{spec}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default InfrastructureGrid;
