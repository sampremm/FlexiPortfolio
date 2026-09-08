import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import HybridHero from './components/HybridHero';
import ProjectSpecs from './components/ProjectSpecs';
import InfrastructureGrid from './components/InfrastructureGrid';
import ResearchSection from './components/ResearchSection';
import ContactForm from './components/ContactForm';
import { ABOUT, SOCIAL_MEDIA_LINKS, PROFILE } from './constants';

/* ─── Shared Motion Variants ─── */
const SPRING = { type: 'spring', stiffness: 280, damping: 24, mass: 0.8 };
const SOFT   = { type: 'spring', stiffness: 180, damping: 22 };

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0, transition: SPRING },
};

const slideLeft = {
  hidden: { opacity: 0, x: -14 },
  show:   { opacity: 1, x: 0, transition: SPRING },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show:   { opacity: 1, scale: 1, transition: SOFT },
};

const stagger = (delay = 0.08) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
});

const NAV_TABS = [
  { id: 'about',    label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills',   label: 'skills' },
  { id: 'research', label: 'research' },
  { id: 'contact',  label: 'contact' },
];

/* ─── App ─── */
const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  const [time, setTime]         = useState(new Date().toLocaleTimeString());
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return () => clearInterval(timer);

    const cur = document.getElementById('cursor');
    const moveCursor = (e) => {
      if (cur) cur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-[#07070b] min-h-screen text-[#d1d1d1] selection:bg-amber selection:text-black p-0 md:p-6 lg:cursor-none flex items-center justify-center">
      <div id="cursor" />

      {/* Terminal Shell */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1,    y: 0 }}
        transition={{ ...SOFT, delay: 0.1 }}
        className="max-w-[1600px] w-full bg-[#09090f] border border-[#232334] rounded-none md:rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col h-[calc(100vh-3rem)]"
      >
        {/* Terminal Header */}
        <header className="bg-[#10101a] px-5 py-3 flex items-center justify-between border-b border-[#232334] z-[60] shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex gap-2 mr-3">
              {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.4 }}
                  transition={SPRING}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
              <span className="text-amber font-semibold">user@backend:</span>
              <span className="text-cyan-400 font-medium">~/portfolio</span>
              <span className="text-slate-600">— zsh — 80x24 (Darwin arm64)</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              CLUSTER: ONLINE
            </div>
            <div className="font-mono text-[11px] text-slate-400 tracking-widest uppercase">{time}</div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="bg-[#0c0c14] px-4 flex items-center border-b border-[#232334] z-50 overflow-x-auto no-scrollbar shadow-lg shrink-0">
          <div className="flex items-center">
            {NAV_TABS.map((tab) => (
              <motion.a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
                className={`px-6 py-3.5 border-r border-[#232334] font-mono text-xs uppercase tracking-widest transition-colors whitespace-nowrap flex items-center gap-2 relative group ${
                  activeTab === tab.id ? 'text-amber font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <motion.span
                  animate={{ color: activeTab === tab.id ? '#f59e0b' : 'rgba(245,158,11,0.35)' }}
                  transition={{ duration: 0.2 }}
                >
                  $
                </motion.span>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeAppNav"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber"
                    transition={SPRING}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="flex-grow min-w-[20px]" />

          <div className="flex items-center gap-3 py-2">
            <motion.a
              href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 22px rgba(245,158,11,0.45)' }}
              whileTap={{ scale: 0.96 }}
              transition={SPRING}
              className="px-4 py-2 bg-amber text-black font-mono text-[11px] font-bold uppercase tracking-wider rounded"
            >
              RESUME ↗
            </motion.a>
          </div>
        </nav>

        {/* Scrollable Main Content */}
        <main className="flex-grow min-h-0 overflow-y-auto custom-scrollbar relative bg-[#08080e]">
          {/* Scroll progress bar */}
          <motion.div
            className="sticky top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber via-yellow-400 to-cyan-400 z-[70] origin-left"
            style={{ scaleX }}
          />

          {/* Hero */}
          <HybridHero />

          {/* ── About Section ── */}
          <section id="about" className="py-24 border-t border-white/[0.08] relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

              {/* Breadcrumb */}
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-2 font-mono text-xs mb-12 text-slate-400"
              >
                <span className="text-amber">user@backend:</span>
                <span className="text-cyan-400">~/portfolio</span>
                <span className="text-white">$</span>
                <span className="text-white">cat about_architect.md</span>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* Left: Narrative */}
                <motion.div
                  variants={stagger(0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="lg:col-span-7 space-y-8 text-slate-300 leading-relaxed font-mono text-sm md:text-base border-l-2 border-amber/40 pl-6 md:pl-10"
                >
                  <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    {ABOUT.title}
                  </motion.h2>
                  <motion.div variants={fadeUp} className="space-y-6 text-slate-300 text-sm md:text-[15px] leading-relaxed">
                    <p>{ABOUT.text}</p>
                    <p>{ABOUT.subtext}</p>
                  </motion.div>
                  <motion.div variants={fadeUp} className="pt-6 border-t border-white/[0.08] flex flex-col gap-2">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-amber font-bold">
                      // ENGINEERING_FOCUS & AVAILABILITY
                    </p>
                    <p className="text-xs text-slate-300">
                      Targeting: <strong className="text-white">Backend Engineer / Distributed Systems</strong><br />
                      Locations: <strong className="text-white">{PROFILE.location}</strong><br />
                      Status: <strong className="text-emerald-400 font-semibold">{PROFILE.status}</strong>
                    </p>
                  </motion.div>
                </motion.div>

                {/* Right: Stat Cards */}
                <motion.div
                  variants={stagger(0.12)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
                >
                  {ABOUT.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      variants={scaleIn}
                      whileHover={{
                        y: -6,
                        borderColor: 'rgba(245,158,11,0.5)',
                        boxShadow: '0 14px 40px rgba(245,158,11,0.08)',
                        transition: SPRING,
                      }}
                      className="bg-[#0e0e18] border border-white/[0.08] p-6 md:p-8 rounded-xl shadow-xl group cursor-default"
                    >
                      <motion.div
                        className="text-4xl md:text-5xl font-black text-amber mb-2 font-mono"
                        whileHover={{ scale: 1.07, transition: SPRING }}
                        style={{ transformOrigin: 'left' }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-relaxed">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <ProjectSpecs />

          {/* Skills */}
          <InfrastructureGrid />

          {/* Research */}
          <ResearchSection />

          {/* ── Contact Section ── */}
          <section id="contact" className="py-24 border-t border-white/[0.08] relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-2 font-mono text-xs mb-12 text-slate-400"
              >
                <span className="text-amber">user@backend:</span>
                <span className="text-cyan-400">~/contacts</span>
                <span className="text-white">$</span>
                <span className="text-white">./initiate_handshake.sh</span>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left: Headline & Social */}
                <motion.div
                  variants={stagger(0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="flex flex-col gap-8"
                >
                  <motion.div variants={fadeUp}>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
                      Let's build <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-yellow-400">
                        resilient backends.
                      </span>
                    </h2>
                    <p className="text-slate-300 font-mono text-sm leading-relaxed mb-6 max-w-md">
                      Open to Backend / Distributed Systems roles in Hyderabad, Bangalore, and Pune.
                      Immediate joiner ready to architect high-throughput infrastructure.
                    </p>
                    <motion.a
                      href="mailto:samprem888111@gmail.com"
                      whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(245,158,11,0.45)' }}
                      whileTap={{ scale: 0.97 }}
                      transition={SPRING}
                      className="px-6 py-3 bg-amber text-black font-mono text-xs font-bold uppercase tracking-wider rounded inline-flex items-center gap-2"
                    >
                      Direct Email: samprem888111@gmail.com ↗
                    </motion.a>
                  </motion.div>

                  <motion.div variants={stagger(0.08)} className="flex flex-col gap-2.5">
                    <motion.p variants={fadeUp} className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber/80 font-bold mb-1">
                      // DIRECT_NETWORKS
                    </motion.p>
                    {SOCIAL_MEDIA_LINKS.map((link, i) => (
                      <motion.a
                        key={i}
                        variants={fadeUp}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 6, borderColor: 'rgba(245,158,11,0.55)', transition: SPRING }}
                        className="flex justify-between items-center bg-[#0d0d16] border border-white/[0.08] p-4 rounded-lg hover:bg-[#12121e] transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <motion.span
                            className="text-amber text-sm"
                            whileHover={{ scale: 1.2, rotate: -5, transition: SPRING }}
                          >
                            {link.icon}
                          </motion.span>
                          <span className="font-mono text-xs text-white uppercase font-bold tracking-wider">
                            [{link.label}]
                          </span>
                        </div>
                        <span className="text-slate-400 font-mono text-xs truncate pl-4 group-hover:text-amber transition-colors">
                          {link.detail} ↗
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right: Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ ...SOFT, delay: 0.15 }}
                  className="bg-[#0b0b14] border border-[#232334] p-6 md:p-8 rounded-xl shadow-2xl"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-cyan-400 uppercase tracking-widest mb-6 pb-3 border-b border-white/[0.08]">
                    <span className="flex items-center gap-2 font-bold">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      contact_form.init()
                    </span>
                    <span className="text-slate-500 text-[10px]">TLS 1.3 / HMAC</span>
                  </div>
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-8 px-6 md:px-16 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4 bg-[#07070b]"
          >
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">
              zsh: version 5.9-release (x86_64-apple-darwin22.0)
            </p>
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Thalla Sam Prem Kumar · Backend Engineer
            </p>
          </motion.footer>
        </main>
      </motion.div>
    </div>
  );
};

export default App;
