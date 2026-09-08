import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinimize2, FiMaximize2, FiTerminal, FiCornerDownLeft } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { PROFILE, ABOUT, PROJECTS, SKILLS, SOCIAL_MEDIA_LINKS } from '../../constants';

const HELP_TEXT = [
  'Available Commands:',
  '  help      - Display this list of commands',
  '  about     - Core summary & architectural philosophy',
  '  skills    - List backend, cloud, and database proficiencies',
  '  projects  - Inspect production distributed systems & repos',
  '  stats     - Production telemetry & engineering metrics',
  '  curl      - Simulate HTTP probe against production health checks',
  '  contact   - Communication channels & location coordinates',
  '  theme     - Toggle or set theme ("theme dark" / "theme light")',
  '  clear     - Wipe console screen buffer',
  '  exit      - Close this terminal modal',
];

const CLITerminal = ({ isOpen, onClose }) => {
  const { dark, toggle, setDark } = useTheme();
  const [history, setHistory] = useState([
    {
      type: 'output',
      lines: [
        'Antigravity Core CLI v2.4.0 [x86_64-apple-darwin23.0]',
        'Type "help" to view executable commands, or "projects" to view architecture.',
        '------------------------------------------------------------------',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    const newEntry = { type: 'command', cmd: trimmed };
    const outputLines = [];

    switch (command) {
      case 'help':
        outputLines.push(...HELP_TEXT);
        break;

      case 'about':
        outputLines.push(
          `Candidate: ${PROFILE.name}`,
          `Role:      ${PROFILE.role}`,
          `Scope:     ${PROFILE.subRole}`,
          '',
          ABOUT.title,
          '',
          ABOUT.text,
          '',
          ABOUT.subtext
        );
        break;

      case 'skills': {
        const categories = {};
        SKILLS.forEach((s) => {
          if (!categories[s.category]) categories[s.category] = [];
          categories[s.category].push(s.name);
        });
        outputLines.push('PROFICIENCIES & STACK:');
        Object.entries(categories).forEach(([cat, items]) => {
          outputLines.push(`  • ${cat.padEnd(22)}: ${items.join(', ')}`);
        });
        break;
      }

      case 'projects':
        outputLines.push('FEATURED DISTRIBUTED SYSTEMS:');
        PROJECTS.forEach((p, idx) => {
          outputLines.push(
            ` [${p.id}] ${p.title} (${p.category})`,
            `     Tags:   ${p.tags.join(', ')}`,
            `     Repo:   ${p.source}`,
            `     Spec:   ${p.specs[0]?.label}: ${p.specs[0]?.value}`
          );
          if (idx < PROJECTS.length - 1) outputLines.push('');
        });
        break;

      case 'stats':
        outputLines.push(
          'SYSTEM METRICS & PRODUCTION BENCHMARKS:',
          `  • Availability SLA Target   : ${PROFILE.uptime}`,
          `  • Production AWS Services   : 4 (ECS Fargate, ECR, S3, EC2)`,
          `  • P99 Execution Latency     : ${ABOUT.stats[2]?.value || '<15ms'}`,
          `  • Transaction Integrity     : ${ABOUT.stats[3]?.value || '100%'} (Idempotent locks)`,
          `  • Production Deployed Repos : ${ABOUT.stats[0]?.value || '5+'}`
        );
        break;

      case 'curl':
        outputLines.push(
          'HTTP/2 200 OK',
          'server: caddy/2.7.4-alpine',
          `date: ${new Date().toUTCString()}`,
          'content-type: application/json; charset=utf-8',
          'x-ratelimit-remaining: 9998',
          'x-latency-origin: 7.82ms',
          '',
          JSON.stringify(
            {
              status: 'operational',
              system: 'samprem-mesh',
              edge_region: 'ap-south-1',
              verified_roles: ['Backend Engineer', 'Distributed Systems'],
            },
            null,
            2
          )
        );
        break;

      case 'contact':
        outputLines.push(
          `Direct Email:  samprem888111@gmail.com`,
          `Coordinates:   Hyderabad / Bangalore / Pune (Open to Remote)`,
          `Status:        ${PROFILE.status}`
        );
        SOCIAL_MEDIA_LINKS.forEach((s) => {
          outputLines.push(`  • ${s.label.padEnd(12)}: ${s.href}`);
        });
        break;

      case 'theme':
        if (arg === 'dark') {
          setDark(true);
          outputLines.push('Environment set: Obsidian Dark Mode active.');
        } else if (arg === 'light') {
          setDark(false);
          outputLines.push('Environment set: Crisp Light Mode active.');
        } else {
          toggle();
          outputLines.push(`Toggled theme to ${!dark ? 'Dark' : 'Light'}.`);
        }
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        outputLines.push(
          `zsh: command not found: ${command}`,
          'Type "help" to view supported commands.'
        );
    }

    setHistory((prev) => [...prev, newEntry, { type: 'output', lines: outputLines }]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInput(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = ['help', 'about', 'skills', 'projects', 'stats', 'curl', 'contact', 'theme', 'clear', 'exit'];
      const match = available.find((c) => c.startsWith(input.trim().toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-3xl rounded-xl overflow-hidden bg-[#0C0D10] text-[#E4E4E7] border border-white/10 shadow-2xl z-10 flex flex-col font-mono text-xs sm:text-sm"
            style={{ maxHeight: '80vh', height: '560px' }}
          >
            {/* Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#16181D] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#FF5F56] hover:brightness-125 transition-all flex items-center justify-center text-[8px] text-black/80 font-bold"
                  title="Close (Esc)"
                >
                  <FiX className="opacity-0 hover:opacity-100" />
                </button>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <FiTerminal className="text-emerald text-sm" />
                <span>guest@samprem-terminal: ~ (zsh)</span>
              </div>

              <div className="text-[11px] text-neutral-500 font-mono hidden sm:block">
                Press [ESC] to exit
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-4 overflow-y-auto font-mono text-[13px] leading-relaxed space-y-3 custom-scrollbar"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.type === 'command' ? (
                    <div className="flex items-center gap-2 text-neutral-200">
                      <span className="text-emerald font-bold">❯</span>
                      <span className="text-white font-medium">{item.cmd}</span>
                    </div>
                  ) : (
                    <div className="text-neutral-400 whitespace-pre-wrap pl-3 border-l-2 border-emerald/20">
                      {item.lines.map((line, lIdx) => (
                        <div key={lIdx}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Active Prompt */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-emerald font-bold">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-[13px] caret-emerald"
                  autoFocus
                  placeholder="Type a command (e.g. 'help', 'projects', 'stats')..."
                />
              </div>
              <div ref={bottomRef} />
            </div>

            {/* Quick Command Suggestions Footer */}
            <div className="px-4 py-2 bg-[#121316] border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 overflow-x-auto gap-2">
              <span className="text-neutral-500 whitespace-nowrap">Shortcuts:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {['help', 'about', 'skills', 'projects', 'stats', 'curl', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors font-mono"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CLITerminal;
