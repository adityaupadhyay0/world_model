'use client';

import React, { useEffect, useRef, useState } from 'react';

// Main Page Component
export default function WorldModelsPage() {
  return (
    <>
      <CursorComponent />
      <ChapterIndicator />
      <HeroSection />
      <EventBand />
      <MarqueeBand />
      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
      <ChapterFour />
      <SpeakersSection />
      <RegisterSection />
      <Footer />
      <FinalSection />
    </>
  );
}

// Custom Cursor Component
function CursorComponent() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);

  useEffect(() => {
    let rx = 0,
      ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMx(e.clientX);
      setMy(e.clientY);
    };

    const animate = () => {
      if (curRef.current) {
        curRef.current.style.left = mx + 'px';
        curRef.current.style.top = my + 'px';
      }

      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [mx, my]);

  useEffect(() => {
    const elements = document.querySelectorAll('a,button,.ci-dot');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (curRef.current) {
          curRef.current.style.width = '14px';
          curRef.current.style.height = '14px';
        }
        if (ringRef.current) {
          ringRef.current.style.width = '50px';
          ringRef.current.style.height = '50px';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (curRef.current) {
          curRef.current.style.width = '8px';
          curRef.current.style.height = '8px';
        }
        if (ringRef.current) {
          ringRef.current.style.width = '36px';
          ringRef.current.style.height = '36px';
        }
      });
    });
  }, []);

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

// Chapter Indicator Component
function ChapterIndicator() {
  const scrollToSection = (n: number) => {
    const targets = document.querySelectorAll('[data-section]');
    if (targets[n]) {
      targets[n].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="chapter-indicator" aria-label="Chapter navigation">
      <div className="ci-dot active" data-section="0" onClick={() => scrollToSection(0)}></div>
      <div className="ci-dot" data-section="1" onClick={() => scrollToSection(1)}></div>
      <div className="ci-dot" data-section="2" onClick={() => scrollToSection(2)}></div>
      <div className="ci-dot" data-section="3" onClick={() => scrollToSection(3)}></div>
      <div className="ci-dot" data-section="4" onClick={() => scrollToSection(4)}></div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starFieldRef.current) return;

    for (let i = 0; i < 120; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const sz = Math.random() * 2 + 0.5;
      const duration = 2 + Math.random() * 5;
      const o1 = 0.1 + Math.random() * 0.3;
      const o2 = 0.5 + Math.random() * 0.5;
      s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${duration}s;--o1:${o1};--o2:${o2};animation-delay:${Math.random() * 4}s`;
      starFieldRef.current.appendChild(s);
    }
  }, []);

  return (
    <section className="hero" data-section="0">
      <div className="hero-bg"></div>
      <div className="star-field" ref={starFieldRef}></div>
      <div className="hero-grid-lines"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">GDP Talks · 17 May 2026</div>
        <h1 className="hero-title">
          <span className="line1">World Models</span>
          <span className="line2">:: AI</span>
        </h1>
        <p className="hero-desc">
          A gathering where participants share their views, ongoing research, and ideas they found too interesting to keep
          to themselves. Come for the curiosity. Stay for the conversation.
        </p>
        <div className="hero-meta">
          <span>17 May 2026</span>
          <span>·</span>
          <span>GDP Talks</span>
          <span>·</span>
          <span>Open to all</span>
        </div>
      </div>
      <div className="scroll-hint">
        <span className="scroll-line"></span>
        scroll to begin
      </div>
    </section>
  );
}

// Event Band Component
function EventBand() {
  return (
    <div className="event-band">
      <div className="event-band-item">
        <span>GDP Talks</span>
      </div>
      <div className="event-band-dot"></div>
      <div className="event-band-item">
        <span>17 May 2026</span>
      </div>
      <div className="event-band-dot"></div>
      <div className="event-band-item">
        <span>World Models :: AI</span>
      </div>
      <div className="event-band-dot"></div>
      <div className="event-band-item">
        <span>Open · Curious · Collaborative</span>
      </div>
    </div>
  );
}

// Marquee Band Component
function MarqueeBand() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

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

    const content = items.map((t) => `<span class="marquee-item">${t}</span><span class="marquee-dot"></span>`).join('');
    marqueeRef.current.innerHTML = content.repeat(4);
  }, []);

  return (
    <div className="marquee-band">
      <div className="marquee-inner" ref={marqueeRef}></div>
    </div>
  );
}

// Chapter One Component
function ChapterOne() {
  const tsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tsRef.current) return;

    const words = [
      'predict',
      'model',
      'world',
      'agent',
      'future',
      'state',
      'action',
      'causal',
      'plan',
      'time',
      'reason',
      'learn',
      'adapt',
      'evolve',
      'simulate',
      'token',
      'sequence',
      'transform',
      'emerge',
      'goal',
      'environment',
      'trajectory',
      'revise',
      'memory',
    ];

    for (let r = 0; r < 14; r++) {
      const row = document.createElement('div');
      row.className = 'token-row';
      const speed = 15 + Math.random() * 20;
      row.style.setProperty('--spd', speed + 's');

      let rowContent = '';
      for (let t = 0; t < 30; t++) {
        const w = words[Math.floor(Math.random() * words.length)];
        const bright = Math.random() > 0.85;
        rowContent += `<span class="tok${bright ? ' bright' : ''}">${w}</span>`;
      }
      row.innerHTML = rowContent + rowContent;
      tsRef.current.appendChild(row);
    }
  }, []);

  return (
    <section className="chapter" data-section="1">
      <div className="chapter-visual vis-assumption">
        <div className="token-stream" ref={tsRef}></div>
      </div>
      <div className="chapter-text">
        <div className="reveal">
          <div className="ch-num">Chapter I</div>
          <h2 className="ch-title">The Assumption</h2>
          <p className="ch-subtitle">How predicting the next token became a belief system</p>
          <div className="ch-divider"></div>
          <div className="ch-body">
            <p>
              For the last few years, modern AI advanced through a surprisingly simple principle: predict the next token
              at massive scale. Researchers trained increasingly large transformers on enormous datasets, and capabilities
              emerged almost automatically.
            </p>
            <p>
              Systems learned to write essays, generate code, solve mathematical problems — with a level of fluency that
              once seemed distant. That success created a powerful assumption across the field.
            </p>
            <div className="pullquote">
              "Many began to believe that intelligence itself might emerge from sufficiently advanced sequence prediction."
            </div>
            <p>
              Predict enough, at enough scale, and understanding would follow. Awareness would emerge. Agency would
              arrive. The logic was seductive — and for a while, it seemed to be working.
            </p>
          </div>
        </div>
        <ConceptGrid />
      </div>
    </section>
  );
}

// Concept Grid Component
function ConceptGrid() {
  return (
    <div className="concept-grid reveal">
      <div className="concept-item">
        <div className="ci-icon">
          <svg
            fill="#f2f2f2"
            height="32px"
            width="32px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            stroke="#f2f2f2"
          >
            <path d="M29.36,15.695v-3.389c0.575-0.159,1-0.681,1-1.305c0-0.75-0.61-1.36-1.36-1.36 c-0.191,0-0.372,0.04-0.537,0.111l-2.365-2.956C26.261,6.572,26.36,6.298,26.36,6c0-0.75-0.61-1.36-1.36-1.36 c-0.401,0-0.758,0.177-1.007,0.454l-3.659-1.83C20.351,3.179,20.36,3.091,20.36,3c0-0.75-0.61-1.36-1.36-1.36 c-0.625,0-1.147,0.425-1.306,1h-4.389c-0.159-0.575-0.681-1-1.305-1c-0.75,0-1.36,0.61-1.36,1.36c0,0.091,0.01,0.179,0.027,0.264 l-2.66,1.33C7.758,4.318,7.401,4.14,7,4.14c-0.75,0-1.36,0.61-1.36,1.36c0,0.273,0.082,0.526,0.221,0.739L3.598,8.785 C3.417,8.695,3.216,8.64,3,8.64c-0.75,0-1.36,0.61-1.36,1.36c0,0.625,0.425,1.146,1,1.305v3.389c-0.575,0.159-1,0.681-1,1.305 c0,0.75,0.61,1.36,1.36,1.36c0.546,0,1.014-0.325,1.231-0.791l3.424,0.571C7.726,17.824,8.298,18.36,9,18.36 c0.091,0,0.179-0.01,0.264-0.027l0.83,1.659C9.818,20.242,9.64,20.599,9.64,21c0,0.75,0.61,1.36,1.36,1.36 c0.47,0,0.885-0.24,1.13-0.604l3.518,1.173C15.646,22.953,15.64,22.976,15.64,23c0,0.625,0.425,1.147,1,1.306v3.388 c-0.575,0.159-1,0.681-1,1.306c0,0.75,0.61,1.36,1.36,1.36s1.36-0.61,1.36-1.36c0-0.624-0.425-1.147-1-1.306v-3.389 c0.575-0.159,1-0.681,1-1.306c0-0.452-0.224-0.85-0.564-1.098l0.682-1.82l3.163,0.904c0,0.005-0.001,0.01-0.001,0.015 c0,0.624,0.425,1.147,1,1.306v5.389c-0.575,0.159-1,0.681-1,1.306c0,0.75,0.61,1.36,1.36,1.36s1.36-0.61,1.36-1.36 c0-0.624-0.425-1.147-1-1.306v-5.389c0.575-0.159,1-0.681,1-1.306c0-0.149-0.03-0.29-0.074-0.424l3.828-2.553 C28.353,18.231,28.66,18.36,29,18.36c0.75,0,1.36-0.61,1.36-1.36C30.36,16.376,29.935,15.854,29.36,15.695z M21.354,14.932 c-0.002-0.045-0.007-0.09-0.014-0.134l3.049-1.355l3.313,2.899L21.354,14.932z M20,15.64c-0.353,0-0.64-0.287-0.64-0.64 s0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64S20.353,15.64,20,15.64z M20,13.64c-0.75,0-1.36,0.61-1.36,1.36 c0,0.452,0.224,0.85,0.564,1.097l-1.166,3.11l-1.902-0.543l-1.465-5.126l5.463-3.756l0.628,0.489l3.028,2.65l-2.745,1.22 C20.796,13.838,20.423,13.64,20,13.64z M9.131,15.653L8.122,9.85l3.612-0.361V9.485C11.93,9.995,12.421,10.36,13,10.36 c0.005,0,0.009-0.001,0.014-0.001l0.823,2.879l-3.966,2.726C9.666,15.792,9.412,15.681,9.131,15.653z M13,9.64 c-0.353,0-0.64-0.287-0.64-0.64S12.647,8.36,13,8.36S13.64,8.647,13.64,9S13.353,9.64,13,9.64z M10.28,16.557l3.765-2.589 l1.275,4.463l-4.962-1.418c0-0.005,0.001-0.009,0.001-0.014C10.36,16.844,10.328,16.697,10.28,16.557z M24.129,7.036 C24.366,7.235,24.667,7.36,25,7.36c0.191,0,0.372-0.04,0.537-0.111l2.365,2.955C27.739,10.428,27.64,10.702,27.64,11 c0,0.069,0.01,0.135,0.02,0.201l-3.144,1.397l-3.295-2.883l-0.464-0.361L24.129,7.036z M28.251,15.866l-3.138-2.745l2.841-1.262 c0.176,0.213,0.412,0.371,0.686,0.446v3.389C28.501,15.733,28.369,15.789,28.251,15.866z M29.64,11c0,0.353-0.287,0.64-0.64,0.64 s-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64S29.64,10.647,29.64,11z M25,5.36c0.353,0,0.64,0.287,0.64,0.64S25.353,6.64,25,6.64 S24.36,6.353,24.36,6S24.647,5.36,25,5.36z M19,2.36c0.353,0,0.64,0.287,0.64,0.64S19.353,3.64,19,3.64S18.36,3.353,18.36,3 S18.647,2.36,19,2.36z M19,4.36c0.401,0,0.758-0.177,1.007-0.454l3.659,1.83C23.649,5.821,23.64,5.909,23.64,6 c0,0.156,0.032,0.303,0.08,0.443l-3.56,2.448l-6.904-5.37c0.021-0.051,0.035-0.106,0.05-0.161h4.389 C17.853,3.935,18.375,4.36,19,4.36z M12,2.36c0.353,0,0.64,0.287,0.64,0.64S12.353,3.64,12,3.64S11.36,3.353,11.36,3 S11.647,2.36,12,2.36z M10.993,3.906C11.242,4.182,11.599,4.36,12,4.36c0.304,0,0.583-0.104,0.81-0.274l6.728,5.232l-5.075,3.489 l-0.757-2.65C14.096,9.918,14.36,9.491,14.36,9c0-0.75-0.61-1.36-1.36-1.36c-0.673,0-1.229,0.492-1.337,1.135V8.772L7.998,9.138 l-0.42-2.412C8.039,6.508,8.36,6.042,8.36,5.5c0-0.091-0.01-0.179-0.027-0.264L10.993,3.906z M4.265,9.511 C4.231,9.423,4.19,9.339,4.139,9.261l2.263-2.546c0.143,0.071,0.3,0.115,0.467,0.132L7.28,9.21L4.265,9.511z M7,4.86 c0.353,0,0.64,0.287,0.64,0.64S7.353,6.14,7,6.14S6.36,5.853,6.36,5.5S6.647,4.86,7,4.86z M2.36,10c0-0.353,0.287-0.64,0.64-0.64 S3.64,9.647,3.64,10S3.353,10.64,3,10.64S2.36,10.353,2.36,10z M3,16.64c-0.353,0-0.64-0.287-0.64-0.64S2.647,15.36,3,15.36 S3.64,15.647,3.64,16C3.64,16.353,3.353,16.64,3,16.64z M7.769,16.43l-3.424-0.571c-0.059-0.561-0.455-1.018-0.986-1.165v-3.389 c0.503-0.139,0.888-0.556,0.977-1.077l3.067-0.307l1.018,5.853C8.135,15.91,7.904,16.142,7.769,16.43z M8.36,17 c0-0.353,0.287-0.64,0.64-0.64S9.64,16.647,9.64,17S9.353,17.64,9,17.64S8.36,17.353,8.36,17z M11,21.64 c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64S11.353,21.64,11,21.64z M12.353,21.071 c0.001-0.024,0.007-0.047,0.007-0.071c0-0.75-0.61-1.36-1.36-1.36c-0.091,0-0.179,0.01-0.264,0.027l-0.83-1.659 c0.098-0.088,0.182-0.189,0.251-0.302l5.396,1.541l0.742,2.596c-0.168,0.103-0.315,0.238-0.425,0.402L12.353,21.071z M17.64,29 c0,0.353-0.287,0.64-0.64,0.64c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64C17.353,28.36,17.64,28.647,17.64,29z M17,23.64 c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64c0.353,0,0.64,0.287,0.64,0.64S17.353,23.64,17,23.64z M17.121,21.652 C17.08,21.648,17.041,21.64,17,21.64c-0.005,0-0.009,0.001-0.014,0.001l-0.618-2.162l1.416,0.404L17.121,21.652z M18.732,19.406 l1.147-3.059c0.041,0.004,0.08,0.012,0.121,0.012c0.519,0,0.967-0.296,1.196-0.725l6.451,1.433c0.006,0.124,0.03,0.243,0.068,0.356 l-3.828,2.553C23.647,19.769,23.34,19.64,23,19.64c-0.491,0-0.918,0.264-1.158,0.655L18.732,19.406z M23.64,29 c0,0.353-0.287,0.64-0.64,0.64s-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64S23.64,28.647,23.64,29z M23,21.64 c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64S23.353,21.64,23,21.64z M29,17.64 c-0.353,0-0.64-0.287-0.64-0.64c0-0.353,0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64C29.64,17.353,29.353,17.64,29,17.64z"></path>
          </svg>
        </div>
        <div className="ci-label">Transformers</div>
        <div className="ci-desc">Architecture trained to predict the next token in a sequence</div>
      </div>
      <div className="concept-item">
        <div className="ci-icon">
          <svg viewBox="0 0 24 24" height="32px" width="32px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f2f2f2">
            <path
              d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5"
              stroke="#f2f2f2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
              stroke="#f2f2f2"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <div className="ci-label">Scaling Laws</div>
        <div className="ci-desc">Capability grows predictably with model size and data</div>
      </div>
      <div className="concept-item">
        <div className="ci-icon">
          <svg viewBox="0 0 32 32" height="32px" width="32px" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#f2f2f2" stroke="#f2f2f2">
            <path d="M527.786,122.02 L522.414,125.273 C521.925,125.501 521.485,125.029 521.713,124.571 L524.965,119.195 L527.786,122.02 L527.786,122.02 Z M537.239,106.222 L540.776,109.712 L529.536,120.959 C528.22,119.641 526.397,117.817 526.024,117.444 L537.239,106.222 L537.239,106.222 Z M540.776,102.683 C541.164,102.294 541.793,102.294 542.182,102.683 L544.289,104.791 C544.677,105.18 544.677,105.809 544.289,106.197 L542.182,108.306 L538.719,104.74 L540.776,102.683 L540.776,102.683 Z M524.11,117.068 L519.81,125.773 C519.449,126.754 520.233,127.632 521.213,127.177 L529.912,122.874 C530.287,122.801 530.651,122.655 530.941,122.365 L546.396,106.899 C547.172,106.124 547.172,104.864 546.396,104.088 L542.884,100.573 C542.107,99.797 540.85,99.797 540.074,100.573 L524.619,116.038 C524.328,116.329 524.184,116.693 524.11,117.068 L524.11,117.068 Z M546,111 L546,127 C546,128.099 544.914,129.012 543.817,129.012 L519.974,129.012 C518.877,129.012 517.987,128.122 517.987,127.023 L517.987,103.165 C517.987,102.066 518.902,101 520,101 L536,101 L536,99 L520,99 C517.806,99 516,100.969 516,103.165 L516,127.023 C516,129.22 517.779,131 519.974,131 L543.817,131 C546.012,131 548,129.196 548,127 L548,111 L546,111 L546,111 Z"></path>
          </svg>
        </div>
        <div className="ci-label">Emergence</div>
        <div className="ci-desc">Abilities that appear suddenly — not programmed, but arising</div>
      </div>
    </div>
  );
}

// Chapter Two Component
function ChapterTwo() {
  const brainRingsRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipMessage, setTooltipMessage] = useState('Hover over the brain to explore the challenge');

  const brainMessages = [
    'Prediction alone isn\'t enough for true agency.',
    'Agents need internal models of how the world evolves.',
    'World models anticipate consequences and simulate futures.',
    'They revise behavior when reality contradicts expectations.',
    'This is the key to autonomous, goal-directed intelligence.',
  ];

  let brainMsgIndex = 0;

  useEffect(() => {
    if (!brainRingsRef.current) return;

    const ringData = [
      { sz: 80, color: 'rgba(26,107,90,0.6)', d: 3 },
      { sz: 130, color: 'rgba(26,107,90,0.35)', d: 4 },
      { sz: 190, color: 'rgba(26,107,90,0.2)', d: 5 },
      { sz: 260, color: 'rgba(26,107,90,0.1)', d: 6.5 },
      { sz: 340, color: 'rgba(26,107,90,0.06)', d: 8 },
    ];

    ringData.forEach((rd, i) => {
      const el = document.createElement('div');
      el.className = 'ring';
      const o = 0.2 + (0.5 - i * 0.08);
      el.style.cssText = `width:${rd.sz}px;height:${rd.sz}px;border-color:${rd.color};--d:${rd.d}s;--o:${o};--o2:${o + 0.2};animation-delay:${i * 0.5}s`;
      brainRingsRef.current?.appendChild(el);
    });

    for (let i = 0; i < 8; i++) {
      const p = document.createElement('div');
      p.className = 'thought-particle';
      const r = 60 + Math.random() * 100;
      p.style.cssText = `--r:${r}px;--d:${4 + Math.random() * 6}s;--tx:${r}px;--ty:0px;animation-delay:${Math.random() * 6}s;background:${Math.random() > 0.5 ? 'var(--teal)' : 'var(--gold)'};opacity:${0.4 + Math.random() * 0.4}`;
      brainRingsRef.current?.appendChild(p);
    }
  }, []);

  const handleBrainHover = () => {
    setTooltipMessage(brainMessages[brainMsgIndex]);
    brainMsgIndex = (brainMsgIndex + 1) % brainMessages.length;
  };

  return (
    <section className="chapter" data-section="2">
      <div className="chapter-visual vis-challenge">
        <div className="brain-rings" ref={brainRingsRef} onMouseEnter={handleBrainHover}>
          <div className="brain-center">🧠</div>
        </div>
        <div className="tooltip" ref={tooltipRef}>
          {tooltipMessage}
        </div>
      </div>
      <div className="chapter-text">
        <div className="reveal">
          <div className="ch-num">Chapter II</div>
          <h2 className="ch-title">The Challenge</h2>
          <p className="ch-subtitle">Why prediction alone cannot birth a true agent</p>
          <div className="ch-divider"></div>
          <div className="ch-body">
            <p>
              AI is no longer confined to chat interfaces. The industry is shifting rapidly toward agents — systems that
              operate inside environments, pursue goals, interact with tools, and make decisions across long time
              horizons.
            </p>
            <p>
              These systems face a fundamental problem: they cannot rely purely on local pattern completion. They must
              anticipate consequences, simulate future states, and revise their behavior when reality contradicts their
              expectations.
            </p>
            <div className="pullquote">
              "Humans continuously rely on such models. We anticipate rain from dark clouds, predict the arc of a moving
              object, and infer emotional tension from a shift in someone's tone."
            </div>
            <p>
              A new paper — <em>Agentic World Modeling</em> — proposes that advanced AI must develop the same capacity.
              It must build an internal predictive representation of how the world evolves through time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Chapter Three Component
function ChapterThree() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levelInfo = {
    PREDICTOR: {
      title: 'Predictor: Local Pattern Completion',
      desc: 'The foundation of all world models. Predicts the next state from current state and action. Excellent for short-term forecasting but loses coherence in extended sequences. Most current language models operate at this level.',
    },
    SIMULATOR: {
      title: 'Simulator: Trajectory Modeling',
      desc: 'Models entire sequences of actions and their outcomes. Can simulate futures before committing to actions. Enables planning and risk assessment. Robotics agents and strategic AI systems require this capability.',
    },
    EVOLVER: {
      title: 'Evolver: Self-Revising Causal Models',
      desc: 'Not just predicting outcomes, but updating the underlying causal structure when evidence contradicts assumptions. The architecture of scientific discovery and true learning. Revises its own understanding of how the world works.',
    },
  };

  return (
    <section className="chapter" data-section="3">
      <div className="chapter-visual vis-levels">
        <div className="level-bar" style={{ '--delay': '0.2s' } as React.CSSProperties} onClick={() => setSelectedLevel('PREDICTOR')}>
          <div className="level-label">PREDICTOR</div>
          <div className="level-track">
            <div className="level-fill" style={{ background: 'rgba(245,240,232,0.3)', '--w': '40%', '--fdelay': '0.5s' } as React.CSSProperties}></div>
          </div>
          <div className="level-icon" style={{ background: 'rgba(245,240,232,0.05)' }}>
            <svg fill="#f2f2f2" height="32px" width="32px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-155.66 -155.66 797.76 797.76" stroke="#f2f2f2">
              <path d="M407.025,61.919l-9.3,9.3l-75.9,75.9l-6.7,6.7l-16.6,16.6l-63,63l-2.3,2.3l-3.8-3.8l-54.2-54.2 c-9.2,12.7-14.8,28.1-15.4,44.7l39.5,39.5l16.6,16.6l4.5,4.5c3.5,3.5,8.2,5.3,12.8,5.3c0.8,0,1.5-0.1,2.3-0.2 c3.8-0.5,7.6-2.2,10.5-5.1l4.5-4.5l78.1-78.1l16.6-16.6l6.7-6.7l75.9-75.9l9.2-9.2l24.8,24.6c2.3,2.3,4.6,4.8,7.8,4.8 c1.2,0,2.6-0.3,4.1-1.2c5-2.7,6-7,6.3-11.9c1.2-26.7,2.5-53.5,3.7-80.2c0.4-8.1-3-11.8-10.8-11.8c-0.4,0-0.8,0-1.3,0 c-27.4,1.3-54.8,2.6-82.2,3.9c-4.3,0.2-8.5,0.4-10.8,5.5c-2.4,5.1,0.3,8,3.2,10.9C390.125,45.119,398.425,53.619,407.025,61.919z"></path>
            </svg>
          </div>
        </div>
        <div className="level-desc-small" style={{ opacity: 0, animation: 'fadeUp 0.8s 0.4s forwards', fontSize: '12px' }}>
          local pattern completion
        </div>

        <div className="level-bar" style={{ '--delay': '0.5s' } as React.CSSProperties} onClick={() => setSelectedLevel('SIMULATOR')}>
          <div className="level-label">SIMULATOR</div>
          <div className="level-track">
            <div className="level-fill" style={{ background: 'rgba(26,107,90,0.7)', '--w': '68%', '--fdelay': '0.8s' } as React.CSSProperties}></div>
          </div>
          <div className="level-icon" style={{ background: 'rgba(26,107,90,0.1)', borderColor: 'rgba(26,107,90,0.4)' }}>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#f2f2f2" stroke="#f2f2f2">
              <path d="M31,33a2,2,0,0,0,2-2V28h1.5a1.5,1.5,0,0,0,0-3H33V23h1.5a1.5,1.5,0,0,0,0-3H33V17a2,2,0,0,0-2-2H28V13.5a1.5,1.5,0,0,0-3,0V15H23V13.5a1.5,1.5,0,0,0-3,0V15H17a2,2,0,0,0-2,2v3H13.5a1.5,1.5,0,0,0,0,3H15v2H13.5a1.5,1.5,0,0,0,0,3H15v3a2,2,0,0,0,2,2h3v1.5a1.5,1.5,0,0,0,3,0V33h2v1.5a1.5,1.5,0,0,0,3,0V33ZM18,18H30V30H18Z"></path>
            </svg>
          </div>
        </div>
        <div className="level-desc-small" style={{ opacity: 0, animation: 'fadeUp 0.8s 0.7s forwards', fontSize: '12px', color: 'rgba(26,171,144,0.4)' }}>
          trajectory modeling
        </div>

        <div className="level-bar" style={{ '--delay': '0.8s' } as React.CSSProperties} onClick={() => setSelectedLevel('EVOLVER')}>
          <div className="level-label">EVOLVER</div>
          <div className="level-track">
            <div className="level-fill" style={{ background: 'linear-gradient(90deg, var(--gold), var(--gold2))', '--w': '95%', '--fdelay': '1.1s' } as React.CSSProperties}></div>
          </div>
          <div className="level-icon" style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.4)' }}>
            <svg fill="#f2f2f2" height="32px" width="32px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#f2f2f2">
              <path d="M443.591,0H71.313C32.795,0,0,29.886,0,68.409v372.278C0,479.205,32.795,512,71.313,512h372.278 C482.114,512,512,479.205,512,440.687V68.409C512,29.886,482.114,0,443.591,0z"></path>
            </svg>
          </div>
        </div>
        <div className="level-desc-small" style={{ opacity: 0, animation: 'fadeUp 0.8s 1s forwards', fontSize: '12px', color: 'rgba(201,168,76,0.5)' }}>
          self-revising causal models
        </div>

        <div className={`level-details ${selectedLevel ? 'show' : ''}`} onClick={() => setSelectedLevel(null)}>
          <h3>{selectedLevel && levelInfo[selectedLevel as keyof typeof levelInfo]?.title}</h3>
          <p>{selectedLevel && levelInfo[selectedLevel as keyof typeof levelInfo]?.desc}</p>
        </div>
      </div>

      <div className="chapter-text">
        <div className="reveal">
          <div className="ch-num">Chapter III</div>
          <h2 className="ch-title">Three Levels</h2>
          <p className="ch-subtitle">How world models deepen from prediction to evolution</p>
          <div className="ch-divider"></div>
          <div className="ch-body">
            <p>
              The paper organizes world modeling systems along a spectrum of sophistication. Each level represents a
              different relationship with time, consequence, and reality itself.
            </p>
          </div>
        </div>
        <div className="levels-stack reveal">
          <div className="ls-item">
            <div className="ls-num">1</div>
            <div className="ls-body">
              <div className="ls-name">Predictor</div>
              <div className="ls-desc">
                Estimates the next state from the current state and an action. Most language models live here — excellent
                at local prediction, but losing coherence across extended workflows.
              </div>
            </div>
          </div>
          <div className="ls-item">
            <div className="ls-num">2</div>
            <div className="ls-body">
              <div className="ls-name">Simulator</div>
              <div className="ls-desc">
                Models entire trajectories. Evaluates sequences of actions before committing. A robotics agent simulates
                collisions. A browser agent anticipates authentication flows before touching a single button.
              </div>
            </div>
          </div>
          <div className="ls-item">
            <div className="ls-num">3</div>
            <div className="ls-body">
              <div className="ls-name">Evolver</div>
              <div className="ls-desc">
                Revises its own world model when evidence contradicts its assumptions. Not just predicting outcomes —
                updating causal structure itself. This is the architecture of genuine scientific discovery.
              </div>
            </div>
          </div>
        </div>
        <div className="pullquote reveal">
          "Such systems point toward autonomous scientific agents capable of iterative hypothesis formation and
          self-correction."
        </div>
      </div>
    </section>
  );
}

// Chapter Four Component
function ChapterFour() {
  const [fwCur, setFwCur] = useState(0);
  const [fwPaused, setFwPaused] = useState(false);
  const [fwElapsed, setFwElapsed] = useState(0);
  const rafRef = useRef<number>();

  const fwWorlds = [
    {
      icon: '⛰',
      label: 'Environment 01',
      name: 'Physical',
      accent: '#1D9E75',
      desc: 'Mechanics, motion, and spatial interaction. Governed by stable laws — physics doesn\'t change overnight. Key domain: robotics and autonomous driving.',
    },
    {
      icon: '💻',
      label: 'Environment 02',
      name: 'Digital',
      accent: '#7F77DD',
      desc: 'Browsers, APIs, and operating systems. A button click changes state permanently. The most commercially active agents already live here.',
    },
    {
      icon: '🌐',
      label: 'Environment 03',
      name: 'Social',
      accent: '#D85A30',
      desc: 'Markets, institutions, and communities. These environments react to the predictions made about them — making them extraordinarily unstable.',
    },
    {
      icon: '⚗️',
      label: 'Environment 04',
      name: 'Scientific',
      accent: '#BA7517',
      desc: 'Drug discovery, materials science, biology. The governing laws are unknown. Agents must infer hidden causal structure at the edge of human knowledge.',
    },
  ];

  const FW_DURATION = 3500;
  let fwStart: number | null = null;

  useEffect(() => {
    const fwTick = (ts: number) => {
      if (!fwPaused) {
        if (!fwStart) fwStart = ts;
        const elapsed = ts - fwStart;
        setFwElapsed(elapsed);

        if (elapsed >= FW_DURATION) {
          setFwCur((prev) => (prev + 1) % fwWorlds.length);
          setFwElapsed(0);
          fwStart = null;
        }
      }
      rafRef.current = requestAnimationFrame(fwTick);
    };

    rafRef.current = requestAnimationFrame(fwTick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [fwPaused, fwWorlds.length]);

  return (
    <section className="chapter" data-section="4">
      <div className="chapter-visual vis-worlds-carousel">
        <div className="fw-progress">
          <div className="fw-bar" style={{ width: `${Math.min((fwElapsed / FW_DURATION) * 100, 100)}%`, background: fwWorlds[fwCur].accent }}></div>
        </div>
        <div className="fw-stage">
          {fwWorlds.map((world, i) => {
            const d = ((i - fwCur) % fwWorlds.length + fwWorlds.length) % fwWorlds.length;
            let state = 'behind';
            if (d === 0) state = 'active';
            else if (d === fwWorlds.length - 1) state = 'prev';
            else if (d === 1) state = 'next';

            return (
              <div key={i} className={`fw-card ${state}`} style={{ borderTop: `2px solid ${world.accent}` }}>
                <div className="fw-card-label">{world.label}</div>
                <div className="fw-card-name">{world.name}</div>
                <div className="fw-card-desc">{world.desc}</div>
              </div>
            );
          })}
        </div>
        <div className="fw-controls">
          <div className="fw-dots">
            {fwWorlds.map((_, i) => (
              <div
                key={i}
                className={`fw-dot ${i === fwCur ? 'on' : ''}`}
                style={{ background: i === fwCur ? fwWorlds[i].accent : '' }}
                onClick={() => {
                  setFwCur(i);
                  setFwElapsed(0);
                }}
              ></div>
            ))}
          </div>
          <div className="fw-nav">
            <button className="fw-btn" onClick={() => { setFwCur((prev) => ((prev - 1) + fwWorlds.length) % fwWorlds.length); setFwElapsed(0); }}>←</button>
            <button className="fw-pause" onClick={() => setFwPaused(!fwPaused)}>{fwPaused ? '▶' : '❚❚'}</button>
            <button className="fw-btn" onClick={() => { setFwCur((prev) => (prev + 1) % fwWorlds.length); setFwElapsed(0); }}>→</button>
          </div>
        </div>
      </div>

      <div className="chapter-text">
        <div className="reveal">
          <div className="ch-num">Chapter IV</div>
          <h2 className="ch-title">Four Worlds</h2>
          <p className="ch-subtitle">The environments agents must learn to inhabit</p>
          <div className="ch-divider"></div>
          <div className="ch-body">
            <p>
              Beyond capability levels, the paper examines the kinds of laws governing different environments. No world
              model is universal — each domain demands a radically different representation of reality.
            </p>
          </div>
        </div>
        <div className="env-4 reveal">
          <div className="env-cell env-physical">
            <div className="env-icon">⛰</div>
            <div className="env-name">Physical worlds</div>
            <div className="env-desc">
              Robotics and autonomous driving. Governed by mechanics and spatial interaction. Relatively stable — physics
              doesn't change overnight.
            </div>
          </div>
          <div className="env-cell env-digital">
            <div className="env-icon">💻</div>
            <div className="env-name">Digital worlds</div>
            <div className="env-desc">
              Browsers, APIs, operating systems. A button click changes state. Today's most commercially valuable agents
              already live here.
            </div>
          </div>
          <div className="env-cell env-social">
            <div className="env-icon">🌐</div>
            <div className="env-name">Social worlds</div>
            <div className="env-desc">
              Financial markets, institutions, communities. These environments react to predictions made about them —
              extraordinarily unstable.
            </div>
          </div>
          <div className="env-cell env-science">
            <div className="env-icon">⚗️</div>
            <div className="env-name">Scientific worlds</div>
            <div className="env-desc">
              Drug discovery, materials science, biology. The governing laws are unknown. Agents must infer hidden causal
              structures at the edge of human knowledge.
            </div>
          </div>
        </div>
        <div className="pullquote reveal">
          "The act of prediction can alter the underlying reality itself. Social world modeling is extraordinarily
          unstable."
        </div>
      </div>
    </section>
  );
}

// Speakers Section
function SpeakersSection() {
  return (
    <section className="speakers-section">
      <div className="sec-eyebrow">Who's Talking</div>
      <h2 className="sec-title reveal">The Speakers</h2>
      <p className="sec-sub reveal">Participants sharing their views, their research, and the ideas they found fascinating</p>

      <div className="speakers-grid reveal">
        <div className="speaker-card">
          <div className="speaker-avatar">👤</div>
          <div className="speaker-name">Aditya Upadhyay</div>
          <div className="speaker-role">Orchestrator</div>
        </div>
        <div className="speaker-card">
          <div className="speaker-avatar">👤</div>
          <div className="speaker-name">Devendra Rathore</div>
          <div className="speaker-role">Orchestrator</div>
        </div>
        <div className="speaker-card">
          <div className="speaker-avatar">👤</div>
          <div className="speaker-name">Mousami Ghosh</div>
          <div className="speaker-role">Orchestrator</div>
        </div>
        <div className="speaker-card">
          <div className="speaker-avatar">👤</div>
          <div className="speaker-name">Ather Hussain</div>
          <div className="speaker-role">Orchestrator</div>
        </div>
        <div className="speaker-card">
          <div className="speaker-avatar">❓</div>
          <div className="speaker-name">You?</div>
          <div className="speaker-role">Have a view on world models? A paper you can't stop thinking about?</div>
        </div>
      </div>

      <div className="sec-eyebrow reveal">The Format</div>
      <h2 className="sec-title reveal">How it Works</h2>
      <p className="sec-sub reveal">No gatekeeping. No credentials required. Just ideas worth sharing.</p>

      <div className="format-strip reveal">
        <div className="format-cell">
          <div className="format-num">01</div>
          <div className="format-name">Your View</div>
          <div className="format-desc">
            Share your own take on where AI is heading — no formal research required. Just a perspective worth arguing
            for.
          </div>
        </div>
        <div className="format-cell">
          <div className="format-num">02</div>
          <div className="format-name">Someone's Research</div>
          <div className="format-desc">
            Found a paper or project you couldn't stop thinking about? Break it down for the room. Make us care about it
            too.
          </div>
        </div>
        <div className="format-cell">
          <div className="format-num">03</div>
          <div className="format-name">Open Discussion</div>
          <div className="format-desc">
            Every talk ends with the floor open. We're here to catch the current wind of the topic — together.
          </div>
        </div>
      </div>
    </section>
  );
}

// Register Section
function RegisterSection() {
  return (
    <section className="register-section" id="register">
      <div className="reg-label reveal">17 May 2026 · GDP Talks</div>
      <h2 className="reg-title reveal">
        Come.
        <br />
        <em>Think out loud.</em>
      </h2>
      <p className="reg-body reveal">
        GDP Talks is a space to share what you're reading, what you're building, and what you can't stop wondering
        about. World Models :: AI is the topic. The conversation belongs to everyone.
      </p>

      <div className="reg-details reveal">
        <div className="reg-detail">
          <div className="reg-detail-label">Date</div>
          <div className="reg-detail-val">17 May 2026</div>
        </div>
        <div className="reg-divider"></div>
        <div className="reg-detail">
          <div className="reg-detail-label">Format</div>
          <div className="reg-detail-val">Talks + Discussion</div>
        </div>
        <div className="reg-divider"></div>
        <div className="reg-detail">
          <div className="reg-detail-label">Entry</div>
          <div className="reg-detail-val">Open to All</div>
        </div>
        <div className="reg-divider"></div>
        <div className="reg-detail">
          <div className="reg-detail-label">Hosted by</div>
          <div className="reg-detail-val">G D P</div>
        </div>
      </div>

      <div className="reveal">
        <a href="#" className="reg-btn">
          Register Your Spot
        </a>
        <div className="reg-note">Placeholder · Link coming soon</div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="gdp-footer">
      <div className="footer-brand">
        <svg className="footer-eagle" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4 C14 4 8 9 7 16 L10 14 C11 20 15 23 20 24 C25 23 29 20 30 14 L33 16 C32 9 26 4 20 4Z" fill="rgba(201,168,76,0.6)" />
          <path d="M7 16 L2 12 L8 18 Z" fill="rgba(201,168,76,0.4)" />
          <path d="M33 16 L38 12 L32 18 Z" fill="rgba(201,168,76,0.4)" />
          <path d="M17 24 L15 36 L20 30 L25 36 L23 24 Z" fill="rgba(201,168,76,0.5)" />
          <circle cx="15" cy="13" r="1.5" fill="rgba(201,168,76,0.9)" />
        </svg>
        <span className="footer-name">G D P</span>
      </div>
      <div className="footer-right">GDP Talks · World Models :: AI · 17 May 2026</div>
    </footer>
  );
}

// Final Section
function FinalSection() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((r) => revObs.observe(r));

    // Active section tracking
    const sections = document.querySelectorAll('[data-section]');
    const dots = document.querySelectorAll('.ci-dot');
    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = parseInt((e.target as HTMLElement).dataset.section || '0');
            dots.forEach((d) => d.classList.remove('active'));
            if (dots[idx]) dots[idx].classList.add('active');
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => secObs.observe(s));
  }, []);

  return (
    <section className="chapter-finale" data-section="5">
      <div className="finale-bg"></div>
      <div className="finale-orb"></div>
      <div className="finale-content reveal">
        <div className="finale-eye">◎</div>
        <h2 className="finale-title">
          The conversation
          <br />
          <em>starts here</em>
        </h2>
        <div className="finale-line"></div>
        <p className="finale-body">
          Intelligence fundamentally depends on counterfactual simulation — the ability to imagine possible futures
          conditioned on different choices. Planning emerges from this capacity. Scientific reasoning emerges from it.
          Agency itself may depend on it.
        </p>
        <p className="finale-body">
          On 17 May, we gather to ask what that means — for AI, for research, and for the ideas worth staying curious
          about. Bring your view. Bring what you've been reading. Bring your questions.
        </p>
        <div className="pullquote" style={{ textAlign: 'left', maxWidth: '540px', margin: '2rem auto' }}>
          "We rarely care whether someone predicts every detail of the future perfectly. We care whether their mental
          model helps them navigate reality successfully."
        </div>
        <div className="finale-line"></div>
        <div className="tag-line">GDP Talks · World Models :: AI · 17 May 2026</div>
      </div>
    </section>
  );
}
