import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH } from '../constants';

const ResearchSection = () => {
  return (
    <section className="py-16 border-t border-[#252525]" id="research">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center gap-2 font-mono text-sm mb-16">
          <span className="text-amber">user@linux:</span>
          <span className="text-cyan">~/portfolio/research</span>
          <span className="text-white">$</span>
          <span className="text-white">open research_pub.pdf</span>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <div className="bg-[#121212] border border-[#252525] p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-muted uppercase">
              Publication ID: {RESEARCH.id}
            </div>
            <h2 className="text-2xl md:text-4xl font-black leading-tight mb-10 font-mono tracking-tighter">
              Research Publication: {RESEARCH.title}
            </h2>
            
            <div className="space-y-8 font-mono text-sm md:text-base leading-relaxed text-muted">
              <p className="border-l-2 border-amber/30 pl-6 py-2">
                {RESEARCH.description}
              </p>
              <p>
                {RESEARCH.details}
              </p>
              <p className="italic text-white bg-white/5 p-4 border-l-2 border-amber">
                "{RESEARCH.quote}"
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 items-center border-t border-[#252525] pt-10">
              <a 
                href={RESEARCH.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-terminal"
              >
                View Full Publication ↗
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-[#121212] border border-[#252525] p-6 font-mono">
            <h4 className="text-[10px] text-amber uppercase tracking-widest mb-6 font-bold">// CORE_METRICS.LOG</h4>
            <div className="space-y-4">
              {RESEARCH.metrics.map(m => (
                <div key={m.label} className="flex justify-between border-b border-white/5 pb-2 text-[11px]">
                  <span className="text-muted">{m.label}</span>
                  <span className="text-amber font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-black/40 border border-[#252525] p-6 font-mono text-[10px] text-muted leading-relaxed">
            <span className="text-amber">// CSA_PSEUDOCODE.PY</span><br/>
            <span className="text-cyan">Objective function f(x), x = (x1, ..., xd)t</span><br/>
            <span className="text-white">Generate initial population of n host nests xi</span><br/>
            <span className="text-[#c792ea]">while</span> (t &lt; MaxGeneration)<br/>
            &nbsp;&nbsp;<span className="text-muted">Get a cuckoo randomly by Lévy flights</span><br/>
            &nbsp;&nbsp;<span className="text-muted">Evaluate its fitness Fi</span><br/>
            &nbsp;&nbsp;...<br/>
            <span className="text-[#c792ea]">end while</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ResearchSection;
