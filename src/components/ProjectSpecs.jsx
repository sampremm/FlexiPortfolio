import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index, isFeatured = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-[#0c0c0c] border border-[#252525] hover:border-amber/40 transition-all group relative ${isFeatured ? 'lg:col-span-2' : ''}`}
    >
      {/* Project Image Thumbnail */}
      {project.image && (
        <div className="relative h-40 overflow-hidden border-b border-[#252525]">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="font-mono text-[9px] bg-amber/10 border border-amber/20 text-amber px-2 py-0.5 uppercase tracking-widest">
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3 font-mono text-[9px] text-muted/60">
            {isFeatured ? `[ FEATURED ]` : `PID_${index.toString().padStart(3, '0')}`}
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#252525]">
          <div className="font-mono text-[10px] text-amber uppercase tracking-[0.2em]">
            {isFeatured ? `[ ${project.category.toUpperCase()} ]` : `[ PID_${index.toString().padStart(3, '0')} ]`}
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full border border-white/10 group-hover:bg-amber/20 transition-all"></div>
            <div className="w-2 h-2 rounded-full border border-white/10 group-hover:bg-amber/20 transition-all"></div>
          </div>
        </div>

        <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-2 gap-12' : 'gap-8'}`}>
          <div>
            <h3 className="text-2xl font-black mb-2 group-hover:text-amber transition-colors font-mono tracking-tighter">{project.title.toUpperCase()}</h3>
            <p className="font-mono text-xs text-muted mb-8 leading-relaxed opacity-80">
              <span className="text-cyan font-bold">#</span> {project.description}
            </p>
            
            <div className="space-y-3 mb-10">
              {project.specs.map((c, i) => (
                <div key={i} className="font-mono text-[11px] text-muted leading-relaxed flex items-start gap-3">
                  <span className="text-amber/40">→</span>
                  <span><strong className="text-white">{c.label}:</strong> {c.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-[#252525]">
              <a 
                href={project.source} 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-[10px] text-muted hover:text-amber transition-all flex items-center gap-2"
              >
                <span className="text-amber">❯</span> Source ↗
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-mono text-[10px] text-black bg-amber px-4 py-1.5 font-bold hover:bg-green-400 transition-all"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>

          {isFeatured && project.architecture && (
            <div className="hidden lg:flex flex-col gap-4">
              <div className="bg-[#121212] border border-[#252525] p-5 font-mono text-[10px] leading-relaxed text-muted shadow-inner group-hover:border-amber/30 transition-all">
                <div className="text-amber tracking-widest uppercase mb-4 opacity-50 font-bold">// LIVE ARCHITECTURE</div>
                {project.architecture.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <div className="bg-[#121212] border border-[#252525] p-5 font-mono text-[10px] leading-relaxed text-muted shadow-inner group-hover:border-amber/30 transition-all">
                <div className="text-cyan tracking-widest uppercase mb-4 opacity-50 font-bold">// FRAMEWORK DETECTION</div>
                <span className="text-amber">if</span> (exists(<span className="text-green-400">'vite.config.js'</span>))<br/>
                &nbsp;&nbsp;→ <span className="text-white">vite build --base=/&lt;id&gt;/</span><br/>
                <span className="text-amber">if</span> (exists(<span className="text-green-400">'next.config.js'</span>))<br/>
                &nbsp;&nbsp;→ <span className="text-white">npm run build</span><br/>
                <span className="text-muted mt-2 block">output: dist → build → .next</span>
              </div>
              {project.highlights && (
                <div className="flex gap-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="bg-[#121212] border border-[#252525] px-3 py-1 font-mono text-[9px] text-green-400">
                      ✓ {h}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const ProjectSpecs = () => {
  return (
    <section className="py-16 border-t border-[#252525]" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center gap-2 font-mono text-sm mb-12">
          <span className="text-amber">user@linux:</span>
          <span className="text-cyan">~/portfolio/projects</span>
          <span className="text-white">$</span>
          <span className="text-white">ls -la --built</span>
        </div>

      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Selected Work
        </h2>
        <p className="font-mono text-xs md:text-sm text-muted uppercase tracking-[0.3em]">
          What I've Built.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} index={i + 1} isFeatured={p.category === 'Featured System'} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProjectSpecs;
