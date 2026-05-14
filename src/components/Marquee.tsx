'use client';

import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    'World Models',
    'Agentic AI',
    'Causal Reasoning',
    'Counterfactual Simulation',
    'Next-Token Prediction',
    'Temporal Reasoning',
    'Scientific Discovery',
    'The Architecture of Intelligence',
  ];

  return (
    <div className="bg-[var(--gold)] text-[var(--ink)] py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-8 animate-[marquee_20s_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, j) => (
              <React.Fragment key={j}>
                <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase">
                  {item}
                </span>
                <span className="inline-block w-1 h-1 bg-[rgba(10,10,15,0.4)] rounded-full align-middle mx-4" />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
