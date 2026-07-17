"use client";

import React from "react";

interface LoadingProps {
  text?: string;
}

export default function Loading({ text = "Initializing Secure Session..." }: LoadingProps) {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Cyber Grid Background Effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#22d3ee 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      {/* Center Spinner Unit */}
      <div className="relative flex items-center justify-center">
        
        {/* Outer Pulsing Glow Ring */}
        <div className="absolute w-32 h-32 rounded-full border border-cyan-500/20 bg-cyan-500/5 animate-ping duration-1000" />

        {/* Outer Counter-Rotating Segment Ring */}
        <div className="w-24 h-24 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400/30 animate-[spin_1.5s_linear_infinite]" />

        {/* Inner Fast Rotating Segment Ring */}
        <div className="absolute w-16 h-16 rounded-full border-2 border-transparent border-b-blue-500 border-l-blue-500/40 animate-[spin_0.8s_linear_infinite_reverse]" />

        {/* Center Glowing Core */}
        <div className="absolute w-6 h-6 rounded-full bg-slate-900 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>

      </div>

      {/* Loading Text & Status */}
      <div className="mt-8 flex flex-col items-center space-y-2 z-10">
        <h3 className="text-sm font-sans tracking-[0.3em] uppercase font-bold bg-gradient-to-r from-gray-100 via-cyan-200 to-gray-400 bg-clip-text text-transparent animate-pulse">
          {text}
        </h3>
        
        {/* Animated Progress Dots Bar */}
        <div className="flex items-center space-x-1.5 pt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-[bounce_1s_infinite_100ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-[bounce_1s_infinite_200ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-[bounce_1s_infinite_300ms]" />
        </div>
      </div>

      {/* Bottom Tech Watermark */}
      <div className="absolute bottom-6 text-[10px] tracking-[0.25em] text-slate-600 font-mono uppercase">
        Encrypted • Fast • Next-Gen
      </div>

    </div>
  );
}