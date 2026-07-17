"use client";

import React from "react";
import FadeUp from "./FadeUp";

const Marquee: React.FC = () => {
  const items: string[] = [
    "SMARTPHONE",
    "5G FLAGSHIP",
    "MOBILE ACCESSORIES",
    "APPLE WORLD",
    "ANDROID ZONE",
    "GADGET STORE",
    "NEXT-GEN TECH",
    "ONLINE SHOP",
    "SMART WATCH",
    "PREMIUM DEVICES",
    "TECH REPAIR",
    "GAMING PHONE",
    "GLOBAL EDITION",
    "UNBEATABLE DEALS",
    "FAST DELIVERY",
  ];

  const StarIcon: React.FC = () => (
    <span className="mx-4 text-xs text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] select-none animate-pulse">
      ✦
    </span>
  );

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 py-6 border-y border-cyan-500/10 select-none">
      {/* Left Fade Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      
      {/* Right Fade Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <FadeUp>
        <div className="flex w-full overflow-hidden group">
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] items-center">
            
            {/* First Set */}
            <div className="flex items-center shrink-0">
              {items.map((item, index) => (
                <div key={`tech1-${index}`} className="flex items-center">
                  <span className="px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-gray-300 font-sans text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
                    {item}
                  </span>
                  <StarIcon />
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for smooth infinite loop) */}
            <div className="flex items-center shrink-0">
              {items.map((item, index) => (
                <div key={`tech2-${index}`} className="flex items-center">
                  <span className="px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-gray-300 font-sans text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
                    {item}
                  </span>
                  <StarIcon />
                </div>
              ))}
            </div>

          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default Marquee;