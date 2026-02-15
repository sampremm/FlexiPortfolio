import React, { useState } from "react";
import logo from "../assets/logonew.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = -80;
      const position =
        element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
    setIsMobileMenu(false);
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1xF71d5IqjQ1xxP7TGWm73xrZaNtvrquD/view?usp=sharing"
    );
  };

  const openGithub = () => {
    window.open("https://github.com/sampremm", "_blank");
  };

  const renderNavLinks = () =>
    NAVIGATION_LINKS.map((link, index) => (
      <li key={index}>
        <a
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className="text-sm text-gray-300 hover:text-yellow-400 transition"
        >
          {link.label}
        </a>
      </li>
    ));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center pt-4">
        <div className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800">
          
          {/* Logo */}
          <a href="#hero">
            <img src={logo} alt="Sam Prem Logo" className="w-28" />
          </a>

          {/* Links */}
          <ul className="flex items-center gap-6">{renderNavLinks()}</ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={openGithub}
              className="text-gray-300 hover:text-white transition"
            >
              <FaGithub size={18} />
            </button>

            <button
              onClick={openResume}
              className="bg-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold text-black hover:bg-yellow-500 transition"
            >
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden bg-black/60 backdrop-blur-xl border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#hero">
            <img src={logo} alt="Logo" className="w-24" />
          </a>

          <button onClick={toggleMobileMenu}>
            {isMobileMenu ? (
              <FaTimes className="text-white text-xl" />
            ) : (
              <FaBars className="text-white text-xl" />
            )}
          </button>
        </div>

        {isMobileMenu && (
          <ul className="flex flex-col gap-5 px-6 py-6 bg-black border-t border-gray-800">
            {renderNavLinks()}

            <button
              onClick={openResume}
              className="mt-2 bg-yellow-400 py-2 rounded-full font-semibold text-black"
            >
              Resume
            </button>

            <button
              onClick={openGithub}
              className="text-gray-300 text-sm"
            >
              GitHub
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
