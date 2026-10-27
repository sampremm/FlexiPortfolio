import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

// Ambient glow per project so each panel reads as its own piece
const GLOWS = {
  '01': 'rgba(237, 237, 237, 0.16)',
  '02': 'rgba(16, 185, 129, 0.22)',
  '03': 'rgba(139, 92, 246, 0.22)',
  '04': 'rgba(245, 158, 11, 0.18)',
};

const repoPath = (url) => (url ? url.replace('https://github.com/', '') : 'sampremm');

/**
 * Dark "system panel" used in place of a project screenshot.
 * The architecture flow is rendered as nodes, and a highlight walks
 * through them while the panel is on screen, like a request in flight.
 */
const ProjectVisual = ({ project }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-20%' });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % project.flow.length), 900);
    return () => clearInterval(id);
  }, [inView, project.flow.length]);

  const glow = GLOWS[project.id] || GLOWS['02'];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl bg-[#0B0C0F] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] transition-all duration-500 group-hover:border-white/[0.16] group-hover:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7)]"
    >
      {/* Ambient light + grid */}
      <div
        className="absolute -top-1/3 -right-1/4 w-[80%] h-[120%] rounded-full blur-3xl opacity-80 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"
        style={{ background: `radial-gradient(closest-side, ${glow}, transparent)` }}
      />
      <div className="absolute inset-0 dot-grid [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />

      {/* Window chrome */}
      <div className="relative flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-white/45 tracking-wide truncate">
            ~/{repoPath(project.source)}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#10B981]">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#10B981] opacity-60 animate-ping" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          </span>
          <span className="hidden sm:inline">Repo</span>
        </div>
      </div>

      {/* Body */}
      <div className="relative px-5 sm:px-8 pt-8 pb-7 min-h-[17rem] sm:min-h-[19rem] flex flex-col justify-between">
        <span className="absolute -bottom-10 -right-2 font-display font-bold text-[11rem] sm:text-[13rem] leading-none text-outline select-none pointer-events-none">
          {project.id}
        </span>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">
            Request path
          </div>
          <div className="flex flex-wrap items-center gap-y-3">
            {project.flow.map((node, idx) => {
              const isActive = idx === active;
              const isPast = idx < active;
              return (
                <div key={node} className="flex items-center">
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 * idx, duration: 0.4 }}
                    className={`relative font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                      isActive
                        ? 'border-[#10B981]/60 bg-[#10B981]/15 text-white'
                        : isPast
                          ? 'border-white/[0.14] bg-white/[0.05] text-white/80'
                          : 'border-white/[0.08] bg-white/[0.02] text-white/50'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full shadow-[0_0_24px_rgba(16,185,129,0.45)] pointer-events-none" />
                    )}
                    {node}
                  </motion.span>
                  {idx < project.flow.length - 1 && (
                    <span
                      className={`h-px w-4 sm:w-6 mx-1 transition-colors duration-300 ${
                        idx < active ? 'bg-[#10B981]/70' : 'bg-white/[0.12]'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex items-end justify-between gap-6 pt-10">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
            <span>
              <span className="text-white/80">{project.flow.length}</span> stages
            </span>
            <span>
              <span className="text-white/80">{project.stack.length}</span> technologies
            </span>
          </div>
          <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white bg-white/[0.08] border border-white/[0.12] rounded-full pl-4 pr-1.5 py-1.5 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-black">
            Case study
            <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors duration-300">
              <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectVisual;
