'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Register: React.FC = () => {
  const details = [
    { label: 'Date', val: '17 May 2026' },
    { label: 'Format', val: 'Talks + Discussion' },
    { label: 'Entry', val: 'Open to All' },
    { label: 'Hosted by', val: 'G D P' },
  ];

  return (
    <section id="register" className="bg-[var(--ink)] border-t border-[rgba(201,168,76,0.08)] py-24 px-[8vw] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6">
          17 May 2026 · GDP Talks
        </div>
        <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-tight mb-6 tracking-tight">
          Come.<br />
          <em className="italic font-semibold text-[var(--gold2)]">Think out loud.</em>
        </h2>
        <p className="font-serif text-lg font-light leading-relaxed text-white/55 max-w-[520px] mx-auto mb-12">
          GDP Talks is a space to share what you&apos;re reading, what you&apos;re building, and what you can&apos;t stop wondering about. World Models :: AI is the topic. The conversation belongs to everyone.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
          {details.map((d, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30">{d.label}</div>
                <div className="font-sans text-sm font-semibold tracking-wide text-[var(--paper)]">{d.val}</div>
              </div>
              {i < details.length - 1 && (
                <div className="hidden md:block w-px h-9 bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#"
            className="inline-block bg-[var(--gold)] text-[var(--ink)] font-sans text-xs font-bold tracking-[0.18em] uppercase px-10 py-4 rounded-sm transition-all hover:bg-[var(--gold2)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Register Your Spot
          </a>
          <div className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
            Placeholder · Link coming soon
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
