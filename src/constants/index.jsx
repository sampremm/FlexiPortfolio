import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaAws,
} from "react-icons/fa6";

import {
  SiMongodb,
  SiPostman,
  SiRedis,
  SiTypescript,
  SiTerraform,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/java-logo.png";
import image2 from "../assets/todo-image.jpg";
import image3 from "../assets/url.jpg";
import image4 from "../assets/Logo_Vercel-1.jpg";
import image5 from "../assets/notificy.jpg";

export const PROFILE = {
  name: "THALLA SAM PREM KUMAR",
  role: "Infrastructure & Systems Specialist",
  subRole: "Backend Engineer. Builder.",
  info: "Building the \"Plumbing\" of the Cloud. Specializing in distributed systems, idempotency, and high-performance infrastructure.",
  status: "OPEN TO BACKEND / PLATFORM ROLES · IMMEDIATE JOINER",
  location: "Hyderabad, Bangalore, Pune",
};

/* ================= ABOUT ================= */

export const ABOUT = {
  title: "I build systems that don't break.",
  text: "I build backend systems that handle scale, failure, and complexity. Most recently, I architected a Vercel-clone — a 4-service event-driven deployment pipeline where an API server triggers isolated AWS ECS containers that clone GitHub repos, auto-detect frameworks by inspecting config files, run builds, and upload artifacts to S3.",
  subtext: "Before that, I built a fintech payout engine with a two-tier idempotency layer — L1 Redis + L2 PostgreSQL — with row locks to prevent double-spend and an immutable append-only ledger.",
  stats: [
    { label: "Production-grade systems shipped", value: "5+" },
    { label: "AWS services in production", value: "3" }
  ]
};

/* ================= PROJECTS ================= */

export const PROJECTS = [
  {
    id: "01",
    category: "Featured System",
    title: "Vercel Clone – Cloud PaaS",
    description: "Architected a 4-service event-driven pipeline (API Server, Build Engine, S3 Reverse Proxy, Dashboard) utilizing AWS ECS Fargate and Redis Pub/Sub for real-time telemetry. The system handles automated git cloning, multi-framework build detection, and secure artifact deployment to private S3 buckets with custom reverse proxy routing for live site serving.",
    specs: [
      { label: "Execution", value: "AWS ECS RunTask (env overrides)" },
      { label: "Isolation", value: "Dedicated build container per commit" },
      { label: "Telemetry", value: "Redis Pub/Sub real-time logs" },
      { label: "Proxying", value: "Private S3 Reverse Proxy" }
    ],
    architecture: [
      "POST /project { gitUrl }",
      "↓ ECS RunTask (env overrides)",
      "↓ git clone + detect framework",
      "↓ npm install + build",
      "↓ Redis Pub/Sub → live logs",
      "↓ S3 upload __outputs/<id>/",
      "↓ container auto-teardown",
      "↓ proxy serves /:slug"
    ],
    highlights: ["No shared state", "Full build isolation", "Private S3 bucket"],
    tags: ["Node.js", "Redis", "Docker", "PostgreSQL"],
    source: "https://github.com/sampremm/vercel-backend",
    image: image4
  },
  {
    id: "02",
    category: "Core Infrastructure",
    title: "Playto Payout Engine",
    description: "Distributed fintech backend featuring a two-tier idempotency layer (Redis/PostgreSQL) and an immutable append-only ledger. Designed to handle high-concurrency transaction processing with row-level locks and strictly-once delivery guarantees. This architecture eliminated double-spending risks and ensured 100% financial data integrity during peak load.",
    specs: [
      { label: "Idempotency", value: "L1 Redis + L2 PostgreSQL (SELECT FOR UPDATE)" },
      { label: "Integrity", value: "Immutable append-only ledger for auditability" },
      { label: "Security", value: "HMAC-SHA256 Signed Webhooks & Request Validation" },
      { label: "Concurrency", value: "Optimistic locking and atomic DB transactions" }
    ],
    tags: ["Node.js", "Redis", "Docker", "PostgreSQL"],
    source: "https://github.com/sampremm/playto-engine",
    demo: "https://playto-engine-vert.vercel.app/login",
    image: image2
  },
  {
    id: "03",
    category: "Core Infrastructure",
    title: "SnapLink – Distributed URL SaaS",
    description: "High-scale URL shortener with a dedicated Key Generation Service (Aiven MySQL) and Upstash Redis caching. Implemented NGINX load balancing to distribute traffic and achieve sub-millisecond redirect latency for millions of records. The system utilizes a pre-generated key pool to eliminate collision overhead during high-write periods.",
    specs: [
      { label: "Architecture", value: "Dedicated Key Generation Service (KGS)" },
      { label: "Storage", value: "Aiven MySQL + Upstash Redis Global Cache" },
      { label: "Performance", value: "Sub-millisecond redirect latency at scale" },
      { label: "Availability", value: "Highly available with NGINX Load Balancing" }
    ],
    tags: ["Node.js", "Redis", "Docker", "PostgreSQL"],
    source: "https://github.com/sampremm/url-shortener",
    demo: "https://url-shortener-six-sandy.vercel.app/",
    image: image3
  },
  {
    id: "04",
    category: "Core Infrastructure",
    title: "Resilient Notification Engine",
    description: "Asynchronous delivery system using BullMQ and Redis state machines. Implemented exponential backoff and idempotency to guarantee exactly-once message delivery. Built to handle bursty traffic with priority queues and reliable failure recovery, ensuring no notification is lost even during downstream service outages.",
    specs: [
      { label: "Engine", value: "BullMQ + Redis State Machines" },
      { label: "Resiliency", value: "Exponential backoff & automatic retries" },
      { label: "Guarantee", value: "Exactly-once message delivery" },
      { label: "Concurrency", value: "Distributed worker processing & priority queues" }
    ],
    tags: ["Node.js", "Redis", "Docker", "PostgreSQL"],
    source: "https://github.com/sampremm/algohire-hackthon",
    image: image5
  },
  {
    id: "05",
    category: "Core Infrastructure",
    title: "Multithreaded Java Web Server",
    description: "Custom HTTP server built from scratch using Java Sockets to manage TCP/IP lifecycles and thread-pool concurrency. Implemented manual RFC-compliant HTTP parsing and benchmarked against high-load scenarios to ensure stability. This project demonstrated deep understanding of low-level networking and resource management without modern framework abstractions.",
    specs: [
      { label: "Protocol", value: "TCP/IP lifecycle management via Java Sockets" },
      { label: "Concurrency", value: "Custom Thread-Pool implementation from scratch" },
      { label: "Standards", value: "RFC-compliant HTTP/1.1 request/response parsing" },
      { label: "Benchmarking", value: "High-load scalability & concurrency testing" }
    ],
    tags: ["Java", "Sockets", "Concurrency", "Systems"],
    source: "https://github.com/sampremm/multithreaded-webserver-java",
    image: image1
  }
];

/* ================= RESEARCH ================= */

export const RESEARCH = {
  title: "Maximum Power Point Tracking using Cuckoo Search Algorithm (CSA)",
  id: "ISSN: 2236-6124",
  description: "My technical foundation is rooted in mathematical optimization. This research paper explores the implementation of the Cuckoo Search Algorithm (CSA)—a nature-inspired metaheuristic algorithm—for solving non-linear optimization problems in energy systems.",
  details: "The study demonstrates how CSA outperforms traditional methods like Particle Swarm Optimization (PSO) and Genetic Algorithms (GA) by maintaining a superior balance between exploration (searching new areas) and exploitation (refining known good areas), effectively preventing premature convergence in high-dimensional search spaces.",
  quote: "Proved that the Lévy flight mechanism in CSA significantly reduces computational overhead while increasing the probability of finding global optima in complex, multi-modal cost functions.",
  metrics: [
    { label: "Convergence", value: "High" },
    { label: "Robustness", value: "Superior" },
    { label: "Complexity", value: "O(N log N)" }
  ],
  link: "https://drive.google.com/file/d/1QUZ3L33mAqRigHwQnwg__ZOjVhmEPucZ/view"
};

/* ================= SKILLS ================= */

export const SKILLS = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-sky-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> }
];

export const SPECIALIZATIONS = [
  "Distributed Systems Design",
  "Kubernetes Orchestration",
  "FinTech Compliance (PCI DSS)",
  "Performance Benchmarking"
];

/* ================= SOCIAL ================= */

export const SOCIAL_MEDIA_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/sampremm",
    icon: <FaGithub />
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samprem1/",
    icon: <FaLinkedin />
  },
  {
    label: "Email",
    href: "mailto:samprem888111@gmail.com",
    icon: <SiPostman />
  },
  {
    label: "Twitter",
    href: "https://x.com/sampremm",
    icon: <FaXTwitter />
  }
];