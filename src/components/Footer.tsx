'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] border-t border-[rgba(201,168,76,0.08)] py-10 px-[8vw] flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4 C14 4 8 9 7 16 L10 14 C11 20 15 23 20 24 C25 23 29 20 30 14 L33 16 C32 9 26 4 20 4Z" fill="rgba(201,168,76,0.6)"/>
          <path d="M7 16 L2 12 L8 18 Z" fill="rgba(201,168,76,0.4)"/>
          <path d="M33 16 L38 12 L32 18 Z" fill="rgba(201,168,76,0.4)"/>
          <path d="M17 24 L15 36 L20 30 L25 36 L23 24 Z" fill="rgba(201,168,76,0.5)"/>
          <circle cx="15" cy="13" r="1.5" fill="rgba(201,168,76,0.9)"/>
        </svg>
        <span className="font-sans text-base font-extrabold tracking-[0.22em] text-white/60">G D P</span>
      </div>
      <div className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
        GDP Talks · World Models :: AI · 17 May 2026
      </div>
    </footer>
  );
};

export default Footer;
