import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const THINKING_PRINCIPLES = [
  {
    num: "01",
    title: "Building from Scratch",
    desc: "Starting at the socket and protocol layer to understand how HTTP, TCP, and byte streams behave before trusting higher-level framework abstractions.",
  },
  {
    num: "02",
    title: "Debugging Complex Systems",
    desc: "Tracing distributed state across network boundaries, race conditions, memory leaks, and idempotency failures using deterministic logs and telemetry.",
  },
  {
    num: "03",
    title: "Understanding Failure Modes",
    desc: "Assuming the network will partition, downstream providers will fail, and workers will crash. Designing atomic transactions and append-only ledgers that self-recover.",
  },
  {
    num: "04",
    title: "Learning by Building",
    desc: "Validating architectural concepts through working, containerized prototypes—from custom PaaS engines on AWS ECS to metaheuristic PV simulations.",
  },
];

const EditorialAbout = () => {
  return (
    <section id="about" className="py-28 sm:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/[0.12] dark:border-white/[0.12]">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#10B981] mb-2 font-semibold">
            04 // BACKGROUND &amp; PHILOSOPHY
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#111111] dark:text-[#EDEDED]">
            ABOUT.
          </h2>
        </div>
        <div className="font-mono text-xs text-[#6F6F6F] dark:text-[#9E9E9E] max-w-md">
          ENGINEERING TRAJECTORY
        </div>
      </motion.div>

      {/* Trajectory Flow Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 bg-[#EAEAE6] dark:bg-[#14161B] border border-black/[0.12] dark:border-white/[0.12] mb-16"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] mb-3">
          SYSTEM EVOLUTION
        </div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm font-semibold text-[#111111] dark:text-[#EDEDED]">
          <span>Electrical Engineering Background</span>
          <span className="text-[#10B981]">→</span>
          <span>Software / Backend Engineering</span>
          <span className="text-[#10B981]">→</span>
          <span>Distributed Systems</span>
          <span className="text-[#10B981]">→</span>
          <span className="text-[#10B981] font-bold">AI-Powered Systems</span>
        </div>
      </motion.div>

      {/* Editorial Narrative & How I Think Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        
        {/* Left Col: Narrative (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#111111] dark:text-[#EDEDED]">
            Architecting for Resiliency
          </h3>
          <p className="font-body text-base text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
            My background in electrical systems grounded my thinking in circuit dynamics, transient analysis, and feedback control. Transitioning into backend engineering, I applied that physical intuition to distributed compute clusters, transactional atomicity, and event-driven message queuing.
          </p>
          <p className="font-body text-base text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
            I don't treat backend development as stringing CRUD endpoints together. I focus on what happens when a database lock deadlocks, when network jitter duplicates an HTTP request, or when an ephemeral build container runs out of memory.
          </p>
        </div>

        {/* Right Col: How I Think (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {THINKING_PRINCIPLES.map((p) => (
            <div
              key={p.num}
              className="p-6 border border-black/[0.12] dark:border-white/[0.12] bg-[#EAEAE6] dark:bg-[#14161B] flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-mono text-xs text-[#10B981] font-semibold block mb-2">
                  {p.num} // PRINCIPLE
                </span>
                <h4 className="font-display font-bold text-base uppercase tracking-wider text-[#111111] dark:text-[#EDEDED]">
                  {p.title}
                </h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </motion.div>

    </section>
  );
};

export default EditorialAbout;
