import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import ProjectDetailModal from './ProjectDetailModal';

// Images from assets
import vercelImg from '../../assets/Logo_Vercel-1.jpg';
import playtoImg from '../../assets/todo-image.jpg';
import notifyImg from '../../assets/notificy.jpg';
import snaplinkImg from '../../assets/url.jpg';

const PRIMARY_PROJECTS = [
  {
    id: "01",
    num: "PROJECT 01",
    title: "VERCEL — CLOUD PAAS",
    description: "Event-driven cloud deployment platform using isolated AWS ECS/Fargate build environments, Redis Pub/Sub telemetry, PostgreSQL state, Docker and private S3 artifacts.",
    flow: ["Git Push", "API", "Queue", "ECS Build", "Redis Pub/Sub", "WebSocket", "S3", "Reverse Proxy"],
    stack: ["Node.js", "Redis", "PostgreSQL", "Docker", "AWS", "S3", "NGINX"],
    source: "https://github.com/sampremm/vercel-backend",
    image: vercelImg,
    // Drawer specifics
    context: "Building a PaaS from scratch to understand container orchestration and live log streaming.",
    problem: "Orchestrating isolated, untrusted code execution environments on demand while streaming real-time build logs to thousands of concurrent websocket connections.",
    architecture: "A multi-tier architecture where an API enqueues builds, an ECS cluster spins up ephemeral Docker containers, and a Redis Pub/Sub backplane broadcasts stdout/stderr to stateless WebSocket instances.",
    implementation: [
      { label: "Execution Engine", detail: "AWS ECS RunTask with dynamic env overrides for ephemeral container builds." },
      { label: "Build Isolation", detail: "Single ephemeral container per commit — strictly zero shared state between builds." },
      { label: "Reverse Proxying", detail: "Private S3 Reverse Proxy serving dynamic subdomain routing at edge." }
    ],
    reliability: "Worker isolation ensures zero cross-tenant pollution. Build failures are quarantined and reported in real-time.",
    failure_handling: "Dead-letter queues catch unprocessable git events. Redis connection drops gracefully fallback without tearing down active builds.",
  },
  {
    id: "02",
    num: "PROJECT 02",
    title: "PLAYTO — PAYOUT ENGINE",
    description: "Fintech payout engine designed around two-tier idempotency, PostgreSQL row locking, asynchronous workers and an append-only transaction ledger.",
    flow: ["Request", "Idempotency", "Redis", "PostgreSQL Lock", "Transaction", "Ledger", "Webhook"],
    stack: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Docker", "AWS EC2"],
    source: "https://github.com/sampremm/playto-engine",
    demo: "https://playto-engine-vert.vercel.app/",
    image: playtoImg,
    context: "Financial systems require absolute correctness over absolute speed.",
    problem: "Preventing double-spend replay attacks during network partitions and high-concurrency bursts across distributed worker nodes.",
    architecture: "Requests hit a Redis TTL lock for fast-path rejection, then proceed to a PostgreSQL SELECT FOR UPDATE lock for strict serialized execution. All changes hit an append-only ledger.",
    implementation: [
      { label: "Idempotency Layer", detail: "L1 Redis TTL memory cache paired with L2 PostgreSQL row locks." },
      { label: "Auditable Ledger", detail: "Strictly append-only double-entry financial ledger for forensic compliance." },
      { label: "Security & Signing", detail: "HMAC-SHA256 signature verification across all incoming payout webhook events." }
    ],
    reliability: "100% elimination of double-spend replay attacks during network partition recoveries.",
    failure_handling: "Failed webhooks are pushed to a Celery retry queue with exponential backoff.",
  },
  {
    id: "03",
    num: "PROJECT 03",
    title: "AI JOB AGENT",
    description: "AI-driven job processing pipeline using event-driven workers, Kafka and idempotent persistence.",
    flow: ["Inbound", "AI Processing", "Kafka", "Consumer", "Structured Processing", "PostgreSQL"],
    stack: ["AI Agents", "Kafka", "Node.js", "PostgreSQL", "Docker", "BullMQ"],
    source: "https://github.com/sampremm/algohire-hackthon",
    image: notifyImg,
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
    image: snaplinkImg,
    context: "Building high-throughput, low-latency edge services.",
    problem: "Generating globally unique, short URL tokens at high concurrency without database lock contention.",
    architecture: "A decoupled Key Generation Service allocates token ranges to application nodes. NGINX routes traffic, while Upstash Redis caches read hits.",
    implementation: [
      { label: "Token Generation", detail: "Decoupled Key Generation Service allocating discrete numeric token ranges." },
      { label: "Edge Caching", detail: "Upstash Redis cache intercepting 95%+ of read requests for rapid redirects." }
    ],
    reliability: "Pre-allocated monotonic ranges eliminate key collision probability.",
    failure_handling: "If the KGS fails, nodes can continue generating tokens from their local pre-allocated pool until exhausted.",
  },
];

const SECONDARY_PROJECTS = [
  {
    id: "05",
    num: "PROJECT 05",
    title: "RESILIENT NOTIFICATION ENGINE",
    description: "Reliable notification delivery pipeline with dead-letter queueing and automated retries.",
    stack: ["BullMQ", "Redis", "Worker Pools", "Retries", "DLQ", "Idempotency"],
    source: "https://github.com/sampremm/algohire-hackthon",
    context: "Handling third-party API unreliability.",
    problem: "Ensuring high-priority notifications are delivered despite downstream vendor outages.",
    architecture: "Jobs are pushed to BullMQ. Workers process jobs. Failures are caught and retried with exponential backoff before being sent to a DLQ.",
    implementation: [
      { label: "Job Orchestration", detail: "BullMQ on top of Redis for robust job lifecycle management." },
      { label: "Idempotent Delivery", detail: "Checking delivery states before executing external API calls." }
    ],
    reliability: "Ensures no dropped notifications during brief network blips.",
    failure_handling: "Dead-letter queue captures permanently failed notifications for manual inspection.",
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
    architecture: "A main thread accepts TCP connections and dispatches them to a fixed thread pool. Each thread parses the raw HTTP bytestream and generates compliant responses.",
    implementation: [
      { label: "Socket Handling", detail: "Raw java.net.ServerSocket connection acceptance." },
      { label: "Thread Pool", detail: "ExecutorService managing a fixed pool of worker threads to prevent OOM errors under load." }
    ],
    reliability: "Fixed thread pool provides backpressure, preventing the server from crashing under infinite connection requests.",
    failure_handling: "Malformed HTTP requests are caught during parsing and yield clean 400 Bad Request responses.",
  }
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
            03 // SELECTED WORK
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#111111] dark:text-[#EDEDED]">
            THEN I BUILD.
          </h2>
        </div>
      </motion.div>

      {/* Primary Projects */}
      <div className="space-y-32">
        {PRIMARY_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-black/[0.12] dark:border-white/[0.12] pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start group"
          >
            {/* Left Col: Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                className="transition-transform duration-500 ease-out group-hover:-translate-y-1"
              >
                <span className="font-mono text-[10px] font-semibold text-[#6F6F6F] dark:text-[#9E9E9E] tracking-widest block mb-2">
                  {project.num}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#111111] dark:text-[#EDEDED] leading-none mb-4">
                  {project.title}
                </h3>
              </motion.div>

              <p className="font-body text-sm sm:text-base text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed max-w-sm">
                {project.description}
              </p>

              {/* Stack */}
              <div className="pt-2">
                <span className="font-mono text-[10px] text-[#111111] dark:text-[#EDEDED] uppercase tracking-widest font-bold block mb-3">
                  STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-black/[0.04] dark:bg-white/[0.04] text-[#6F6F6F] dark:text-[#9E9E9E]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-6 flex items-center gap-4">
                <span className="font-mono text-[10px] text-[#111111] dark:text-[#EDEDED] uppercase tracking-widest font-bold hidden sm:block">
                  LINKS
                </span>
                
                {project.source && (
                  <a href={project.source} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#6F6F6F] dark:text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors group/link">
                    <FiGithub />
                    <span>GitHub</span>
                    <FiArrowUpRight className="opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#6F6F6F] dark:text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white transition-colors group/link">
                    <FiExternalLink />
                    <span>Live</span>
                    <FiArrowUpRight className="opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Col: Flow & Image (7 cols) */}
            <div className="lg:col-span-7 space-y-6 cursor-pointer" onClick={() => setSelectedProject(project)}>
              
              {/* Architecture Flow */}
              <div className="bg-[#F4F4F0] dark:bg-[#111215] p-6 border border-black/[0.08] dark:border-white/[0.08]">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-4">
                  ARCHITECTURE
                </div>
                <div className="flex flex-wrap items-center gap-y-3 font-mono text-[11px] text-[#6F6F6F] dark:text-[#9E9E9E]">
                  {project.flow.map((node, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                      className="flex items-center"
                    >
                      <span className="uppercase text-[#111111] dark:text-[#EDEDED]">{node}</span>
                      {idx < project.flow.length - 1 && (
                        <span className="text-[#10B981] mx-2 font-bold opacity-50">→</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden bg-[#111215] border border-black/[0.08] dark:border-white/[0.08]">
                <div className="absolute inset-0 bg-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover filter grayscale contrast-125 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                
                <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary Projects */}
      <div className="mt-32 pt-16 border-t border-black/[0.12] dark:border-white/[0.12]">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] mb-12">
          ADDITIONAL REPOSITORIES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SECONDARY_PROJECTS.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer border border-black/[0.08] dark:border-white/[0.08] bg-[#F4F4F0]/50 dark:bg-[#111215]/50 p-6 sm:p-8 hover:bg-[#F4F4F0] dark:hover:bg-[#111215] transition-colors"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-[10px] font-semibold text-[#10B981] tracking-widest block mb-2">
                    {project.num}
                  </span>
                  <h4 className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#111111] dark:text-[#EDEDED] uppercase">
                    {project.title}
                  </h4>
                </div>
                <FiArrowUpRight className="text-xl text-[#6F6F6F] dark:text-[#9E9E9E] opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
              
              <p className="font-body text-xs sm:text-sm text-[#6F6F6F] dark:text-[#9E9E9E] mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 border border-black/[0.1] dark:border-white/[0.1] text-[#6F6F6F] dark:text-[#9E9E9E]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
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
