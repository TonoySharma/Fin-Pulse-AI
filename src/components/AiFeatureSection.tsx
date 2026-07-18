"use client";

import React from "react";
import { Sparkles, TrendingDown, ArrowRight, Wallet } from "lucide-react";

export function AiFeatureSection() {
  return (
    <section className="py-24 px-4  relative bg-slate-950">

      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900/30 border border-slate-800/80 rounded-[2.5rem] p-8 sm:p-14 backdrop-blur-md shadow-2xl">
        
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} className="animate-pulse" /> AI Powered System
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.2]">
            Stop guessing. <br /> Let AI analyze your spending habits.
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            Our intelligent algorithms instantly detect unusual subscription price hikes, calculate predictable future expenses, and create automated budgets suited just for you.
          </p>
          <div className="pt-2">
            <button className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/10 active:scale-95 font-sans">
              <span>Try AI Scanner</span> <ArrowRight size={14} className="stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          <div className="bg-slate-950/80 border border-slate-800 p-7 rounded-2xl space-y-4 hover:border-slate-700 transition-all duration-300 group shadow-xl">
            <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Wallet size={20}/>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">Smart Safe-to-Spend</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Dynamically updates based on bills and upcoming payments so you never overspend.</p>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 p-7 rounded-2xl space-y-4 hover:border-slate-700 transition-all duration-300 group md:translate-y-6 shadow-xl">
            <div className="p-2.5 w-fit rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <TrendingDown size={20}/>
            </div>
            <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">Waste Detection</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Flags unused SaaS subscriptions or double bookings automatically within minutes.</p>
          </div>
        </div>

      </div>
    </section>
  );
}