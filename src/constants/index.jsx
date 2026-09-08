import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaAws,
  FaPython,
} from "react-icons/fa6";

import {
  SiMongodb,
  SiPostman,
  SiRedis,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiNginx,
  SiGithubactions,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiChargingBull } from "react-icons/gi";

import image1 from "../assets/java-logo.png";
import image2 from "../assets/todo-image.jpg";
import image3 from "../assets/url.jpg";
import image4 from "../assets/Logo_Vercel-1.jpg";
import image5 from "../assets/notificy.jpg";

export const PROFILE = {
  name: "THALLA SAM PREM KUMAR",
  role: "Backend Engineer",
  subRole: "Distributed Systems · Cloud Architectures · Performance",
  info: "Engineering high-throughput distributed backends, resilient event-driven pipelines, and atomic transaction systems with zero tolerance for state corruption.",
  status: "OPEN TO BACKEND & DISTRIBUTED SYSTEMS ROLES · IMMEDIATE JOINER",
  location: "Hyderabad · Bangalore · Pune (Open to Remote)",
  uptime: "99.99%",
  commitCount: "850+",
};

/* ================= ABOUT ================= */

export const ABOUT = {
  title: "I architect backend systems that never silently fail.",
  text: "Specializing in distributed systems, asynchronous event pipelines, and high-concurrency data layers. Recently architected a Vercel-like PaaS where an API cluster orchestrates isolated AWS ECS Fargate worker containers that dynamically detect project frameworks, execute containerized builds, stream real-time logs over Redis Pub/Sub, and serve atomic deployments via an S3 reverse proxy.",
  subtext: "Previously engineered a fintech payout reconciliation engine featuring a two-tier idempotency barrier (L1 Redis memory cache + L2 PostgreSQL row locks) with append-only ledger auditability to guarantee exactly-once execution and eliminate race conditions.",
  stats: [
    { label: "Production-Grade Systems Shipped", value: "5+" },
    { label: "AWS Services in Production", value: "4" },
    { label: "Avg Execution Latency Target", value: "<15ms" },
    { label: "Data Integrity & Idempotency", value: "100%" }
  ]
};

/* ================= PROJECTS ================= */

export const PROJECTS = [
  {
    id: "01",
    category: "Featured System",
    filterCategory: "Cloud & Distributed",
    title: "Vercel Clone – Cloud PaaS",
    description: "Architected a 4-service event-driven pipeline (API Server, Build Engine, S3 Reverse Proxy, Dashboard) utilizing AWS ECS Fargate and Redis Pub/Sub for real-time telemetry. The system handles automated git cloning, multi-framework build detection, and secure artifact deployment to private S3 buckets with custom reverse proxy routing for live site serving.",
    specs: [
      { label: "Execution", value: "AWS ECS RunTask with dynamic env overrides" },
      { label: "Isolation", value: "Ephemeral container per commit (Zero shared state)" },
      { label: "Telemetry", value: "Sub-millisecond Redis Pub/Sub live log stream" },
      { label: "Proxying", value: "Private S3 Reverse Proxy with custom subdomain routing" }
    ],
    architecture: [
      "POST /deploy { repoUrl, commitSha }",
      "↓ Dispatches AWS ECS Task (Fargate instance)",
      "↓ Shallow git clone & inspect workspace config",
      "↓ Containerized framework build (Vite / Next.js)",
      "↓ Redis Pub/Sub streams build stdout/stderr",
      "↓ Upload artifact directory to S3 bucket",
      "↓ Auto-teardown container & update routing table",
      "↓ Reverse proxy serves dynamic slug at edge"
    ],
    highlights: ["Complete build isolation", "Dynamic framework detection", "Zero shared state", "Private bucket proxying"],
    tags: ["Node.js", "Redis", "Docker", "AWS ECS", "S3", "NGINX"],
    source: "https://github.com/sampremm/vercel-backend",
    image: image4
  },
  {
    id: "02",
    category: "Fintech & Core Engine",
    filterCategory: "Core Engines",
    title: "Playto Payout Engine",
    description: "High-concurrency fintech payout platform built with Django/Python, featuring a two-tier idempotency layer (Redis fast-path + PostgreSQL SELECT FOR UPDATE) and an immutable append-only ledger. Designed to withstand network partitions, double-spend replay attacks, and burst transactions while maintaining strict financial integrity.",
    specs: [
      { label: "Idempotency", value: "L1 Redis TTL lock + L2 PostgreSQL row locks" },
      { label: "Ledger", value: "Immutable append-only ledger for financial auditing" },
      { label: "Security", value: "HMAC-SHA256 signed webhooks & payload validation" },
      { label: "Async Workers", value: "Celery distributed task queue with Redis broker" }
    ],
    highlights: ["Zero double-spending", "Strictly-once guarantees", "HMAC webhook verification"],
    tags: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Docker", "AWS EC2"],
    source: "https://github.com/sampremm/playto-engine",
    demo: "https://playto-engine-vert.vercel.app/",
    image: image2
  },
  {
    id: "03",
    category: "High-Throughput SaaS",
    filterCategory: "Cloud & Distributed",
    title: "SnapLink – Distributed URL SaaS",
    description: "High-scale URL shortener with a dedicated Key Generation Service (Aiven MySQL) and Upstash Redis caching. Implemented NGINX load balancing to distribute traffic and achieve sub-millisecond redirect latency for millions of records. Pre-allocated token ranges prevent distributed key collisions.",
    specs: [
      { label: "Architecture", value: "Dedicated Key Generation Service (KGS token pool)" },
      { label: "Storage Layer", value: "Aiven MySQL clustered + Upstash Redis cache" },
      { label: "Performance", value: "Sub-millisecond redirect latency at scale" },
      { label: "Load Balancing", value: "NGINX reverse proxy with health checking" }
    ],
    highlights: ["Pre-generated key pools", "Global caching", "Sub-millisecond redirects"],
    tags: ["Node.js", "Redis", "NGINX", "MySQL", "Docker"],
    source: "https://github.com/sampremm/url-shortener",
    demo: "https://url-shortener-six-sandy.vercel.app/",
    image: image3
  },
  {
    id: "04",
    category: "Queue & Event Processing",
    filterCategory: "Core Engines",
    title: "Resilient Notification Engine",
    description: "Asynchronous delivery system using BullMQ and Redis state machines. Implemented exponential backoff, dead-letter queues, and deterministic idempotency keys to guarantee exactly-once message delivery under downstream provider outages.",
    specs: [
      { label: "Worker Engine", value: "BullMQ priority queues + Redis state machines" },
      { label: "Resiliency", value: "Exponential backoff, jitter & dead-letter handling" },
      { label: "Delivery", value: "Deterministic idempotency keys (Exactly-once)" },
      { label: "Concurrency", value: "Multi-worker consumer pooling with rate limits" }
    ],
    highlights: ["Dead-letter queue handling", "Priority queues", "Bursty traffic absorption"],
    tags: ["BullMQ", "Redis", "Node.js", "Express.js", "Docker"],
    source: "https://github.com/sampremm/algohire-hackthon",
    image: image5
  },
  {
    id: "05",
    category: "Low-Level Networking",
    filterCategory: "Systems",
    title: "Multithreaded Java Web Server",
    description: "Custom HTTP/1.1 server built from scratch on raw Java Sockets. Implemented custom thread-pooling, non-blocking socket lifecycle management, and RFC-compliant HTTP request parsing without external HTTP frameworks.",
    specs: [
      { label: "Networking", value: "Raw TCP/IP socket handling via Java java.net" },
      { label: "Concurrency", value: "Custom bounded thread pool & task queue" },
      { label: "Protocol", value: "RFC-compliant HTTP/1.1 chunked/pipelined parsing" },
      { label: "Benchmarking", value: "Load tested for memory leak resistance & latency" }
    ],
    highlights: ["Zero third-party abstractions", "Custom thread pool", "RFC-compliant parser"],
    tags: ["Java", "Sockets", "Concurrency", "Multithreading"],
    source: "https://github.com/sampremm/multithreaded-webserver-java",
    image: image1
  }
];

/* ================= RESEARCH ================= */

export const RESEARCH = {
  title: "Maximum Power Point Tracking of PV Systems under Partial Shading using CSA",
  paperTitle: "Detection and Tracking Maximum Power Point of a PV System under PSC using Cuckoo Search Algorithm (CSA) MPPT",
  journal: "International Journal of Research",
  volume: "Volume XI, Issue VI, June 2022",
  id: "ISSN: 2236-6124",
  authors: "Dr. G. Sridhar, V. Saikiran, Ch. Saipriya, T. Sam Prem Kumar, P. Akshay Kumar",
  institution: "Dept. of Electrical & Electronics Engineering, JITS",
  problem: "Under Partial Shading Conditions (PSC), photovoltaic arrays exhibit multiple local peaks (LMPP) on the P-V characteristic curve due to bypass diodes. Traditional MPPT algorithms (P&O, Incremental Conductance) suffer from local optima entrapment, causing massive energy losses.",
  description: "Rooted in mathematical optimization and control theory, this paper presents a metaheuristic MPPT framework employing the Cuckoo Search Algorithm (CSA) coupled with a DC-DC boost converter to track the Global Maximum Power Point (GMPP) under dynamic irradiance variations.",
  details: "By integrating Lévy flight random walks, CSA balances exploration across high-dimensional search spaces with rapid exploitation around optimal duty cycles. Unlike conventional Particle Swarm Optimization (PSO) or Genetic Algorithms (GA) which exhibit long convergence times, and classical P&O which suffers from heavy steady-state oscillations and drifting, CSA reliably converges to the global maximum with zero oscillation.",
  quote: "Demonstrated that CSA MPPT rapidly identifies the Global Maximum Power Point (GMPP) of PV arrays under dynamic partial shading conditions, completely eliminating steady-state power oscillations and preventing local-peak entrapment.",
  metrics: [
    { label: "Optimization Target", value: "Global MPP (GMPP)" },
    { label: "Steady-State State", value: "Zero Oscillation" },
    { label: "Search Mechanism", value: "Lévy Flights" },
    { label: "Drift Behavior", value: "Zero Drift" }
  ],
  simulation: "MATLAB / Simulink with DC-DC Boost Converter & Real-time Irradiance Curves",
  link: "https://drive.google.com/file/d/1QUZ3L33mAqRigHwQnwg__ZOjVhmEPucZ/view"
};

/* ================= SKILLS ================= */

export const SKILLS = [
  { name: "Node.js", category: "Languages & Runtimes", icon: <FaNodeJs className="text-emerald-500" />, desc: "Event-driven runtime & asynchronous architectures" },
  { name: "Express.js", category: "Frameworks & APIs", icon: <SiExpress className="text-neutral-200" />, desc: "REST APIs, middleware pipelines & auth guards" },
  { name: "Python", category: "Languages & Runtimes", icon: <FaPython className="text-amber-400" />, desc: "Data processing, algorithms & backend automation" },
  { name: "Java", category: "Languages & Runtimes", icon: <FaJava className="text-rose-500" />, desc: "Multithreading, OOP & low-level socket programming" },
  { name: "TypeScript", category: "Languages & Runtimes", icon: <SiTypescript className="text-sky-400" />, desc: "Strict type safety & domain-driven architecture" },
  { name: "PostgreSQL", category: "Databases & Storage", icon: <BiLogoPostgresql className="text-sky-500" />, desc: "ACID transactions, row-level locks & relational schemas" },
  { name: "Redis", category: "Databases & Storage", icon: <SiRedis className="text-red-500" />, desc: "In-memory caching, Pub/Sub, rate limiting & TTL locks" },
  { name: "MongoDB", category: "Databases & Storage", icon: <SiMongodb className="text-emerald-400" />, desc: "Document storage & high-write telemetry pipelines" },
  { name: "BullMQ", category: "Queues & Distributed", icon: <GiChargingBull className="text-amber-500" />, desc: "Distributed message queues, worker pools & retries" },
  { name: "Prisma ORM", category: "Databases & Storage", icon: <SiPrisma className="text-teal-400" />, desc: "Type-safe database migrations & relation queries" },
  { name: "Docker", category: "DevOps & Cloud", icon: <FaDocker className="text-blue-500" />, desc: "Containerization, multi-stage builds & environment parity" },
  { name: "AWS", category: "DevOps & Cloud", icon: <FaAws className="text-orange-400" />, desc: "ECS Fargate, S3, ECR, IAM & cloud networking" },
  { name: "NGINX", category: "DevOps & Cloud", icon: <SiNginx className="text-emerald-500" />, desc: "Reverse proxying, SSL termination & load balancing" },
  { name: "GitHub Actions", category: "DevOps & Cloud", icon: <SiGithubactions className="text-blue-400" />, desc: "CI/CD pipelines, automated testing & deployment" },
  { name: "Git", category: "DevOps & Cloud", icon: <FaGitAlt className="text-orange-500" />, desc: "Version control, branching workflows & code review" },
];

export const SPECIALIZATIONS = [
  "Distributed Systems & Microservices",
  "High-Concurrency Idempotent Architectures",
  "Event-Driven Queues & Asynchronous Pipelines",
  "Database Optimization & Connection Pooling"
];

/* ================= SOCIAL ================= */

export const SOCIAL_MEDIA_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/sampremm",
    icon: <FaGithub />,
    detail: "github.com/sampremm"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samprem1/",
    icon: <FaLinkedin />,
    detail: "linkedin.com/in/samprem1"
  },
  {
    label: "Email",
    href: "mailto:samprem888111@gmail.com",
    icon: <SiPostman />,
    detail: "samprem888111@gmail.com"
  },
  {
    label: "Twitter / X",
    href: "https://x.com/sampremm",
    icon: <FaXTwitter />,
    detail: "@sampremm"
  }
];