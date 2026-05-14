'use client';

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const words = ['predict','model','world','agent','future','state','action','causal','plan','time','reason','learn','adapt','evolve','simulate','token','sequence','transform','emerge','goal','environment','trajectory','revise','memory'];

interface RowProps {
  r: number;
  xOffset: MotionValue<number>;
}

const Row: React.FC<RowProps> = ({ r, xOffset }) => {
  const direction = r % 2 === 0 ? 1 : -1;
  const x = useTransform(xOffset, v => v * direction);

  const tokens = useMemo(() => {
    return [...Array(30)].map(() => ({
      word: words[Math.floor(Math.random() * words.length)],
      bright: Math.random() > 0.85
    }));
  }, []);

  return (
    <motion.div
      className="flex gap-1 whitespace-nowrap"
      style={{ x }}
    >
      {tokens.map((token, t) => (
        <span
          key={t}
          className={`font-mono text-[11px] px-[7px] py-[3px] rounded-[3px] border shrink-0 transition-colors duration-300 ${
            token.bright
              ? 'bg-[rgba(61,43,110,0.9)] text-[var(--gold)] border-[rgba(201,168,76,0.5)]'
              : 'bg-[rgba(61,43,110,0.5)] text-[rgba(201,168,76,0.6)] border-[rgba(201,168,76,0.15)]'
          }`}
        >
          {token.word}
        </span>
      ))}
    </motion.div>
  );
};

const TokenStream: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const xOffset = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <div className="absolute inset-0 overflow-hidden flex flex-col justify-center gap-0.5 p-8">
      {[...Array(14)].map((_, r) => (
        <Row key={r} r={r} xOffset={xOffset} />
      ))}
    </div>
  );
};

const Chapter1: React.FC = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div className="relative min-h-[60vh] md:min-h-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#1a0e3d_0%,var(--ink)_70%)]">
        <TokenStream />
      </div>
      <div className="px-[5vw] py-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
            Chapter I
            <span className="w-6 h-px bg-[var(--gold)] opacity-50" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] mb-2 tracking-tight">The Assumption</h2>
          <p className="font-serif italic text-[clamp(1rem,1.8vw,1.25rem)] font-light text-[rgba(245,240,232,0.5)] mb-10">How predicting the next token became a belief system</p>
          <div className="w-10 h-px bg-[var(--gold)] opacity-60 mb-10" />
          <div className="text-[clamp(1rem,1.4vw,1.15rem)] font-light leading-[1.9] text-[rgba(245,240,232,0.82)] space-y-5">
            <p>For the last few years, modern AI advanced through a surprisingly simple principle: predict the next token at massive scale. Researchers trained increasingly large transformers on enormous datasets, and capabilities emerged almost automatically.</p>
            <p>Systems learned to write essays, generate code, solve mathematical problems — with a level of fluency that once seemed distant. That success created a powerful assumption across the field.</p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif italic text-[clamp(1.2rem,2vw,1.5rem)] font-normal leading-relaxed text-[var(--paper)] border-l-2 border-[var(--gold)] pl-6 my-8"
            >
              &ldquo;Many began to believe that intelligence itself might emerge from sufficiently advanced sequence prediction.&rdquo;
            </motion.div>
            <p>Predict enough, at enough scale, and understanding would follow. Awareness would emerge. Agency would arrive. The logic was seductive — and for a while, it seemed to be working.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chapter1;
