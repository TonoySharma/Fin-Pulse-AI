"use client";

import React from "react";
import { Cpu, Globe, Layers, Shapes, Terminal, Zap } from "lucide-react";

export function PartnerLogosSection() {
  const partners = [
    { icon: <Terminal className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />, name: "TechCorp" },
    { icon: <Cpu className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />, name: "Nvidia" },
    { icon: <Globe className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />, name: "Stripe" },
    { icon: <Layers className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />, name: "Vercel" },
    { icon: <Shapes className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />, name: "Figma" },
    { icon: <Zap className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />, name: "Supabase" },
  ];

  return (
    <section className="py-16 border-y border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
          Trusted by fast-growing teams worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300 backdrop-blur-sm"
            >
              {partner.icon}
              <span className="text-sm font-extrabold text-slate-300 group-hover:text-white transition-colors tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}