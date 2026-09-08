import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESEARCH } from '../constants';
import { 
  FaGraduationCap, 
  FaPlay, 
  FaRotateLeft, 
  FaCircleCheck, 
  FaForwardStep, 
  FaSliders, 
  FaBolt, 
  FaSun, 
  FaCodeCompare,
  FaFilePdf
} from 'react-icons/fa6';

// Multi-peak P-V curve under Partial Shading Condition (PSC)
// SVG coordinate space: x = 0 to 300 (Voltage 0-260V), y = 0 (top/high power) to 150 (bottom/0W)
// Peak 1 (LMPP 1): x ~ 70, y ~ 95 (P ~ 75W)
// Peak 2 (LMPP 2): x ~ 145, y ~ 60 (P ~ 142W) -> Trap peak
// Peak 3 (GMPP): x ~ 215, y ~ 18 (P ~ 220.4W) -> Global peak
const SVG_PATH = "M 15 140 C 40 135, 55 105, 72 95 C 90 85, 105 115, 120 110 C 132 85, 140 65, 148 60 C 160 55, 175 85, 190 75 C 202 45, 210 20, 218 18 C 228 16, 240 50, 252 90 C 262 120, 275 138, 285 140";

const ResearchSection = () => {
  const [algoMode, setAlgoMode] = useState('csa'); // 'csa' | 'pno'
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0 to 4
  const [viewTab, setViewTab] = useState('interactive'); // 'interactive' | 'paper' | 'math'

  // CSA Cuckoo Nest coordinates over steps
  const csaSteps = [
    {
      step: 0,
      title: "Initial Random Initialization",
      desc: "3 candidate nests deployed across duty cycle spectrum [D1=0.20, D2=0.45, D3=0.75].",
      nests: [
        { id: 'Nest 1', x: 65, y: 100, v: 58.2, p: 68.4, d: 0.22, status: 'exploring' },
        { id: 'Nest 2', x: 135, y: 70, v: 125.4, p: 130.1, d: 0.48, status: 'exploring' },
        { id: 'Nest 3', x: 235, y: 45, v: 228.1, p: 175.6, d: 0.82, status: 'exploring' },
      ],
      bestPower: 175.6,
      bestVoltage: 228.1,
      duty: 0.82,
      efficiency: 79.7,
      log: "Nests initialized randomly over operating voltage range."
    },
    {
      step: 1,
      title: "Lévy Flight Step Walk (Heavy-Tailed Jump)",
      desc: "Lévy random walk allows Nest 1 and 2 to take large step jumps, hopping over local valleys.",
      nests: [
        { id: 'Nest 1', x: 185, y: 70, v: 175.0, p: 155.0, d: 0.58, status: 'jumped' },
        { id: 'Nest 2', x: 205, y: 25, v: 198.5, p: 212.0, d: 0.63, status: 'leading' },
        { id: 'Nest 3', x: 225, y: 25, v: 220.0, p: 208.5, d: 0.70, status: 'tracking' },
      ],
      bestPower: 212.0,
      bestVoltage: 198.5,
      duty: 0.63,
      efficiency: 96.2,
      log: "Lévy flight step: x_i(t+1) = x_i(t) + α ⊕ Lévy(λ). Jumped over LMPP 2 trap!"
    },
    {
      step: 2,
      title: "Discovery of Alien Eggs & Abandonment (Pa = 0.25)",
      desc: "Worst nest (suboptimal duty cycle) is discarded and replaced by new random search vector.",
      nests: [
        { id: 'Nest 1', x: 212, y: 19, v: 204.0, p: 219.8, d: 0.61, status: 'converging' },
        { id: 'Nest 2', x: 216, y: 18, v: 205.2, p: 220.2, d: 0.62, status: 'leading' },
        { id: 'Nest 3', x: 210, y: 20, v: 202.8, p: 218.4, d: 0.60, status: 'converging' },
      ],
      bestPower: 220.2,
      bestVoltage: 205.2,
      duty: 0.62,
      efficiency: 99.7,
      log: "Suboptimal nests abandoned (Pa=0.25). All agents focused on global maximum basin."
    },
    {
      step: 3,
      title: "GMPP Locked with Zero Steady-State Oscillation",
      desc: "All nests lock onto Global Maximum Power Point (GMPP) @ 220.4W. Convergence completed in 0.11s.",
      nests: [
        { id: 'Nest 1', x: 218, y: 18, v: 205.4, p: 220.4, d: 0.62, status: 'locked' },
        { id: 'Nest 2', x: 218, y: 18, v: 205.4, p: 220.4, d: 0.62, status: 'locked' },
        { id: 'Nest 3', x: 218, y: 18, v: 205.4, p: 220.4, d: 0.62, status: 'locked' },
      ],
      bestPower: 220.4,
      bestVoltage: 205.4,
      duty: 0.62,
      efficiency: 100.0,
      log: "GMPP achieved: 220.4W | Zero oscillation | ΔP ripple = 0.00% | t_conv = 0.11s"
    }
  ];

  // P&O Steps over time
  const pnoSteps = [
    {
      step: 0,
      title: "Fixed-Step Perturbation Init",
      desc: "Perturb & Observe starts climbing the slope: dP/dV > 0, duty cycle perturbed by +ΔD.",
      agent: { x: 50, y: 120, v: 45.0, p: 42.0, d: 0.20 },
      power: 42.0,
      voltage: 45.0,
      duty: 0.20,
      efficiency: 19.1,
      log: "P&O initial step: dP/dV > 0, increasing duty cycle."
    },
    {
      step: 1,
      title: "Climbing First Local Peak (LMPP 1)",
      desc: "P&O passes LMPP 1 and moves toward the second hill slope.",
      agent: { x: 105, y: 110, v: 100.0, p: 102.0, d: 0.38 },
      power: 102.0,
      voltage: 100.0,
      duty: 0.38,
      efficiency: 46.3,
      log: "Ascending slope. dP/dV > 0, step size fixed at ΔD = 0.02."
    },
    {
      step: 2,
      title: "Trapped at Local Peak LMPP 2 (142W)",
      desc: "Algorithm detects slope sign flip around 142W. It cannot see the higher GMPP hill beyond the valley.",
      agent: { x: 148, y: 60, v: 145.0, p: 142.0, d: 0.50 },
      power: 142.0,
      voltage: 145.0,
      duty: 0.50,
      efficiency: 64.4,
      log: "Reaches LMPP 2. Next step gives dP/dV < 0, reversing direction. Trapped!"
    },
    {
      step: 3,
      title: "Continuous Steady-State Power Oscillation",
      desc: "P&O oscillates endlessly between 136W and 142W. 36.4% available solar energy is permanently lost.",
      agent: { x: 145, y: 63, v: 142.0, p: 139.5, d: 0.49 },
      power: 139.5,
      voltage: 142.0,
      duty: 0.49,
      efficiency: 63.3,
      log: "TRAPPED IN LOCAL PEAK: Power oscillating ±4.5W. Energy lost: -78.4W (-36.4%)."
    }
  ];

  // Auto-run simulation timer
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 3) {
            setIsPlaying(false);
            return 3;
          }
          return prev + 1;
        });
      }, 1400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const activeData = algoMode === 'csa' ? csaSteps[currentStep] : pnoSteps[currentStep];

  const handleModeSwitch = (mode) => {
    setAlgoMode(mode);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleStepForward = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section className="py-24 border-t border-white/[0.08] relative overflow-hidden" id="research">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Terminal Header Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs mb-10 text-slate-400">
          <span className="text-amber">user@backend:</span>
          <span className="text-cyan-400">~/research/csa-mppt-simulator</span>
          <span className="text-white">$</span>
          <span className="text-white">./simulate_mppt.sh --algorithm={algoMode.toUpperCase()} --condition=PSC</span>
        </div>

        {/* Section Title & Official Paper Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="px-2.5 py-1 bg-amber/10 border border-amber/30 text-amber font-mono text-[10px] font-bold uppercase tracking-widest rounded">
                PEER-REVIEWED PUBLICATION
              </span>
              <span className="text-slate-500 text-xs font-mono">·</span>
              <span className="font-mono text-xs text-slate-400">
                {RESEARCH.journal} ({RESEARCH.volume})
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Algorithmic Optimization & MPPT
            </h2>
            <p className="font-mono text-xs md:text-sm text-slate-400 mt-2 max-w-2xl">
              Cuckoo Search Algorithm (CSA) metaheuristic tracking Global Maximum Power Point of PV arrays under Partial Shading Conditions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={RESEARCH.link}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white font-mono text-xs rounded-md flex items-center gap-2 transition-all hover:border-amber/50"
            >
              <FaFilePdf className="text-rose-400 text-sm" />
              <span>Read Original Paper (PDF) ↗</span>
            </a>
            <div className="px-3 py-2 bg-[#0d0d16] border border-white/[0.08] font-mono text-[11px] text-amber rounded-md">
              {RESEARCH.id}
            </div>
          </div>
        </div>

        {/* Navigation Tabs between Interactive Simulator, Paper Insights, and Mathematical Model */}
        <div className="flex border-b border-white/[0.08] mb-8 overflow-x-auto no-scrollbar">
          {[
            { id: 'interactive', label: 'Interactive Algorithmic Visualizer', icon: <FaBolt /> },
            { id: 'paper', label: 'Paper Abstract & Architecture', icon: <FaGraduationCap /> },
            { id: 'math', label: 'Lévy Flight & Mathematical Proof', icon: <FaSliders /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setViewTab(tab.id)}
              className={`px-5 py-3 font-mono text-xs uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                viewTab === tab.id
                  ? 'border-amber text-amber bg-amber/5 font-bold'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <span className="text-xs">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Interactive Simulator (The Flagship Demo) */}
        {viewTab === 'interactive' && (
          <div className="space-y-8">
            {/* Control Bar */}
            <div className="bg-[#0b0b14] border border-[#232334] rounded-xl p-5 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Algorithm Switcher */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
                  Mode:
                </span>
                <button
                  onClick={() => handleModeSwitch('csa')}
                  className={`px-4 py-2 font-mono text-xs rounded-md transition-all flex items-center gap-2 ${
                    algoMode === 'csa'
                      ? 'bg-amber text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  Cuckoo Search (CSA MPPT)
                </button>
                <button
                  onClick={() => handleModeSwitch('pno')}
                  className={`px-4 py-2 font-mono text-xs rounded-md transition-all flex items-center gap-2 ${
                    algoMode === 'pno'
                      ? 'bg-rose-500 text-white font-bold shadow-[0_0_20px_rgba(244,63,94,0.35)]'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  Traditional P&O (Trapped)
                </button>
              </div>

              {/* Execution Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-4 py-2 font-mono text-xs rounded-md flex items-center gap-2 transition-all ${
                    isPlaying
                      ? 'bg-emerald-500 text-black font-bold'
                      : 'bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.1]'
                  }`}
                >
                  <FaPlay className="text-[10px]" />
                  {isPlaying ? 'Pause Auto-Run' : 'Auto-Run Simulation'}
                </button>
                <button
                  onClick={handleStepForward}
                  disabled={isPlaying}
                  className="px-3 py-2 bg-white/[0.06] hover:bg-white/[0.12] disabled:opacity-40 border border-white/[0.1] text-white font-mono text-xs rounded-md flex items-center gap-1.5 transition-all"
                  title="Next Step"
                >
                  <FaForwardStep className="text-[10px]" />
                  <span>Step</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] font-mono text-xs rounded-md flex items-center gap-1.5 transition-all"
                  title="Reset"
                >
                  <FaRotateLeft className="text-[10px]" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Stage Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 8 cols: Interactive SVG Curve & Animated Particles */}
              <div className="lg:col-span-8 bg-[#090910] border border-[#232334] rounded-xl p-6 shadow-2xl relative">
                {/* Visualizer Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse"></span>
                    <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                      PV Array P-V Characteristic Curve under PSC
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                    <span>Iteration: <strong className="text-white">{currentStep + 1}/4</strong></span>
                    <span>·</span>
                    <span className={algoMode === 'csa' ? 'text-amber font-bold' : 'text-rose-400 font-bold'}>
                      {algoMode === 'csa' ? 'Lévy Exploration' : 'Hill Climbing Trapped'}
                    </span>
                  </div>
                </div>

                {/* SVG Visualizer Container */}
                <div className="relative w-full h-[320px] bg-black/80 rounded-lg border border-white/[0.06] p-4 flex items-end justify-center overflow-hidden">
                  {/* Cyber Grid Background */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

                  <svg viewBox="0 0 300 160" className="w-full h-full overflow-visible select-none">
                    <defs>
                      {/* Gradient for Curve Area */}
                      <linearGradient id="pvCurveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                        <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </linearGradient>
                      {/* Glow Filter */}
                      <filter id="amberGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="roseGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Voltage Axes & Grid Guides */}
                    <line x1="15" y1="140" x2="285" y2="140" stroke="#334155" strokeWidth="1" />
                    <line x1="15" y1="15" x2="15" y2="140" stroke="#334155" strokeWidth="1" />

                    {/* Peak Vertical Dotted Reference Lines */}
                    <line x1="72" y1="95" x2="72" y2="140" stroke="#475569" strokeDasharray="2,2" strokeWidth="1" />
                    <line x1="148" y1="60" x2="148" y2="140" stroke="#f43f5e" strokeDasharray="3,3" strokeWidth="1" opacity="0.6" />
                    <line x1="218" y1="18" x2="218" y2="140" stroke="#f59e0b" strokeDasharray="3,3" strokeWidth="1" opacity="0.6" />

                    {/* The PSC P-V Characteristic Curve */}
                    <path
                      d={SVG_PATH}
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Peak Descriptive Labels on SVG */}
                    {/* LMPP 1 */}
                    <circle cx="72" cy="95" r="3" fill="#64748b" />
                    <text x="50" y="85" fill="#94a3b8" fontSize="7" fontFamily="monospace" fontWeight="600">
                      LMPP 1 (75W)
                    </text>

                    {/* LMPP 2 (The Trap Peak) */}
                    <circle cx="148" cy="60" r="3.5" fill="#f43f5e" />
                    <text x="122" y="48" fill="#f43f5e" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                      LMPP 2 TRAP (142W)
                    </text>

                    {/* GMPP (The True Maximum Peak) */}
                    <circle cx="218" cy="18" r="4" fill="#f59e0b" filter="url(#amberGlow)" />
                    <text x="195" y="10" fill="#fbbf24" fontSize="8" fontFamily="monospace" fontWeight="900">
                      ★ GMPP (220.4W)
                    </text>

                    {/* ANIMATED SEARCH AGENTS / PARTICLES */}
                    {algoMode === 'csa' ? (
                      /* CSA Mode: 3 Cuckoo Nests with Lévy Flight Animation */
                      csaSteps[currentStep].nests.map((nest, idx) => (
                        <motion.g
                          key={nest.id}
                          initial={false}
                          animate={{ x: nest.x, y: nest.y }}
                          transition={{
                            type: 'spring',
                            stiffness: 90,
                            damping: 15,
                            mass: 0.8
                          }}
                        >
                          {/* Outer pulse wave */}
                          <circle
                            cx="0"
                            cy="0"
                            r="12"
                            fill="#f59e0b"
                            opacity={currentStep === 3 ? 0.35 : 0.2}
                            className="animate-ping origin-center"
                          />
                          {/* Inner glowing particle */}
                          <circle
                            cx="0"
                            cy="0"
                            r={idx === 1 ? 5 : 4}
                            fill={idx === 1 ? "#fbbf24" : "#f59e0b"}
                            filter="url(#amberGlow)"
                          />
                          {/* Nest label */}
                          <text
                            x="7"
                            y="3"
                            fill="#f8fafc"
                            fontSize="6"
                            fontFamily="monospace"
                            fontWeight="bold"
                          >
                            {nest.id}
                          </text>
                        </motion.g>
                      ))
                    ) : (
                      /* P&O Mode: Single Agent oscillating & trapped at LMPP 2 */
                      <motion.g
                        key="pno-agent"
                        animate={
                          currentStep >= 2
                            ? {
                                x: [148, 142, 152, 148],
                                y: [60, 63, 62, 60]
                              }
                            : {
                                x: pnoSteps[currentStep].agent.x,
                                y: pnoSteps[currentStep].agent.y
                              }
                        }
                        transition={
                          currentStep >= 2
                            ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
                            : { type: 'spring', stiffness: 100, damping: 14 }
                        }
                      >
                        <circle cx="0" cy="0" r="12" fill="#f43f5e" opacity="0.3" className="animate-ping" />
                        <circle cx="0" cy="0" r="5" fill="#f43f5e" filter="url(#roseGlow)" />
                        <text x="8" y="3" fill="#f43f5e" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
                          P&O Agent
                        </text>
                      </motion.g>
                    )}

                    {/* Axis Labels */}
                    <text x="15" y="152" fill="#64748b" fontSize="6" fontFamily="monospace">0V</text>
                    <text x="70" y="152" fill="#64748b" fontSize="6" fontFamily="monospace">65V</text>
                    <text x="145" y="152" fill="#64748b" fontSize="6" fontFamily="monospace">145V</text>
                    <text x="215" y="152" fill="#64748b" fontSize="6" fontFamily="monospace">205V (V_mpp)</text>
                    <text x="275" y="152" fill="#64748b" fontSize="6" fontFamily="monospace">260V (Voc)</text>
                  </svg>

                  {/* Dynamic Status Overlay in bottom right corner of SVG */}
                  <div className="absolute top-4 right-4 bg-black/90 border border-white/10 px-3 py-2 rounded font-mono text-[10px] flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-400">Irradiance G1/G2/G3:</span>
                      <span className="text-white font-bold">1000/600/300 W/m²</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-400">Target Peak:</span>
                      <span className="text-amber font-bold">GMPP (Global Maximum)</span>
                    </div>
                  </div>
                </div>

                {/* Step Description Card */}
                <div className="mt-5 p-4 bg-white/[0.02] border border-white/[0.06] rounded-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs text-amber font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber"></span>
                      Phase {currentStep + 1}: {activeData.title}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 uppercase">
                      Algorithm State Machine
                    </span>
                  </div>
                  <p className="font-mono text-xs text-slate-300 leading-relaxed">
                    {activeData.desc}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-white/[0.04] font-mono text-[11px] text-emerald-400 flex items-center gap-2">
                    <FaCircleCheck className="text-xs shrink-0" />
                    <span>{activeData.log}</span>
                  </div>
                </div>
              </div>

              {/* Right 4 cols: Live Telemetry Gauges & Algorithm Comparison */}
              <div className="lg:col-span-4 flex flex-col gap-5">
                {/* Live Telemetry Panel */}
                <div className="bg-[#0e0e18] border border-[#232334] rounded-xl p-5 font-mono shadow-2xl">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                      <FaBolt className="text-amber" /> Live Telemetry Feed
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold rounded">
                      ACTIVE
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Power Output Gauge */}
                    <div className="p-3 bg-black/50 border border-white/5 rounded-lg">
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>ARRAY POWER (P_pv)</span>
                        <span className="text-white font-bold">
                          {algoMode === 'csa' ? activeData.bestPower.toFixed(1) : activeData.power.toFixed(1)} W
                        </span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${algoMode === 'csa' ? 'bg-amber' : 'bg-rose-500'}`}
                          animate={{
                            width: `${((algoMode === 'csa' ? activeData.bestPower : activeData.power) / 220.4) * 100}%`
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                        <span>0W</span>
                        <span>GMPP: 220.4W</span>
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 bg-black/40 border border-white/5 rounded">
                        <div className="text-[9px] text-slate-400">ARRAY VOLTAGE</div>
                        <div className="text-sm font-bold text-white mt-0.5">
                          {algoMode === 'csa' ? activeData.bestVoltage.toFixed(1) : activeData.voltage.toFixed(1)} V
                        </div>
                      </div>
                      <div className="p-2.5 bg-black/40 border border-white/5 rounded">
                        <div className="text-[9px] text-slate-400">DUTY CYCLE (D)</div>
                        <div className="text-sm font-bold text-cyan-400 mt-0.5">
                          {activeData.duty.toFixed(2)}
                        </div>
                      </div>
                      <div className="p-2.5 bg-black/40 border border-white/5 rounded">
                        <div className="text-[9px] text-slate-400">MPPT EFFICIENCY</div>
                        <div className={`text-sm font-bold mt-0.5 ${algoMode === 'csa' ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {activeData.efficiency.toFixed(1)}%
                        </div>
                      </div>
                      <div className="p-2.5 bg-black/40 border border-white/5 rounded">
                        <div className="text-[9px] text-slate-400">CONVERGENCE</div>
                        <div className="text-sm font-bold text-amber mt-0.5">
                          {algoMode === 'csa' ? '0.11s (FAST)' : 'TRAPPED'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Head-to-Head Benchmark Table */}
                <div className="bg-[#0b0b14] border border-[#232334] rounded-xl p-5 font-mono shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-white/[0.06]">
                    <FaCodeCompare className="text-amber" /> Algorithm Benchmark
                  </div>
                  
                  <div className="space-y-2.5 text-[11px]">
                    <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                      <span className="text-slate-400">Global Peak Tracking:</span>
                      <span className="text-emerald-400 font-bold">CSA (100%) vs P&O (0%)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                      <span className="text-slate-400">Steady-State Ripple:</span>
                      <span className="text-white font-bold">0.0W (CSA) vs ±4.5W (P&O)</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                      <span className="text-slate-400">Lost Solar Energy:</span>
                      <span className="text-rose-400 font-bold">-36.4% on P&O</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-slate-400">Tracking Mechanism:</span>
                      <span className="text-amber font-bold">Lévy Flight Random Walk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Paper Abstract & Deep Dive */}
        {viewTab === 'paper' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left: Paper Details */}
            <div className="lg:col-span-7 bg-[#0c0c16] border border-[#232332] rounded-xl p-6 md:p-8 font-mono space-y-6">
              <div>
                <span className="px-2.5 py-1 bg-amber/10 border border-amber/20 text-amber text-[10px] rounded uppercase font-bold tracking-widest">
                  {RESEARCH.volume}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-3 leading-snug">
                  {RESEARCH.paperTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  <strong className="text-slate-200">Authors:</strong> {RESEARCH.authors}
                </p>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-200">Affiliation:</strong> {RESEARCH.institution}
                </p>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                <div className="bg-black/50 p-4 rounded-lg border-l-2 border-amber font-mono text-xs">
                  <strong className="text-amber block mb-1 uppercase tracking-wider">The Partial Shading Problem:</strong>
                  {RESEARCH.problem}
                </div>

                <p>
                  {RESEARCH.description}
                </p>

                <p className="text-slate-400 text-xs font-mono">
                  {RESEARCH.details}
                </p>

                <blockquote className="border-l-2 border-slate-600 pl-4 py-1 italic text-slate-300 font-serif">
                  &ldquo;{RESEARCH.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <a
                  href={RESEARCH.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-amber-glow rounded-md text-xs font-mono"
                >
                  Download Research Paper (PDF) ↗
                </a>
                <span className="font-mono text-[11px] text-slate-400">
                  Validation: <span className="text-white">Simulink Boost Converter Model</span>
                </span>
              </div>
            </div>

            {/* Right: Technical Spec Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0e0e1a] border border-[#232332] rounded-xl p-6 font-mono">
                <h4 className="text-xs text-amber uppercase font-bold tracking-widest mb-4 pb-2 border-b border-white/[0.08]">
                  // SIMULATION_TOPOLOGY.SPEC
                </h4>
                <div className="space-y-3 text-xs">
                  {[
                    { label: 'Converter Topology', value: 'DC-DC High-Gain Boost Converter' },
                    { label: 'Switching Frequency', value: '25 kHz (MOSFET/IGBT)' },
                    { label: 'Input PV Array', value: '3 Series Modules under 1000/600/300 W/m²' },
                    { label: 'Inductor (L)', value: '1.2 mH (Low ripple design)' },
                    { label: 'Capacitor (C_in / C_out)', value: '470 µF / 1000 µF' },
                    { label: 'Fitness Function', value: 'f(D) = P_pv = V_pv × I_pv' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-1.5 border-b border-white/[0.04]">
                      <span className="text-slate-400 text-[11px]">{item.label}:</span>
                      <span className="text-white font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0b0b14] border border-[#232332] rounded-xl p-6 font-mono">
                <h4 className="text-xs text-cyan-400 uppercase font-bold tracking-widest mb-4 pb-2 border-b border-white/[0.08]">
                  // WHY_CSA_OUTPERFORMS_PSO_AND_GA
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-bold">1.</span>
                    <span><strong>Fewer Tuning Parameters:</strong> Only 1 tuning parameter (discovery probability $p_a$) compared to complex inertia weights in PSO.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-bold">2.</span>
                    <span><strong>No Trapping in Local Optima:</strong> Heavy-tailed Lévy flights guarantee global exploration capability over steep valleys.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-bold">3.</span>
                    <span><strong>Zero Power Oscillation:</strong> Halts duty cycle perturbations once GMPP convergence threshold is satisfied.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Mathematical Model & Lévy Distribution */}
        {viewTab === 'math' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a0a14] border border-[#232334] rounded-xl p-6 md:p-10 font-mono shadow-2xl"
          >
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <span className="text-amber text-xs uppercase tracking-widest font-bold">// MATHEMATICAL_FORMULATION</span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Lévy Flight Random Walk & Nest Updates
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  How the heavy-tailed distribution mathematically prevents local peak entrapment under partial shading conditions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Equation 1 */}
                <div className="bg-black/60 border border-white/[0.08] p-5 rounded-lg">
                  <span className="text-amber text-xs uppercase font-bold tracking-wider">// EQUATION 1: NEST STEP UPDATE</span>
                  <div className="my-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded text-center text-sm sm:text-base text-amber font-mono font-bold">
                    x_i^(t+1) = x_i^(t) + α ⊕ Lévy(λ)
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Where <strong className="text-white">x_i^(t)</strong> represents the duty cycle of cuckoo nest <em>i</em> at iteration <em>t</em>, <strong className="text-white">α &gt; 0</strong> is the step size scaling factor, and <strong className="text-white">⊕</strong> denotes entry-wise multiplication.
                  </p>
                </div>

                {/* Equation 2 */}
                <div className="bg-black/60 border border-white/[0.08] p-5 rounded-lg">
                  <span className="text-cyan-400 text-xs uppercase font-bold tracking-wider">// EQUATION 2: LÉVY FLIGHT PROBABILITY</span>
                  <div className="my-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded text-center text-sm sm:text-base text-cyan-400 font-mono font-bold">
                    Lévy(u) ~ u^(-λ),&nbsp;&nbsp;1 &lt; λ ≤ 3
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    The infinite variance distribution yields an occasional massive step size, enabling the search agent to leap completely across the suboptimal LMPP valley straight into the GMPP attraction zone.
                  </p>
                </div>
              </div>

              {/* Mantegna's Algorithm Box */}
              <div className="bg-[#0e0e1e] border border-white/[0.08] p-6 rounded-lg">
                <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Mantegna's Algorithm for Stable Step Generation:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  In practical MATLAB/Simulink implementations, the step size <em>s</em> is computed via two Gaussian stochastic distributions <em>u</em> and <em>v</em>:
                </p>
                <div className="p-3 bg-black/70 border border-white/5 rounded font-mono text-xs text-slate-200">
                  s = u / (|v|^(1/β)),&nbsp;&nbsp;where&nbsp;u ~ N(0, σ_u²),&nbsp;v ~ N(0, σ_v²)
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResearchSection;
