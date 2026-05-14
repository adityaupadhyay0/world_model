'use client';

import React from 'react';

const EventBand: React.FC = () => {
  return (
    <div className="bg-[rgba(201,168,76,0.07)] border-y border-[rgba(201,168,76,0.14)] py-[0.65rem] px-[4vw] flex items-center justify-center gap-10 flex-wrap font-mono text-[11px] tracking-[0.2em] text-[rgba(201,168,76,0.75)] uppercase">
      <div className="flex items-center gap-[0.6rem]">
        <span>GDP Talks</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.35)]" />
      <div className="flex items-center gap-[0.6rem]">
        <span>17 May 2026</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.35)]" />
      <div className="flex items-center gap-[0.6rem]">
        <span>World Models :: AI</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-[rgba(201,168,76,0.35)]" />
      <div className="flex items-center gap-[0.6rem]">
        <span>Open · Curious · Collaborative</span>
      </div>
    </div>
  );
};

export default EventBand;
