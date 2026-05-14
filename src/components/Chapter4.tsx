'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Cpu, Globe, FlaskConical, Box } from 'lucide-react';

const worlds = [
  {
    id: 1,
    label: 'Environment 01',
    name: 'Physical',
    accent: '#1D9E75',
    desc: 'Mechanics, motion, and spatial interaction. Governed by stable laws — physics doesn\'t change overnight. Key domain: robotics and autonomous driving.',
    icon: <Box className="w-6 h-6" />
  },
  {
    id: 2,
    label: 'Environment 02',
    name: 'Digital',
    accent: '#7F77DD',
    desc: 'Browsers, APIs, and operating systems. A button click changes state permanently. The most commercially active agents already live here.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 3,
    label: 'Environment 03',
    name: 'Social',
    accent: '#D85A30',
    desc: 'Markets, institutions, and communities. These environments react to the predictions made about them — making them extraordinarily unstable.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 4,
    label: 'Environment 04',
    name: 'Scientific',
    accent: '#BA7517',
    desc: 'Drug discovery, materials science, biology. The governing laws are unknown. Agents must infer hidden causal structure at the edge of human knowledge.',
    icon: <FlaskConical className="w-6 h-6" />
  },
];

const Chapter4: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = 5000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % worlds.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + worlds.length) % worlds.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startTimeRef.current = Date.now() - (progress / 100) * duration;
      const tick = () => {
        const now = Date.now();
        const elapsed = now - (startTimeRef.current || now);
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          next();
        } else {
          timerRef.current = setTimeout(tick, 16);
        }
      };
      timerRef.current = setTimeout(tick, 16);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPaused, next, progress]);

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden md:rtl">
      <div className="relative min-h-[60vh] md:min-h-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#0d0d1a_0%,var(--ink)_70%)] p-8 gap-6 md:ltr">
        <div className="w-full max-w-[340px] h-px bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-100 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: worlds[current].accent
            }}
          />
        </div>

        <div className="relative w-full max-w-[340px] h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 bg-white/[0.03] border border-white/10 rounded-lg p-8 flex flex-col gap-3"
              style={{ borderTop: `2px solid ${worlds[current].accent}` }}
            >
              <div className="flex justify-between items-start">
                <div className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                  {worlds[current].label}
                </div>
                <div style={{ color: worlds[current].accent }}>
                  {worlds[current].icon}
                </div>
              </div>
              <div className="font-serif text-[1.6rem] font-semibold leading-none text-[var(--paper)]">
                {worlds[current].name}
              </div>
              <div className="font-serif text-[13.5px] font-light italic leading-relaxed text-white/60">
                {worlds[current].desc}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full max-w-[340px] flex justify-between items-center">
          <div className="flex gap-2">
            {worlds.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setProgress(0);
                  startTimeRef.current = Date.now();
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'scale-150' : 'bg-white/20'
                }`}
                style={{ backgroundColor: i === current ? worlds[i].accent : undefined }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white transition-colors"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-[5vw] py-24 flex flex-col justify-center md:ltr">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
            Chapter IV
            <span className="w-6 h-px bg-[var(--gold)] opacity-50" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] mb-2 tracking-tight">Four Worlds</h2>
          <p className="font-serif italic text-[clamp(1rem,1.8vw,1.25rem)] font-light text-[rgba(245,240,232,0.5)] mb-10">The environments agents must learn to inhabit</p>
          <div className="w-10 h-px bg-[var(--gold)] opacity-60 mb-10" />
          <div className="text-[clamp(1rem,1.4vw,1.15rem)] font-light leading-[1.9] text-[rgba(245,240,232,0.82)] mb-10">
            <p>Beyond capability levels, the paper examines the kinds of laws governing different environments. No world model is universal — each domain demands a radically different representation of reality.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded overflow-hidden">
            {worlds.map((w, i) => (
              <div key={i} className="bg-[rgba(10,10,15,0.7)] p-6 relative group overflow-hidden">
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-full translate-x-1/3 translate-y-1/3 opacity-15 transition-opacity group-hover:opacity-30"
                  style={{ backgroundColor: w.accent }}
                />
                <div className="mb-4" style={{ color: w.accent }}>
                  {w.icon}
                </div>
                <div className="font-sans text-[11px] font-semibold tracking-widest uppercase text-[var(--paper)] mb-2">
                  {w.name} worlds
                </div>
                <div className="font-serif text-xs italic leading-relaxed text-white/50">
                  {w.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="font-serif italic text-[clamp(1.2rem,2vw,1.5rem)] font-normal leading-relaxed text-[var(--paper)] border-l-2 border-[var(--gold)] pl-6 my-12">
            &ldquo;The act of prediction can alter the underlying reality itself. Social world modeling is extraordinarily unstable.&rdquo;
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chapter4;
