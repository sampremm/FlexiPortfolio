import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa6"; // Ensure all icons are available in the specified library

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si"; // Added SiPostman here
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr"; // Ensure GrMysql is imported

import image1 from "../assets/java-logo.png";
import image2 from "../assets/todo-image.jpg";
import image3 from "../assets/url.jpg";
import image4 from "../assets/streamyard.png";

import image6 from "../assets/Logo_Vercel-1.jpg";
import image7 from "../assets/uber.webp";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Sam Prem Kumar Thalla",
  info: "Aspiring Software Developer | MERN Stack | Tech Enthusiast",
};


export const ABOUT = {
  text1:
    "I build robust and scalable web applications using modern technologies, always driven by a problem-solving mindset and clean UI/UX principles.",
  text2:
    "Hello! I'm Sam Prem Kumar Thalla, a passionate and growth-oriented software developer with a foundation in Java and full-stack web development. My work spans dynamic ride-sharing apps, deployment platforms like Vercel, real-time streaming solutions, and more. I'm well-versed in tools like Docker, AWS, and Redis, and actively build scalable backend services and responsive React frontends. I take pride in clean architecture, teamwork, and staying updated with the evolving tech world. Whether tackling performance, security, or design, I strive to build solutions that are fast, functional, and future-ready.",
};

export const PROJECTS = [
  {
    title: "Multithreaded Web Server (Java)",
    subtitle:
      "A Java-based multithreaded web server using a fixed-size thread pool to handle multiple client connections concurrently over TCP sockets. Demonstrates concurrency, socket programming, and resource management.",
    image: image1, // replace with your image asset
    link: "https://github.com/sampremm/multithreaded-webserver-java",
  },
  {
    title: "URL Shortener",
    subtitle:
      "Node.js + Express.js + MongoDB + Redis. Implements link shortening, redirection, click analytics, and user authentication. Uses Redis caching for high performance.",
    image: image3,
    link: "https://github.com/sampremm/link_shotner",
  },
  {
    title: "Vercel Clone – Backend",
    subtitle:
      "Custom deployment platform mimicking Vercel. Node.js + Docker + AWS ECS/ECR + S3. Designed for isolated containers, reverse proxy streaming, static file distribution, and CI/CD orchestration.",
    image: image6,
    link: "https://github.com/sampremm/vercel-backend",
  },
  {
    title: "StreamYard Streaming App",
    subtitle:
      "A browser-based live video streaming app using React, Node.js, WebRTC, FFmpeg, and Socket.IO. Dockerized for scalability with RTMP server integration for real-time performance.",
    image: image4,
    link: "https://github.com/sampremm/streamyard-clone",
  },
  {
    title: "Uber – Ride Application",
    subtitle:
      "A dynamic ride-hailing application built with React.js, Node.js, Express.js, and MongoDB. Real-time tracking via WebSockets, Google Maps API for route calculations, secure JWT authentication, and optimized driver allocation logic.",
    image: image7,
    link: "https://github.com/sampremm/uber-clone",
  },
  {
    title: "Dockerized Todo App (Node + Prisma + PostgreSQL)",
    subtitle:
      "Full-featured backend Todo app with JWT authentication. Built with Node.js + Express, Prisma ORM, PostgreSQL, and Docker Compose for containerized deployment.",
    image: image2, // replace with your image asset
    link: "https://github.com/sampremm/backend-todo-app",
  },
];



export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
  },

  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiTailwindcss className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Tailwind CSS",
  },
  {
    icon: <GrMysql className="text-4xl lg:text-6xl text-blue-500" />,
    name: "MySQL",
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
  {
    icon: <FaDocker className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Docker",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://instagram.com/samprem__/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/sampremm",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/sampremm",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/samprem1/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
