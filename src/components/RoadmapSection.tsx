"use client";

import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

export function RoadmapSection() {
  const steps = [
    { version: "Q1 2026", title: "Advanced Analytics v2", desc: "Released standard multi-currency logs and localized secure DB connections for enterprise users.", done: true },
    { version: "Q2 2026", title: "AI Model Fine-Tuning", desc: "Integrating custom models to deliver precise monthly savings suggestions directly to your dashboard.", done: true },
    { version: "Q3 2026", title: "Mobile App Beta Launch", desc: "Deploying fully operational iOS & Android native apps for seamless real-time push notifications.", done: false },
  ];

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto bg-slate-950">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Platform Roadmap</h2>
        <p className="text-sm text-slate-300 font-medium max-w-md mx-auto">Take a look at what we&apos;ve built so far and what is coming up next.</p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-800/80">
        {steps.map((step, idx) => (
          <div key={idx} className={`flex flex-col sm:flex-row items-start justify-between relative ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
            
            {/* Timeline Marker */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 bg-slate-950 p-1.5 z-10">
              {step.done ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/10" />
              ) : (
                <Circle className="w-5 h-5 text-slate-700 bg-slate-950 rounded-full" />
              )}
            </div>

            {/* Content Card */}
            <div className="w-full sm:w-[46%] pl-12 sm:pl-0 pt-1 sm:pt-0">
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-all duration-300 shadow-lg backdrop-blur-sm">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${step.done ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-300 border border-slate-700"}`}>
                  {step.version}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}