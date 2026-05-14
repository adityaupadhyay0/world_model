'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Finale: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-[10vw] py-32 relative overflow-hidden bg-[var(--ink)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,#1a0e3d_0%,var(--ink)_65%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(201,168,76,0.08)] animate-[slowSpin_30s_linear_infinite] pointer-events-none after:content-[''] after:absolute after:inset-[75px] after:rounded-full after:border after:border-[rgba(201,168,76,0.05)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-[700px]"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              filter: ["drop-shadow(0 0 8px rgba(201,168,76,0.3))", "drop-shadow(0 0 30px rgba(201,168,76,0.7))", "drop-shadow(0 0 8px rgba(201,168,76,0.3))"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-[var(--gold)]"
          >
            <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </motion.div>
        </div>

        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight mb-8 tracking-tight text-[var(--paper)]">
          The conversation<br />
          <em className="italic font-semibold bg-gradient-to-br from-[var(--gold)] to-[var(--gold2)] bg-clip-text text-transparent">starts here</em>
        </h2>

        <div className="w-px h-20 bg-gradient-to-b from-[var(--gold)] to-transparent mx-auto mb-12" />

        <div className="space-y-6 text-[clamp(1.05rem,1.5vw,1.2rem)] font-light leading-relaxed text-white/70 mb-12">
          <p>Intelligence fundamentally depends on counterfactual simulation — the ability to imagine possible futures conditioned on different choices. Planning emerges from this capacity. Scientific reasoning emerges from it. Agency itself may depend on it.</p>
          <p>On 17 May, we gather to ask what that means — for AI, for research, and for the ideas worth staying curious about. Bring your view. Bring what you&apos;ve been reading. Bring your questions.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif italic text-[clamp(1.2rem,2vw,1.5rem)] font-normal leading-relaxed text-[var(--paper)] border-l-2 border-[var(--gold)] pl-6 my-12 text-left max-w-[540px] mx-auto"
        >
          &ldquo;We rarely care whether someone predicts every detail of the future perfectly. We care whether their mental model helps them navigate reality successfully.&rdquo;
        </motion.div>

        <div className="w-px h-20 bg-gradient-to-b from-[var(--gold)] to-transparent mx-auto mb-12 rotate-180" />

        <div className="font-mono text-[11px] tracking-[0.25em] text-white/25 uppercase">
          GDP Talks · World Models :: AI · 17 May 2026
        </div>
      </motion.div>
    </section>
  );
};

export default Finale;
