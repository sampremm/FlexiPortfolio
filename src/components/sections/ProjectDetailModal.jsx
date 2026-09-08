import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiArrowRight, FiCheck } from 'react-icons/fi';

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#F4F4F0] dark:bg-[#0D0E11] text-[#111111] dark:text-[#EDEDED] border border-black/[0.16] dark:border-white/[0.16] shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-black/[0.12] dark:border-white/[0.12] flex items-center justify-between bg-white dark:bg-[#14161B]">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[#10B981] font-semibold">
                SYS // {project.id}
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-xs font-mono transition-colors"
              aria-label="Close"
            >
              <FiX className="text-base" />
            </button>
          </div>

          {/* Content Scrollable Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-10 custom-scrollbar">
            
            {/* 1. Problem Statement */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] mb-2">
                01 // PROBLEM STATEMENT
              </div>
              <p className="font-body text-base sm:text-lg text-[#111111] dark:text-[#EDEDED] leading-relaxed">
                {project.problem || project.description}
              </p>
            </div>

            {/* 2. Architecture Diagram & Flow (Prominent) */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] mb-3">
                02 // ARCHITECTURE &amp; EXECUTION PIPELINE
              </div>
              <div className="p-6 sm:p-8 bg-[#EAEAE6] dark:bg-[#14161B] border border-black/[0.12] dark:border-white/[0.12]">
                <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-3">
                  {project.flow && project.flow.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-[#10B981] font-bold">[{idx + 1}]</span>
                      <span className="font-semibold text-[#111111] dark:text-[#EDEDED]">{step}</span>
                      {idx < project.flow.length - 1 && (
                        <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Implementation Details */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] mb-3">
                03 // CORE IMPLEMENTATION DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.implementation && project.implementation.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#121318]"
                  >
                    <div className="font-mono text-xs text-[#10B981] font-semibold mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-xs sm:text-sm text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Reliability & Idempotency */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] mb-2">
                04 // RELIABILITY &amp; FAULT TOLERANCE
              </div>
              <p className="font-body text-xs sm:text-sm text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                {project.reliability || "Designed to eliminate single points of failure, guarantee idempotency across network retries, and isolate ephemeral workloads from persistent shared state."}
              </p>
            </div>

            {/* 5. Performance Targets */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] mb-2">
                05 // PERFORMANCE SPECIFICATIONS
              </div>
              <div className="p-4 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#121318] font-mono text-xs sm:text-sm flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">EXECUTION TARGET: </span>
                  <span className="font-bold text-[#10B981]">&lt;15ms</span>
                </div>
                <div>
                  <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">ISOLATION: </span>
                  <span className="font-bold text-[#111111] dark:text-[#EDEDED]">100% Containerized</span>
                </div>
                <div>
                  <span className="text-[#6F6F6F] dark:text-[#9E9E9E]">DATA INTEGRITY: </span>
                  <span className="font-bold text-[#111111] dark:text-[#EDEDED]">Strictly-once</span>
                </div>
              </div>
            </div>

            {/* 6. Stack */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] mb-3">
                06 // TECHNICAL STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white dark:bg-[#14161B] border border-black/[0.12] dark:border-white/[0.12] font-mono text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Bar: Links */}
          <div className="p-6 border-t border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-[#14161B] flex items-center justify-between">
            <span className="font-mono text-xs text-[#6F6F6F] dark:text-[#9E9E9E]">
              Press [ESC] to close
            </span>
            <div className="flex items-center gap-4">
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium py-2.5 px-5 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.18] dark:border-white/[0.18] hover:border-[#111111] dark:hover:border-[#EDEDED] transition-all duration-200 gap-2"
                >
                  <FiGithub />
                  <span>SOURCE CODE</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-2.5 px-5 bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11] border border-[#111111] dark:border-[#EDEDED] hover:bg-transparent hover:text-[#111111] dark:hover:text-[#EDEDED] transition-all duration-200 gap-2"
                >
                  <FiExternalLink />
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
