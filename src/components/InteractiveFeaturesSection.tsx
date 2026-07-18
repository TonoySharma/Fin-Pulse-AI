"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BarChart3, Receipt, Eye, ArrowRight, Shield } from "lucide-react";

export function InteractiveFeaturesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      title: "Real-time Analytics",
      icon: <BarChart3 size={18} />,
      heading: "Analyze your wealth growth live",
      desc: "Get deep, instantaneous insights into your cash flow. Track multi-currency assets, investments, and daily micro-expenses under a single secure umbrella dashboard.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Smart Invoicing",
      icon: <Receipt size={18} />,
      heading: "Automate bills & invoice splitting",
      desc: "Never lose track of shared bills or business invoices. Generate instant secure billing links and auto-remind clients or teammates with zero manual interaction.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Privacy Shield",
      icon: <Shield size={18} />,
      heading: "Bank-grade enterprise protection",
      desc: "Your metadata is fully end-to-end encrypted. We ensure zero leaks, strictly enforce zero data-selling, and provide multi-region backups hourly.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="py-10 px-4 bg-slate-950 text-slate-100">
      <div className="space-y-16">
        
        {/* Header */}
        <div className=" max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Core capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Everything you need to scale <br /> your financial operations.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start  max-w-7xl mx-auto">
          
          {/* Left: Tab Selectors & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full flex items-center gap-4 p-4.5 rounded-2xl text-left border transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-slate-900 border-slate-800 shadow-xl text-white"
                      : "bg-transparent border-transparent text-slate-400 hover:bg-slate-900/40 hover:text-slate-200"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${activeTab === idx ? "bg-emerald-400 text-slate-950" : "bg-slate-900 border border-slate-800 text-slate-400"}`}>
                    {tab.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wide">{tab.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Dynamic Text Box */}
            <div className="pt-6 border-t border-slate-900 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {tabs[activeTab].heading}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {tabs[activeTab].desc}
              </p>
              <button className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-2 group">
                <span>Learn more about this feature</span> 
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Big Modern Image Preview */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-900 rounded-[2rem] p-4 sm:p-5 relative overflow-hidden group">
            <div className="relative w-full h-[300px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                fill
                className="object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}