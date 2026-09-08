import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiRotateCcw, FiChevronRight, FiFileText, FiActivity } from 'react-icons/fi';
import { RESEARCH } from '../../constants';

// P-V curve under Partial Shading Condition (PSC)
const SVG_PATH =
  'M 15 140 C 40 135, 55 105, 72 95 C 90 85, 105 115, 120 110 C 132 85, 140 65, 148 60 C 160 55, 175 85, 190 75 C 202 45, 210 20, 218 18 C 228 16, 240 50, 252 90 C 262 120, 275 138, 285 140';

const CSA_STEPS = [
  {
    step: 0,
    title: 'Random Initialization (N=3 Nests)',
    desc: '3 candidate duty cycles deployed across voltage spectrum [0.20, 0.45, 0.75].',
    nests: [
      { id: 'N1', x: 65, y: 100, v: 58.2, p: 68.4, d: 0.22 },
      { id: 'N2', x: 135, y: 70, v: 125.4, p: 130.1, d: 0.48 },
      { id: 'N3', x: 235, y: 45, v: 228.1, p: 175.6, d: 0.82 },
    ],
    power: 175.6,
    voltage: 228.1,
    duty: 0.82,
    efficiency: 79.7,
    status: 'Exploring search space via random distribution',
  },
  {
    step: 1,
    title: 'Lévy Flight Heavy-Tailed Jump',
    desc: 'Stochastic jump hops over local minimums and valleys without local entrapment.',
    nests: [
      { id: 'N1', x: 185, y: 70, v: 175.0, p: 155.0, d: 0.58 },
      { id: 'N2', x: 205, y: 25, v: 198.5, p: 212.0, d: 0.63 },
      { id: 'N3', x: 225, y: 25, v: 220.0, p: 208.5, d: 0.70 },
    ],
    power: 212.0,
    voltage: 198.5,
    duty: 0.63,
    efficiency: 96.2,
    status: 'Lévy flight executed: x_i(t+1) = x_i(t) + α ⊕ Lévy(λ). Jumped over LMPP 2 trap',
  },
  {
    step: 2,
    title: 'Alien Egg Abandonment (Pa = 0.25)',
    desc: 'Suboptimal nests discarded; replacement vectors converge around global maximum basin.',
    nests: [
      { id: 'N1', x: 212, y: 19, v: 204.0, p: 219.8, d: 0.61 },
      { id: 'N2', x: 216, y: 18, v: 205.2, p: 220.2, d: 0.62 },
      { id: 'N3', x: 210, y: 20, v: 202.8, p: 218.4, d: 0.60 },
    ],
    power: 220.2,
    voltage: 205.2,
    duty: 0.62,
    efficiency: 99.7,
    status: 'Worst nests abandoned. Search space narrowed to global maximum',
  },
  {
    step: 3,
    title: 'GMPP Locked (Zero Oscillation)',
    desc: 'All 3 nests converged onto Global Maximum Power Point (220.4W) in 0.11s.',
    nests: [
      { id: 'N1', x: 218, y: 18, v: 205.4, p: 220.4, d: 0.62 },
      { id: 'N2', x: 218, y: 18, v: 205.4, p: 220.4, d: 0.62 },
      { id: 'N3', x: 218, y: 18, v: 205.4, p: 220.4, d: 0.62 },
    ],
    power: 220.4,
    voltage: 205.4,
    duty: 0.62,
    efficiency: 100.0,
    status: 'GLOBAL MAXIMUM LOCKED: 220.4W | 0.00% power ripple | Δt = 0.11s',
  },
];

const PNO_STEPS = [
  {
    step: 0,
    title: 'Fixed-Step Perturbation Init',
    desc: 'P&O perturbs duty cycle in fixed step increments (+ΔD = 0.02).',
    agent: { x: 50, y: 120, v: 45.0, p: 42.0, d: 0.2 },
    power: 42.0,
    voltage: 45.0,
    duty: 0.2,
    efficiency: 19.1,
    status: 'Ascending initial slope. dP/dV > 0',
  },
  {
    step: 1,
    title: 'Climbing LMPP 1 Peak',
    desc: 'Algorithm reaches first local peak and descends into valley.',
    agent: { x: 105, y: 110, v: 100.0, p: 102.0, d: 0.38 },
    power: 102.0,
    voltage: 100.0,
    duty: 0.38,
    efficiency: 46.3,
    status: 'Ascending toward LMPP 2. Fixed step size.',
  },
  {
    step: 2,
    title: 'Trapped in Local Peak (142W)',
    desc: 'Slope sign flips at 142W. Fixed perturbation cannot bridge the gap to GMPP.',
    agent: { x: 148, y: 60, v: 145.0, p: 142.0, d: 0.5 },
    power: 142.0,
    voltage: 145.0,
    duty: 0.5,
    efficiency: 64.4,
    status: 'ENTRAPMENT: Trapped at LMPP 2 (142W). Next step gives dP/dV < 0, reverses.',
  },
  {
    step: 3,
    title: 'Continuous Steady-State Oscillation',
    desc: 'P&O oscillates permanently around 142W. 36.4% available solar energy lost.',
    agent: { x: 145, y: 63, v: 142.0, p: 139.5, d: 0.49 },
    power: 139.5,
    voltage: 142.0,
    duty: 0.49,
    efficiency: 63.3,
    status: 'STEADY-STATE RIPPLE: Permanent ±4.5W power oscillation. Failed to reach GMPP.',
  },
];

const EditorialResearch = () => {
  const [algo, setAlgo] = useState('csa');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prev) => {
          if (prev >= 3) {
            setIsPlaying(false);
            return 3;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeData = algo === 'csa' ? CSA_STEPS[step] : PNO_STEPS[step];

  const handleSwitch = (newAlgo) => {
    setAlgo(newAlgo);
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <section id="research" className="py-28 sm:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/[0.12] dark:border-white/[0.12]">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#10B981] mb-2 font-semibold">
            RESEARCH / 2022
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#111111] dark:text-[#EDEDED] leading-none">
            DETECTING THE<br />GLOBAL MAXIMUM<br />POWER POINT
          </h2>
        </div>

        {/* Paper Citation Card */}
        <div className="p-4 sm:p-5 bg-[#EAEAE6] dark:bg-[#14161B] border border-black/[0.12] dark:border-white/[0.12] max-w-md">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#6F6F6F] dark:text-[#9E9E9E] mb-2 uppercase">
            <span>PEER-REVIEWED PUBLICATION</span>
            <span>{RESEARCH.id}</span>
          </div>
          <div className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-[#EDEDED] mb-2">
            {RESEARCH.paperTitle}
          </div>
          <div className="font-mono text-[11px] text-[#6F6F6F] dark:text-[#9E9E9E] mb-3">
            {RESEARCH.journal} · {RESEARCH.volume}
          </div>
          <a
            href={RESEARCH.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#10B981] hover:underline font-semibold"
          >
            <FiFileText />
            <span>READ FULL PAPER (PDF) ↗</span>
          </a>
        </div>
      </motion.div>

      {/* Engineering Laboratory Simulator */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="border border-black/[0.12] dark:border-white/[0.12] bg-[#EAEAE6] dark:bg-[#14161B] p-6 sm:p-8"
      >
        
        {/* Lab Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.12] dark:border-white/[0.12]">
          
          {/* Algo Toggle */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#6F6F6F] dark:text-[#9E9E9E] uppercase">ALGORITHM:</span>
            <div className="flex border border-black/[0.15] dark:border-white/[0.15]">
              <button
                onClick={() => handleSwitch('csa')}
                className={`px-3 py-1.5 font-bold tracking-wider transition-colors ${
                  algo === 'csa'
                    ? 'bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11]'
                    : 'text-[#6F6F6F] dark:text-[#9E9E9E] hover:text-[#111111] dark:hover:text-[#EDEDED]'
                }`}
              >
                CSA (CUCKOO SEARCH)
              </button>
              <button
                onClick={() => handleSwitch('pno')}
                className={`px-3 py-1.5 font-bold tracking-wider transition-colors border-l border-black/[0.15] dark:border-white/[0.15] ${
                  algo === 'pno'
                    ? 'bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11]'
                    : 'text-[#6F6F6F] dark:text-[#9E9E9E] hover:text-[#111111] dark:hover:text-[#EDEDED]'
                }`}
              >
                P&amp;O (PERTURB &amp; OBSERVE)
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-2 px-4 bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11] border border-[#111111] dark:border-[#EDEDED] hover:bg-transparent hover:text-[#111111] dark:hover:text-[#EDEDED] transition-all duration-200 gap-1.5"
            >
              {isPlaying ? <FiPause /> : <FiPlay />}
              <span>{isPlaying ? 'PAUSE' : 'RUN SIMULATION'}</span>
            </button>

            <button
              onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 0))}
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium py-2 px-3 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED] transition-all duration-200 gap-1"
            >
              <span>STEP</span>
              <FiChevronRight />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setStep(0);
              }}
              className="inline-flex items-center justify-center font-mono text-xs py-2 px-2.5 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED] transition-all duration-200"
              title="Reset"
            >
              <FiRotateCcw />
            </button>
          </div>

        </div>

        {/* Simulator Grid */}
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SVG P-V Curve (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-[#6F6F6F] dark:text-[#9E9E9E]">
              <span>P-V CHARACTERISTIC CURVE UNDER PARTIAL SHADING</span>
              <span>PEAK: 220.4W</span>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative w-full h-64 sm:h-72 bg-[#111215] border border-white/[0.1] p-4 flex items-center justify-center">
              <svg
                viewBox="0 0 300 160"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                <line x1="15" y1="140" x2="285" y2="140" stroke="#333333" strokeWidth="1" />
                <line x1="15" y1="95" x2="285" y2="95" stroke="#222222" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="15" y1="60" x2="285" y2="60" stroke="#222222" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="15" y1="18" x2="285" y2="18" stroke="#10B981" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5" />

                {/* Curve Fill */}
                <path
                  d={`${SVG_PATH} L 285 140 L 15 140 Z`}
                  fill="rgba(16, 185, 129, 0.12)"
                />

                {/* Main Curve */}
                <path
                  d={SVG_PATH}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Markers */}
                <text x="72" y="90" fill="#666" fontSize="6" fontFamily="monospace" textAnchor="middle">
                  LMPP 1 (68W)
                </text>
                <text x="148" y="52" fill="#E11D48" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  LMPP 2 TRAP (142W)
                </text>
                <text x="218" y="10" fill="#10B981" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  ★ GMPP (220.4W)
                </text>

                {/* Agents */}
                {algo === 'csa' ? (
                  activeData.nests.map((n, idx) => (
                    <g key={n.id}>
                      <circle cx={n.x} cy={n.y} r="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
                      <text x={n.x} y={n.y - 6} fill="#10B981" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                        {n.id}
                      </text>
                    </g>
                  ))
                ) : (
                  <g>
                    <circle cx={activeData.agent.x} cy={activeData.agent.y} r="5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x={activeData.agent.x} y={activeData.agent.y - 7} fill="#E11D48" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      P&amp;O
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Step Description */}
            <div className="p-3 bg-white dark:bg-[#0D0E11] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-[#10B981] font-bold mr-2">STEP {step + 1}/4:</span>
                <span className="font-semibold text-[#111111] dark:text-[#EDEDED]">{activeData.title}</span>
              </div>
              <span className="text-[#6F6F6F] dark:text-[#9E9E9E] hidden sm:inline">
                {algo === 'csa' ? 'Lévy Flight Trajectory' : 'Fixed Incremental Step'}
              </span>
            </div>
          </div>

          {/* Telemetry Output (4 cols) */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] block">
              LIVE TELEMETRY
            </span>

            {/* Readouts */}
            <div className="p-4 bg-white dark:bg-[#0D0E11] border border-black/[0.08] dark:border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-2">
                <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">VOLTAGE (V):</span>
                <span className="font-bold text-sm text-[#111111] dark:text-[#EDEDED]">
                  {algo === 'csa' ? activeData.voltage : activeData.agent.v} V
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-2">
                <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">TRACKED POWER:</span>
                <span className="font-bold text-sm text-[#10B981]">
                  {activeData.power} W
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-2">
                <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">EFFICIENCY:</span>
                <span className={`font-bold text-sm ${activeData.efficiency > 90 ? 'text-[#10B981]' : 'text-[#E11D48]'}`}>
                  {activeData.efficiency}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">DUTY CYCLE (D):</span>
                <span className="font-bold text-sm text-[#111111] dark:text-[#EDEDED]">
                  {activeData.duty}
                </span>
              </div>
            </div>

            {/* Diagnostic Log */}
            <div className="p-4 bg-[#111215] text-[#EDEDED] border border-white/[0.1] text-xs leading-relaxed space-y-2">
              <div className="text-[10px] text-white/40 uppercase">STATUS LOG:</div>
              <div className={algo === 'csa' ? 'text-[#10B981]' : 'text-rose-400'}>
                {activeData.status}
              </div>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default EditorialResearch;
