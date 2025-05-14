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
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr"; // Ensure GrMysql is imported

import image1 from "../assets/chess.jpeg";
import image2 from "../assets/bloging.jpg";
import image3 from "../assets/url.jpg";
import image4 from "../assets/streamyard.png";
import image5 from "../assets/portfolio.jpg";
import image6 from "../assets/Logo_Vercel-1.jpg";
import image7 from "../assets/uber.webp";



import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

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
    title: "Uber Clone",
    subtitle:
      "A dynamic ride-hailing application built with React.js, Node.js, Express.js, and MongoDB. Features real-time tracking via WebSockets, Google Maps API integration for route calculations, secure JWT authentication, and optimized driver allocation logic.",
    image: image7,
    link: "https://github.com/sampremm/uber-clone",
  },
  {
    title: "Vercel Clone - Backend",
    subtitle:
      "A custom deployment platform that mimics Vercel. Built using Node.js, Docker, AWS ECS/ECR, and S3. Designed for hosting front-end apps with isolated containers, reverse proxy streaming, and static file distribution. Emphasizes CI/CD and container orchestration.",
    image: image6,
    link: "https://github.com/sampremm/vercel-backend",
  },
  {
    title: "StreamYard Streaming App",
    subtitle:
      "A live video streaming app using React, Node.js, FFmpeg, and Socket.IO. Streams are encoded and pushed via an RTMP server. Dockerized for scalability and production readiness. Focused on real-time performance and minimal latency.",
    image: image4,
    link: "https://github.com/sampremm/streamyard-clone",
  },
  {
    title: "URL Shortener",
    subtitle:
      "Built with Node.js, Express.js, MongoDB, and Redis. Implements link shortening, redirection, click analytics, and user authentication. Uses Redis for caching frequent redirections and improving performance.",
    image: image3,
    link: "https://github.com/sampremm/link_shotner",
  },
  {
    title: "Blogging Website",
    subtitle:
      "MERN-based blogging platform with Markdown support and AWS S3 image uploads. Implements JWT auth, REST APIs with Express.js, MongoDB with Mongoose, and a responsive UI using TailwindCSS. Enables CRUD operations on blog posts.",
    image: image2,
    link: "https://github.com/sampremm/bloging",
  },
  {
    title: "Portfolio Website",
    subtitle:
      "Modern React + Tailwind CSS portfolio to showcase projects and experience. Includes interactive sections, smooth transitions, and mobile responsiveness. Built to reflect clean design and developer personality.",
    image: image5,
    link: "https://github.com/sampremm/FlexiPortfolio",
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
