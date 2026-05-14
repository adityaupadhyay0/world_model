'use client';

import React, { useState, useEffect } from 'react';

const chapters = [
  { label: 'The Assumption' },
  { label: 'The Challenge' },
  { label: 'Three Levels' },
  { label: 'Four Worlds' },
  { label: 'What Comes Next' },
];

const Navigation: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = [
            'hero',
            'chapter1',
            'chapter2',
            'chapter3',
            'chapter4'
          ].indexOf(id);
          if (index !== -1) setActive(index);
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-3">
      {chapters.map((c, i) => (
        <div
          key={i}
          onClick={() => {
            const ids = ['hero', 'chapter1', 'chapter2', 'chapter3', 'chapter4'];
            scrollTo(ids[i]);
          }}
          className={`group relative w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
            active === i ? 'bg-[var(--gold)] scale-150' : 'bg-white/20'
          }`}
        >
          <div className="absolute right-6 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-widest text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase">
            {c.label}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
