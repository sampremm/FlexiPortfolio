import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from '../constants';

const ResearchSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="research">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-4">
          <div className="w-10 h-px bg-amber"></div>
          <span className="font-mono text-[10px] text-amber uppercase tracking-[0.4em] font-bold">Research Publication</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              {ABOUT.publication.title}
            </h2>
            
            <div className="space-y-6 text-muted2 text-lg leading-relaxed max-w-3xl">
              <p>
                My technical foundation is rooted in mathematical optimization. This research paper explores the implementation of the **Cuckoo Search Algorithm (CSA)**—a nature-inspired metaheuristic algorithm—for solving non-linear optimization problems in energy systems.
              </p>
              <p>
                The study demonstrates how CSA outperforms traditional methods like Particle Swarm Optimization (PSO) and Genetic Algorithms (GA) by maintaining a superior balance between **exploration** (searching new areas) and **exploitation** (refining known good areas), effectively preventing premature convergence in high-dimensional search spaces.
              </p>
              <p className="font-mono text-sm border-l-2 border-amber pl-6 py-2 italic bg-amber/5">
                "Proved that the Lévy flight mechanism in CSA significantly reduces computational overhead while increasing the probability of finding global optima in complex, multi-modal cost functions."
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <a 
                href={ABOUT.publication.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-amber"
              >
                View Full Publication ↗
              </a>
              <div className="bg-surface border border-border px-6 py-4 rounded-lg flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-amber/10 flex items-center justify-center text-amber">
                  <span className="font-bold font-mono text-xs">ID</span>
                </div>
                <div>
                  <div className="text-[10px] text-muted uppercase tracking-widest">Publication ID</div>
                  <div className="font-mono text-sm font-bold">ISSN: 2236-6124</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface border border-border p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              </div>
              <h4 className="font-mono text-[10px] text-amber uppercase tracking-[0.2em] mb-4 font-bold">Core Metrics</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted text-xs uppercase font-mono">Convergence</span>
                  <span className="text-green text-xs font-mono font-bold">High</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted text-xs uppercase font-mono">Robustness</span>
                  <span className="text-green text-xs font-mono font-bold">Superior</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted text-xs uppercase font-mono">Complexity</span>
                  <span className="text-amber text-xs font-mono font-bold">O(N log N)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/20 border border-white/5 p-6 rounded-xl font-mono text-[11px] text-muted leading-relaxed">
              <span className="text-amber">// CSA Pseudocode</span><br/>
              Objective function f(x), x = (x1, ..., xd)t<br/>
              Generate initial population of n host nests xi<br/>
              <span className="text-[#c792ea]">while</span> (t &lt; MaxGeneration)<br/>
              &nbsp;&nbsp;Get a cuckoo randomly by <span className="text-green">Lévy flights</span><br/>
              &nbsp;&nbsp;Evaluate its fitness Fi<br/>
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
