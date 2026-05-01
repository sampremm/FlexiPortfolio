import React, { useEffect, useState } from 'react';
import HybridHero from './components/HybridHero';
import ProjectSpecs from './components/ProjectSpecs';
import InfrastructureGrid from './components/InfrastructureGrid';
import ResearchSection from './components/ResearchSection';
import Photography from './components/Photography';
import { ABOUT, SOCIAL_MEDIA_LINKS } from './constants';
import { motion, useScroll, useSpring } from 'framer-motion';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) return;

    const cur = document.getElementById('cursor');
    const fol = document.getElementById('cursor-follower');
    let mx = 0, my = 0, fx = 0, fy = 0;

    const moveCursor = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) cur.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
    };

    const animateFollower = () => {
      fx += (mx - fx - 17) * 0.12;
      fy += (my - fy - 17) * 0.12;
      if (fol) fol.style.transform = `translate(${fx}px, ${fy}px)`;
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', moveCursor);
    animateFollower();

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (fol) {
          fol.style.width = '52px';
          fol.style.height = '52px';
          fol.style.borderColor = 'rgba(245,158,11,0.6)';
        }
      });
      link.addEventListener('mouseleave', () => {
        if (fol) {
          fol.style.width = '34px';
          fol.style.height = '34px';
          fol.style.borderColor = 'rgba(245,158,11,0.35)';
        }
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="bg-[#080810] min-h-screen text-[#f1f5f9] selection:bg-amber/30 selection:text-white lg:cursor-none">
      <div id="cursor" className="hidden lg:block"></div>
      <div id="cursor-follower" className="hidden lg:block"></div>

      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-amber z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-[#080810]/85 backdrop-blur-xl border-b border-white/5">
        <div className="font-mono text-[11px] md:text-[13px] text-amber tracking-[0.2em] font-bold truncate pr-4">THALLA SAM PREM KUMAR</div>
        
        <div className="flex items-center gap-4 md:gap-10">
          <div className="hidden sm:flex gap-6 md:gap-10 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-muted">
            <a href="#about" className="hover:text-amber transition-colors">about</a>
            <a href="#projects" className="hover:text-amber transition-colors">projects</a>
            <a href="#skills" className="hover:text-amber transition-colors">skills</a>
          </div>
          <a href="#" className="font-mono text-[10px] md:text-[11px] font-bold bg-amber text-black px-4 md:px-5 py-2 rounded-[3px] hover:bg-amber2 transition-all whitespace-nowrap">RESUME ↗</a>
        </div>
      </nav>

      <main>
        <HybridHero />

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[10px] md:text-[11px] text-amber tracking-[0.3em] mb-4 uppercase flex items-center gap-4">
              <div className="w-8 h-px bg-amber"></div> About Me
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-12 md:mb-20 leading-[1.1]">I build systems that<br/><span className="text-amber">don't break.</span></h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-muted2 leading-[1.8] text-base md:text-lg"
            >
              <p>I build backend systems that handle <strong className="text-text">scale, failure, and complexity.</strong> Most recently, I architected a <strong className="text-text">Vercel-clone</strong> — a 4-service event-driven deployment pipeline where an API server triggers isolated <strong className="text-text">AWS ECS containers</strong> that clone GitHub repos, auto-detect frameworks by inspecting config files, run builds, and upload artifacts to S3.</p>
              <p>Before that, I built a <strong className="text-text">fintech payout engine</strong> with a two-tier idempotency layer — <span className="bg-amber/10 text-amber px-2 py-0.5 rounded font-mono text-sm">L1 Redis + L2 PostgreSQL</span> — with row locks to prevent double-spend and an immutable append-only ledger.</p>
              <p className="text-sm font-mono pt-4 opacity-70">Currently targeting <strong className="text-text">Backend / Platform Engineering</strong> roles in Hyderabad, Bangalore, and Pune.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface border border-border p-8 rounded-lg relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber to-transparent"></div>
                <div className="text-4xl md:text-5xl font-black text-amber font-mono mb-2">5+</div>
                <div className="font-mono text-[9px] text-muted tracking-widest uppercase">Production-grade systems shipped</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface border border-border p-8 rounded-lg relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber to-transparent"></div>
                <div className="text-4xl md:text-5xl font-black text-amber font-mono mb-2">3</div>
                <div className="font-mono text-[9px] text-muted tracking-widest uppercase">AWS services in production</div>
              </motion.div>
            </div>
          </div>
        </section>

        <ProjectSpecs />
        <ResearchSection />
        <Photography />
        <InfrastructureGrid />

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-start">
            <div>
              <div className="font-mono text-[10px] md:text-[11px] text-amber tracking-[0.3em] mb-4 uppercase flex items-center gap-4">
                <div className="w-8 h-px bg-amber"></div> Get in touch
              </div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">Got a role<br/>in mind?<br/><span className="text-amber">Let's talk.</span></h2>
              <p className="text-muted2 text-base md:text-lg mb-12 max-w-md">Open to Backend / Platform Engineering roles in <strong>Hyderabad, Bangalore, and Pune.</strong> Immediate joiner.</p>
              <a href="mailto:samprem888111@gmail.com" className="btn-amber inline-block">Send Email ↗</a>
            </div>
            
            <div className="flex flex-col gap-3">
              {SOCIAL_MEDIA_LINKS.map((link, i) => (
                <motion.a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex justify-between items-center bg-surface border border-border p-5 rounded-lg hover:border-amber group transition-all"
                >
                  <span className="font-mono text-[10px] text-amber font-bold uppercase tracking-widest">Link</span>
                  <span className="text-muted2 font-mono text-xs md:text-sm group-hover:text-white transition-colors truncate pl-4">{link.href.replace('https://', '').replace('mailto:', '')}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-[0.2em]">© 2026 Thalla Sam Prem Kumar</p>
          <p className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-[0.2em] text-center md:text-right">Backend Engineer · Hyderabad · Immediate Joiner</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
