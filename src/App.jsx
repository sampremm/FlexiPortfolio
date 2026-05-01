import React, { useEffect, useState } from 'react';
import HybridHero from './components/HybridHero';
import ProjectSpecs from './components/ProjectSpecs';
import InfrastructureGrid from './components/InfrastructureGrid';
import ResearchSection from './components/ResearchSection';
import Photography from './components/Photography';
import { ABOUT, SOCIAL_MEDIA_LINKS, PROFILE } from './constants';
import { motion, useScroll, useSpring } from 'framer-motion';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return;

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
    <div className="bg-[#0c0c0c] min-h-screen text-[#d1d1d1] selection:bg-amber selection:text-black p-0 md:p-8 lg:cursor-none flex items-center justify-center">
      <div id="cursor"></div>

      {/* Main Terminal Frame */}
      <div className="max-w-[1600px] w-full bg-[#0c0c0c] border border-[#252525] rounded-none md:rounded-lg overflow-hidden shadow-2xl flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Terminal Header / Top Bar */}
        <header className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#252525] z-[60]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-muted">
              <span className="text-amber">user@linux:</span>
              <span className="text-cyan">~/portfolio</span>
              <span className="opacity-50">— bash — 80x24</span>
            </div>
          </div>
          <div className="font-mono text-[11px] text-muted tracking-widest uppercase">
            {time}
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="bg-[#0a0a0a] px-4 flex border-b border-[#252525] z-50 overflow-x-auto no-scrollbar shadow-xl">
          {[
            { id: 'about', label: 'about' },
            { id: 'projects', label: 'projects' },
            { id: 'skills', label: 'skills' },
            { id: 'research', label: 'research' },
            { id: 'gallery', label: 'gallery' }
          ].map((tab) => (
            <a 
              key={tab.id}
              href={`#${tab.id}`} 
              className="px-8 py-3 border-r border-[#252525] font-mono text-[11px] uppercase tracking-widest text-white/70 hover:bg-[#1a1a1a] hover:text-amber transition-all whitespace-nowrap flex items-center gap-2 group"
            >
              <span className="text-amber/50 group-hover:text-amber transition-colors">$</span>
              {tab.label}
            </a>
          ))}
          <div className="flex-grow"></div>
          <a 
            href="https://drive.google.com/file/d/1afwwbeZZToRgAAX4F9aDRYNP1QJPJeTu/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2.5 bg-amber text-black font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-green-400 transition-all"
          >
            RESUME ↗
          </a>
        </nav>

        <main className="flex-grow overflow-y-auto custom-scrollbar relative">
          {/* Scroll Progress Bar Inside Terminal */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-[1px] bg-amber z-[70] origin-left"
            style={{ scaleX }}
          />

          <HybridHero />

          {/* About Section */}
          <section id="about" className="py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
              <div className="flex items-center gap-2 font-mono text-sm mb-16 opacity-60">
                <span className="text-amber">user@linux:</span>
                <span className="text-cyan">~/portfolio</span>
                <span className="text-white">$</span>
                <span className="text-white">cat about_me.md</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-7 space-y-10 text-[#d1d1d1] leading-relaxed font-mono text-sm md:text-base border-l border-[#252525] pl-8 md:pl-12">
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                    {ABOUT.title}
                  </h2>
                  <div className="space-y-8 opacity-90">
                    <p>{ABOUT.text}</p>
                    <p>{ABOUT.subtext}</p>
                  </div>
                  <div className="pt-8 border-t border-[#252525] flex flex-col gap-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-amber font-bold">// Current_Status</p>
                    <p className="opacity-70">
                      Targeting: Backend / Platform Engineering<br/>
                      Locations: {PROFILE.location}
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {ABOUT.stats.map((stat, i) => (
                    <div key={i} className="bg-[#121212] border border-[#252525] p-8 md:p-10 rounded-none hover:border-amber/50 transition-all group">
                      <div className="text-4xl md:text-5xl font-black text-amber mb-3 group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                      <div className="font-mono text-[10px] text-muted uppercase tracking-widest leading-relaxed max-w-[150px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <ProjectSpecs />
          <ResearchSection />
          <Photography />
          <InfrastructureGrid />

          {/* Contact Section */}
          <section id="contact" className="py-16 border-t border-[#252525]">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
              <div className="flex items-center gap-2 font-mono text-sm mb-12">
                <span className="text-amber">user@linux:</span>
                <span className="text-cyan">~/portfolio</span>
                <span className="text-white">$</span>
                <span className="text-white">./contact_form.py</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
                    Got a role<br/><span className="text-amber">in mind?</span>
                  </h2>
                  <h3 className="text-2xl font-mono text-white mb-8">Let's talk.</h3>
                  <p className="text-muted font-mono text-sm mb-8">Open to Backend / Platform Engineering roles in Hyderabad, Bangalore, and Pune. Immediate joiner.</p>
                  <a href="mailto:samprem888111@gmail.com" className="btn-terminal inline-block">
                  Send Email ↗
                </a>
              </div>
              
              <div className="flex flex-col gap-2">
                {SOCIAL_MEDIA_LINKS.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex justify-between items-center bg-[#121212] border border-[#252525] p-4 hover:border-amber hover:bg-[#1a1a1a] transition-all group"
                  >
                    <span className="font-mono text-[10px] text-amber uppercase font-bold tracking-widest">[{link.label}]</span>
                    <span className="text-muted font-mono text-xs truncate pl-4 group-hover:text-white">{link.href.replace('https://', '').replace('mailto:', '')}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

          <footer className="py-8 px-6 md:px-16 border-t border-[#252525] flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0c0c0c]">
            <p className="font-mono text-[9px] text-muted uppercase tracking-[0.2em]">bash: version 5.2.15-release (x86_64-pc-linux-gnu)</p>
            <p className="font-mono text-[9px] text-muted uppercase tracking-[0.2em]">© 2026 Thalla Sam Prem Kumar</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
