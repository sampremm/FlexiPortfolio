import React from 'react';
import { motion } from 'framer-motion';

const STACK_MANIFEST = [
  {
    category: "LANGUAGES",
    num: "01",
    items: "TypeScript / JavaScript / Python / Java",
    details: "Strict types, asynchronous concurrency, functional patterns, object-oriented systems",
  },
  {
    category: "BACKEND",
    num: "02",
    items: "Node.js / Express / Django / REST APIs",
    details: "Decoupled microservice controllers, auth guards, idempotent request filters, RPC",
  },
  {
    category: "DATA",
    num: "03",
    items: "PostgreSQL / Redis / MongoDB / MySQL",
    details: "ACID transactions, row locks (SELECT FOR UPDATE), TTL memory caching, append-only ledgers",
  },
  {
    category: "INFRASTRUCTURE",
    num: "04",
    items: "AWS / Docker / NGINX / ECS",
    details: "ECS Fargate task runs, multi-stage Docker builds, NGINX edge reverse proxies, S3 routing",
  },
  {
    category: "SYSTEMS",
    num: "05",
    items: "Kafka / BullMQ / Celery / WebSockets",
    details: "Partitioned event streams, distributed queues, dead-letter retries, bidirectional telemetry",
  },
  {
    category: "AI",
    num: "06",
    items: "LLMs / AI Agents / RAG / automation",
    details: "Agent evaluation pipelines, structured schema generation, vector ingestion, tool orchestration",
  },
];

const TechnicalManifest = () => {
  return (
    <section id="stack" className="py-28 sm:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/[0.12] dark:border-white/[0.12]">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
      >
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#10B981] mb-2 font-semibold">
            03 // TECHNICAL STACK
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#111111] dark:text-[#EDEDED]">
            ENGINEERING MANIFEST.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#6F6F6F] dark:text-[#9E9E9E] max-w-md">
          Core proficiencies verified across shipped repositories and production architectures. No inflated fluff.
        </p>
      </motion.div>

      {/* Typography-Driven Manifest Table */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-black/[0.12] dark:border-white/[0.12]"
      >
        {STACK_MANIFEST.map((group) => (
          <div
            key={group.category}
            className="py-8 border-b border-black/[0.12] dark:border-white/[0.12] grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors px-2"
          >
            {/* Category Name & Number (4 cols) */}
            <div className="md:col-span-4 flex items-baseline gap-3">
              <span className="font-mono text-xs text-[#10B981] font-semibold">
                {group.num}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wider text-[#111111] dark:text-[#EDEDED]">
                {group.category}
              </h3>
            </div>

            {/* Stack Items (5 cols) */}
            <div className="md:col-span-5 font-display font-semibold text-lg sm:text-xl text-[#111111] dark:text-[#EDEDED] leading-snug">
              {group.items}
            </div>

            {/* Details (3 cols) */}
            <div className="md:col-span-3 font-mono text-xs text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
              {group.details}
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default TechnicalManifest;
