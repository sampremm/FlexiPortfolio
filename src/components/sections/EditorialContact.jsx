import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck, FiMail, FiFileText, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';
import { GitHubCalendar } from 'react-github-calendar';

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

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Top: Headline & Primary Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Left: Dramatic Headline */}
          <div className="md:col-span-7 space-y-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-semibold">
              05 // INITIATE TRANSMISSION
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.88] text-white">
              LET’S BUILD<br />
              SOMETHING<br />
              USEFUL.
            </h2>
          </div>

          {/* Right: Direct Information */}
          <div className="md:col-span-5 flex flex-col justify-end space-y-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] mb-2">
                IDENTITY
              </div>
              <div className="font-mono text-sm sm:text-base text-white tracking-widest uppercase">
                THALLA SAM PREM KUMAR
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] mb-2">
                LOCATION
              </div>
              <div className="font-mono text-sm sm:text-base text-[#D0D0D0] tracking-widest uppercase">
                HYDERABAD, INDIA
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] mb-2">
                DIRECT EMAIL
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:samprem888111@gmail.com"
                  className="font-display font-bold text-lg sm:text-xl md:text-2xl hover:text-[#10B981] transition-colors underline underline-offset-4"
                >
                  samprem888111@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono flex items-center justify-center text-neutral-300 hover:text-white transition-colors rounded-sm"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? <FiCheck className="text-[#10B981] text-lg" /> : <FiCopy className="text-lg" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Middle: Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/[0.12] pt-12"
        >
          
          {/* CHANNELS */}
          <div className="lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] block mb-6">
              CHANNELS
            </span>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/sampremm" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-4 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-300 group">
                <FaGithub className="text-2xl text-[#9E9E9E] group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/samprem1/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-4 bg-white/[0.03] border border-white/[0.08] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all duration-300 group">
                <FaLinkedin className="text-2xl text-[#9E9E9E] group-hover:text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://twitter.com/samprem1" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="p-4 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-300 group">
                <FaXTwitter className="text-2xl text-[#9E9E9E] group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a href="mailto:samprem888111@gmail.com" aria-label="Email" className="p-4 bg-white/[0.03] border border-white/[0.08] hover:border-[#10B981]/40 hover:bg-[#10B981]/10 transition-all duration-300 group">
                <FiMail className="text-2xl text-[#9E9E9E] group-hover:text-[#10B981] group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* DOCUMENTS */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] block mb-6">
              DOCUMENTS
            </span>
            <div className="space-y-4">
              <a
                href="https://drive.google.com/file/d/1JrKWKczaGiB1wFtKlGTOknd0KAo9iN1G/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#D0D0D0] hover:text-white group transition-colors"
              >
                <FiFileText className="text-lg text-[#6F6F6F] group-hover:text-[#10B981] transition-colors" />
                <span>CV / RESUME</span>
                <FiArrowUpRight className="text-[#6F6F6F] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1QUZ3L33mAqRigHwQnwg__ZOjVhmEPucZ/view"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#D0D0D0] hover:text-white group transition-colors"
              >
                <FiFileText className="text-lg text-[#6F6F6F] group-hover:text-[#10B981] transition-colors" />
                <span>RESEARCH PDF</span>
                <FiArrowUpRight className="text-[#6F6F6F] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* ACTION */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F6F6F] block mb-6">
              ACTION
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#D0D0D0] hover:text-white group transition-colors"
            >
              <span>BACK TO TOP</span>
              <FiArrowUpRight className="text-[#6F6F6F] group-hover:text-[#10B981] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </motion.div>

        {/* Bottom: GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/[0.12] pt-16 flex flex-col md:flex-row items-start justify-between gap-10"
        >
          <div className="md:max-w-xs space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-bold block">
              GITHUB ACTIVITY
            </span>
            <p className="font-body text-sm text-[#9E9E9E] leading-relaxed">
              Real-time contribution graph fetched from the GitHub API. Shows public commits, code reviews, and issues.
            </p>
            <a
              href="https://github.com/sampremm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-semibold py-2.5 px-5 border border-white/[0.15] text-white hover:bg-white hover:text-black transition-colors"
            >
              <FiGithub />
              <span>GITHUB ↗</span>
            </a>
          </div>

          <div className="w-full md:w-auto overflow-x-auto custom-scrollbar pb-4">
            <div className="min-w-[600px] p-6 border border-white/[0.08] bg-[#111215]">
              <GitHubCalendar 
                username="sampremm" 
                colorScheme="dark"
                theme={{
                  dark: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
                }}
                fontSize={10}
                blockSize={10}
                blockMargin={4}
                hideColorLegend={false}
                hideTotalCount={false}
              />
            </div>
          </div>
        </motion.div>

        {/* Colophon / Bottom Line */}
        <div className="border-t border-white/[0.08] pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-widest text-[#6F6F6F] uppercase">
          <div>
            © {new Date().getFullYear()} THALLA SAM PREM KUMAR. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>SWISS EDITORIAL SYSTEM</span>
            <span className="hidden sm:inline">·</span>
            <span>SPACE GROTESK / PLUS JAKARTA SANS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialContact;
