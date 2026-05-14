'use client';

import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface LevelItemProps {
  level: {
    label: string;
    width: string;
    delay: number;
    fillDelay: number;
    color: string;
    desc: string;
    icon: React.ReactNode;
  };
  i: number;
  scrollYProgress: MotionValue<number>;
}

const LevelItem: React.FC<LevelItemProps> = ({ level, i, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0.4, 0.7], [20, 0]);

  return (
    <React.Fragment>
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: level.delay }}
        className="w-full max-w-[320px] flex items-center gap-4 group cursor-default"
      >
        <div className="font-mono text-[10px] tracking-widest text-[var(--gold)] min-w-[70px] text-right group-hover:text-[var(--gold2)] transition-colors">
          {level.label}
        </div>
        <div className="flex-1 h-[2px] bg-[rgba(245,240,232,0.08)] rounded-full relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: level.width }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: level.fillDelay, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ background: level.color }}
          />
          {/* Storytelling scan line */}
          <motion.div
            className="absolute top-0 left-[-100%] w-full h-full bg-white/20"
            animate={{ left: ['100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-[rgba(245,240,232,0.15)] bg-[rgba(245,240,232,0.05)] text-white/70 group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] transition-all"
        >
          {level.icon}
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: level.delay + 0.2 }}
        className="w-full max-w-[320px] text-right -mt-4 mb-2 font-serif text-xs italic text-[rgba(245,240,232,0.4)]"
      >
        {level.desc}
      </motion.div>
    </React.Fragment>
  );
};

const LevelsVisualization: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const levels = [
    {
      label: 'PREDICTOR',
      width: '40%',
      delay: 0.2,
      fillDelay: 0.5,
      color: 'rgba(245,240,232,0.3)',
      desc: 'local pattern completion',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
           <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      )
    },
    {
      label: 'SIMULATOR',
      width: '68%',
      delay: 0.5,
      fillDelay: 0.8,
      color: 'rgba(26,107,90,0.7)',
      desc: 'trajectory modeling',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
        </svg>
      )
    },
    {
      label: 'EVOLVER',
      width: '95%',
      delay: 0.8,
      fillDelay: 1.1,
      color: 'var(--gold)',
      desc: 'self-revising causal models',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 p-12 bg-[radial-gradient(circle_at_center,#1a0a04_0%,var(--ink)_70%)]">
      {levels.map((level, i) => (
        <LevelItem key={i} level={level} i={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

const Chapter3: React.FC = () => {
  const levels = [
    {
      num: '1',
      name: 'Predictor',
      desc: 'Estimates the next state from the current state and an action. Most language models live here — excellent at local prediction, but losing coherence across extended workflows.'
    },
    {
      num: '2',
      name: 'Simulator',
      desc: 'Models entire trajectories. Evaluates sequences of actions before committing. A robotics agent simulates collisions. A browser agent anticipates authentication flows before touching a single button.'
    },
    {
      num: '3',
      name: 'Evolver',
      desc: 'Revises its own world model when evidence contradicts its assumptions. Not just predicting outcomes — updating causal structure itself. This is the architecture of genuine scientific discovery.'
    }
  ];

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div className="relative min-h-[60vh] md:min-h-0 flex items-center justify-center">
        <LevelsVisualization />
      </div>
      <div className="px-[5vw] py-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
            Chapter III
            <span className="w-6 h-px bg-[var(--gold)] opacity-50" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] mb-2 tracking-tight">Three Levels</h2>
          <p className="font-serif italic text-[clamp(1rem,1.8vw,1.25rem)] font-light text-[rgba(245,240,232,0.5)] mb-10">How world models deepen from prediction to evolution</p>
          <div className="w-10 h-px bg-[var(--gold)] opacity-60 mb-10" />
          <div className="text-[clamp(1rem,1.4vw,1.15rem)] font-light leading-[1.9] text-[rgba(245,240,232,0.82)] mb-10">
            <p>The paper organizes world modeling systems along a spectrum of sophistication. Each level represents a different relationship with time, consequence, and reality itself.</p>
          </div>

          <div className="space-y-0.5">
            {levels.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 p-6 bg-[rgba(245,240,232,0.03)] border border-[rgba(245,240,232,0.06)] rounded transition-colors hover:bg-[rgba(245,240,232,0.06)] hover:border-[rgba(201,168,76,0.2)] group"
              >
                <div className="font-serif text-5xl font-light leading-none text-[rgba(201,168,76,0.25)] min-w-[36px] group-hover:text-[rgba(201,168,76,0.5)] transition-colors">
                  {l.num}
                </div>
                <div>
                  <div className="font-sans text-[13px] font-semibold tracking-wider uppercase text-[var(--gold)] mb-2">
                    {l.name}
                  </div>
                  <div className="font-serif text-[15px] font-light leading-relaxed text-[rgba(245,240,232,0.7)]">
                    {l.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif italic text-[clamp(1.2rem,2vw,1.5rem)] font-normal leading-relaxed text-[var(--paper)] border-l-2 border-[var(--gold)] pl-6 my-12"
          >
            &ldquo;Such systems point toward autonomous scientific agents capable of iterative hypothesis formation and self-correction.&rdquo;
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chapter3;
