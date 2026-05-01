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
  SiRedis,
  SiTypescript,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/java-logo.png";
import image2 from "../assets/todo-image.jpg";
import image3 from "../assets/url.jpg";
import image4 from "../assets/Logo_Vercel-1.jpg";
import image5 from "../assets/notificy.jpg";

/* ================= PROFILE ================= */

export const PROFILE = {
  name: "Sam Prem Kumar Thalla",
  info:
    "Backend Software Engineer  Node.js • Java • AWS",
};

/* ================= ABOUT ================= */

export const ABOUT = {
  text1:
    "Engineering high-performance distributed systems with a focus on reliability and data integrity.",

  text2:
    "I specialize in architecting backend ecosystems using Node.js, Java, and TypeScript. My expertise lies in building infrastructure-heavy applications—from 4-service event-driven pipelines to distributed fintech payout engines. \n\nI focus on solving complex backend challenges such as multi-tier idempotency, real-time telemetry streaming, and multithreaded concurrency models. My technical foundation is rooted in peer-reviewed research, where I applied optimization algorithms to complex system behaviors.",

  publication: {
    title:
      "Research Publication: Maximum Power Point Tracking using Cuckoo Search Algorithm (CSA)",
    link:
      "https://drive.google.com/file/d/1QUZ3L33mAqRigHwQnwg__ZOjVhmEPucZ/view",
  },
};

/* ================= PROJECTS ================= */

export const PROJECTS = [
  {
    title: "Vercel Clone – Cloud PaaS",
    subtitle:
      "Architected a 4-service event-driven pipeline (API Server, Build Engine, S3 Reverse Proxy, Dashboard) utilizing AWS ECS Fargate and Redis Pub/Sub for real-time telemetry.",
    image: image4,
    link: "https://github.com/sampremm/vercel-backend",
  },
  {
    title: "Playto Payout Engine",
    subtitle:
      "Distributed fintech backend featuring a two-tier idempotency layer (Redis/PostgreSQL) and an immutable append-only ledger to ensure strictly-once transaction processing.",
    image: image2,
    link: "https://github.com/sampremm/playto-engine",
    demo: "https://playto-engine-vert.vercel.app/login",
  },
  {
    title: "SnapLink – Distributed URL SaaS",
    subtitle:
      "High-scale URL shortener with a dedicated Key Generation Service (Aiven MySQL) and Upstash Redis caching, achieving sub-millisecond redirect latency.",
    image: image3,
    link: "https://github.com/sampremm/url-shortener",
    demo: "https://url-shortener-six-sandy.vercel.app/",
  },
  {
    title: "Resilient Notification Engine",
    subtitle:
      "Asynchronous delivery system using BullMQ and Redis state machines. Implemented exponential backoff and idempotency to guarantee exactly-once message delivery.",
    image: image5,
    link: "https://github.com/sampremm/algohire-hackthon",
  },
  {
    title: "Multithreaded Java Web Server",
    subtitle:
      "Custom HTTP server built from scratch using Java Sockets to manage TCP/IP lifecycles and thread-pool concurrency. Benchmarked for high-load scalability.",
    image: image1,
    link: "https://github.com/sampremm/multithreaded-webserver-java",
  },
];

/* ================= SKILLS ================= */

export const SKILLS = [
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <FaJava className="text-4xl lg:text-6xl text-red-600" />,
    name: "Java",
  },
  {
    icon: <SiTypescript className="text-4xl lg:text-6xl text-blue-500" />,
    name: "TypeScript",
  },
  {
    icon: <FaAws className="text-4xl lg:text-6xl text-orange-500" />,
    name: "AWS",
  },
  {
    icon: <FaDocker className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Docker",
  },
  {
    icon: <SiRedis className="text-4xl lg:text-6xl text-red-500" />,
    name: "Redis",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: <FaGitAlt className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Git",
  },
];

/* ================= SOCIAL ================= */

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/sampremm",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/samprem1/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "mailto:samprem888111@gmail.com",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/sampremm",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];