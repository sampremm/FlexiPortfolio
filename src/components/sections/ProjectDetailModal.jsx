import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectDetailModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Trap focus inside modal
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window (Drawer Style) */}
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full md:w-[85vw] lg:w-[60vw] xl:w-[50vw] h-[100svh] bg-[#F4F4F0] dark:bg-[#0D0E11] text-[#111111] dark:text-[#EDEDED] shadow-2xl z-10 flex flex-col overflow-hidden focus:outline-none"
        >
          {/* Top Bar */}
          <div className="p-6 md:p-8 border-b border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-[#111215] flex flex-wrap gap-4 items-center justify-between shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-mono text-[10px] text-[#10B981] font-bold tracking-widest uppercase">
                {project.num}
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-3 border border-black/[0.15] dark:border-white/[0.15] hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-mono text-xs uppercase tracking-wider"
              aria-label="Close Case Study"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Content Scrollable Body */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 lg:p-14 space-y-16">
            
            {/* Context & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.context && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-3">
                    CONTEXT
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                    {project.context}
                  </p>
                </div>
              )}
              {project.problem && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-3">
                    PROBLEM
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#111111] dark:text-[#EDEDED] leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>
              )}
            </div>

            {/* Architecture Statement */}
            {project.architecture && (
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-3">
                  ARCHITECTURE
                </div>
                <p className="font-body text-base sm:text-lg lg:text-xl text-[#111111] dark:text-[#EDEDED] leading-relaxed font-semibold">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Implementation Array */}
            {project.implementation && project.implementation.length > 0 && (
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-4">
                  IMPLEMENTATION
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.implementation.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#111215]"
                    >
                      <div className="font-mono text-[10px] text-[#111111] dark:text-[#EDEDED] uppercase tracking-widest font-bold mb-2">
                        {item.label}
                      </div>
                      <div className="font-body text-sm text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reliability & Failure Handling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4 border-t border-black/[0.1] dark:border-white/[0.1]">
              {project.reliability && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-3">
                    RELIABILITY
                  </div>
                  <p className="font-body text-sm text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                    {project.reliability}
                  </p>
                </div>
              )}
              {project.failure_handling && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-3">
                    FAILURE HANDLING
                  </div>
                  <p className="font-body text-sm text-[#6F6F6F] dark:text-[#9E9E9E] leading-relaxed">
                    {project.failure_handling}
                  </p>
                </div>
              )}
            </div>

            {/* Stack */}
            {project.stack && project.stack.length > 0 && (
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-4">
                  STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-black/[0.04] dark:bg-white/[0.04] font-mono text-[10px] uppercase tracking-wider text-[#6F6F6F] dark:text-[#9E9E9E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Bar: Links */}
          <div className="p-6 md:p-8 border-t border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-[#111215] flex flex-wrap items-center justify-between gap-4 shrink-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] dark:text-[#9E9E9E] hidden sm:block">
              LINKS
            </span>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-3 px-6 bg-transparent text-[#111111] dark:text-[#EDEDED] border border-black/[0.15] dark:border-white/[0.15] hover:border-[#111111] dark:hover:border-white transition-colors gap-2"
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
                  className="flex-1 sm:flex-none inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-3 px-6 bg-[#111111] text-[#F4F4F0] dark:bg-[#EDEDED] dark:text-[#0D0E11] hover:bg-black/80 dark:hover:bg-white/80 transition-colors gap-2"
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
