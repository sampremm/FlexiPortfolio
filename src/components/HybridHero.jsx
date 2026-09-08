import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PROFILE, SKILLS } from '../constants';
import { FaTerminal, FaServer, FaShieldHalved, FaBolt } from 'react-icons/fa6';

/* ─────────────────── Shared Motion Variants ─────────────────── */

const SPRING = { type: 'spring', stiffness: 280, damping: 24, mass: 0.8 };
const SOFT_SPRING = { type: 'spring', stiffness: 160, damping: 22 };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { ...SPRING } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0, transition: { ...SPRING } },
};

const stagger = (delay = 0.07) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

/* ─────────────────── Terminal Components ─────────────────── */

const TERMINAL_TABS = [
  { id: 'logs',    label: 'system_init.log', icon: <FaTerminal className="text-xs" /> },
  { id: 'arch',    label: 'topology.spec',   icon: <FaServer   className="text-xs" /> },
  { id: 'metrics', label: 'telemetry.json',  icon: <FaBolt     className="text-xs" /> },
];

const TerminalLogs = () => {
  const lines = [
    { text: "INIT: Bootstrapping backend runtime environment...",            type: "system" },
    { text: "CONF: Loading distributed cluster manifest: thalla-core-v2",   type: "info" },
    { text: "NET:  Establishing isolated VPC peering & TLS mesh...",         type: "info" },
    { text: "SYNC: Redis cluster online: 6 nodes (L1 Idempotency Engine)",   type: "success" },
    { text: "DB:   PostgreSQL pool initialized [min: 10, max: 100]",         type: "success" },
    { text: "QUEUE:BullMQ workers bound to Redis streams (20/worker)",       type: "success" },
    { text: "ORCH: AWS ECS Fargate cluster heartbeat verified [us-east-1]",  type: "success" },
    { text: "RESEARCH: Algorithmic convergence model loaded [ISSN: 2236-6124]", type: "accent" },
    { text: "STATUS: Zero state corruption · All 5 services HEALTHY",       type: "system-ready" },
  ];

  return (
    <motion.div
      variants={stagger(0.07)}
      initial="hidden"
      animate="show"
      className="space-y-2 font-mono text-[11px] leading-relaxed"
    >
      {lines.map((line, idx) => (
        <motion.div
          key={idx}
          variants={slideLeft}
          className={`flex items-start gap-2 ${
            line.type === 'success'      ? 'text-emerald-400' :
            line.type === 'accent'       ? 'text-cyan-400' :
            line.type === 'system-ready' ? 'text-amber font-semibold border-t border-white/10 pt-2 mt-3' :
            line.type === 'system'       ? 'text-slate-300' :
            'text-slate-400'
          }`}
        >
          <span className="text-slate-600 select-none">[{String(idx + 1).padStart(2, '0')}]</span>
          <span>{line.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ArchitectureSpec = () => {
  const blocks = [
    {
      color: 'text-amber',
      label: '// TWO-TIER IDEMPOTENCY BARRIER',
      body: 'Request → HMAC Validation → L1 Redis Cache (SETNX with TTL) → L2 PostgreSQL (SELECT FOR UPDATE) → Ledger Append',
    },
    {
      color: 'text-cyan-400',
      label: '// EPHEMERAL CI/CD ORCHESTRATION',
      body: 'API Trigger → AWS ECS RunTask (Fargate) → Container Build Isolation → S3 Atomic Upload → Edge Reverse Proxy',
    },
    {
      color: 'text-emerald-400',
      label: '// HIGH-THROUGHPUT QUEUES',
      body: 'Producer → Redis Queue State Machine → BullMQ Worker Pools → Exponential Jittered Retries → Dead-Letter',
    },
  ];

  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      animate="show"
      className="space-y-3 font-mono text-[11px] text-slate-300"
    >
      {blocks.map((b, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="p-3 bg-black/40 border border-white/5 rounded-md hover:border-white/10 transition-colors"
        >
          <span className={`${b.color} font-bold`}>{b.label}</span>
          <div className="mt-1 text-slate-400">{b.body}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const TelemetryJson = () => (
  <motion.pre
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="font-mono text-[11px] text-slate-300 bg-black/50 p-4 rounded-md border border-white/5 overflow-x-auto"
  >
{`{
  "system": "thalla-backend-cluster",
  "role": "Backend Engineer",
  "availability": "Immediate Joiner",
  "locations": ["Hyderabad", "Bangalore", "Pune"],
  "health": {
    "api_gateway":          "ONLINE (p99 < 18ms)",
    "idempotency_barrier":  "100% RELIABLE",
    "background_workers":   "ACTIVE (0 dropped jobs)",
    "database_cluster":     "CONNECTED (pool: healthy)"
  },
  "metrics": {
    "total_production_systems": 5,
    "uptime_target":            "99.99%",
    "data_integrity":           "100%"
  }
}`}
  </motion.pre>
);

/* ─────────────────── Hero ─────────────────── */

const HybridHero = () => {
  const [activeTab, setActiveTab]   = useState('logs');
  const roles = ['Distributed Systems.', 'Scalable APIs.', 'Event Pipelines.', 'High Concurrency.'];
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typewriter */
  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 38 : 75);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  /* Metric items */
  const metrics = [
    { val: '5+',    label: 'Production Systems', color: 'text-white' },
    { val: '< 15ms', label: 'Fast-Path Latency',  color: 'text-amber' },
    { val: '100%',  label: 'Idempotency Rate',    color: 'text-emerald-400' },
  ];

  return (
    <section className="relative pt-14 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* ── Ambient Orbs ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/10 blur-[170px] rounded-full pointer-events-none -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut', delay: 0.3 }}
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* ── Left: Bio ── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center"
        >
          {/* Status badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={SPRING}
              className="status-pill"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>{PROFILE.status}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={SPRING}
              className="amber-pill"
            >
              <FaShieldHalved className="text-amber text-xs" />
              <span>{PROFILE.role.toUpperCase()}</span>
            </motion.div>
          </motion.div>

          {/* Name tag */}
          <motion.div variants={fadeUp} className="mb-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold flex items-center gap-2">
              <span className="text-amber font-bold">//</span> {PROFILE.name}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            Architecting Resilient <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber via-[#f59e0b] to-[#fbbf24]">
              Backend
            </span>{' '}
            <span className="inline-block min-w-[260px] text-white">
              {displayText}
              <span className="animate-pulse text-amber">|</span>
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mb-8"
          >
            {PROFILE.info}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(245,158,11,0.5)' }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
              className="btn-amber-glow rounded-md"
            >
              Explore Projects ↘
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.04, borderColor: 'rgba(245,158,11,0.6)' }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
              className="btn-ghost-glow rounded-md"
            >
              Tech Stack & Architecture
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 3 }}
              transition={SPRING}
              className="text-xs font-mono text-amber hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1.5 px-2 py-3"
            >
              Curriculum Vitae ↗
            </motion.a>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            variants={stagger(0.12)}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] max-w-xl"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -3, transition: { ...SPRING } }}
              >
                <div className={`text-xl sm:text-2xl font-black font-mono ${m.color}`}>{m.val}</div>
                <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Interactive Terminal ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ ...SOFT_SPRING, delay: 0.25 }}
          className="lg:col-span-6 xl:col-span-5 relative"
        >
          <div className="terminal-window border border-[#2a2a3e]/80 shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
            {/* Terminal chrome */}
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                {['#ef4444','#f59e0b','#10b981'].map((c, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3 }}
                    transition={SPRING}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: c + 'e6' }}
                  />
                ))}
                <span className="ml-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                  session: backend-node-01
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[9px] text-emerald-400 uppercase">Live</span>
              </div>
            </div>

            {/* Tab Bar */}
            <div className="flex border-b border-[#232332] bg-[#0c0c14] overflow-x-auto no-scrollbar">
              {TERMINAL_TABS.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  className={`px-4 py-2.5 font-mono text-[10px] tracking-wider uppercase flex items-center gap-2 border-r border-[#232332] transition-colors relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-amber bg-[#12121e] font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTerminalTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber"
                      transition={SPRING}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-5 bg-[#09090f]/90 min-h-[340px] max-h-[420px] overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                {activeTab === 'logs'    && <motion.div key="logs"    variants={fadeIn} initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.15 } }}><TerminalLogs /></motion.div>}
                {activeTab === 'arch'    && <motion.div key="arch"    variants={fadeIn} initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.15 } }}><ArchitectureSpec /></motion.div>}
                {activeTab === 'metrics' && <motion.div key="metrics" variants={fadeIn} initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.15 } }}><TelemetryJson /></motion.div>}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-[#0d0d16] border-t border-[#232332] flex items-center justify-between font-mono text-[10px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-amber">➜</span>
                <span className="text-slate-400">ready for production deployment</span>
              </div>
              <div>UTF-8</div>
            </div>
          </div>

          {/* Skill tags beneath terminal */}
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.6 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {SKILLS.slice(0, 6).map((skill) => (
              <motion.span
                key={skill.name}
                variants={fadeUp}
                whileHover={{ y: -3, borderColor: 'rgba(245,158,11,0.5)', color: '#f59e0b', transition: SPRING }}
                className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.08] text-slate-400 font-mono text-[10px] rounded flex items-center gap-1.5 cursor-default"
              >
                <span>{skill.icon}</span>
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HybridHero;
