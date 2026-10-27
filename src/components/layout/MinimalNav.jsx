import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const NAV_LINKS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'work', label: 'WORK' },
  { id: 'research', label: 'RESEARCH' },
  { id: 'stack', label: 'STACK' },
  { id: 'contact', label: 'CONTACT' },
];

const MinimalNav = ({ onCLIOpen }) => {
  const { dark, toggle } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };

  const navClasses = isScrolled
    ? "pt-3 px-3 text-[#111111] dark:text-[#EDEDED]"
    : "text-[#EDEDED]";

  // Floating glass pill once the hero is scrolled past
  const barClasses = isScrolled
    ? "max-w-6xl h-14 px-5 md:px-7 rounded-full bg-[#F4F4F0]/75 dark:bg-[#14161B]/75 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)]"
    : "max-w-7xl h-16 px-6 md:px-12 border border-transparent";

  const subTextClasses = isScrolled 
    ? "text-[#6F6F6F] dark:text-[#9E9E9E]" 
    : "text-[#EDEDED]/80";

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${navClasses}`}>
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${barClasses}`}>
        
        {/* Left: Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="shrink-0 whitespace-nowrap font-display font-bold tracking-tight text-sm uppercase hover:opacity-70 transition-opacity flex items-center gap-3"
        >
          <span>SAM PREM KUMAR</span>
          <span className={`hidden 2xl:inline-block text-[11px] font-mono font-normal ${subTextClasses}`}>
            / BACKEND &amp; DISTRIBUTED SYSTEMS
          </span>
        </button>

        {/* Right: Desktop Navigation Items */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap text-xs font-mono">
          {/* Status Indicator */}
          <div className={`hidden xl:flex items-center gap-2 text-[11px] ${subTextClasses}`}>
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="tracking-wider">OPEN TO WORK</span>
          </div>

          {/* Section Links */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-colors text-[11px] tracking-wider ${
              isScrolled 
                ? 'border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED]'
                : 'border-white/[0.3] hover:border-white text-[#EDEDED]'
            }`}
          >
            <FiFileText className="text-xs" />
            <span>CV</span>
          </a>

          {/* CLI Easter Egg Button */}
          <button
            onClick={onCLIOpen}
            title="Launch Terminal Easter Egg"
            className={`text-[11px] font-mono px-2 py-1 rounded transition-colors ${
              isScrolled
                ? 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#6F6F6F] dark:text-[#9E9E9E]'
                : 'bg-white/10 hover:bg-white/20 text-[#EDEDED]'
            }`}
          >
            &gt;_
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            className="p-2 text-sm hover:opacity-70 transition-opacity"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Hamburger & Quick Theme */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onCLIOpen}
            className={`text-[11px] font-mono px-2 py-1 rounded ${
              isScrolled ? 'bg-black/5 dark:bg-white/5 text-[#6F6F6F] dark:text-[#9E9E9E]' : 'bg-white/10 text-[#EDEDED]'
            }`}
          >
            &gt;_
          </button>
          <button
            onClick={toggle}
            className="p-2 text-sm"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 text-lg"
            aria-label="Open menu"
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div className="lg:hidden mt-2 mx-3 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] shadow-xl bg-[#F4F4F0] dark:bg-[#14161B] text-[#111111] dark:text-[#EDEDED] px-6 py-6 space-y-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[11px] text-[#6F6F6F] dark:text-[#9E9E9E] pb-2 border-b border-black/[0.08] dark:border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>OPEN TO WORK</span>
          </div>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-2 text-sm font-semibold tracking-wider text-[#111111] dark:text-[#EDEDED]"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-black/20 dark:border-white/20 text-[#111111] dark:text-[#EDEDED]"
            >
              <FiFileText />
              <span>DOWNLOAD RESUME / CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MinimalNav;
