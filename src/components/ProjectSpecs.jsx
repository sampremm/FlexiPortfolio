import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index, isFeatured = false }) => {
  const getConstraints = (title) => {
    if (title.toLowerCase().includes('vercel')) {
      return [
        { label: "Execution", value: "AWS ECS RunTask (env overrides)" },
        { label: "Isolation", value: "Dedicated build container per commit" },
        { label: "Telemetry", value: "Redis Pub/Sub real-time logs" },
        { label: "Proxying", value: "Private S3 Reverse Proxy" }
      ];
    }
    if (title.toLowerCase().includes('payout')) {
      return [
        { label: "Idempotency", value: "L1 Redis + L2 PostgreSQL (SELECT FOR UPDATE)" },
        { label: "Integrity", value: "Immutable append-only ledger" },
        { label: "Security", value: "HMAC-SHA256 Signed Webhooks" }
      ];
    }
    return [
      { label: "Scalability", value: "NGINX Load Balancing" },
      { label: "Latency", value: "Sub-millisecond Redis redirects" },
      { label: "Generation", value: "Collision-free KGS (Key Generation Service)" }
    ];
  };

  const constraints = getConstraints(project.title);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-amber/40 transition-all duration-500 group relative overflow-hidden ${isFeatured ? 'lg:col-span-2' : ''}`}
    >
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-2 gap-10 md:gap-16' : 'gap-8'}`}>
        <div className="relative z-10">
          <div className="font-mono text-[9px] md:text-[10px] text-amber tracking-[0.2em] mb-4 uppercase flex items-center gap-2">
            <span className="opacity-50">{isFeatured ? '★' : `0${index}`}</span>
            {isFeatured ? 'Featured System' : 'Core Infrastructure'}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black mb-1 leading-tight group-hover:text-amber transition-colors duration-300">{project.title}</h3>
          <p className="font-mono text-[10px] md:text-[11px] text-amber/60 mb-6 tracking-wide uppercase">{project.subtitle.split('utilizing')[0].split('featuring')[0]}</p>
          
          <p className="text-muted2 text-sm md:text-base leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
            {project.subtitle}
          </p>

          <div className="space-y-2 mb-8">
            {constraints.map((c, i) => (
              <div key={i} className="font-mono text-[10px] md:text-[11px] text-muted border-b border-white/5 py-2.5 flex items-start gap-4">
                <span className="text-amber/40 group-hover:text-amber transition-colors">→</span>
                <span className="leading-tight"><strong className="text-muted2 group-hover:text-text transition-colors">{c.label}:</strong> {c.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Node.js", "Redis", "Docker", "PostgreSQL"].map(t => (
              <span key={t} className="px-2 py-0.5 border border-border rounded-[2px] text-[8px] md:text-[9px] font-mono text-muted uppercase tracking-wider group-hover:border-amber/20 group-hover:text-amber transition-all">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="font-mono text-[10px] md:text-[11px] text-muted2 border border-border px-6 py-2.5 rounded-[3px] hover:text-amber hover:border-amber transition-all"
            >
              Source ↗
            </motion.a>
            {project.demo && (
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-[10px] md:text-[11px] text-black bg-[#f59e0b] px-6 py-2.5 rounded-[3px] hover:bg-[#fbbf24] transition-all font-bold shadow-[0_0_20px_rgba(245,158,11,0.15)]"
              >
                Live Demo ↗
              </motion.a>
            )}
          </div>
        </div>

        {isFeatured && (
          <div className="hidden lg:flex flex-col gap-6 relative z-10">
            <div className="bg-black/40 border border-amber/10 rounded-lg p-6 font-mono text-[10px] md:text-[11px] leading-relaxed text-muted shadow-inner group-hover:border-amber/30 transition-all duration-500">
              <div className="text-amber text-[9px] tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse"></span>
                live architecture
              </div>
              <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                POST /project &#123; gitUrl &#125;<br/>
                &nbsp;&nbsp;↓ ECS RunTask (env overrides)<br/>
                &nbsp;&nbsp;↓ git clone + detect framework<br/>
                &nbsp;&nbsp;↓ npm install + build<br/>
                &nbsp;&nbsp;↓ Redis Pub/Sub → live logs<br/>
                &nbsp;&nbsp;↓ S3 upload __outputs/&lt;id&gt;/<br/>
                &nbsp;&nbsp;↓ container auto-teardown<br/>
                &nbsp;&nbsp;↓ proxy serves /:slug<br/><br/>
                <span className="text-green/80">✓ No shared state</span><br/>
                <span className="text-green/80">✓ Full build isolation</span><br/>
                <span className="text-green/80">✓ Private S3 bucket</span>
              </div>
            </div>
            <div className="bg-black/40 border border-amber/10 rounded-lg p-6 font-mono text-[10px] md:text-[11px] leading-relaxed text-muted shadow-inner group-hover:border-amber/30 transition-all duration-500">
              <div className="text-amber text-[9px] tracking-widest uppercase mb-4">// framework detection</div>
              <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="text-[#c792ea]">if</span> (exists(<span className="text-[#c3e88d]">'vite.config.js'</span>))<br/>
                &nbsp;&nbsp;→ <span className="text-amber">vite build --base=/&lt;id&gt;/</span><br/>
                <span className="text-[#c792ea]">if</span> (exists(<span className="text-[#c3e88d]">'next.config.js'</span>))<br/>
                &nbsp;&nbsp;→ <span className="text-amber">npm run build</span><br/>
                output: dist → build → .next
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectSpecs = () => {
  const featured = PROJECTS.find(p => p.title.toLowerCase().includes('vercel'));
  const others = PROJECTS.filter(p => !p.title.toLowerCase().includes('vercel')).slice(0, 4);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[10px] md:text-[11px] text-amber tracking-[0.3em] mb-4 uppercase flex items-center gap-4">
            <div className="w-8 h-px bg-amber"></div> Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">What I've <span className="text-amber">Built.</span></h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {featured && <ProjectCard project={featured} isFeatured={true} />}
        {others.map((p, i) => (
          <ProjectCard key={i} project={p} index={i + 2} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSpecs;
