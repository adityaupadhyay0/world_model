'use client';

import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef<number>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const ringPositionRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      positionRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer = window.getComputedStyle(target).cursor === 'pointer' ||
                        target.tagName === 'A' ||
                        target.tagName === 'BUTTON' ||
                        target.closest('button') ||
                        target.closest('a');

      setIsHovering(!!isPointer);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, [isVisible]);

  const animate = () => {
    ringPositionRef.current = {
      x: ringPositionRef.current.x + (positionRef.current.x - ringPositionRef.current.x) * 0.15,
      y: ringPositionRef.current.y + (positionRef.current.y - ringPositionRef.current.y) * 0.15,
    };
    setRingPosition(ringPositionRef.current);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-[var(--gold)] mix-blend-difference transition-[width,height] duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '14px' : '8px',
          height: isHovering ? '14px' : '8px',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-[rgba(201,168,76,0.5)] transition-[width,height,opacity,border-color] duration-500 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          width: isHovering ? '60px' : '36px',
          height: isHovering ? '60px' : '36px',
          borderColor: isHovering ? 'rgba(201,168,76,0.8)' : 'rgba(201,168,76,0.5)',
        }}
      />
    </>
  );
};

export default CustomCursor;
