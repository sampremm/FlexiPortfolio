import React, { useState, useEffect } from "react";
import logo from "../assets/logonew.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenu((prev) => !prev);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
    setIsMobileMenu(false);
  };

  const openResume = () =>
    window.open("https://drive.google.com/file/d/1xF71d5IqjQ1xxP7TGWm73xrZaNtvrquD/view?usp=sharing");
  const openGithub = () =>
    window.open("https://github.com/sampremm", "_blank");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop */}
      <div className="hidden lg:flex justify-center pt-4">
        <div
          className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-xl border transition-all duration-300 ${
            scrolled
              ? "bg-black/75 backdrop-blur-xl border-zinc-800"
              : "bg-black/30 backdrop-blur-md border-white/5"
          }`}
        >
          <a href="#hero">
            <img src={logo} alt="Sam Prem Logo" className="w-28" />
          </a>

          <ul className="flex items-center gap-8">
            {NAVIGATION_LINKS.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={openGithub}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <FaGithub size={17} />
            </button>
            <button
              onClick={openResume}
              className="bg-amber-400 hover:bg-amber-300 transition-colors px-5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase text-black"
            >
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden bg-black/75 backdrop-blur-xl border-b border-zinc-800">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#hero">
            <img src={logo} alt="Logo" className="w-24" />
          </a>
          <button onClick={toggleMobileMenu} className="text-zinc-400">
            {isMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        {isMobileMenu && (
          <ul className="flex flex-col gap-5 px-6 py-6 bg-black border-t border-zinc-900">
            {NAVIGATION_LINKS.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-amber-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <button
              onClick={openResume}
              className="mt-2 bg-amber-400 py-2 rounded-lg font-bold text-xs tracking-wider uppercase text-black"
            >
              Resume
            </button>
            <button onClick={openGithub} className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
              <FaGithub /> GitHub
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);