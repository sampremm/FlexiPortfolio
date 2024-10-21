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
  name: "Sam Prem Kumar ",
  info: "Full-stack developer.",
};

export const ABOUT = {
  text1:
    "I tackle software challenges by building dynamic and responsive web applications, blending problem-solving with modern design.",
  text2:
    "Hello! I'm Sam Prem Kumar Thalla, a passionate software developer with a knack for tackling complex challenges. I specialize in building dynamic, responsive web applications that are both efficient and user-friendly. With a strong foundation in full-stack development and a focus on modern technologies, I bring a practical approach to problem-solving while ensuring high-quality results. Beyond coding, I enjoy exploring new ideas and continuously learning to stay ahead in the tech world. Whether I'm working on an innovative project or diving into the latest trends, I'm committed to delivering impactful and polished solutions every time.",
};

export const PROJECTS = [
  {
    title: "StreamYard Clone",
    subtitle:
      "A real-time streaming application built with Node.js, Express.js, Socket.IO, FFmpeg, and Docker, enabling live video streaming with minimal latency.",
    image: image4,
    link: "https://github.com/sampremm/streamyard-clone",
  },
  {
    title: "Chess.com Clone",
    subtitle:
      "A real-time multiplayer chess game built with Node.js, Socket.IO, Chess.js, and Tailwind CSS.",
    image: image1,
    link: "https://github.com/sampremm/Chess",
  },
  {
    title: "Blogging Website",
    subtitle:
      "A blogging platform developed using the MERN stack, featuring JWT-based authentication and rich text formatting.",
    image: image2,
    link: "https://github.com/sampremm/mern-blogging",
  },
  {
    title: "URL Shortener",
    subtitle:
      "A URL shortening service created with Node.js, Express.js, MongoDB, and JavaScript.",
    image: image3,
    link: "https://github.com/sampremm/link_shotner",
  },
  {
    title: "Portfolio Website",
    subtitle:
      "A personal portfolio website built with React.js and Tailwind CSS.",
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
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
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
