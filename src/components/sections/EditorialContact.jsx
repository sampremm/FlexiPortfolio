import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck, FiMail, FiFileText, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';

const EditorialContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('samprem888111@gmail.com');
    setCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative bg-[#0D0E11] text-[#EDEDED] py-28 sm:py-32 px-6 md:px-12 border-t border-white/[0.12]">
      <Toaster position="bottom-right" />

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Massive Dramatic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[#10B981] font-semibold">
            05 // INITIATE TRANSMISSION
          </div>
          <h2 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.88] text-white">
            LET’S BUILD<br />
            SOMETHING<br />
            USEFUL.
          </h2>
          <div className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest pt-2">
            THALLA SAM PREM KUMAR — BACKEND &amp; DISTRIBUTED SYSTEMS
          </div>
        </motion.div>

        {/* Contact Links & Direct Channels Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/[0.12] pt-12 items-start"
        >
          
          {/* Primary Action / Direct Email (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
              PRIMARY DIRECT INBOX
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:samprem888111@gmail.com"
                className="font-display font-bold text-xl sm:text-2xl hover:text-[#10B981] transition-colors underline underline-offset-4"
              >
                samprem888111@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 border border-white/20 hover:border-white text-xs font-mono flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <FiCheck className="text-[#10B981]" /> : <FiCopy />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
            <p className="font-body text-xs text-neutral-400 max-w-md pt-2">
              Actively interviewing for Backend &amp; Distributed Systems Engineering roles. Hyderabad, Bangalore, Pune, or Remote. Immediate joiner.
            </p>
          </div>

          {/* Social Channels & Resume (6 cols) */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
            
            <div>
              <span className="text-neutral-500 uppercase block mb-3">CHANNELS</span>
              <div className="space-y-2">
                <a
                  href="https://github.com/sampremm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-300 hover:text-[#10B981] transition-colors"
                >
                  <FaGithub />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/samprem1/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-300 hover:text-[#10B981] transition-colors"
                >
                  <FaLinkedin />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://twitter.com/samprem1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-300 hover:text-[#10B981] transition-colors"
                >
                  <FaXTwitter />
                  <span>X / TWITTER</span>
                </a>
                <a
                  href="https://t.me/samprem1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-300 hover:text-[#10B981] transition-colors"
                >
                  <FaTelegram />
                  <span>TELEGRAM</span>
                </a>
              </div>
            </div>

            <div>
              <span className="text-neutral-500 uppercase block mb-3">DOCUMENTS</span>
              <div className="space-y-2">
                <a
                  href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-300 hover:text-[#10B981] transition-colors"
                >
                  <FiFileText />
                  <span>CV / RESUME ↗</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1QUZ3L33mAqRigHwQnwg__ZOjVhmEPucZ/view"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-neutral-300 hover:text-[#10B981] transition-colors"
                >
                  <FiFileText />
                  <span>RESEARCH PDF ↗</span>
                </a>
              </div>
            </div>

            <div>
              <span className="text-neutral-500 uppercase block mb-3">ACTION</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                <span>BACK TO TOP</span>
                <FiArrowUpRight />
              </button>
            </div>

          </div>

        </motion.div>

        {/* Colophon / Bottom Line */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} THALLA SAM PREM KUMAR. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>SWISS EDITORIAL SYSTEM</span>
            <span>·</span>
            <span>SPACE GROTESK / PLUS JAKARTA SANS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialContact;
