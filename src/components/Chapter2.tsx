'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrainVisualization: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Dynamic rotation based on scroll
  const rotate = useTransform(scrollYProgress, [0.1, 0.4], [0, 180]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0.8, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0.3, 1]);

  const ringData = [
    { sz: 80,  color: 'rgba(26,107,90,0.6)',  d: 3 },
    { sz: 130, color: 'rgba(26,107,90,0.35)', d: 4 },
    { sz: 190, color: 'rgba(26,107,90,0.2)',  d: 5 },
    { sz: 260, color: 'rgba(26,107,90,0.1)',  d: 6.5 },
    { sz: 340, color: 'rgba(26,107,90,0.06)', d: 8 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,#0d2e28_0%,var(--ink)_70%)] overflow-hidden">
      <motion.div
        style={{ rotate, scale, opacity }}
        className="relative flex items-center justify-center"
      >
        {ringData.map((rd, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: rd.sz,
              height: rd.sz,
              borderColor: rd.color,
              ...({
                '--o': 0.2 + (0.5 - i * 0.08),
                '--o2': 0.2 + (0.5 - i * 0.08) + 0.2,
              } as React.CSSProperties)
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: rd.d,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        <motion.div
          className="relative w-[60px] h-[60px] rounded-full bg-[radial-gradient(circle,rgba(26,107,90,0.8),rgba(26,107,90,0.2))] border border-[rgba(26,171,144,0.6)] flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 20px rgba(26,107,90,0.3)",
              "0 0 60px rgba(26,107,90,0.7), 0 0 100px rgba(26,107,90,0.3)",
              "0 0 20px rgba(26,107,90,0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
           <svg viewBox="0 0 1024 1024" fill="#d1d1d1" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
             <path d="M615.922 967.676H408.078a7.982 7.982 0 0 1-5.652-2.344l-31.978-31.976a7.988 7.988 0 0 1-2.342-5.652v-111.92a7.988 7.988 0 0 1 7.994-7.994h271.798a7.998 7.998 0 0 1 7.994 7.994v111.92a7.992 7.992 0 0 1-2.342 5.652l-31.976 31.976a7.99 7.99 0 0 1-5.652 2.344z" />
             <path d="M647.898 823.778H376.1a7.99 7.99 0 0 1-7.994-7.994v-49.558c-80.176-50.09-127.908-135.824-127.908-230.242 0-149.876 121.928-271.806 271.806-271.806 149.854 0 271.796 121.928 271.796 271.806 0 94.418-47.746 180.152-127.908 230.242v49.558a8 8 0 0 1-7.994 7.994z" />
           </svg>
        </motion.div>

        {[...Array(12)].map((_, i) => {
          const r = 70 + Math.random() * 120;
          const initialRotate = Math.random() * 360;
          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{
                background: Math.random() > 0.5 ? 'var(--teal)' : 'var(--gold)',
                x: r,
              }}
              animate={{
                rotate: [initialRotate, initialRotate + 360],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                rotate: {
                  duration: 5 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear"
                },
                opacity: {
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          );
        })}
      </motion.div>

      {/* Background Story Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-px bg-white/20"
          animate={{ x: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-px bg-white/20"
          animate={{ x: [0, -70, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  );
};

const Chapter2: React.FC = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden md:rtl">
      <div className="relative min-h-[60vh] md:min-h-0 flex items-center justify-center md:ltr">
        <BrainVisualization />
      </div>
      <div className="px-[5vw] py-24 flex flex-col justify-center md:ltr">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
            Chapter II
            <span className="w-6 h-px bg-[var(--gold)] opacity-50" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] mb-2 tracking-tight">The Challenge</h2>
          <p className="font-serif italic text-[clamp(1rem,1.8vw,1.25rem)] font-light text-[rgba(245,240,232,0.5)] mb-10">Why prediction alone cannot birth a true agent</p>
          <div className="w-10 h-px bg-[var(--gold)] opacity-60 mb-10" />
          <div className="text-[clamp(1rem,1.4vw,1.15rem)] font-light leading-[1.9] text-[rgba(245,240,232,0.82)] space-y-5">
            <p>AI is no longer confined to chat interfaces. The industry is shifting rapidly toward agents — systems that operate inside environments, pursue goals, interact with tools, and make decisions across long time horizons.</p>
            <p>These systems face a fundamental problem: they cannot rely purely on local pattern completion. They must anticipate consequences, simulate future states, and revise their behavior when reality contradicts their expectations.</p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif italic text-[clamp(1.2rem,2vw,1.5rem)] font-normal leading-relaxed text-[var(--paper)] border-l-2 border-[var(--gold)] pl-6 my-8"
            >
              &ldquo;Humans continuously rely on such models. We anticipate rain from dark clouds, predict the arc of a moving object, and infer emotional tension from a shift in someone&apos;s tone.&rdquo;
            </motion.div>
            <p>A new paper — <em className="italic">Agentic World Modeling</em> — proposes that advanced AI must develop the same capacity. It must build an internal predictive representation of how the world evolves through time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chapter2;
