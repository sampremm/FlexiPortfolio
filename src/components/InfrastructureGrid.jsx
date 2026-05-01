import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SPECIALIZATIONS } from '../constants';

const InfrastructureGrid = () => {
  return (
    <section className="py-16 border-t border-[#252525]" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center gap-2 font-mono text-sm mb-12">
          <span className="text-amber">user@linux:</span>
          <span className="text-cyan">~/portfolio/stack</span>
          <span className="text-white">$</span>
          <span className="text-white">neofetch --skills</span>
        </div>

      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Tools of the Craft
        </h2>
        <p className="font-mono text-xs md:text-sm text-muted uppercase tracking-[0.3em]">
          Skills that fuel my systems.
        </p>
      </div>

      <h3 className="font-mono text-xs uppercase tracking-widest text-amber mb-8">// TOOLS_OF_THE_CRAFT</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
        {SKILLS.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#121212] border border-[#252525] p-6 flex flex-col items-center justify-center gap-4 group hover:border-amber/50 transition-all aspect-square"
          >
            <div className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 text-3xl md:text-5xl">
              {skill.icon}
            </div>
            <div className="font-mono text-[9px] text-muted tracking-widest uppercase group-hover:text-white transition-colors text-center font-bold">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#0c0c0c] border border-[#252525] p-6 md:p-8 font-mono">
          <div className="flex items-center gap-2 text-cyan text-[10px] uppercase tracking-widest mb-6 font-bold">
            <span className="animate-pulse">●</span> sys_info.report
          </div>
          <div className="space-y-4">
            {[
              { label: 'Primary Specialization', value: 'Distributed Systems & Cloud Architecture' },
              { label: 'Core Methodology', value: 'Idempotency, Event-Driven, Concurrency' },
              { label: 'Infrastructure', value: 'AWS ECS Fargate, Docker, Terraform' },
              { label: 'Monitoring', value: 'Redis Pub/Sub, Real-time Telemetry' }
            ].map(info => (
              <div key={info.label} className="flex flex-col gap-1 border-b border-white/5 pb-2">
                <span className="text-[10px] text-muted uppercase tracking-tighter">{info.label}:</span>
                <span className="text-sm text-white font-bold">{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#121212] border border-[#252525] p-6 md:p-8 font-mono">
          <div className="flex items-center gap-2 text-amber text-[10px] uppercase tracking-widest mb-6 font-bold">
            <span className="animate-pulse">●</span> in_progress.specialization
          </div>
          <div className="space-y-4">
            {SPECIALIZATIONS.map((spec, i) => (
              <div key={i} className="flex items-center gap-4 text-white text-sm font-bold bg-[#0c0c0c] p-3 border border-white/5">
                <span className="text-amber">0{i+1}</span>
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default InfrastructureGrid;
