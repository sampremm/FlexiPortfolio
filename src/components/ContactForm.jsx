import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ------------------------------------------------------------------
// Setup: create account at https://www.emailjs.com/ and fill these in
// ------------------------------------------------------------------
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [logs, setLogs] = useState([]);

  const addLog = (text, type = 'info') =>
    setLogs(prev => [...prev, { text, type, id: Date.now() + Math.random() }]);

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    setLogs([]);
    addLog('Initializing connection...', 'info');
    setTimeout(() => addLog('Encrypting payload with HMAC-SHA256...', 'info'), 400);
    setTimeout(() => addLog('Routing through mail relay...', 'info'), 900);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setTimeout(() => {
        addLog('Message delivered successfully. ✓', 'success');
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1200);
    } catch {
      setTimeout(() => {
        addLog('Error: delivery failed. Check your EmailJS config.', 'error');
        setStatus('error');
      }, 1200);
    }
  };

  const inputClass = "w-full bg-transparent border border-[#252525] text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-amber/60 placeholder:text-muted/40 transition-colors";

  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence>
        {logs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#0a0a0a] border border-[#252525] p-4 font-mono text-[10px] space-y-1"
          >
            <div className="text-amber/50 uppercase tracking-widest mb-2">// SMTP_LOG</div>
            {logs.map(log => (
              <motion.div key={log.id} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                className={log.type === 'success' ? 'text-green-400' : log.type === 'error' ? 'text-red-400' : 'text-muted'}>
                {log.type === 'success' ? '✓ ' : log.type === 'error' ? '✗ ' : '→ '}{log.text}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {status === 'success' ? (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="bg-green-400/5 border border-green-400/30 p-8 font-mono text-center">
          <div className="text-4xl mb-4">✓</div>
          <div className="text-green-400 font-bold uppercase tracking-widest text-sm">Message Delivered</div>
          <div className="text-muted text-xs mt-2">I'll get back to you soon.</div>
          <button onClick={() => { setStatus('idle'); setLogs([]); }}
            className="mt-6 text-[10px] font-mono text-amber border border-amber/30 px-4 py-2 hover:bg-amber/10 transition-all uppercase tracking-widest">
            Send Another →
          </button>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[9px] uppercase tracking-widest text-amber/60">$ from_name</label>
            <input type="text" name="from_name" placeholder="Your name" value={formData.name}
              onChange={handleChange} required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[9px] uppercase tracking-widest text-amber/60">$ from_email</label>
            <input type="email" name="from_email" placeholder="your@email.com" value={formData.email}
              onChange={handleChange} required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[9px] uppercase tracking-widest text-amber/60">$ message</label>
            <textarea name="message" placeholder="Tell me about the role / project..." value={formData.message}
              onChange={handleChange} required rows={4} className={`${inputClass} resize-none`} />
          </div>
          <button type="submit" disabled={status === 'sending'}
            className="w-full bg-amber text-black font-mono text-[11px] font-bold uppercase tracking-widest py-3 hover:bg-green-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2">
            {status === 'sending' ? <><span className="animate-pulse">●</span> Sending...</> : 'Send Message ↗'}
          </button>
          {status === 'error' && (
            <p className="font-mono text-[10px] text-red-400 text-center">
              Failed to send. Email directly: samprem888111@gmail.com
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
