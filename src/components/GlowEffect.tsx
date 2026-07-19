'use client';
import { useEffect, useRef } from 'react';

export default function GlowEffect() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
 
      glowRef.current.style.setProperty('--x', `${e.clientX}px`);
      glowRef.current.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('pointermove', handleMouseMove);
    return () => window.removeEventListener('pointermove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-60 mix-blend-screen"
      style={{
        
        background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(99, 102, 241, 0.15), transparent 80%)`,
      }}
    />
  );
}