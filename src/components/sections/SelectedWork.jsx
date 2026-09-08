import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiLayers } from 'react-icons/fi';
import ProjectDetailModal from './ProjectDetailModal';

// Images from assets
import vercelImg from '../../assets/Logo_Vercel-1.jpg';
import playtoImg from '../../assets/todo-image.jpg';
import notifyImg from '../../assets/notificy.jpg';
import snaplinkImg from '../../assets/url.jpg';

const EDITORIAL_PROJECTS = [
  {
    id: "01",
    num: "PROJECT 01",
    title: "VERCEL — CLOUD PAAS",
    subtitle: "Containerized Cloud Build & Deployment Platform",
    description: "Event-driven deployment platform using AWS ECS Fargate, Redis Pub/Sub, PostgreSQL, Docker, and private S3 buckets. Handles automated git cloning, multi-framework build detection, and live build streaming.",
    facts: [
      "4 microservices",
      "AWS ECS/Fargate task runs",
      "Realtime Redis log stream",
      "Docker isolated containers",
      "PostgreSQL deployment state",
    ],
    flow: [
      "Git Push",
      "API Server",
      "Queue",
      "ECS Build Container",
      "Logs",
      "Redis Pub/Sub",
      "WebSocket",
      "S3 Reverse Proxy"
    ],
    implementation: [
      { label: "Execution Engine", detail: "AWS ECS RunTask with dynamic env overrides for ephemeral container builds." },
      { label: "Build Isolation", detail: "Single ephemeral container per commit — strictly zero shared state between builds." },
      { label: "Real-time Telemetry", detail: "Sub-millisecond Redis Pub/Sub channels streaming stdout/stderr to WebSocket." },
      { label: "Reverse Proxying", detail: "Private S3 Reverse Proxy serving dynamic subdomain routing at edge." },
    ],
    reliability: "Complete worker isolation eliminates cross-tenant pollution. Failures in build tasks are quarantined and reported in real-time without impacting API clusters.",
    tags: ["Node.js", "Redis", "Docker", "AWS ECS", "S3", "NGINX", "PostgreSQL"],
    source: "https://github.com/sampremm/vercel-backend",
    image: vercelImg,
  },
  {
    id: "02",
    num: "PROJECT 02",
    title: "PLAYTO — PAYOUT ENGINE",
    subtitle: "High-Concurrency Fintech Payout Platform",
    description: "Financial payout platform built with Django/Python, featuring a two-tier idempotency layer (Redis fast-path + PostgreSQL SELECT FOR UPDATE) and an immutable append-only ledger to prevent double-spending.",
    facts: [
      "Python & Django Core",
      "Two-tier idempotency barrier",
      "PostgreSQL row-level locks",
      "Celery async task queue",
      "Immutable financial ledger",
    ],
    flow: [
      "Request",
      "Idempotency Guard",
      "Redis TTL Lock",
      "PostgreSQL Row Lock",
      "Transaction",
      "Append-Only Ledger",
      "Webhook Notification"
    ],
    implementation: [
      { label: "Idempotency Layer", detail: "L1 Redis TTL memory cache paired with L2 PostgreSQL SELECT FOR UPDATE row locks." },
      { label: "Auditable Ledger", detail: "Strictly append-only double-entry financial ledger for forensic compliance." },
      { label: "Security & Signing", detail: "HMAC-SHA256 signature verification across all incoming payout webhook events." },
      { label: "Distributed Queue", detail: "Celery worker cluster orchestrating retries with Redis as task broker." },
    ],
    reliability: "100% elimination of double-spend replay attacks during network partition recoveries and high-concurrency bursts.",
    tags: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Docker", "AWS EC2"],
    source: "https://github.com/sampremm/playto-engine",
    demo: "https://playto-engine-vert.vercel.app/",
    image: playtoImg,
  },
  {
    id: "03",
    num: "PROJECT 03",
    title: "AI JOB AGENT",
    subtitle: "Autonomous Candidate Ingestion & Classification Pipeline",
    description: "Event-driven asynchronous job pipeline utilizing autonomous AI agents, Kafka distributed streaming, and idempotent persistence to parse, evaluate, and categorize incoming candidates at scale.",
    facts: [
      "Autonomous AI Agents",
      "Apache Kafka streaming",
      "Event-driven worker pool",
      "Idempotent persistence",
      "PostgreSQL data layer",
    ],
    flow: [
      "Inbound Stream",
      "AI Agent Classifier",
      "Kafka Topic",
      "Idempotent Consumer",
      "Structured Extraction",
      "PostgreSQL"
    ],
    implementation: [
      { label: "Agent Evaluation", detail: "Autonomous LLM agent prompt pipelines extracting structured scoring rubrics." },
      { label: "Message Broker", detail: "Kafka topics partitioned by candidate domain for ordered stream consumption." },
      { label: "Dead-Letter Queuing", detail: "Poison-pill quarantine handling corrupted payloads with automated retry triggers." },
      { label: "Persistence", detail: "Deterministic idempotency keys preventing duplicate candidate records." },
    ],
    reliability: "Worker clusters can scale horizontally while Kafka partition offsets prevent message loss during burst traffic.",
    tags: ["AI Agents", "Kafka", "Node.js", "PostgreSQL", "Docker", "BullMQ"],
    source: "https://github.com/sampremm/algohire-hackthon",
    image: notifyImg,
  },
  {
    id: "04",
    num: "PROJECT 04",
    title: "SNAPLINK — DISTRIBUTED URL SAAS",
    subtitle: "High-Throughput Distributed Redirection Engine",
    description: "High-scale URL shortener featuring a dedicated Key Generation Service (token pool), NGINX reverse proxy load balancing, and Upstash Redis caching for sub-millisecond redirect latency.",
    facts: [
      "NGINX reverse proxy",
      "Upstash Redis global cache",
      "Pre-allocated token pool",
      "Clustered MySQL storage",
      "Sub-millisecond redirects",
    ],
    flow: [
      "Request",
      "NGINX Reverse Proxy",
      "Upstash Redis Cache",
      "Key Generation Service",
      "MySQL Replica",
      "Analytics Counter"
    ],
    implementation: [
      { label: "Token Generation", detail: "Decoupled Key Generation Service allocating discrete numeric token ranges." },
      { label: "Edge Caching", detail: "Upstash Redis cache intercepting 95%+ of read requests for rapid redirects." },
      { label: "Load Balancing", detail: "NGINX round-robin reverse proxy routing traffic across application instances." },
      { label: "Persistence", detail: "Relational persistence with clustered MySQL tables and automated indices." },
    ],
    reliability: "Zero key collision probability via pre-allocated monotonic ranges even under distributed concurrent workloads.",
    tags: ["Node.js", "Redis", "NGINX", "MySQL", "Docker"],
    source: "https://github.com/sampremm/url-shortener",
    demo: "https://url-shortener-six-sandy.vercel.app/",
    image: snaplinkImg,
  },
];

const SelectedWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-28 sm:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/[0.12] dark:border-white/[0.12]">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24"
      >
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#10B981] mb-2 font-semibold">
            01 // PRIMARY SECTION
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#111111] dark:text-[#EDEDED]">
            SELECTED WORK.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#6F6F6F] dark:text-[#9E9E9E] max-w-md">
          Production systems built for atomic guarantees, containerized isolation, and fault-tolerant asynchronous execution.
        </p>
      </motion.div>

      {/* Editorial Projects List */}
      <div className="space-y-32">
        {EDITORIAL_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-black/[0.12] dark:border-white/[0.12] pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
          >
            {/* Left Col: Project Title & Facts (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs font-semibold text-[#6F6F6F] dark:text-[#9E9E9E] tracking-widest block mb-1">
                  {project.num}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#111111] dark:text-[#EDEDED]">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-[#10B981] mt-1">
                  {project.subtitle}
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                {project.description}
              </p>

              {/* Technical Facts Checklist */}
              <div className="p-4 bg-[#EAEAE6] dark:bg-[#14161B] border border-black/[0.08] dark:border-white/[0.08] space-y-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] dark:text-[#EDEDED] block mb-2">
                  Technical Specifications:
                </span>
                {project.facts.map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-mono text-xs text-[#111111] dark:text-[#EDEDED]">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-2.5 px-5 bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11] border border-[#111111] dark:border-[#EDEDED] hover:bg-transparent hover:text-[#111111] dark:hover:text-[#EDEDED] transition-all duration-200 gap-2"
                >
                  <span>VIEW ARCHITECTURE</span>
                  <FiArrowUpRight className="text-sm" />
                </button>

                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium py-2.5 px-4 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED] transition-all duration-200 gap-2"
                  >
                    <FiGithub />
                    <span>CODE</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium py-2.5 px-4 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED] transition-all duration-200 gap-2"
                  >
                    <FiExternalLink />
                    <span>DEMO</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Col: Architecture Pipeline Diagram & Visual (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Visual Flow Pipeline Box */}
              <div className="p-6 sm:p-8 bg-[#111215] text-[#EDEDED] border border-white/[0.12] rounded-none">
                <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#10B981] font-semibold">
                    VISUAL ARCHITECTURE FLOW
                  </span>
                  <span className="font-mono text-[10px] text-white/40">
                    EVENT SEQUENCE
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs">
                  {project.flow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-white rounded-none whitespace-nowrap">
                        {step}
                      </span>
                      {idx < project.flow.length - 1 && (
                        <span className="text-[#10B981] font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Technical Screenshot / Preview */}
              <div className="relative border border-black/[0.12] dark:border-white/[0.12] overflow-hidden bg-[#111215]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-72 object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                />
                <div className="p-3 bg-[#F4F4F0] dark:bg-[#0D0E11] border-t border-black/[0.12] dark:border-white/[0.12] flex items-center justify-between font-mono text-xs text-[#6F6F6F] dark:text-[#9E9E9E]">
                  <span>REPRESENTATIVE SCHEMATIC</span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="hover:text-[#10B981] transition-colors uppercase tracking-wider font-semibold text-[#111111] dark:text-[#EDEDED]"
                  >
                    EXPAND CASE STUDY [+]
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Large Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
};

export default SelectedWork;
