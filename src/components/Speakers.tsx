'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Speakers: React.FC = () => {
  const speakers = [
    { name: 'Aditya Upadhyay', role: 'Orchestrator' },
    { name: 'Devendra Rathore', role: 'Orchestrator' },
    { name: 'Mousami Ghosh', role: 'Orchestrator' },
    { name: 'Ather Hussain', role: 'Orchestrator' },
    { name: 'You?', role: 'Have a view on world models? A paper you can&apos;t stop thinking about?' },
  ];

  const formats = [
    { num: '01', name: 'Your View', desc: 'Share your own take on where AI is heading — no formal research required. Just a perspective worth arguing for.' },
    { num: '02', name: 'Someone&apos;s Research', desc: 'Found a paper or project you couldn&apos;t stop thinking about? Break it down for the room. Make us care about it too.' },
    { num: '03', name: 'Open Discussion', desc: 'Every talk ends with the floor open. We\'re here to catch the current wind of the topic — together.' },
  ];

  return (
    <section className="bg-[var(--ink)] py-24 px-[8vw] border-t border-[rgba(201,168,76,0.08)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(35,65,199,0.08)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase flex items-center gap-3 mb-4">
          <span className="w-7 h-px bg-[var(--gold)] opacity-50" />
          Who&apos;s Talking
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-2 tracking-tight"
        >
          The Speakers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-lg font-light text-white/40 mb-12"
        >
          Participants sharing their views, their research, and the ideas they found fascinating
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded overflow-hidden mb-20">
          {speakers.map((s, i) => (
            <div key={i} className="bg-[rgba(10,10,15,0.9)] p-8 flex flex-col items-center text-center gap-4 group transition-colors hover:bg-[rgba(26,32,87,0.25)] relative overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-white/70">
                <User className="w-6 h-6" />
              </div>
              <div className="font-sans text-sm font-semibold tracking-wide text-[var(--paper)]">
                {s.name}
              </div>
              <div className="font-serif italic text-xs font-light text-white/40 leading-relaxed">
                {s.role}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase flex items-center gap-3 mb-4">
          <span className="w-7 h-px bg-[var(--gold)] opacity-50" />
          The Format
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-2 tracking-tight">How it Works</h2>
        <p className="font-serif italic text-lg font-light text-white/40 mb-12">No gatekeeping. No credentials required. Just ideas worth sharing.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded overflow-hidden">
          {formats.map((f, i) => (
            <div key={i} className="bg-[rgba(10,10,15,0.9)] p-8">
              <div className="font-serif text-5xl font-light text-[rgba(201,168,76,0.2)] mb-4">{f.num}</div>
              <div className="font-sans text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-2">{f.name}</div>
              <div className="font-serif text-sm font-light italic leading-relaxed text-white/50">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
