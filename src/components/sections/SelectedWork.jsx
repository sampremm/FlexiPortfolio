import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import ProjectDetailModal from './ProjectDetailModal';
import ProjectVisual from '../ui/ProjectVisual';


const PRIMARY_PROJECTS = [
  {
    id: "01",
    num: "PROJECT 01",
    title: "VERCEL — CLOUD PAAS",
    description: "Event-driven cloud deployment platform using isolated AWS ECS/Fargate build environments, Redis Pub/Sub telemetry, PostgreSQL state, Docker and private S3 artifacts.",
    flow: ["Git Push", "API", "Queue", "ECS Build", "Redis Pub/Sub", "WebSocket", "S3", "Reverse Proxy"],
    stack: ["Node.js", "Redis", "PostgreSQL", "Prisma", "Docker", "AWS", "S3"],
    source: "https://github.com/sampremm/vercel-backend",
    // Drawer specifics
    context: "Building a PaaS from scratch to understand container orchestration and live log streaming.",
    problem: "Orchestrating isolated, untrusted code execution environments on demand while streaming real-time build logs to the browser.",
    architecture: "A multi-tier architecture where an API enqueues builds, an ECS cluster spins up ephemeral Docker containers, and a Redis Pub/Sub backplane broadcasts stdout/stderr to the dashboard over Socket.IO.",
    implementation: [
      { label: "Execution Engine", detail: "AWS ECS RunTask with dynamic env overrides for ephemeral container builds." },
      { label: "Build Isolation", detail: "Single ephemeral container per commit — strictly zero shared state between builds." },
      { label: "Reverse Proxying", detail: "Private S3 Reverse Proxy serving dynamic subdomain routing." },
      { label: "Live Logs", detail: "Real-time build logs via Redis Pub/Sub + Socket.IO." },
      { label: "Framework Detection", detail: "Vite / CRA / Next.js static export." }
    ],
    reliability: "Worker isolation ensures zero cross-tenant pollution. Build failures are quarantined and reported in real-time.",
    failure_handling: "Each build runs in its own ephemeral container, so a failed build is isolated from other deployments.",
  },
  {
    id: "02",
    num: "PROJECT 02",
    title: "PLAYTO — PAYOUT ENGINE",
    description: "Fintech payout engine designed around two-tier idempotency, PostgreSQL row locking, asynchronous workers and an append-only transaction ledger.",
    flow: ["Request", "Idempotency", "Redis", "PostgreSQL Lock", "Transaction", "Ledger", "Webhook"],
    stack: ["Django", "DRF", "Celery", "PostgreSQL", "Redis", "Docker", "AWS EC2", "GitHub Actions"],
    source: "https://github.com/sampremm/playto-engine",
    demo: "https://playto-engine-vert.vercel.app/",
    context: "Financial systems require absolute correctness over absolute speed.",
    problem: "Preventing double-spend when concurrent payout requests hit the same balance.",
    architecture: "Requests hit a Redis TTL lock for fast-path rejection, then proceed to a PostgreSQL SELECT FOR UPDATE lock for strict serialized execution. All changes hit an append-only ledger.",
    implementation: [
      { label: "Idempotency Layer", detail: "L1 Redis TTL memory cache paired with L2 PostgreSQL row locks." },
      { label: "Auditable Ledger", detail: "Strictly append-only double-entry financial ledger for forensic compliance." },
      { label: "Security & Signing", detail: "HMAC-SHA256 signature verification across all incoming payout webhook events." },
      { label: "Row Locking", detail: "SELECT FOR UPDATE row locks inside atomic transactions." },
      { label: "Sharding", detail: "Custom Django DB router across 2 PostgreSQL shards." },
      { label: "CI/CD", detail: "GitHub Actions CI/CD: tests on real Postgres + Redis → Docker Hub → EC2." }
    ],
    reliability: "Concurrency test: two simultaneous overdraw requests → one 201, one 402.",
    failure_handling: "Celery Beat sweeper recovers stuck payouts (exponential backoff, max 3 retries, then refund).",
  },
  {
    id: "03",
    num: "PROJECT 03",
    title: "AI JOB AGENT",
    description: "AI-driven job processing pipeline using event-driven workers, Kafka and idempotent persistence.",
    flow: ["Inbound", "AI Processing", "Kafka", "Consumer", "Structured Processing", "PostgreSQL"],
    stack: ["AI Agents", "Kafka", "Node.js", "PostgreSQL", "Docker", "BullMQ"],
    source: "https://github.com/sampremm/algohire-hackthon",
    context: "Parsing unstructured inbound data efficiently at scale.",
    problem: "Evaluating and categorizing non-deterministic candidate profiles without dropping data during traffic spikes.",
    architecture: "Autonomous agents parse data, emitting structured schemas to Kafka topics partitioned by domain. Consumers read in order and idempotently persist to PostgreSQL.",
    implementation: [
      { label: "Agent Evaluation", detail: "LLM pipelines extracting structured scoring rubrics from raw text." },
      { label: "Message Broker", detail: "Kafka topics partitioned by candidate domain for ordered stream consumption." }
    ],
    reliability: "Kafka partition offsets prevent message loss during burst traffic or consumer crashes.",
    failure_handling: "Poison-pill quarantine handling corrupted payloads with automated retry triggers.",
  },
  {
    id: "04",
    num: "PROJECT 04",
    title: "SNAPLINK",
    description: "Distributed URL shortener using NGINX load balancing, Redis caching and a dedicated key-generation service.",
    flow: ["Request", "NGINX", "Redis", "Key Generation", "MySQL", "Analytics"],
    stack: ["Node.js", "Redis", "NGINX", "MySQL", "Docker"],
    source: "https://github.com/sampremm/url-shortener",
    demo: "https://url-shortener-six-sandy.vercel.app/",
    context: "Building a horizontally scaled URL shortener.",
    problem: "Generating globally unique, short URL tokens at high concurrency without database lock contention.",
    architecture: "3 stateless Express replicas behind NGINX load balancer. A key-generation service (MySQL) with nanoid fallback issues short codes, and redirects are Redis-cached.",
    implementation: [
      { label: "Load Balancing", detail: "3 stateless Express replicas behind NGINX load balancer." },
      { label: "Key Generation", detail: "Key-generation service (MySQL) with nanoid fallback." },
      { label: "Caching", detail: "Redis-cached redirects." },
      { label: "Auth & Limits", detail: "JWT (HTTP-only cookies), rate limit 100 req/15 min." },
      { label: "Deployment", detail: "Deployed on Railway + Vercel." }
    ],
    reliability: "Stateless replicas let NGINX spread traffic across all 3 instances.",
    failure_handling: "If the key-generation service is unavailable, short codes fall back to nanoid.",
  },
];

const SECONDARY_PROJECTS = [
  {
    id: "05",
    num: "PROJECT 05",
    title: "RESILIENT NOTIFICATION ENGINE",
    description: "Notification delivery pipeline with BullMQ workers, exponential backoff retries and idempotent delivery.",
    stack: ["BullMQ", "Redis", "PostgreSQL", "Prisma", "React", "Docker", "Idempotency"],
    source: "https://github.com/sampremm/algohire-hackthon",
    context: "Handling third-party API unreliability.",
    problem: "Ensuring high-priority notifications are delivered despite downstream vendor outages.",
    architecture: "BullMQ workers with state machine QUEUED → PROCESSING → RETRYING → SENT/FAILED.",
    implementation: [
      { label: "Job Orchestration", detail: "BullMQ workers with state machine QUEUED → PROCESSING → RETRYING → SENT/FAILED." },
      { label: "Retries", detail: "Exponential backoff, max 3 retries." },
      { label: "Idempotent Delivery", detail: "Idempotent worker skips already-sent deliveries." },
      { label: "Testing", detail: "4-container Docker Compose + integration tests." }
    ],
    reliability: "Idempotent worker skips already-sent deliveries.",
    failure_handling: "Exponential backoff, max 3 retries, then the delivery is marked FAILED.",
  },
  {
    id: "06",
    num: "PROJECT 06",
    title: "MULTITHREADED JAVA WEB SERVER",
    description: "Low-level HTTP/1.1 server built entirely from scratch using Java Sockets and Concurrency.",
    stack: ["Java Sockets", "HTTP/1.1", "Thread Pool", "Concurrency", "Request Parsing"],
    source: "https://github.com/sampremm/multithreaded-webserver-java",
    context: "Understanding network primitives.",
    problem: "Serving concurrent HTTP requests without utilizing heavy enterprise web frameworks.",
    architecture: "3 implementations: single-threaded, thread-per-request, fixed thread pool (10 workers). Built on java.net.Socket with connection timeouts.",
    implementation: [
      { label: "Implementations", detail: "3 implementations: single-threaded, thread-per-request, fixed thread pool (10 workers)." },
      { label: "Socket Handling", detail: "Built on java.net.Socket with connection timeouts." },
      { label: "Load Testing", detail: "Load-tested with Apache JMeter at 100–1000 concurrent users." }
    ],
    reliability: "Load-tested with Apache JMeter at 100–1000 concurrent users.",
    failure_handling: "Connection timeouts on java.net.Socket close stalled connections.",
  }
];

const SelectedWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-28 sm:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/[0.12] dark:border-white/[0.12]">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28"
      >
        <div>
          <div className="eyebrow mb-5">
            02 — Selected Work
          </div>
          <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.9] uppercase text-[#111111] dark:text-[#EDEDED]">
            THEN I BUILD.
          </h2>
        </div>
        <p className="font-body text-sm sm:text-base text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed max-w-sm md:text-right">
          Four systems, each built to answer one hard question about correctness, concurrency or scale. Open any panel for the full case study.
        </p>
      </motion.div>

      {/* Primary Projects */}
      <div className="space-y-24 md:space-y-32">
        {PRIMARY_PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
          >
            {/* Details (5 cols) — alternate sides on desktop */}
            <div className={`lg:col-span-5 space-y-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[11px] font-semibold text-[#10B981] tracking-widest">
                    {project.id}
                  </span>
                  <span className="h-px w-10 bg-black/[0.15] dark:bg-white/[0.15]" />
                  <span className="font-mono text-[10px] text-[#6F6F6F] dark:text-[#9E9E9E] tracking-[0.2em] uppercase">
                    {project.stack[0]} · {project.stack[1]}
                  </span>
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] uppercase tracking-tight text-[#111111] dark:text-[#EDEDED] leading-[0.95]">
                  {project.title}
                </h3>
              </div>

              <p className="font-body text-base text-[#555555] dark:text-[#A1A1A1] leading-relaxed max-w-md">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-black/[0.1] dark:border-white/[0.1] text-[#555555] dark:text-[#A1A1A1]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11] hover:bg-[#10B981] dark:hover:bg-[#10B981] hover:text-white dark:hover:text-white transition-colors"
                >
                  Read case study
                  <FiArrowUpRight />
                </button>
                {project.source && (
                  <a href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-full border border-black/[0.12] dark:border-white/[0.12] text-[#555555] dark:text-[#A1A1A1] hover:text-[#111111] dark:hover:text-white hover:border-black/40 dark:hover:border-white/40 transition-colors">
                    <FiGithub />
                    <span>Source</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-full border border-black/[0.12] dark:border-white/[0.12] text-[#555555] dark:text-[#A1A1A1] hover:text-[#111111] dark:hover:text-white hover:border-black/40 dark:hover:border-white/40 transition-colors">
                    <FiExternalLink />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>

            {/* System panel (7 cols) */}
            <div
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} case study`}
              className={`lg:col-span-7 cursor-pointer rounded-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <ProjectVisual project={project} />
            </div>
          </motion.article>
        ))}
      </div>

      {/* Secondary Projects */}
      <div className="mt-28 md:mt-36">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6F6F6F] dark:text-[#9E9E9E]">
            More from the workshop
          </span>
          <span className="flex-1 h-px bg-black/[0.12] dark:bg-white/[0.12]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECONDARY_PROJECTS.map(project => (
            <motion.button
              key={project.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="group relative text-left overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/60 dark:bg-[#111215] p-7 sm:p-8 hover:-translate-y-1 hover:border-black/[0.2] dark:hover:border-white/[0.2] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] transition-all duration-500"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#10B981]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#10B981] tracking-widest block mb-3">
                    {project.id}
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#111111] dark:text-[#EDEDED] uppercase leading-tight">
                    {project.title}
                  </h4>
                </div>
                <span className="shrink-0 w-10 h-10 rounded-full border border-black/[0.12] dark:border-white/[0.12] flex items-center justify-center text-[#6F6F6F] dark:text-[#9E9E9E] group-hover:bg-[#111111] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-transparent transition-colors duration-300">
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>
              
              <p className="relative font-body text-sm text-[#555555] dark:text-[#A1A1A1] leading-relaxed mb-7 max-w-md">
                {project.description}
              </p>

              <div className="relative flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-black/[0.1] dark:border-white/[0.1] text-[#6F6F6F] dark:text-[#9E9E9E]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

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
