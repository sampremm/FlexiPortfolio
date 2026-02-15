import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiRedis,
  SiKubernetes,
  SiTypescript,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

import image1 from "../assets/java-logo.png";
import image2 from "../assets/todo-image.jpg";

import image3 from "../assets/url.jpg";
import image4 from "../assets/Logo_Vercel-1.jpg";
import image5 from "../assets/notificy.jpg";
import image6 from "../assets/streamyard.jpg";

/* ================= NAVIGATION ================= */

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* ================= PROFILE ================= */

export const PROFILE = {
  name: "Sam Prem Kumar Thalla",
  info:
    "Backend-Focused Software Engineer | Node.js • Redis • Docker • AWS",
};

/* ================= ABOUT ================= */

export const ABOUT = {
  text1:
    "Backend engineer focused on building scalable, reliable systems.",

  text2:
    "I specialize in designing backend systems using Node.js, TypeScript, PostgreSQL, MongoDB, and Redis. My experience includes building production-style APIs, asynchronous processing systems, caching layers, and performance-focused architectures.\n\nI have developed scalable systems such as a Redis-powered URL shortener, a queue-based notification system using BullMQ, a TypeScript expense tracking platform, and a multithreaded Java web server tested under heavy load. I focus on clean architecture, reliability, and building systems that scale. Currently, I am deepening my expertise in System Design, Distributed Systems, and cloud infrastructure.",

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
    title: "Vercel Backend – Deployment Platform",
    subtitle:
      "Production-style deployment system built with Node.js, Docker, AWS ECS/ECR, and S3. Supports isolated builds, reverse proxy routing, static asset delivery, and CI/CD orchestration.",
    image: image4,
    link: "https://github.com/sampremm/vercel-backend",
  },
  {
    title: "Scalable URL Shortener",
    subtitle:
      "High-performance URL shortening service with Redis caching, JWT authentication, and click analytics. Designed for low-latency redirects and high request throughput.",
    image: image3,
    link: "https://github.com/sampremm/url-shortener",
  },
  {
    title: "Templated Notification System",
    subtitle:
      "Queue-based asynchronous notification system using BullMQ and Redis. Implemented background workers, retry logic, idempotency, and delivery state management.",
    image: image5,
    link: "https://github.com/sampremm/algohire-hackthon",
  },
  {
    title: "Expense Tracker API (TypeScript)",
    subtitle:
      "REST API built with Node.js, TypeScript, PostgreSQL, and Prisma. Includes JWT authentication, structured data models, and clean service-layer architecture.",
    image: image2,
    link: "https://github.com/sampremm/Xpensetracker",
  },
  {
    title: "StreamYard Clone – Real-time Streaming",
    subtitle:
      "Real-time video streaming platform using WebRTC, Socket.IO, and FFmpeg. Dockerized architecture for scalable low-latency broadcasting.",
    image: image6,
    link: "https://github.com/sampremm/streamyard-clone",
  },
  {
    title: "Multithreaded Java Web Server",
    subtitle:
      "High-performance HTTP server using Java sockets and thread pools. Tested for scalability under heavy concurrent load.",
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
    icon: <SiTypescript className="text-4xl lg:text-6xl text-blue-500" />,
    name: "TypeScript",
  },
  {
    icon: <SiRedis className="text-4xl lg:text-6xl text-red-500" />,
    name: "Redis",
  },
  {
    icon: <SiKubernetes className="text-4xl lg:text-6xl text-blue-500" />,
    name: "Kubernetes",
  },
  {
    icon: <FaDocker className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Docker",
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
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
  },
  {
    icon: <SiTailwindcss className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaGitAlt className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-white" />,
    name: "GitHub",
  },
  {
    icon: <SiPostman className="text-4xl lg:text-6xl text-orange-500" />,
    name: "Postman",
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
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/sampremm",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];
