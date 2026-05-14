'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen grid grid-rows-[1fr_auto] overflow-hidden bg-[var(--ink)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,#1a0e3d_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_80%_80%,#0d2e28_0%,transparent_55%),radial-gradient(ellipse_50%_50%_at_60%_20%,#2a1505_0%,transparent_50%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(120)].map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3,
                animation: `twinkle ${2 + Math.random() * 5}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 4}s`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[length:80px_80px] pointer-events-none"
        style={{
          transform: 'perspective(600px) rotateX(30deg) translateY(-10%)',
          transformOrigin: 'center bottom',
        }}
      />

      <div className="relative z-10 flex flex-col justify-center items-start px-[10vw] pt-32 pb-16 max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[11px] tracking-[0.25em] text-[var(--gold)] uppercase mb-8 flex items-center gap-4"
        >
          <span className="w-10 h-px bg-[var(--gold)]" />
          GDP Talks · 17 May 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.95] tracking-tight mb-10"
        >
          <span className="block">World Models</span>
          <span className="block italic font-semibold bg-gradient-to-br from-[var(--gold)] via-[var(--gold2)] to-[#f0d888] bg-clip-text text-transparent">
            :: AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[clamp(1.1rem,2vw,1.35rem)] font-light leading-relaxed text-[rgba(245,240,232,0.7)] max-w-[560px] mb-12"
        >
          A gathering where participants share their views, ongoing research, and ideas they found too interesting to keep to themselves. Come for the curiosity. Stay for the conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-10 font-sans text-xs tracking-widest text-[rgba(245,240,232,0.45)] uppercase"
        >
          <span>17 May 2026</span>
          <span>·</span>
          <span>GDP Talks</span>
          <span>·</span>
          <span>Open to all</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 flex items-center gap-4 px-[10vw] py-8 font-mono text-[11px] tracking-[0.2em] text-[rgba(245,240,232,0.3)] uppercase"
      >
        <span className="w-[60px] h-px bg-gradient-to-r from-transparent to-[rgba(245,240,232,0.3)] relative overflow-hidden">
          <span className="absolute top-0 left-[-100%] w-full h-full bg-[var(--gold)] animate-[scanLine_2s_1.5s_ease-in-out_infinite]" />
        </span>
        scroll to begin
      </motion.div>
    </section>
  );
};

export default Hero;
