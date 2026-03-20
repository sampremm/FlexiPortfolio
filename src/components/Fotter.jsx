import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-zinc-700 tracking-wider">
          © {new Date().getFullYear()} Sam Prem Kumar Thalla
        </p>

        <div className="flex items-center gap-5">
          {[
            { icon: <FaGithub size={14} />, href: "https://github.com/sampremm" },
            { icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/samprem1/" },
            { icon: <FaXTwitter size={14} />, href: "https://x.com/sampremm" },
            { icon: <FaInstagram size={14} />, href: "https://www.instagram.com/samprem__/" },
          ].map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-amber-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs font-mono text-zinc-700 tracking-wider">
          Built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;